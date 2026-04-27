import React from 'react';
import { motion } from 'framer-motion';
import * as Ic from 'lucide-react';
const I=(n,sz=22)=>{const C=Ic[n];return C?<C size={sz}/>:null;};
const a=(d=0)=>({initial:{opacity:0,y:14},animate:{opacity:1,y:0},transition:{delay:d,duration:0.45}});
const S=({children,style,...p})=><motion.div {...p} style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:14,padding:'1rem',transition:'all 0.3s',...style}}>{children}</motion.div>;

export function HeroSlide({s}) {
  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',height:'100%',position:'relative',zIndex:10,overflow:'hidden'}}>
      <motion.div animate={{rotate:360}} transition={{duration:30,repeat:Infinity,ease:'linear'}} style={{position:'absolute',width:500,height:500,borderRadius:'50%',border:'1px solid rgba(0,242,254,0.05)',pointerEvents:'none'}}/>
      <motion.div initial={{scale:0,rotate:-180}} animate={{scale:1,rotate:0}} transition={{type:'spring',stiffness:200,damping:15,delay:0.2}} style={{marginBottom:'1.5rem'}}>
        <motion.div animate={{boxShadow:['0 0 25px rgba(0,242,254,0.2)','0 0 50px rgba(0,242,254,0.4)','0 0 25px rgba(0,242,254,0.2)']}} transition={{duration:3,repeat:Infinity}} style={{width:90,height:90,borderRadius:22,overflow:'hidden',border:'2px solid rgba(0,242,254,0.3)'}}>
          <img src="./logo.png" alt="" style={{width:'100%',height:'100%',objectFit:'cover'}}/>
        </motion.div>
      </motion.div>
      <motion.div initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{delay:0.4,type:'spring'}} style={{padding:'0.35rem 1.2rem',borderRadius:99,background:'linear-gradient(135deg,rgba(0,242,254,0.12),rgba(16,185,129,0.08))',border:'1px solid rgba(0,242,254,0.3)',color:'#67e8f9',fontSize:10,fontWeight:700,letterSpacing:'0.2em',textTransform:'uppercase',marginBottom:'1.2rem'}}>{s.badge}</motion.div>
      <motion.h1 initial={{opacity:0,y:25}} animate={{opacity:1,y:0}} transition={{delay:0.5,duration:0.7}} style={{fontSize:'4.5rem',fontWeight:900,textAlign:'center',lineHeight:1,letterSpacing:'-0.04em'}}>
        <motion.span animate={{backgroundPosition:['0% 50%','100% 50%','0% 50%']}} transition={{duration:5,repeat:Infinity}} style={{background:'linear-gradient(270deg,#fff,#e5e7eb,#00f2fe,#fff)',backgroundSize:'300% 300%',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>{s.title}</motion.span>
      </motion.h1>
      <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.9}} style={{fontSize:'1.05rem',color:'#22d3ee',fontWeight:500,letterSpacing:'0.16em',textTransform:'uppercase',marginTop:'0.8rem',textAlign:'center'}}>{s.tagline}</motion.p>
      <motion.div initial={{width:0}} animate={{width:280}} transition={{delay:1.1,duration:0.8}} style={{height:1,background:'linear-gradient(90deg,transparent,rgba(0,242,254,0.35),transparent)',marginTop:'1.8rem',marginBottom:'1.5rem'}}/>
      <div style={{display:'flex',gap:'0.8rem',flexWrap:'wrap',justifyContent:'center'}}>
        {s.kpis?.map((k,i)=><motion.div key={i} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:1.3+i*0.12,type:'spring'}} whileHover={{scale:1.06,y:-3}} style={{display:'flex',alignItems:'center',gap:'0.5rem',padding:'0.5rem 1rem',borderRadius:99,background:'rgba(255,255,255,0.03)',border:`1px solid ${k.color}30`,backdropFilter:'blur(6px)'}}>
          <span style={{fontSize:'1rem',fontWeight:900,color:k.color}}>{k.val}</span>
          <span style={{fontSize:9,color:'#9ca3af',textTransform:'uppercase',letterSpacing:'0.06em'}}>{k.label}</span>
        </motion.div>)}
      </div>
      <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:2}} style={{fontSize:10,color:'#374151',textTransform:'uppercase',letterSpacing:'0.15em',marginTop:'1.5rem'}}>{s.location}</motion.p>
    </div>
  );
}

export function KpiSlide({s}) {
  return (
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1.2rem',height:'100%',width:'100%'}}>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'0.8rem'}}>
        {s.problems.map((p,i)=><motion.div key={i} {...a(0.1+i*0.1)} whileHover={{scale:1.03,borderColor:'rgba(0,242,254,0.3)'}} style={{background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:14,padding:'1.2rem',display:'flex',flexDirection:'column',justifyContent:'center'}}>
          <p style={{fontSize:'2rem',fontWeight:900,color:'#f87171'}}>{p.val}</p>
          <p style={{fontSize:11,fontWeight:700,color:'#e5e7eb',marginTop:4}}>{p.label}</p>
          <p style={{fontSize:10,color:'#6b7280',marginTop:6,lineHeight:1.4}}>{p.desc}</p>
        </motion.div>)}
      </div>
      <motion.div {...a(0.4)} style={{borderRadius:16,overflow:'hidden',border:'1px solid rgba(255,255,255,0.08)',position:'relative'}}>
        <img src={s.image} alt="" style={{width:'100%',height:'100%',objectFit:'cover',opacity:0.75}}/>
        <div style={{position:'absolute',inset:0,background:'linear-gradient(180deg,transparent 40%,rgba(0,0,0,0.8))'}}/>
        <div style={{position:'absolute',bottom:'1.5rem',left:'1.5rem'}}><p style={{fontSize:14,fontWeight:700}}>Raw Materials: Jute & Bamboo</p><p style={{fontSize:10,color:'#22d3ee',textTransform:'uppercase'}}>Locally sourced, infinitely renewable</p></div>
      </motion.div>
    </div>
  );
}

export function PillarsSlide({s}) {
  return (
    <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'1rem',width:'100%',height:'100%',alignItems:'stretch'}}>
      {s.pillars.map((p,i)=><motion.div key={i} initial={{opacity:0,y:30,scale:0.9}} animate={{opacity:1,y:0,scale:1}} transition={{delay:0.2+i*0.12,type:'spring'}} whileHover={{y:-8,boxShadow:`0 15px 40px ${p.color}15`,borderColor:`${p.color}50`}} style={{background:'rgba(255,255,255,0.03)',border:`1px solid ${p.color}25`,borderRadius:16,padding:'2rem 1.2rem',display:'flex',flexDirection:'column',alignItems:'center',textAlign:'center',justifyContent:'center'}}>
        <motion.div animate={{y:[0,-6,0]}} transition={{duration:3,repeat:Infinity,delay:i*0.3}} style={{width:56,height:56,borderRadius:'50%',background:`${p.color}12`,border:`2px solid ${p.color}40`,display:'flex',alignItems:'center',justifyContent:'center',color:p.color,marginBottom:'1.2rem'}}>{I(p.icon,24)}</motion.div>
        <h3 style={{fontSize:'1.1rem',fontWeight:800,marginBottom:'0.5rem'}}>{p.title}</h3>
        <p style={{fontSize:12,color:'#9ca3af',lineHeight:1.5}}>{p.desc}</p>
      </motion.div>)}
    </div>
  );
}

export function CanvasSlide({s}) {
  return (
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1rem',width:'100%'}}>
      {s.canvas.map((c,i)=><S key={i} {...a(0.1+i*0.1)} style={{borderTop:`3px solid ${['#00f2fe','#10B981','#4facfe','#c084fc'][i]}`}}>
        <p style={{fontSize:11,fontWeight:700,color:['#00f2fe','#10B981','#4facfe','#c084fc'][i],textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'0.6rem'}}>{c.label}</p>
        {c.items.map((it,j)=><div key={j} style={{display:'flex',alignItems:'flex-start',gap:6,marginTop:6}}><span style={{width:5,height:5,borderRadius:'50%',background:'rgba(255,255,255,0.2)',marginTop:5,flexShrink:0}}/><span style={{fontSize:12,color:'#d1d5db',lineHeight:1.4}}>{it}</span></div>)}
      </S>)}
    </div>
  );
}

export function EconomicsSlide({s}) {
  return (
    <div style={{width:'100%'}}>
      <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'0.8rem',marginBottom:'1.5rem'}}>
        {s.cards.map((c,i)=><motion.div key={i} {...a(0.1+i*0.1)} whileHover={{scale:1.04}} style={{background:'rgba(255,255,255,0.03)',border:`1px solid ${c.color}30`,borderRadius:14,padding:'1.2rem',textAlign:'center'}}>
          <p style={{fontSize:10,textTransform:'uppercase',color:'#6b7280',fontWeight:600,marginBottom:6}}>{c.label}</p>
          <p style={{fontSize:'1.8rem',fontWeight:900,color:c.color}}>{c.val}<span style={{fontSize:12,color:'#6b7280',marginLeft:4}}>{c.unit}</span></p>
          <p style={{fontSize:10,color:'#9ca3af',marginTop:6}}>{c.note}</p>
        </motion.div>)}
      </div>
      <motion.div {...a(0.5)} style={{background:'rgba(0,242,254,0.04)',border:'1px solid rgba(0,242,254,0.15)',borderRadius:14,padding:'1.5rem',textAlign:'center'}}>
        <p style={{fontSize:11,textTransform:'uppercase',color:'#6b7280',fontWeight:700,marginBottom:'0.8rem',letterSpacing:'0.1em'}}>Profit Mechanics Formula</p>
        <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'1rem',flexWrap:'wrap'}}>
          <span style={{padding:'0.4rem 1rem',background:'rgba(0,242,254,0.1)',borderRadius:8,fontSize:14,fontWeight:700,color:'#00f2fe'}}>{s.formula.revenue}</span>
          <span style={{fontSize:20,color:'#6b7280'}}>−</span>
          <span style={{padding:'0.4rem 1rem',background:'rgba(251,146,60,0.1)',borderRadius:8,fontSize:14,fontWeight:700,color:'#fb923c'}}>{s.formula.cogs}</span>
          <span style={{fontSize:20,color:'#6b7280'}}>=</span>
          <span style={{padding:'0.4rem 1rem',background:'rgba(74,222,128,0.1)',borderRadius:8,fontSize:14,fontWeight:700,color:'#4ade80'}}>{s.formula.result}</span>
        </div>
      </motion.div>
    </div>
  );
}

export function ScaleKpiSlide({s}) {
  return (
    <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'1rem',width:'100%'}}>
      {s.metrics.map((m,i)=><motion.div key={i} initial={{opacity:0,scale:0.85}} animate={{opacity:1,scale:1}} transition={{delay:0.15+i*0.08,type:'spring'}} whileHover={{scale:1.05,y:-5}} style={{background:'rgba(255,255,255,0.03)',border:`1px solid ${m.color}25`,borderRadius:16,padding:'1.5rem',textAlign:'center',display:'flex',flexDirection:'column',alignItems:'center'}}>
        <div style={{width:44,height:44,borderRadius:'50%',background:`${m.color}12`,display:'flex',alignItems:'center',justifyContent:'center',color:m.color,marginBottom:'0.8rem'}}>{I(m.icon,20)}</div>
        <p style={{fontSize:'2rem',fontWeight:900,color:m.color}}>{m.val}<span style={{fontSize:12,color:'#6b7280',marginLeft:3}}>{m.unit}</span></p>
        <p style={{fontSize:11,color:'#9ca3af',marginTop:6}}>{m.label}</p>
      </motion.div>)}
    </div>
  );
}

export { S, I, a };
