import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, FileText } from 'lucide-react';
import PulpModel from './components/PulpModel';
import { slides } from './slidesData';
import SlideRenderer from './components/SlideRenderer';

function App() {
  const [cur, setCur] = useState(0);
  const [dir, setDir] = useState(0);
  const [notes, setNotes] = useState(false);
  const s = slides[cur];

  const next = () => { if (cur < slides.length - 1) { setDir(1); setCur(c => c + 1); } };
  const prev = () => { if (cur > 0) { setDir(-1); setCur(c => c - 1); } };

  useEffect(() => {
    const h = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') next();
      if (e.key === 'ArrowLeft') prev();
      if (e.key.toLowerCase() === 'n') setNotes(v => !v);
    };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [cur]);

  const variants = {
    enter: (d) => ({ x: d > 0 ? 800 : -800, opacity: 0, scale: 0.96 }),
    center: { zIndex: 1, x: 0, opacity: 1, scale: 1 },
    exit: (d) => ({ zIndex: 0, x: d < 0 ? 800 : -800, opacity: 0, scale: 0.96 })
  };

  return (
    <div className="presentation-container overflow-hidden">
      <div className="progress-bar z-50" style={{ width: `${((cur + 1) / slides.length) * 100}%` }} />
      <PulpModel currentSlide={cur} type={s.type} />

      <AnimatePresence initial={false} custom={dir} mode="wait">
        <motion.div key={cur} custom={dir} variants={variants}
          initial="enter" animate="center" exit="exit"
          transition={{ x: { type: 'spring', stiffness: 280, damping: 28 }, opacity: { duration: 0.2 } }}
          className="slide-content absolute inset-0 p-8 flex flex-col z-20"
        >
          {s.type !== 'hero' && (
            <div className="mb-6" style={{ paddingTop: '1.5rem' }}>
              <h1 className="slide-title">{s.title}</h1>
              <p className="slide-subtitle">{s.subtitle}</p>
            </div>
          )}
          <div style={{ flex: 1, width: '100%', maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
            <SlideRenderer slide={s} />
          </div>
          <div style={{ position: 'absolute', bottom: '1.5rem', left: '2rem', fontSize: '10px', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#00f2fe', animation: 'pulse 2s infinite' }} />
            <span style={{ fontWeight: 700, color: '#fff' }}>SPEAKER {s.speaker}</span>
            <span>|</span>
            <span>{cur + 1} / {slides.length}</span>
            <span>—</span>
            <span>CELLUPULP BD</span>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="nav-controls z-50">
        <button className="nav-btn" onClick={() => setNotes(!notes)} title="Toggle Notes (N)">
          <FileText size={18} style={notes ? { color: '#22d3ee' } : {}} />
        </button>
        <button className="nav-btn" onClick={prev} disabled={cur === 0}><ChevronLeft size={22} /></button>
        <button className="nav-btn" onClick={next} disabled={cur === slides.length - 1}><ChevronRight size={22} /></button>
      </div>

      <AnimatePresence>
        {notes && (
          <motion.div initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 80, opacity: 0 }}
            style={{ position: 'fixed', bottom: '5rem', left: '2rem', right: '2rem', background: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(30px)', border: '1px solid rgba(0,242,254,0.25)', padding: '2rem', borderRadius: '1.5rem', zIndex: 200 }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.75rem' }}>
              <span style={{ background: 'rgba(0,242,254,0.15)', padding: '0.2rem 0.75rem', borderRadius: '999px', fontSize: '10px', fontWeight: 900, color: '#22d3ee', textTransform: 'uppercase' }}>Speaker {s.speaker}</span>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{s.title}</span>
            </div>
            <p style={{ fontSize: '1.15rem', color: '#fff', lineHeight: 1.7, fontStyle: 'italic' }}>"{s.notes}"</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
