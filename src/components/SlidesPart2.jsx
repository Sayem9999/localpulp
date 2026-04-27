import React from 'react';
import { motion } from 'framer-motion';
import * as Ic from 'lucide-react';
const I=(n,sz=22)=>{const C=Ic[n];return C?<C size={sz}/>:null;};
const a=(d=0)=>({initial:{opacity:0,y:14},animate:{opacity:1,y:0},transition:{delay:d,duration:0.45}});

export function MarketingSlide({s}) {
  return (
    <div style={{display:'grid',gridTemplateColumns:'3fr 2fr',gap:'1rem',width:'100%',height:'100%'}}>
      <div style={{display:'flex',flexDirection:'column',gap:'0.8rem'}}>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'0.6rem'}}>
          {s.fourPs.map((p,i)=><motion.div key={i} {...a(i*0.08)} whileHover={{scale:1.03}} style={{background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:12,padding:'0.8rem'}}>
            <div style={{display:'flex',alignItems:'center',gap:6,marginBottom:4}}><span style={{color:'#22d3ee'}}>{I(p.icon,16)}</span><span style={{fontWeight:800,color:'#22d3ee',fontSize:13}}>{p.title}</span></div>
            <p style={{fontSize:11,color:'#d1d5db',lineHeight:1.4}}>{p.desc}</p>
          </motion.div>)}
        </div>
        <motion.div {...a(0.4)} style={{background:'linear-gradient(135deg,rgba(30,64,175,0.1),rgba(126,34,206,0.06))',border:'1px solid rgba(96,165,250,0.2)',borderRadius:14,padding:'1.2rem',flex:1,display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',textAlign:'center'}}>
          <Ic.Target size={24} style={{color:'#60a5fa',marginBottom:8}}/>
          <h4 style={{fontWeight:700,fontSize:13,marginBottom:6}}>Trial Run Strategy</h4>
          <p style={{fontSize:12,color:'#d1d5db',maxWidth:350}}>{s.trialStrategy}</p>
          <div style={{marginTop:10,padding:'0.3rem 0.8rem',background:'rgba(34,197,94,0.08)',color:'#4ade80',fontSize:10,fontWeight:700,borderRadius:99,border:'1px solid rgba(34,197,94,0.2)'}}>ESG: "Made with Bangladesh Fibers"</div>
        </motion.div>
      </div>
      <motion.div {...a(0.3)} style={{borderRadius:16,overflow:'hidden',border:'1px solid rgba(255,255,255,0.08)',position:'relative'}}>
        <img src={s.image} alt="" style={{width:'100%',height:'100%',objectFit:'cover',opacity:0.8}}/>
        <div style={{position:'absolute',bottom:0,left:0,right:0,padding:'1rem',background:'linear-gradient(transparent,rgba(0,0,0,0.9))'}}>
          <p style={{fontSize:13,fontWeight:700}}>Hygiene-Grade Fluff Pulp</p>
          <p style={{fontSize:10,color:'#22d3ee',textTransform:'uppercase'}}>Premium Softness & Absorbency</p>
        </div>
      </motion.div>
    </div>
  );
}

export function PipelineSlide({s}) {
  return (
    <div style={{display:'flex',flexDirection:'column',width:'100%',height:'100%'}}>
      <motion.div {...a(0.1)} style={{width:'100%',height:160,borderRadius:14,overflow:'hidden',marginBottom:'1.2rem',position:'relative',border:'1px solid rgba(255,255,255,0.08)'}}>
        <img src={s.image} alt="" style={{width:'100%',height:'100%',objectFit:'cover',opacity:0.5}}/>
        <div style={{position:'absolute',inset:0,background:'linear-gradient(90deg,rgba(0,0,0,0.85),transparent)',display:'flex',alignItems:'center',padding:'0 2rem'}}>
          <div><h3 style={{fontSize:'1.3rem',fontWeight:900}}>Continuous Bio-Digestion</h3><p style={{color:'#22d3ee',fontSize:11,fontWeight:600,textTransform:'uppercase',letterSpacing:'0.12em'}}>16.5 MT/Day Processing</p></div>
        </div>
      </motion.div>
      <div className="pipeline-track" style={{flex:1,alignItems:'center'}}>
        {s.steps.map((st,i)=><motion.div key={i} {...a(0.3+i*0.1)} className="pipe-node">
          <div className="pipe-icon" style={st.highlight?{background:'rgba(16,185,129,0.2)',borderColor:'#10B981'}:{}}>{I(st.icon,20)}</div>
          <h4 style={{fontWeight:700,fontSize:11,marginBottom:3,color:st.highlight?'#4ade80':'#fff'}}>{i+1}. {st.title}</h4>
          <p style={{fontSize:9,color:'#9ca3af',lineHeight:1.4}}>{st.desc}</p>
          {st.highlight&&<div style={{marginTop:5,fontSize:7,textTransform:'uppercase',fontWeight:700,color:'#22c55e',background:'rgba(34,197,94,0.1)',padding:'2px 6px',borderRadius:4}}>DoE Compliant</div>}
        </motion.div>)}
      </div>
    </div>
  );
}

export function FactorySlide({s}) {
  return (
    <div style={{display:'grid',gridTemplateColumns:'3fr 2fr',gap:'1rem',width:'100%',height:'100%'}}>
      <motion.div {...a(0.1)} style={{borderRadius:16,overflow:'hidden',border:'1px solid rgba(255,255,255,0.08)',position:'relative'}}>
        <img src={s.image} alt="" style={{width:'100%',height:'100%',objectFit:'cover',opacity:0.7}}/>
        <div style={{position:'absolute',inset:0,background:'linear-gradient(180deg,transparent 50%,rgba(0,0,0,0.85))'}}/>
        <div style={{position:'absolute',bottom:'1.5rem',left:'1.5rem'}}><p style={{fontSize:16,fontWeight:900}}>BEZA Industrial Zone</p><p style={{fontSize:11,color:'#22d3ee'}}>24/7 Continuous Operation</p></div>
      </motion.div>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'0.6rem'}}>
        {s.specs.map((sp,i)=><motion.div key={i} {...a(0.2+i*0.08)} style={{background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:12,padding:'0.8rem',display:'flex',flexDirection:'column',justifyContent:'center'}}>
          <p style={{fontSize:9,textTransform:'uppercase',color:'#6b7280',fontWeight:600}}>{sp.label}</p>
          <p style={{fontSize:14,fontWeight:800,color:'#e5e7eb',marginTop:3}}>{sp.val}</p>
        </motion.div>)}
      </div>
    </div>
  );
}

export function ForecastSlide({s}) {
  const rowColors=['#9ca3af','#9ca3af','#00f2fe','#fb923c','#4ade80','#facc15','#f87171'];
  return (
    <motion.div {...a(0.2)} style={{width:'100%',borderRadius:14,overflow:'hidden',border:'1px solid rgba(255,255,255,0.08)'}}>
      <table style={{width:'100%',borderCollapse:'collapse'}}>
        <thead><tr style={{background:'rgba(0,242,254,0.08)'}}>
          {s.table.headers.map((h,i)=><th key={i} style={{padding:'0.8rem 1rem',textAlign:i===0?'left':'center',fontSize:11,fontWeight:700,color:'#67e8f9',textTransform:'uppercase',letterSpacing:'0.08em'}}>{h}</th>)}
        </tr></thead>
        <tbody>{s.table.rows.map((r,i)=><motion.tr key={i} initial={{opacity:0,x:-15}} animate={{opacity:1,x:0}} transition={{delay:0.3+i*0.06}} style={{borderBottom:'1px solid rgba(255,255,255,0.04)',background:i%2===0?'rgba(255,255,255,0.015)':'transparent'}}>
          {r.map((c,j)=><td key={j} style={{padding:'0.65rem 1rem',textAlign:j===0?'left':'center',fontSize:j===0?12:14,fontWeight:j===0?600:800,color:j===0?'#d1d5db':c.startsWith('(')?'#f87171':rowColors[i]}}>{c}</td>)}
        </motion.tr>)}</tbody>
      </table>
    </motion.div>
  );
}

export function ChartSlide({s}) {
  const max=600;
  return (
    <div style={{width:'100%',display:'flex',flexDirection:'column',gap:'1.5rem'}}>
      {s.bars.map((b,i)=><motion.div key={i} {...a(0.2+i*0.15)} style={{display:'grid',gridTemplateColumns:'80px 1fr',gap:'1rem',alignItems:'center'}}>
        <span style={{fontSize:13,fontWeight:700,color:'#e5e7eb',textAlign:'right'}}>{b.year}</span>
        <div style={{display:'flex',flexDirection:'column',gap:6}}>
          <div style={{display:'flex',alignItems:'center',gap:8}}><motion.div initial={{width:0}} animate={{width:`${(b.revenue/max)*100}%`}} transition={{delay:0.5+i*0.2,duration:0.8}} style={{height:28,background:'linear-gradient(90deg,#00f2fe,#4facfe)',borderRadius:6}}/><span style={{fontSize:11,fontWeight:700,color:'#00f2fe'}}>{b.revenue}M</span></div>
          <div style={{display:'flex',alignItems:'center',gap:8}}><motion.div initial={{width:0}} animate={{width:`${(Math.abs(b.ebitda)/max)*100}%`}} transition={{delay:0.6+i*0.2,duration:0.8}} style={{height:20,background:b.ebitda>=0?'linear-gradient(90deg,#10B981,#4ade80)':'linear-gradient(90deg,#ef4444,#f87171)',borderRadius:4}}/><span style={{fontSize:10,fontWeight:700,color:b.ebitda>=0?'#4ade80':'#f87171'}}>{b.ebitda}M</span></div>
          <div style={{display:'flex',alignItems:'center',gap:8}}><motion.div initial={{width:0}} animate={{width:`${(Math.abs(b.net)/max)*100}%`}} transition={{delay:0.7+i*0.2,duration:0.8}} style={{height:16,background:b.net>=0?'linear-gradient(90deg,#4ade80,#22d3ee)':'linear-gradient(90deg,#f97316,#fb923c)',borderRadius:4}}/><span style={{fontSize:10,fontWeight:600,color:b.net>=0?'#22d3ee':'#fb923c'}}>{b.net}M</span></div>
        </div>
      </motion.div>)}
      <div style={{display:'flex',gap:'1.5rem',justifyContent:'center',marginTop:'0.5rem'}}>
        {[{c:'#00f2fe',l:'Revenue'},{c:'#4ade80',l:'EBITDA'},{c:'#fb923c',l:'Net Profit'}].map((x,i)=><div key={i} style={{display:'flex',alignItems:'center',gap:6}}><div style={{width:10,height:10,borderRadius:3,background:x.c}}/><span style={{fontSize:10,color:'#9ca3af'}}>{x.l}</span></div>)}
      </div>
    </div>
  );
}

export function JcurveSlide({s}) {
  return (
    <div style={{width:'100%'}}>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'1rem',marginBottom:'1.5rem'}}>
        {s.phases.map((p,i)=><motion.div key={i} initial={{opacity:0,y:25}} animate={{opacity:1,y:0}} transition={{delay:0.2+i*0.15,type:'spring'}} style={{background:'rgba(255,255,255,0.03)',border:`1px solid ${p.color}30`,borderTop:`4px solid ${p.color}`,borderRadius:14,padding:'1.5rem',textAlign:'center'}}>
          <div style={{width:44,height:44,borderRadius:'50%',background:`${p.color}15`,display:'flex',alignItems:'center',justifyContent:'center',color:p.color,margin:'0 auto 0.8rem'}}>{I(p.icon,22)}</div>
          <p style={{fontSize:10,textTransform:'uppercase',color:p.color,fontWeight:700,letterSpacing:'0.08em'}}>{p.period}</p>
          <h4 style={{fontSize:14,fontWeight:800,marginTop:4,marginBottom:6}}>{p.phase}</h4>
          <p style={{fontSize:11,color:'#9ca3af',lineHeight:1.4}}>{p.status}</p>
        </motion.div>)}
      </div>
      <motion.div {...a(0.6)} style={{background:'rgba(250,204,21,0.06)',border:'1px solid rgba(250,204,21,0.2)',borderRadius:12,padding:'1rem',textAlign:'center'}}>
        <p style={{fontSize:12,color:'#facc15',fontWeight:600,fontStyle:'italic'}}>💡 {s.insight}</p>
      </motion.div>
    </div>
  );
}
