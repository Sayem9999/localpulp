import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Points, PointMaterial, Environment, Icosahedron, MeshTransmissionMaterial } from '@react-three/drei';
import { EffectComposer, Bloom, DepthOfField } from '@react-three/postprocessing';
import * as THREE from 'three';

export default function PulpModel({ currentSlide, type }) {
  const isHero = type === 'hero';
  const isPipeline = type === 'pipeline';
  const isData = type === 'data';

  const bg = isHero ? '#020a0e' : isPipeline ? '#030808' : '#030305';
  const opacity = isHero ? 0.85 : isPipeline ? 0.35 : 0.18;

  return (
    <div className={`w-full h-full absolute inset-0 -z-10 pointer-events-none`} style={{ opacity, transition: 'opacity 1.2s ease' }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }} dpr={[1, 1.5]}>
        <color attach="background" args={[bg]} />
        <ambientLight intensity={0.15} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={isHero ? 3 : 1.5} color="#00f2fe" />
        <spotLight position={[-10, -10, -10]} angle={0.15} penumbra={1} intensity={isHero ? 1.5 : 0.5} color="#00f5a0" />
        {isPipeline && <spotLight position={[0, 5, 5]} angle={0.3} penumbra={1} intensity={2} color="#10B981" />}

        <Float speed={isHero ? 1.5 : 0.4} rotationIntensity={isHero ? 0.6 : 0.08} floatIntensity={isHero ? 1.2 : 0.15}>
          <Core isHero={isHero} isPipeline={isPipeline} slide={currentSlide} />
          <ParticleField count={isHero ? 4000 : isPipeline ? 2500 : 800} isHero={isHero} isPipeline={isPipeline} />
          {isPipeline && <FiberStrands />}
          {isHero && <OrbitalRings />}
        </Float>

        <EffectComposer disableNormalPass>
          <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={isHero ? 3 : 0.5} height={480} />
          <Bloom luminanceThreshold={0.15} mipmapBlur luminanceSmoothing={0.9} intensity={isHero ? 2 : isPipeline ? 1.2 : 0.4} />
        </EffectComposer>
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}

function FiberStrands() {
  const ref = useRef();
  const count = 60;

  const positions = useMemo(() => {
    const pos = [];
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const r = 2.5 + Math.random() * 1.5;
      pos.push({
        x: Math.cos(angle) * r,
        y: (Math.random() - 0.5) * 4,
        z: Math.sin(angle) * r,
        len: 0.3 + Math.random() * 0.8,
        phase: Math.random() * Math.PI * 2
      });
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <group ref={ref}>
      {positions.map((p, i) => (
        <mesh key={i} position={[p.x, p.y, p.z]} rotation={[p.phase, p.phase * 0.5, 0]}>
          <cylinderGeometry args={[0.003, 0.003, p.len, 4]} />
          <meshBasicMaterial color="#10B981" transparent opacity={0.4} />
        </mesh>
      ))}
    </group>
  );
}

function OrbitalRings() {
  const ring1 = useRef();
  const ring2 = useRef();
  const ring3 = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (ring1.current) ring1.current.rotation.z = t * 0.15;
    if (ring2.current) ring2.current.rotation.z = -t * 0.1;
    if (ring3.current) ring3.current.rotation.x = t * 0.12;
  });

  return (
    <group>
      <mesh ref={ring1} rotation={[0.5, 0, 0]}>
        <torusGeometry args={[2.8, 0.008, 8, 128]} />
        <meshBasicMaterial color="#00f2fe" transparent opacity={0.25} />
      </mesh>
      <mesh ref={ring2} rotation={[1.2, 0.5, 0]}>
        <torusGeometry args={[3.2, 0.005, 8, 128]} />
        <meshBasicMaterial color="#00f5a0" transparent opacity={0.15} />
      </mesh>
      <mesh ref={ring3} rotation={[0.3, 1, 0.5]}>
        <torusGeometry args={[3.6, 0.004, 8, 128]} />
        <meshBasicMaterial color="#4facfe" transparent opacity={0.1} />
      </mesh>
    </group>
  );
}

function ParticleField({ count = 2000, isHero, isPipeline }) {
  const points = useRef();

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(Math.random() * 2 - 1);
      const r = 2 + Math.random() * 2.5;
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    return positions;
  }, [count]);

  useFrame((state, delta) => {
    const speed = isHero ? 0.06 : isPipeline ? 0.03 : 0.008;
    points.current.rotation.y -= delta * speed;
    points.current.rotation.x -= delta * (speed * 0.3);
  });

  const color = isPipeline ? '#10B981' : '#00f2fe';
  const size = isHero ? 0.025 : isPipeline ? 0.018 : 0.008;
  const op = isHero ? 0.7 : isPipeline ? 0.45 : 0.15;

  return (
    <Points ref={points} positions={particlesPosition} stride={3} frustumCulled={false}>
      <PointMaterial transparent color={color} size={size} sizeAttenuation depthWrite={false} opacity={op} blending={THREE.AdditiveBlending} />
    </Points>
  );
}

function Core({ isHero, isPipeline, slide }) {
  const mesh = useRef();
  const wireframe = useRef();
  const outer = useRef();

  useFrame((state, delta) => {
    const speed = isHero ? 1.2 : isPipeline ? 0.6 : 0.15;
    mesh.current.rotation.x += delta * 0.2 * speed;
    mesh.current.rotation.y += delta * 0.3 * speed;
    wireframe.current.rotation.x -= delta * 0.1 * speed;
    wireframe.current.rotation.y -= delta * 0.15 * speed;
    if (outer.current) {
      outer.current.rotation.x += delta * 0.05 * speed;
      outer.current.rotation.z -= delta * 0.08 * speed;
    }
  });

  const scale = isHero ? 1.6 : isPipeline ? 1.3 : 1;
  const coreColor = isPipeline ? '#10B981' : '#4facfe';
  const wireColor = isPipeline ? '#22d3ee' : '#00f5a0';

  return (
    <group>
      <Icosahedron ref={mesh} args={[1, 1]} scale={scale}>
        <MeshTransmissionMaterial
          backside
          thickness={isPipeline ? 1.5 : 1}
          roughness={0.08}
          transmission={1}
          ior={1.25}
          chromaticAberration={isHero ? 0.08 : 0.03}
          anisotropy={0.5}
          color={coreColor}
        />
      </Icosahedron>
      <Icosahedron ref={wireframe} args={[1.1, 2]} scale={scale}>
        <meshBasicMaterial color={wireColor} wireframe transparent opacity={isHero ? 0.2 : isPipeline ? 0.12 : 0.04} />
      </Icosahedron>
      {(isHero || isPipeline) && (
        <Icosahedron ref={outer} args={[1.4, 1]} scale={scale}>
          <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.03} />
        </Icosahedron>
      )}
    </group>
  );
}
