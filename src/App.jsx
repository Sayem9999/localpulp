import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import PulpModel from './components/PulpModel';
import { slides } from './slidesData';
import SlideRenderer from './components/SlideRenderer';

function App() {
  const [cur, setCur] = useState(0);
  const [dir, setDir] = useState(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const s = slides[cur];
  const W = typeof window !== 'undefined' ? window.innerWidth : 1920;
  const H = typeof window !== 'undefined' ? window.innerHeight : 1080;
  const px = useTransform(mouseX, [0, W], [-8, 8]);
  const py = useTransform(mouseY, [0, H], [-5, 5]);

  const next = () => { if (cur < slides.length - 1) { setDir(1); setCur(c => c + 1); } };
  const prev = () => { if (cur > 0) { setDir(-1); setCur(c => c - 1); } };

  useEffect(() => {
    const h = (e) => { if (e.key === 'ArrowRight' || e.key === ' ') next(); if (e.key === 'ArrowLeft') prev(); };
    const m = (e) => { mouseX.set(e.clientX); mouseY.set(e.clientY); };
    window.addEventListener('keydown', h);
    window.addEventListener('mousemove', m);
    return () => { window.removeEventListener('keydown', h); window.removeEventListener('mousemove', m); };
  }, [cur]);

  const variants = {
    enter: (d) => ({ x: d > 0 ? 400 : -400, opacity: 0, scale: 0.95 }),
    center: { zIndex: 1, x: 0, opacity: 1, scale: 1 },
    exit: (d) => ({ zIndex: 0, x: d < 0 ? 400 : -400, opacity: 0, scale: 0.95 })
  };

  return (
    <div style={{ width: '100%', height: '100vh', position: 'relative', overflow: 'hidden', background: 'radial-gradient(ellipse at 50% 30%, #0a1520 0%, #030608 70%)' }}>
      {/* Ambient parallax orbs */}
      <motion.div style={{ x: px, y: py, position: 'absolute', top: '-15%', left: '-8%', width: '45vw', height: '45vw', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,242,254,0.04) 0%, transparent 70%)', filter: 'blur(50px)', pointerEvents: 'none' }} />
      <motion.div style={{ x: useTransform(px, v => -v), y: useTransform(py, v => -v), position: 'absolute', bottom: '-12%', right: '-8%', width: '40vw', height: '40vw', borderRadius: '50%', background: 'radial-gradient(circle, rgba(16,185,129,0.03) 0%, transparent 70%)', filter: 'blur(50px)', pointerEvents: 'none' }} />

      {/* Progress */}
      <div style={{ position: 'fixed', bottom: 0, left: 0, height: 3, background: 'linear-gradient(90deg, #00f2fe, #10B981)', transition: 'width 0.4s', zIndex: 100, width: `${((cur + 1) / slides.length) * 100}%` }} />

      {/* 3D Background */}
      <PulpModel currentSlide={cur} type={s.type} />

      {/* Slide */}
      <AnimatePresence initial={false} custom={dir} mode="wait">
        <motion.div key={cur} custom={dir} variants={variants}
          initial="enter" animate="center" exit="exit"
          transition={{ x: { type: 'spring', stiffness: 220, damping: 26 }, opacity: { duration: 0.2 }, scale: { duration: 0.35 } }}
          style={{
            position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, margin: 'auto',
            width: '92%', maxWidth: 1280,
            height: '88vh',
            background: 'rgba(12, 18, 22, 0.72)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: 24,
            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.03)',
            display: 'flex', flexDirection: 'column',
            padding: '1.5rem 2rem',
            zIndex: 20
          }}
        >
          {/* Section header */}
          {s.type !== 'hero' && s.type !== 'closing' && (
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.12, duration: 0.4 }}
              style={{ marginBottom: '0.8rem', flexShrink: 0 }}>
              <span style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#00f2fe', background: 'rgba(0,242,254,0.07)', padding: '0.2rem 0.6rem', borderRadius: 99, border: '1px solid rgba(0,242,254,0.18)' }}>{s.section}</span>
              <h1 style={{ fontSize: '2.2rem', fontWeight: 800, lineHeight: 1.1, marginTop: '0.4rem', background: 'linear-gradient(135deg, #00f2fe, #10B981)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{s.title}</h1>
              <p style={{ fontSize: '0.95rem', color: '#6b7280', marginTop: '0.15rem' }}>{s.subtitle}</p>
            </motion.div>
          )}

          {/* Content area — centered */}
          <motion.div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', overflow: 'hidden', x: px, y: py }}
            transition={{ type: 'spring', stiffness: 150, damping: 30 }}>
            <div style={{ width: '100%', maxWidth: 1200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <SlideRenderer slide={s} />
            </div>
          </motion.div>

          {/* Footer */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 9, color: '#374151', textTransform: 'uppercase', letterSpacing: '0.1em', flexShrink: 0, paddingTop: '0.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity }} style={{ width: 5, height: 5, borderRadius: '50%', background: '#00f2fe' }} />
              <span style={{ color: '#4b5563' }}>{cur + 1} / {slides.length}</span>
              <span style={{ color: '#1f2937' }}>•</span>
              <span>CELLUPULP BD</span>
            </div>
            <span style={{ color: '#1f2937' }}>{s.section}</span>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Nav buttons */}
      <div style={{ position: 'fixed', bottom: '1.5rem', right: '2rem', display: 'flex', gap: '0.6rem', zIndex: 100 }}>
        <button onClick={prev} disabled={cur === 0} className="nav-btn"><ChevronLeft size={20} /></button>
        <button onClick={next} disabled={cur === slides.length - 1} className="nav-btn"><ChevronRight size={20} /></button>
      </div>

      {/* Dot nav */}
      <div style={{ position: 'fixed', bottom: '1.25rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 4, zIndex: 100 }}>
        {slides.map((_, i) => (
          <motion.button key={i} onClick={() => { setDir(i > cur ? 1 : -1); setCur(i); }}
            animate={{ scale: i === cur ? 1.5 : 1, background: i === cur ? '#00f2fe' : 'rgba(255,255,255,0.1)' }}
            style={{ width: 6, height: 6, borderRadius: '50%', border: 'none', cursor: 'pointer', padding: 0 }}
            whileHover={{ scale: 1.8 }} />
        ))}
      </div>
    </div>
  );
}

export default App;
