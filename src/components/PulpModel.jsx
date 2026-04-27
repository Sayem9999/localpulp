import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Points, PointMaterial, Environment, Icosahedron, MeshTransmissionMaterial } from '@react-three/drei';
import { EffectComposer, Bloom, DepthOfField } from '@react-three/postprocessing';
import * as THREE from 'three';

// Generates random points in a sphere for the fiber particles
export default function PulpModel({ currentSlide, type }) {
  const isHero = type === 'hero';
  
  return (
    <div className={`w-full h-full absolute inset-0 -z-10 transition-opacity duration-1000 ${isHero ? 'opacity-70' : 'opacity-20'} pointer-events-none`}>
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <color attach="background" args={['#030303']} />
        <ambientLight intensity={0.2} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} color="#00f2fe" />
        <spotLight position={[-10, -10, -10]} angle={0.15} penumbra={1} intensity={1} color="#00f5a0" />
        
        <Float speed={isHero ? 1.5 : 0.5} rotationIntensity={isHero ? 0.5 : 0.1} floatIntensity={isHero ? 1 : 0.2}>
          <Core isHero={isHero} />
          <ParticleField count={isHero ? 3000 : 1000} isHero={isHero} />
        </Float>

        <EffectComposer disableNormalPass>
          <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={isHero ? 2 : 0.5} height={480} />
          <Bloom luminanceThreshold={0.2} mipmapBlur luminanceSmoothing={0.9} intensity={isHero ? 1.5 : 0.5} />
        </EffectComposer>
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}

function ParticleField({ count = 2000, isHero }) {
  const points = useRef();
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(Math.random() * 2 - 1);
      const r = 2.5 + Math.random() * 1.5;
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    return positions;
  }, [count]);

  useFrame((state, delta) => {
    const speed = isHero ? 0.05 : 0.01;
    points.current.rotation.y -= delta * speed;
    points.current.rotation.x -= delta * (speed * 0.4);
  });

  return (
    <Points ref={points} positions={particlesPosition} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00f2fe"
        size={isHero ? 0.02 : 0.01}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={isHero ? 0.6 : 0.2}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function Core({ isHero }) {
  const mesh = useRef();
  const wireframe = useRef();

  useFrame((state, delta) => {
    const speed = isHero ? 1 : 0.2;
    mesh.current.rotation.x += delta * 0.2 * speed;
    mesh.current.rotation.y += delta * 0.3 * speed;
    wireframe.current.rotation.x -= delta * 0.1 * speed;
    wireframe.current.rotation.y -= delta * 0.15 * speed;
  });

  return (
    <group>
      <Icosahedron ref={mesh} args={[1, 1]} scale={isHero ? 1.5 : 1.2}>
        <MeshTransmissionMaterial 
          backside 
          thickness={1} 
          roughness={0.1} 
          transmission={1} 
          ior={1.2} 
          chromaticAberration={0.05} 
          anisotropy={0.5}
          color="#4facfe"
        />
      </Icosahedron>
      <Icosahedron ref={wireframe} args={[1.1, 2]} scale={isHero ? 1.5 : 1.2}>
        <meshBasicMaterial color="#00f5a0" wireframe transparent opacity={isHero ? 0.15 : 0.05} />
      </Icosahedron>
    </group>
  );
}
