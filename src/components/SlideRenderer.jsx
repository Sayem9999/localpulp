import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

const I = (name, size=24) => { const C = Icons[name]; return C ? <C size={size}/> : null; };
const anim = (d=0) => ({ initial:{opacity:0,y:15}, animate:{opacity:1,y:0}, transition:{delay:d,duration:0.5} });

export default function SlideRenderer({ slide: s }) {
  if (s.type === 'hero') return <HeroSlide s={s}/>;
  if (s.type === 'pipeline') return <PipelineSlide s={s}/>;
  if (s.type === 'split') return <SplitSlide s={s}/>;
  if (s.type === 'data') return <DataSlide s={s}/>;
  return <ContentSlide s={s}/>;
}

function HeroSlide({s}) {
  if (s.id === 12) return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',height:'100%',position:'relative',zIndex:10}}>
      <motion.div animate={{scale:[1,1.05,1]}} transition={{duration:4,repeat:Infinity}}>
        <h2 style={{fontSize:'4.5rem',fontWeight:900,letterSpacing:'-0.05em'}}>{s.title}</h2>
        <div style={{height:6,width:160,background:'linear-gradient(90deg,#00f2fe,#10B981)',margin:'1rem auto',borderRadius:99}}/>
      </motion.div>
      <p style={{fontSize:'1.25rem',color:'#9ca3af',marginTop:'2rem',textTransform:'uppercase',letterSpacing:'0.15em'}}>{s.tagline}</p>
    </div>
  );
  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',height:'100%',paddingTop:'2rem',position:'relative',zIndex:10}}>
      <motion.div {...anim(0.3)} style={{textAlign:'center',background:'rgba(0,0,0,0.6)',padding:'3rem',borderRadius:'1.5rem',backdropFilter:'blur(20px)',border:'1px solid rgba(255,255,255,0.08)',display:'flex',flexDirection:'column',alignItems:'center',maxWidth:800}}>
        <motion.img src="/localpulp/logo.png" alt="Logo" style={{width:80,height:80,borderRadius:16,marginBottom:'1.5rem',boxShadow:'0 0 30px rgba(0,242,254,0.3)',border:'1px solid rgba(255,255,255,0.1)'}} animate={{y:[0,-8,0]}} transition={{duration:4,repeat:Infinity}}/>
        <div style={{display:'inline-block',padding:'0.35rem 1rem',borderRadius:99,background:'rgba(0,242,254,0.12)',border:'1px solid rgba(0,242,254,0.4)',color:'#67e8f9',fontSize:11,fontWeight:700,letterSpacing:'0.15em',textTransform:'uppercase',marginBottom:'1rem'}}>{s.badge}</div>
        <h1 style={{fontSize:'4rem',fontWeight:900,background:'linear-gradient(135deg,#fff,#e5e7eb,#9ca3af)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',letterSpacing:'-0.05em'}}>{s.title}</h1>
        <p style={{fontSize:'1.2rem',color:'#22d3ee',fontWeight:600,letterSpacing:'0.15em',textTransform:'uppercase',marginTop:'0.75rem'}}>{s.tagline}</p>
        <div style={{marginTop:'2.5rem',display:'grid',gridTemplateColumns:'repeat(5,1fr)',gap:'0.75rem',width:'100%'}}>
          {s.team?.map((m,i)=>(<motion.div key={i} {...anim(0.8+i*0.1)} style={{background:'rgba(255,255,255,0.04)',padding:'0.75rem',borderRadius:10,border:'1px solid rgba(255,255,255,0.06)'}}>
            <p style={{fontSize:9,textTransform:'uppercase',color:'#6b7280',marginBottom:4}}>Speaker {i+1}</p>
            <p style={{fontSize:11,fontWeight:700,color:'#e5e7eb'}}>{m.n}</p>
            <p style={{fontSize:9,color:'rgba(6,182,212,0.5)',textTransform:'uppercase',marginTop:4}}>{m.r}</p>
          </motion.div>))}
        </div>
        <div style={{width:'100%',height:1,background:'linear-gradient(90deg,transparent,#374151,transparent)',margin:'1rem 0'}}/>
        <p style={{fontSize:12,color:'#9ca3af',textTransform:'uppercase',letterSpacing:'0.1em'}}>{s.location}</p>
      </motion.div>
    </div>
  );
}

function SplitSlide({s}) {
  return (
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1.5rem',height:'100%'}}>
      <div style={{display:'flex',flexDirection:'column',gap:'1.5rem'}}>
        <motion.div {...anim(0.1)} className="card" style={{borderLeft:'4px solid #ef4444',flex:1,display:'flex',flexDirection:'column',justifyContent:'center'}}>
          <h4 style={{fontWeight:900,fontSize:'1.4rem',color:'#f87171',marginBottom:'0.75rem',display:'flex',alignItems:'center',gap:10}}>{I(s.left.icon,24)} {s.left.heading}</h4>
          <p style={{color:'#d1d5db',marginBottom:'1rem',lineHeight:1.6,fontSize:'0.9rem'}}>{s.left.text}</p>
          <div style={{display:'flex',flexDirection:'column',gap:8}}>
            {s.left.bullets.map((b,i)=>(<div key={i} style={{display:'flex',alignItems:'center',gap:10,fontSize:13,color:'#9ca3af'}}><div style={{width:8,height:8,borderRadius:'50%',background:'rgba(239,68,68,0.4)'}}/>{b}</div>))}
          </div>
        </motion.div>
        <motion.div {...anim(0.3)} className="card" style={{background:'linear-gradient(135deg,rgba(8,145,178,0.12),transparent)',borderColor:'rgba(6,182,212,0.25)',flex:1,display:'flex',flexDirection:'column',justifyContent:'center'}}>
          <h4 style={{fontWeight:900,fontSize:'1.4rem',color:'#22d3ee',marginBottom:'0.75rem',display:'flex',alignItems:'center',gap:10}}>{I(s.right.icon,24)} {s.right.heading}</h4>
          <p style={{color:'#d1d5db',marginBottom:'1rem',lineHeight:1.6,fontSize:'0.9rem'}}>{s.right.text}</p>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'0.75rem'}}>
            {s.right.stats.map((st,i)=>(<div key={i} style={{background:'rgba(0,0,0,0.3)',padding:'1rem',borderRadius:12,border:'1px solid rgba(255,255,255,0.05)'}}>
              <p style={{fontSize:'1.5rem',fontWeight:900,color:i===0?'#4ade80':'#22d3ee'}}>{st.val}</p>
              <p style={{fontSize:10,textTransform:'uppercase',color:'#6b7280'}}>{st.label}</p>
            </div>))}
          </div>
        </motion.div>
      </div>
      <motion.div {...anim(0.4)} style={{borderRadius:16,overflow:'hidden',border:'1px solid rgba(255,255,255,0.08)',position:'relative'}}>
        <img src={s.image} alt="" style={{width:'100%',height:'100%',objectFit:'cover',opacity:0.85}}/>
        <div style={{position:'absolute',inset:0,background:'linear-gradient(180deg,transparent 50%,rgba(0,0,0,0.7) 100%)',borderRadius:16}}/>
      </motion.div>
    </div>
  );
}

function PipelineSlide({s}) {
  return (
    <div style={{display:'flex',flexDirection:'column',height:'100%'}}>
      <motion.div {...anim(0.1)} style={{width:'100%',height:180,borderRadius:16,overflow:'hidden',marginBottom:'1.5rem',position:'relative',border:'1px solid rgba(255,255,255,0.08)'}}>
        <img src={s.image} alt="" style={{width:'100%',height:'100%',objectFit:'cover',opacity:0.55}}/>
        <div style={{position:'absolute',inset:0,background:'linear-gradient(90deg,rgba(0,0,0,0.8) 0%,rgba(0,0,0,0.3) 50%,transparent 100%)',display:'flex',alignItems:'center',padding:'0 2rem'}}>
          <div><h3 style={{fontSize:'1.5rem',fontWeight:900,color:'#fff'}}>State-of-the-Art Production</h3><p style={{color:'#22d3ee',fontSize:13,fontWeight:700,textTransform:'uppercase',letterSpacing:'0.15em'}}>Continuous Bio-Digestion Plant</p></div>
        </div>
      </motion.div>
      <div className="pipeline-track" style={{flex:1,alignItems:'center'}}>
        {s.steps.map((st,i)=>(
          <motion.div key={i} {...anim(0.3+i*0.12)} className="pipe-node">
            <div className="pipe-icon" style={st.highlight?{background:'rgba(16,185,129,0.2)',borderColor:'#10B981'}:{}}>
              {I(st.icon, 22)}
            </div>
            <h4 style={{fontWeight:700,fontSize:12,marginBottom:4,color:st.highlight?'#4ade80':'#fff'}}>{i+1}. {st.title}</h4>
            <p style={{fontSize:10,color:'#9ca3af',lineHeight:1.4}}>{st.desc}</p>
            {st.highlight && <div style={{marginTop:6,fontSize:8,textTransform:'uppercase',fontWeight:700,color:'#22c55e',background:'rgba(34,197,94,0.1)',padding:'2px 8px',borderRadius:4}}>DoE Compliant</div>}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function DataSlide({s}) {
  if (s.capex) return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',height:'100%',textAlign:'center'}}>
      <motion.div {...anim(0.2)} className="stat-ring animate-glow" style={{marginBottom:'2rem'}}>
        <Icons.DollarSign size={36} style={{color:'#22d3ee',marginBottom:6}}/>
        <p style={{fontSize:'2.5rem',fontWeight:900}}>{s.capex.val}</p>
        <p style={{fontSize:11,textTransform:'uppercase',fontWeight:700,color:'#06b6d4'}}>{s.capex.unit}</p>
      </motion.div>
      <p style={{color:'#9ca3af',fontSize:14,marginBottom:'2rem'}}>{s.capex.usd}</p>
      <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'1rem',width:'100%',maxWidth:700}}>
        {s.allocation.map((a,i)=>(<motion.div key={i} {...anim(0.4+i*0.1)} className="card" style={{textAlign:'center'}}>
          <div style={{width:'100%',height:6,borderRadius:3,background:'rgba(255,255,255,0.05)',marginBottom:12,overflow:'hidden'}}>
            <motion.div initial={{width:0}} animate={{width:`${a.pct}%`}} transition={{delay:0.8+i*0.15,duration:0.8}} style={{height:'100%',borderRadius:3,background:a.color}}/>
          </div>
          <p style={{fontSize:'1.5rem',fontWeight:900}}>{a.pct}%</p>
          <p style={{fontSize:11,color:'#9ca3af',marginTop:4}}>{a.label}</p>
        </motion.div>))}
      </div>
    </div>
  );
  return (
    <div style={{height:'100%'}}>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'1rem',marginBottom:'1.5rem'}}>
        {s.years.map((y,i)=>{ const colors={red:'#f87171',blue:'#60a5fa',green:'#4ade80'}; const bgc={red:'rgba(248,113,113,0.08)',blue:'rgba(96,165,250,0.06)',green:'rgba(74,222,128,0.06)'}; return (
          <motion.div key={i} {...anim(0.1+i*0.15)} className="card" style={{textAlign:'center',borderTop:`4px solid ${colors[y.statusColor]}`}}>
            <p style={{fontSize:11,textTransform:'uppercase',color:colors[y.statusColor],marginBottom:4}}>{y.yr} ({y.cap} Cap.)</p>
            <p style={{fontSize:'2rem',fontWeight:900}}>{y.rev}</p>
            <p style={{fontSize:10,color:'#6b7280',marginTop:4}}>{y.mt} Produced</p>
            <p style={{fontSize:10,color:colors[y.statusColor],fontWeight:700,marginTop:8,background:bgc[y.statusColor],padding:'4px 8px',borderRadius:6}}>{y.status}</p>
          </motion.div>
        )})}
      </div>
      <motion.div {...anim(0.5)} className="card" style={{display:'flex',justifyContent:'space-between',alignItems:'center',background:'rgba(0,0,0,0.3)'}}>
        <div><h4 style={{fontWeight:700,fontSize:'1.1rem'}}>The Bottom Line</h4><p style={{fontSize:13,color:'#9ca3af',marginTop:4}}>Decreasing fixed cost burden per unit drives profitability.</p></div>
        <div style={{textAlign:'right'}}><p style={{fontSize:10,textTransform:'uppercase',color:'#6b7280',marginBottom:4}}>Projected Payback</p><p style={{fontSize:'2rem',fontWeight:900,color:'#22d3ee'}}>{s.payback}</p></div>
      </motion.div>
    </div>
  );
}

function ContentSlide({s}) {
  return (
    <div style={{display:'flex',flexDirection:'column',height:'100%',gap:'1rem'}}>
      {s.fourPs && <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'0.75rem'}}>
        {s.fourPs.map((p,i)=>(<motion.div key={i} {...anim(i*0.1)} className="card"><p style={{fontWeight:900,color:'#22d3ee',marginBottom:6}}>{p.title}</p><p style={{fontSize:12,color:'#d1d5db'}}>{p.desc}</p></motion.div>))}
      </div>}

      {s.trialStrategy && <div style={{display:'grid',gridTemplateColumns:'3fr 2fr',gap:'1rem',flex:1}}>
        <motion.div {...anim(0.3)} className="card" style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',textAlign:'center',background:'linear-gradient(135deg,rgba(30,64,175,0.12),rgba(126,34,206,0.08))'}}>
          <Icons.Target size={28} style={{color:'#60a5fa',marginBottom:12}}/>
          <h4 style={{fontWeight:700,fontSize:'1.1rem',marginBottom:8}}>The Trial Run Strategy</h4>
          <p style={{fontSize:13,color:'#d1d5db',maxWidth:400,marginBottom:12}}>{s.trialStrategy}</p>
          <div style={{padding:'0.5rem 1rem',background:'rgba(34,197,94,0.08)',color:'#4ade80',fontSize:11,fontWeight:700,borderRadius:99,border:'1px solid rgba(34,197,94,0.2)'}}>ESG: "Made with Bangladesh Fibers"</div>
        </motion.div>
        <motion.div {...anim(0.5)} style={{borderRadius:16,overflow:'hidden',border:'1px solid rgba(255,255,255,0.08)',position:'relative'}}>
          <img src={s.image} alt="" style={{width:'100%',height:'100%',objectFit:'cover',opacity:0.8}}/>
          <div style={{position:'absolute',bottom:0,left:0,right:0,padding:'1rem',background:'linear-gradient(transparent,rgba(0,0,0,0.9))'}}>
            <p style={{fontSize:13,fontWeight:700}}>Hygiene-Grade Fluff Pulp</p>
            <p style={{fontSize:10,color:'#22d3ee',textTransform:'uppercase'}}>Premium Softness & Absorbency</p>
          </div>
        </motion.div>
      </div>}

      {s.highlight && !s.fourPs && <div style={{display:'grid',gridTemplateColumns:'1fr 2fr',gap:'1rem'}}>
        <motion.div {...anim(0.1)} className="card" style={{borderLeft:'4px solid #06b6d4',display:'flex',flexDirection:'column',justifyContent:'center'}}>
          <p style={{fontSize:10,textTransform:'uppercase',color:'#6b7280',fontWeight:700,marginBottom:4}}>{s.highlight.label}</p>
          <p style={{fontSize:'2.5rem',fontWeight:900}}>{s.highlight.val} <span style={{fontSize:14,color:'#6b7280'}}>{s.highlight.unit||''}</span></p>
          <p style={{fontSize:12,color:'#22d3ee',marginTop:4}}>{s.highlight.desc}</p>
        </motion.div>
        <div style={{display:'flex',flexDirection:'column',gap:'0.75rem'}}>
          {s.points?.map((p,i)=>(<motion.div key={i} {...anim(0.2+i*0.1)} className="card"><p style={{fontWeight:700,color:'#fff',marginBottom:4}}>{p.title}</p><p style={{fontSize:12,color:'#9ca3af'}}>{p.desc}</p></motion.div>))}
          {s.margin && <motion.div {...anim(0.3)} className="card" style={{background:'rgba(34,197,94,0.06)',borderColor:'rgba(34,197,94,0.2)'}}>
            <p style={{fontSize:10,textTransform:'uppercase',color:'rgba(34,197,94,0.7)',fontWeight:700,marginBottom:4}}>Target Gross Margin</p>
            <p style={{fontSize:'2.5rem',fontWeight:900,color:'#4ade80'}}>{s.margin.target}</p>
            <p style={{fontSize:12,color:'#9ca3af',marginTop:4}}>{s.margin.label}</p>
          </motion.div>}
          {s.spread && <motion.div {...anim(0.4)} className="card" style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
            <div style={{textAlign:'center'}}><p style={{fontSize:10,textTransform:'uppercase',color:'#6b7280'}}>{s.spread.left.label}</p><p style={{fontSize:'1.1rem',fontWeight:700,color:'#4ade80'}}>{s.spread.left.val}</p><p style={{fontSize:10,color:'#9ca3af'}}>{s.spread.left.note}</p></div>
            <div style={{flex:1,margin:'0 1rem',height:3,background:'linear-gradient(90deg,#4ade80,#ef4444)',borderRadius:3,position:'relative'}}>
              <div style={{position:'absolute',top:-14,left:'50%',transform:'translateX(-50%)',background:'#1f2937',fontSize:9,padding:'2px 8px',borderRadius:99,border:'1px solid #374151',fontWeight:700}}>PROFIT</div>
            </div>
            <div style={{textAlign:'center'}}><p style={{fontSize:10,textTransform:'uppercase',color:'#6b7280'}}>{s.spread.right.label}</p><p style={{fontSize:'1.1rem',fontWeight:700,color:'#f87171'}}>{s.spread.right.val}</p><p style={{fontSize:10,color:'#9ca3af'}}>{s.spread.right.note}</p></div>
          </motion.div>}
        </div>
      </div>}

      {s.marketStats && <>
        <motion.div {...anim(0.1)} style={{borderRadius:16,overflow:'hidden',height:180,position:'relative',border:'1px solid rgba(255,255,255,0.08)'}}>
          <img src={s.image} alt="" style={{width:'100%',height:'100%',objectFit:'cover',opacity:0.5}}/>
          <div style={{position:'absolute',inset:0,background:'linear-gradient(90deg,rgba(0,0,0,0.85),rgba(0,0,0,0.3))',display:'flex',alignItems:'center',padding:'0 2rem'}}>
            <div><h3 style={{fontSize:'1.5rem',fontWeight:900}}>Bangladesh Hygiene Sector</h3><p style={{color:'#22d3ee',fontSize:13,fontWeight:600}}>Rapid urbanization driving 15% CAGR growth</p></div>
          </div>
        </motion.div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'0.75rem',flex:1}}>
          {s.marketStats.map((m,i)=>(<motion.div key={i} {...anim(0.3+i*0.1)} className="card" style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',textAlign:'center'}}>
            <p style={{fontSize:'2rem',fontWeight:900,color:['#22d3ee','#4ade80','#fb923c','#c084fc'][i]}}>{m.val}</p>
            <p style={{fontSize:11,color:'#9ca3af',marginTop:6}}>{m.label}</p>
          </motion.div>))}
        </div>
      </>}

      {s.org && <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',height:'100%'}}>
        <motion.div {...anim(0.1)} className="arch-box highlight" style={{padding:'1rem 2rem',marginBottom:'2rem'}}>
          <p style={{fontSize:10,textTransform:'uppercase',color:'#67e8f9',fontWeight:700,marginBottom:4}}>{s.org.top.subtitle}</p>
          <p style={{fontSize:'1.2rem',fontWeight:900}}>{s.org.top.title}</p>
        </motion.div>
        <div style={{width:1,height:40,background:'#374151',marginBottom:'0.5rem'}}/>
        <div style={{width:'60%',height:1,background:'#374151',marginBottom:'0.5rem'}}/>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'1.5rem',width:'80%'}}>
          {s.org.pillars.map((p,i)=>(<motion.div key={i} {...anim(0.3+i*0.1)} className="arch-box">
            {I(p.icon,20)}
            <p style={{fontSize:10,textTransform:'uppercase',color:'#9ca3af',fontWeight:700,margin:'8px 0 4px'}}>{p.label} Pillar</p>
            <p style={{fontSize:14,fontWeight:700}}>{p.title}</p>
            <p style={{fontSize:10,color:'#6b7280',marginTop:4}}>{p.desc}</p>
          </motion.div>))}
        </div>
      </div>}

      {s.risks && <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1rem',height:'100%'}}>
        <div style={{display:'flex',flexDirection:'column',gap:'1rem'}}>
          {s.risks.map((r,i)=>(<motion.div key={i} {...anim(0.1+i*0.15)} className="card" style={{borderLeft:`4px solid ${r.color==='orange'?'#f97316':'#ef4444'}`}}>
            <h4 style={{fontWeight:700,display:'flex',alignItems:'center',gap:8,marginBottom:6}}>{I(r.icon,18)} {r.title}</h4>
            <p style={{fontSize:12,color:'#d1d5db'}}>{r.desc}</p>
          </motion.div>))}
        </div>
        <motion.div {...anim(0.3)} className="card" style={{background:'rgba(249,115,22,0.06)',borderColor:'rgba(249,115,22,0.2)',display:'flex',flexDirection:'column',justifyContent:'center'}}>
          <h4 style={{fontWeight:900,fontSize:'1.2rem',color:'#fb923c',marginBottom:'1rem'}}>{s.contingency.title}</h4>
          <div style={{background:'rgba(0,0,0,0.3)',padding:'1rem',borderRadius:12,border:'1px solid rgba(255,255,255,0.05)',marginBottom:'1rem'}}>
            <p style={{fontSize:13,color:'#d1d5db',lineHeight:1.6}}>{s.contingency.text}</p>
          </div>
          <div style={{display:'flex',alignItems:'center',gap:8,fontSize:13,color:'#9ca3af'}}>
            <span style={{padding:'4px 12px',background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:6}}>{s.contingency.flow[0]}</span>
            <Icons.ArrowRight size={16}/>
            <span style={{padding:'4px 12px',background:'rgba(234,179,8,0.15)',color:'#eab308',border:'1px solid rgba(234,179,8,0.25)',borderRadius:6,fontWeight:700}}>{s.contingency.flow[1]}</span>
          </div>
          <p style={{fontSize:11,color:'#6b7280',marginTop:'1rem',fontStyle:'italic'}}>"{s.contingency.note}"</p>
        </motion.div>
      </div>}
    </div>
  );
}
