import React, { useState, useEffect, useRef } from 'react';
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

  const parallaxX = useTransform(mouseX, [0, window.innerWidth], [-15, 15]);
  const parallaxY = useTransform(mouseY, [0, window.innerHeight], [-10, 10]);

  const next = () => { if (cur < slides.length - 1) { setDir(1); setCur(c => c + 1); } };
  const prev = () => { if (cur > 0) { setDir(-1); setCur(c => c - 1); } };

  useEffect(() => {
    const h = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') next();
      if (e.key === 'ArrowLeft') prev();
    };
    const m = (e) => { mouseX.set(e.clientX); mouseY.set(e.clientY); };
    window.addEventListener('keydown', h);
    window.addEventListener('mousemove', m);
    return () => { window.removeEventListener('keydown', h); window.removeEventListener('mousemove', m); };
  }, [cur]);

  const variants = {
    enter: (d) => ({ x: d > 0 ? 600 : -600, opacity: 0, scale: 0.92, rotateY: d > 0 ? 8 : -8 }),
    center: { zIndex: 1, x: 0, opacity: 1, scale: 1, rotateY: 0 },
    exit: (d) => ({ zIndex: 0, x: d < 0 ? 600 : -600, opacity: 0, scale: 0.92, rotateY: d < 0 ? 8 : -8 })
  };

  return (
    <div className="presentation-container overflow-hidden"
      style={{ perspective: 1200 }}>

      {/* Animated gradient orbs */}
      <motion.div style={{ x: parallaxX, y: parallaxY, position: 'absolute', top: '-20%', left: '-10%', width: '50vw', height: '50vw', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,242,254,0.06) 0%, transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none', zIndex: 0 }} />
      <motion.div style={{ x: useTransform(parallaxX, v => -v), y: useTransform(parallaxY, v => -v), position: 'absolute', bottom: '-15%', right: '-10%', width: '45vw', height: '45vw', borderRadius: '50%', background: 'radial-gradient(circle, rgba(16,185,129,0.05) 0%, transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none', zIndex: 0 }} />

      <div className="progress-bar z-50" style={{ width: `${((cur + 1) / slides.length) * 100}%` }} />
      <PulpModel currentSlide={cur} type={s.type} />

      <AnimatePresence initial={false} custom={dir} mode="wait">
        <motion.div key={cur} custom={dir} variants={variants}
          initial="enter" animate="center" exit="exit"
          transition={{ x: { type: 'spring', stiffness: 200, damping: 25 }, opacity: { duration: 0.25 }, rotateY: { duration: 0.5 }, scale: { duration: 0.4 } }}
          className="slide-content absolute inset-0 p-8 flex flex-col z-20"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {s.type !== 'hero' && (
            <motion.div className="mb-6" style={{ paddingTop: '1.5rem' }}
              initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.6 }}>
              <h1 className="slide-title">{s.title}</h1>
              <p className="slide-subtitle">{s.subtitle}</p>
            </motion.div>
          )}
          <motion.div style={{ flex: 1, width: '100%', maxWidth: 1200, margin: '0 auto', position: 'relative', x: parallaxX, y: parallaxY }}
            transition={{ type: 'spring', stiffness: 150, damping: 30 }}>
            <SlideRenderer slide={s} />
          </motion.div>
          <div style={{ position: 'absolute', bottom: '1.5rem', left: '2rem', fontSize: 10, color: '#4b5563', textTransform: 'uppercase', letterSpacing: '0.12em', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <motion.span animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity }} style={{ width: 6, height: 6, borderRadius: '50%', background: '#00f2fe' }} />
            <span>{cur + 1} / {slides.length}</span>
            <span style={{ color: '#374151' }}>•</span>
            <span>CELLUPULP BD</span>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="nav-controls z-50">
        <button className="nav-btn" onClick={prev} disabled={cur === 0}><ChevronLeft size={22} /></button>
        <button className="nav-btn" onClick={next} disabled={cur === slides.length - 1}><ChevronRight size={22} /></button>
      </div>

      {/* Slide dots */}
      <div style={{ position: 'fixed', bottom: '1.5rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 6, zIndex: 100 }}>
        {slides.map((_, i) => (
          <motion.button key={i} onClick={() => { setDir(i > cur ? 1 : -1); setCur(i); }}
            animate={{ scale: i === cur ? 1.3 : 1, background: i === cur ? '#00f2fe' : 'rgba(255,255,255,0.15)' }}
            style={{ width: 8, height: 8, borderRadius: '50%', border: 'none', cursor: 'pointer', padding: 0 }}
            whileHover={{ scale: 1.5 }} />
        ))}
      </div>
    </div>
  );
}

export default App;
