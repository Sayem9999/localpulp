import React from 'react';
import { motion } from 'framer-motion';
import * as Ic from 'lucide-react';
const I=(n,sz=22)=>{const C=Ic[n];return C?<C size={sz}/>:null;};
const a=(d=0)=>({initial:{opacity:0,y:14},animate:{opacity:1,y:0},transition:{delay:d,duration:0.45}});

export function OrgchartSlide({s}) {
  return (
    <div style={{display:'grid',gridTemplateColumns:'2fr 3fr',gap:'1rem',width:'100%',height:'100%'}}>
      <motion.div {...a(0.1)} style={{borderRadius:16,overflow:'hidden',border:'1px solid rgba(255,255,255,0.08)',position:'relative'}}>
        <img src="./organogram.png" alt="" style={{width:'100%',height:'100%',objectFit:'cover',opacity:0.6}}/>
        <div style={{position:'absolute',inset:0,background:'linear-gradient(180deg,transparent 40%,rgba(0,0,0,0.85))'}}/>
        <div style={{position:'absolute',bottom:'1.2rem',left:'1.2rem'}}><p style={{fontSize:14,fontWeight:800}}>Corporate Hierarchy</p><p style={{fontSize:10,color:'#22d3ee',textTransform:'uppercase'}}>4-Division Pilot Structure</p></div>
      </motion.div>
      <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
        <motion.div {...a(0.15)} style={{background:'rgba(0,242,254,0.06)',border:'1px solid rgba(0,242,254,0.25)',borderRadius:12,padding:'0.8rem 1.5rem',textAlign:'center',marginBottom:'1rem',boxShadow:'0 0 25px rgba(0,242,254,0.08)'}}>
          <p style={{fontSize:9,textTransform:'uppercase',color:'#67e8f9',fontWeight:700}}>{s.org.ceo.desc}</p>
          <p style={{fontSize:14,fontWeight:900,marginTop:2}}>{s.org.ceo.title}</p>
          <p style={{fontSize:10,color:'#9ca3af',marginTop:1}}>{s.org.ceo.name}</p>
        </motion.div>
        <motion.div {...a(0.2)} style={{width:1,height:20,background:'linear-gradient(180deg,rgba(0,242,254,0.3),rgba(255,255,255,0.08))'}}/>
        <motion.div {...a(0.22)} style={{width:'90%',height:1,background:'linear-gradient(90deg,transparent,rgba(255,255,255,0.12),transparent)',marginBottom:3}}/>
        <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:'0.6rem',width:'100%'}}>
          {s.org.divisions.map((d,i)=><motion.div key={i} initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} transition={{delay:0.35+i*0.08,type:'spring'}} whileHover={{y:-4,borderColor:`${d.color}50`}} style={{background:'rgba(255,255,255,0.03)',border:`1px solid ${d.color}20`,borderTop:`3px solid ${d.color}`,borderRadius:12,padding:'0.7rem',textAlign:'center'}}>
            <p style={{fontSize:12,fontWeight:800,marginBottom:1}}>{d.title}</p>
            <p style={{fontSize:9,color:d.color,marginBottom:6}}>{d.head}</p>
            {d.items.map((it,j)=><p key={j} style={{fontSize:9,color:'#6b7280',lineHeight:1.5}}>• {it}</p>)}
          </motion.div>)}
        </div>
      </div>
    </div>
  );
}

export function GovernanceSlide({s}) {
  return (
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1rem',width:'100%'}}>
      {s.items.map((it,i)=><motion.div key={i} {...a(0.1+i*0.1)} whileHover={{scale:1.03,borderColor:'rgba(0,242,254,0.3)'}} style={{background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:14,padding:'1.5rem',display:'flex',gap:'1rem',alignItems:'flex-start'}}>
        <div style={{width:42,height:42,borderRadius:12,background:'rgba(0,242,254,0.08)',display:'flex',alignItems:'center',justifyContent:'center',color:'#22d3ee',flexShrink:0}}>{I(it.icon,20)}</div>
        <div><h4 style={{fontSize:14,fontWeight:700,marginBottom:4}}>{it.title}</h4><p style={{fontSize:12,color:'#9ca3af',lineHeight:1.5}}>{it.desc}</p></div>
      </motion.div>)}
    </div>
  );
}

export function RiskmatrixSlide({s}) {
  const pc={High:'#f87171',Medium:'#fb923c',Low:'#4ade80',Critical:'#ef4444'};
  return (
    <motion.div {...a(0.15)} style={{width:'100%',borderRadius:14,overflow:'hidden',border:'1px solid rgba(255,255,255,0.08)'}}>
      <table style={{width:'100%',borderCollapse:'collapse'}}>
        <thead><tr style={{background:'rgba(0,242,254,0.06)'}}>
          {['Risk','Prob.','Impact','Mitigation'].map((h,i)=><th key={i} style={{padding:'0.7rem 0.8rem',textAlign:'left',fontSize:10,fontWeight:700,color:'#67e8f9',textTransform:'uppercase',letterSpacing:'0.06em'}}>{h}</th>)}
        </tr></thead>
        <tbody>{s.risks.map((r,i)=><motion.tr key={i} initial={{opacity:0,x:-10}} animate={{opacity:1,x:0}} transition={{delay:0.25+i*0.06}} style={{borderBottom:'1px solid rgba(255,255,255,0.04)',background:i%2===0?'rgba(255,255,255,0.015)':'transparent'}}>
          <td style={{padding:'0.6rem 0.8rem',fontSize:12,fontWeight:600,color:'#e5e7eb',borderLeft:`3px solid ${r.color}`}}>{r.risk}</td>
          <td style={{padding:'0.6rem 0.8rem'}}><span style={{fontSize:10,fontWeight:700,color:pc[r.prob],background:`${pc[r.prob]}15`,padding:'2px 8px',borderRadius:99}}>{r.prob}</span></td>
          <td style={{padding:'0.6rem 0.8rem'}}><span style={{fontSize:10,fontWeight:700,color:pc[r.impact],background:`${pc[r.impact]}15`,padding:'2px 8px',borderRadius:99}}>{r.impact}</span></td>
          <td style={{padding:'0.6rem 0.8rem',fontSize:11,color:'#9ca3af'}}>{r.mitigation}</td>
        </motion.tr>)}</tbody>
      </table>
    </motion.div>
  );
}

export function ContingencySlide({s}) {
  return (
    <div style={{width:'100%'}}>
      <motion.div {...a(0.1)} style={{background:'rgba(239,68,68,0.06)',border:'1px solid rgba(239,68,68,0.2)',borderRadius:14,padding:'1.2rem',marginBottom:'1.5rem',display:'flex',alignItems:'center',gap:'1rem'}}>
        <div style={{width:42,height:42,borderRadius:'50%',background:'rgba(239,68,68,0.15)',display:'flex',alignItems:'center',justifyContent:'center',color:'#f87171',flexShrink:0}}><Ic.AlertTriangle size={20}/></div>
        <div><p style={{fontSize:10,textTransform:'uppercase',color:'#f87171',fontWeight:700,marginBottom:2}}>Trigger Condition</p><p style={{fontSize:13,color:'#d1d5db',lineHeight:1.5}}>{s.trigger}</p></div>
      </motion.div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'1rem'}}>
        {s.actions.map((ac,i)=><motion.div key={i} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.3+i*0.12,type:'spring'}} whileHover={{y:-5}} style={{background:'rgba(255,255,255,0.03)',border:`1px solid ${ac.color}30`,borderRadius:14,padding:'1.5rem',textAlign:'center'}}>
          <div style={{width:48,height:48,borderRadius:'50%',background:`${ac.color}12`,display:'flex',alignItems:'center',justifyContent:'center',color:ac.color,margin:'0 auto 0.8rem'}}>{I(ac.icon,22)}</div>
          <h4 style={{fontSize:14,fontWeight:800,marginBottom:4}}>{ac.title}</h4>
          <p style={{fontSize:11,color:'#9ca3af',lineHeight:1.5}}>{ac.desc}</p>
        </motion.div>)}
      </div>
    </div>
  );
}

export function FallbackSlide({s}) {
  return (
    <div style={{width:'100%',display:'flex',flexDirection:'column',gap:'0.8rem'}}>
      {s.points.map((p,i)=><motion.div key={i} {...a(0.1+i*0.08)} whileHover={{borderColor:'rgba(0,242,254,0.3)'}} style={{background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:12,padding:'1rem 1.2rem',display:'flex',alignItems:'center',gap:'1rem'}}>
        <span style={{fontSize:11,fontWeight:700,color:'#22d3ee',background:'rgba(0,242,254,0.08)',padding:'0.3rem 0.8rem',borderRadius:8,whiteSpace:'nowrap',minWidth:120,textAlign:'center'}}>{p.label}</span>
        <span style={{fontSize:13,color:'#d1d5db'}}>{p.val}</span>
      </motion.div>)}
    </div>
  );
}

export function ClosingSlide({s}) {
  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',height:'100%',position:'relative',zIndex:10}}>
      <motion.div animate={{rotate:360}} transition={{duration:35,repeat:Infinity,ease:'linear'}} style={{position:'absolute',width:450,height:450,borderRadius:'50%',border:'1px solid rgba(0,242,254,0.04)',pointerEvents:'none'}}/>
      <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.8}} style={{fontSize:'3.5rem',fontWeight:900,marginBottom:'2rem'}}>
        <motion.span animate={{backgroundPosition:['0% 50%','100% 50%','0% 50%']}} transition={{duration:5,repeat:Infinity}} style={{background:'linear-gradient(270deg,#fff,#00f2fe,#10B981,#fff)',backgroundSize:'300% 300%',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>{s.title}</motion.span>
      </motion.h1>
      <div style={{display:'flex',gap:'0.5rem',marginBottom:'2rem'}}>
        {s.milestones.map((m,i)=><motion.div key={i} initial={{opacity:0,scale:0.8}} animate={{opacity:1,scale:1}} transition={{delay:0.3+i*0.12,type:'spring'}} style={{background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:12,padding:'0.8rem 1rem',textAlign:'center',minWidth:130}}>
          <p style={{fontSize:11,fontWeight:800,color:'#22d3ee'}}>{m.label}</p>
          <p style={{fontSize:10,color:'#9ca3af',marginTop:3}}>{m.desc}</p>
        </motion.div>)}
      </div>
      <motion.div initial={{width:0}} animate={{width:250}} transition={{delay:0.8,duration:0.8}} style={{height:1,background:'linear-gradient(90deg,transparent,rgba(0,242,254,0.3),transparent)',marginBottom:'1.5rem'}}/>
      <motion.div {...a(1)} style={{background:'rgba(16,185,129,0.06)',border:'1px solid rgba(16,185,129,0.2)',borderRadius:14,padding:'1.2rem 2rem',textAlign:'center',marginBottom:'1.5rem'}}>
        <p style={{fontSize:10,textTransform:'uppercase',color:'#4ade80',fontWeight:700,marginBottom:4}}>Funding Ask</p>
        <p style={{fontSize:'1.5rem',fontWeight:900}}>{s.funding.ask}</p>
        <p style={{fontSize:11,color:'#9ca3af',marginTop:2}}>{s.funding.usd} • {s.funding.split}</p>
      </motion.div>
      <motion.div {...a(1.2)} style={{textAlign:'center'}}>
        <p style={{fontSize:13,fontWeight:700}}>{s.contact.name}</p>
        <p style={{fontSize:11,color:'#9ca3af'}}>{s.contact.role}</p>
        <p style={{fontSize:11,color:'#22d3ee',marginTop:3}}>{s.contact.email}</p>
      </motion.div>
    </div>
  );
}
