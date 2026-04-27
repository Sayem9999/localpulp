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

  const px = useTransform(mouseX, [0, typeof window!=='undefined'?window.innerWidth:1920], [-12, 12]);
  const py = useTransform(mouseY, [0, typeof window!=='undefined'?window.innerHeight:1080], [-8, 8]);

  const next = () => { if (cur < slides.length - 1) { setDir(1); setCur(c => c + 1); } };
  const prev = () => { if (cur > 0) { setDir(-1); setCur(c => c - 1); } };

  useEffect(() => {
    const h = (e) => { if (e.key==='ArrowRight'||e.key===' ') next(); if (e.key==='ArrowLeft') prev(); };
    const m = (e) => { mouseX.set(e.clientX); mouseY.set(e.clientY); };
    window.addEventListener('keydown', h);
    window.addEventListener('mousemove', m);
    return () => { window.removeEventListener('keydown', h); window.removeEventListener('mousemove', m); };
  }, [cur]);

  const variants = {
    enter: (d) => ({ x: d > 0 ? 500 : -500, opacity: 0, scale: 0.94, rotateY: d > 0 ? 6 : -6 }),
    center: { zIndex: 1, x: 0, opacity: 1, scale: 1, rotateY: 0 },
    exit: (d) => ({ zIndex: 0, x: d < 0 ? 500 : -500, opacity: 0, scale: 0.94, rotateY: d < 0 ? 6 : -6 })
  };

  return (
    <div className="presentation-container overflow-hidden" style={{ perspective: 1200 }}>
      {/* Ambient orbs */}
      <motion.div style={{ x: px, y: py, position:'absolute',top:'-20%',left:'-10%',width:'50vw',height:'50vw',borderRadius:'50%',background:'radial-gradient(circle,rgba(0,242,254,0.05) 0%,transparent 70%)',filter:'blur(60px)',pointerEvents:'none',zIndex:0 }} />
      <motion.div style={{ x: useTransform(px,v=>-v), y: useTransform(py,v=>-v), position:'absolute',bottom:'-15%',right:'-10%',width:'45vw',height:'45vw',borderRadius:'50%',background:'radial-gradient(circle,rgba(16,185,129,0.04) 0%,transparent 70%)',filter:'blur(60px)',pointerEvents:'none',zIndex:0 }} />

      <div className="progress-bar z-50" style={{ width: `${((cur + 1) / slides.length) * 100}%` }} />
      <PulpModel currentSlide={cur} type={s.type} />

      <AnimatePresence initial={false} custom={dir} mode="wait">
        <motion.div key={cur} custom={dir} variants={variants}
          initial="enter" animate="center" exit="exit"
          transition={{ x:{type:'spring',stiffness:200,damping:25}, opacity:{duration:0.25}, rotateY:{duration:0.5}, scale:{duration:0.4} }}
          className="slide-content absolute z-20"
          style={{ inset:0, padding:'2rem', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', transformStyle:'preserve-3d' }}
        >
          {s.type !== 'hero' && s.type !== 'closing' && (
            <motion.div initial={{opacity:0,x:-25}} animate={{opacity:1,x:0}} transition={{delay:0.15,duration:0.5}}
              style={{ width:'100%', maxWidth:1200, marginBottom:'1rem' }}>
              <div style={{display:'flex',alignItems:'center',gap:'0.75rem',marginBottom:'0.25rem'}}>
                <span style={{fontSize:10,fontWeight:700,textTransform:'uppercase',letterSpacing:'0.12em',color:'#00f2fe',background:'rgba(0,242,254,0.08)',padding:'0.2rem 0.7rem',borderRadius:99,border:'1px solid rgba(0,242,254,0.2)'}}>{s.section}</span>
              </div>
              <h1 className="slide-title">{s.title}</h1>
              <p className="slide-subtitle">{s.subtitle}</p>
            </motion.div>
          )}
          <motion.div style={{ flex: s.type==='hero'||s.type==='closing' ? 'unset' : 1, width:'100%', maxWidth:1200, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', x:px, y:py }}
            transition={{type:'spring',stiffness:150,damping:30}}>
            <SlideRenderer slide={s} />
          </motion.div>

          {/* Footer */}
          <div style={{ position:'absolute',bottom:'1.25rem',left:'2rem',right:'2rem',display:'flex',justifyContent:'space-between',alignItems:'center',fontSize:10,color:'#374151',textTransform:'uppercase',letterSpacing:'0.1em' }}>
            <div style={{display:'flex',alignItems:'center',gap:'0.6rem'}}>
              <motion.span animate={{opacity:[0.3,1,0.3]}} transition={{duration:2,repeat:Infinity}} style={{width:5,height:5,borderRadius:'50%',background:'#00f2fe'}}/>
              <span>{cur+1} / {slides.length}</span>
              <span style={{color:'#1f2937'}}>•</span>
              <span>CELLUPULP BD</span>
            </div>
            <span style={{color:'#1f2937'}}>{s.section}</span>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Nav */}
      <div className="nav-controls z-50">
        <button className="nav-btn" onClick={prev} disabled={cur===0}><ChevronLeft size={20}/></button>
        <button className="nav-btn" onClick={next} disabled={cur===slides.length-1}><ChevronRight size={20}/></button>
      </div>

      {/* Dots */}
      <div style={{position:'fixed',bottom:'1.25rem',left:'50%',transform:'translateX(-50%)',display:'flex',gap:5,zIndex:100}}>
        {slides.map((_,i)=>(
          <motion.button key={i} onClick={()=>{setDir(i>cur?1:-1);setCur(i);}}
            animate={{scale:i===cur?1.4:1,background:i===cur?'#00f2fe':'rgba(255,255,255,0.12)'}}
            style={{width:7,height:7,borderRadius:'50%',border:'none',cursor:'pointer',padding:0}}
            whileHover={{scale:1.6}}/>
        ))}
      </div>
    </div>
  );
}

export default App;
