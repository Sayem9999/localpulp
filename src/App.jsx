import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, 
  ChevronRight, 
  Target, 
  TrendingUp, 
  Leaf, 
  ShieldCheck, 
  DollarSign, 
  BarChart3, 
  Users, 
  Cpu, 
  AlertTriangle,
  FileText,
  Briefcase,
  Layers,
  ArrowRight,
  Factory,
  RefreshCw,
  Package,
  Droplet
} from 'lucide-react';
import PulpModel from './components/PulpModel';

const slides = [
  // SPEAKER 1: Pitch Problem & Solution
  {
    id: 1,
    speaker: 1,
    type: 'hero',
    notes: "Good morning respected faculty. Today, our team is presenting CelluPulp BD—a strategic import substitution venture designed specifically for Bangladesh's hygiene sector.",
    content: (
      <div className="hero-slide relative z-10 flex flex-col items-center justify-center h-full pt-10">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center bg-black/60 p-12 rounded-3xl backdrop-blur-xl border border-white/10 flex flex-col items-center shadow-2xl"
        >
          <motion.img 
             src="/logo.png" 
             alt="CelluPulp Logo" 
             className="w-24 h-24 mb-6 rounded-2xl shadow-[0_0_30px_rgba(0,242,254,0.3)] border border-white/10"
             animate={{ y: [0, -10, 0] }}
             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="mb-4 inline-block px-4 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-500/50 text-cyan-300 text-xs font-bold tracking-widest uppercase">
            6,000 TPY Pilot Facility
          </div>
          <h1 className="hero-title uppercase tracking-tighter text-6xl md:text-7xl font-black bg-gradient-to-br from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">CelluPulp BD</h1>
          <p className="text-xl md:text-2xl text-cyan-400 font-semibold tracking-[0.2em] uppercase mt-4">
            Strategic Import Substitution
          </p>
          <div className="mt-12 flex flex-col items-center gap-6">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-left">
              {[
                { n: "Md Sayem Sarkar", r: "Founder & MD" },
                { n: "Operations Lead", r: "Chemical Engineering" },
                { n: "Head of B2B Sales", r: "Revenue Pillar" },
                { n: "Supply Chain Dir.", r: "Logistics" },
                { n: "QC Lab Director", r: "Technical Validation" }
              ].map((member, idx) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + (idx * 0.1) }}
                  key={idx} 
                  className="bg-white/5 p-3 rounded-lg border border-white/5 hover:border-cyan-500/50 transition-colors"
                >
                  <p className="text-[10px] uppercase text-gray-500 mb-1">Speaker {idx + 1}</p>
                  <p className="text-xs font-bold text-gray-200 truncate">{member.n}</p>
                  <p className="text-[9px] text-cyan-500/60 uppercase font-mono mt-1">{member.r}</p>
                </motion.div>
              ))}
            </div>
            <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-2"></div>
            <p className="text-sm text-gray-400 uppercase tracking-widest">Location: BEZA Zone, Dhaka Division</p>
          </div>
        </motion.div>
      </div>
    )
  },
  {
    id: 2,
    speaker: 1,
    title: 'The Problem & Our Solution',
    subtitle: 'Breaking the $80M Import Dependency',
    notes: "The FMCG sector for diapers and sanitary pads is booming, but there is a massive bottleneck. Every year, local manufacturers import up to 80,000 Metric Tons of wood fluff pulp. That’s $80 million dollars draining out of our economy. Our solution is CelluPulp BD. Zero forex risk, and lead times cut from 90 days to just 48 hours.",
    content: (
      <div className="grid-2 h-full gap-8">
        <div className="card border-l-4 border-l-red-500 flex flex-col justify-center">
          <h4 className="font-black text-2xl text-red-400 mb-4 flex items-center gap-3">
            <AlertTriangle size={28} /> The Problem
          </h4>
          <p className="text-gray-300 mb-6 leading-relaxed">
            FMCG hygiene sectors (diapers, pads) are booming, but completely dependent on importing <b>60,000 - 80,000 MT</b> of wood fluff pulp annually.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-sm text-gray-400">
              <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
              <span>Crippling Dollar Liquidity Crisis</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-400">
              <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
              <span>Massive LC Margins destroying cash flow</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-400">
              <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
              <span>60-90 Day Oceanic Lead Times</span>
            </div>
          </div>
        </div>
        
        <div className="card bg-gradient-to-br from-cyan-900/20 to-transparent border-cyan-500/30 flex flex-col justify-center">
          <h4 className="font-black text-2xl text-cyan-400 mb-4 flex items-center gap-3">
            <ShieldCheck size={28} /> The Solution
          </h4>
          <p className="text-gray-300 mb-6 leading-relaxed">
            CelluPulp BD establishes a local <b>6,000 TPY Pilot Plant</b> producing hygiene-grade fluff pulp from highly renewable native jute and bamboo.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-black/30 p-4 rounded-xl border border-white/5">
              <p className="text-2xl font-bold text-green-400">0%</p>
              <p className="text-[10px] uppercase text-gray-500">Forex Risk</p>
            </div>
            <div className="bg-black/30 p-4 rounded-xl border border-white/5">
              <p className="text-2xl font-bold text-cyan-400">48 hrs</p>
              <p className="text-[10px] uppercase text-gray-500">Lead Time</p>
            </div>
          </div>
        </div>
      </div>
    )
  },

  // SPEAKER 2: Business Model & Revenue Model
  {
    id: 3,
    speaker: 2,
    title: 'Business Strategy',
    subtitle: 'The "Secondary Supplier" Model',
    notes: "We are taking a pragmatic approach to market entry. We aren't trying to monopolize the market on day one. We are targeting a highly achievable 8-10% market share. Our B2B strategy is twofold: For Tier 2 regional brands, we will be their Primary Supplier. For massive Tier 1 conglomerates, we offer ourselves as a strategic Secondary Supplier.",
    content: (
      <div className="flex flex-col h-full">
        <div className="grid grid-cols-3 gap-6 mb-8">
           <div className="card col-span-1 border-t-4 border-t-blue-500">
              <p className="text-[10px] uppercase text-gray-500 font-bold mb-2">Target Market Share</p>
              <p className="text-4xl font-black text-white">8-10%</p>
              <p className="text-sm text-gray-400 mt-2">Pragmatic, low-resistance market entry.</p>
           </div>
           <div className="card col-span-2 bg-white/5">
              <h4 className="font-bold text-blue-400 mb-2 flex items-center gap-2"><Target size={18}/> B2B Positioning</h4>
              <p className="text-sm text-gray-300 mb-4">We are not trying to replace global giants on day one. Our dual-pronged approach guarantees volume:</p>
              <ul className="text-sm space-y-2 text-gray-400">
                <li><b className="text-white">Tier 2 Regional Brands:</b> We act as their Primary Supplier.</li>
                <li><b className="text-white">Tier 1 Conglomerates:</b> We act as a strategic, risk-free Secondary Supplier for supply chain security.</li>
              </ul>
           </div>
        </div>
      </div>
    )
  },
  {
    id: 4,
    speaker: 2,
    title: 'Revenue & Margin',
    subtitle: 'The Spread: How Profit is Generated',
    notes: "How do we generate profit? It’s all in the margin spread. Because we source local agri-feedstock, our Cost of Goods Sold is ultra-low and strictly in Taka. Imported pulp relies on expensive USD and volatile global freight. We price at 100,000 BDT/MT—20% cheaper than imports—and secure 35-40% gross margin.",
    content: (
      <div className="grid-2 h-full gap-8">
        <div className="space-y-6">
          <div className="card border-l-4 border-l-cyan-500">
            <p className="text-xs uppercase text-gray-500 font-bold mb-1">Pricing Strategy</p>
            <p className="text-3xl font-black text-white mb-1">100,000 <span className="text-lg font-normal text-gray-500">BDT/MT</span></p>
            <p className="text-sm text-cyan-400">Flat rate in local currency. 15-25% cheaper than landed imports.</p>
          </div>
          <div className="card bg-green-500/10 border-green-500/30">
            <p className="text-xs uppercase text-green-500/80 font-bold mb-1">Target Gross Margin</p>
            <p className="text-4xl font-black text-green-400">35-40%</p>
            <p className="text-sm text-gray-400 mt-2">Achieved at optimal capacity.</p>
          </div>
        </div>
        
        <div className="card flex flex-col justify-center relative overflow-hidden group">
           <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-0"></div>
           <div className="relative z-10">
              <h4 className="font-bold text-xl mb-6 text-center">The Margin Spread</h4>
              
              <div className="flex items-center justify-between mb-4">
                <div className="text-center w-1/3">
                   <p className="text-[10px] uppercase text-gray-500">Agri-Feedstock</p>
                   <p className="text-lg font-bold text-green-400">Ultra-Low</p>
                   <p className="text-xs text-gray-400">Taka-based COGS</p>
                </div>
                
                <div className="w-1/3 flex justify-center">
                   <div className="w-full h-1 bg-gradient-to-r from-green-500 to-red-500 rounded-full relative">
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gray-800 text-[10px] px-2 py-1 rounded-full border border-gray-600 font-bold">
                        PROFIT
                      </div>
                   </div>
                </div>
                
                <div className="text-center w-1/3">
                   <p className="text-[10px] uppercase text-gray-500">Imported Pulp</p>
                   <p className="text-lg font-bold text-red-400">Ultra-High</p>
                   <p className="text-xs text-gray-400">USD + Freight</p>
                </div>
              </div>
              <p className="text-xs text-gray-400 text-center mt-6 italic">
                "Insulated from global shipping spikes, our low raw material costs generate profit even when priced 20% below competitors."
              </p>
           </div>
        </div>
      </div>
    )
  },

  // SPEAKER 3: Marketing Plan & Operational Flow Chart
  {
    id: 5,
    speaker: 3,
    title: 'Marketing Plan',
    subtitle: 'Go-To-Market (4Ps) & Trial Runs',
    notes: "Primary promotional strategy is 'The Trial Run'. Industrial buyers are risk-averse. To win them over, we subsidize initial trial runs of our pulp on their actual high-speed machines. Once they see our pulp doesn't tear and absorbs perfectly, we convert that trial into a 3-to-5 year off-take contract.",
    content: (
      <div className="flex flex-col h-full">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
           {[
             { title: 'Product', desc: 'ISO 9001/OEKO-TEX compatible non-wood pulp.' },
             { title: 'Price', desc: '100,000 BDT/MT (Insulated from USD fluctuations).' },
             { title: 'Place', desc: 'Direct-to-Manufacturer (D2M) local logistics.' },
             { title: 'Promotion', desc: 'Subsidized Tier 1 Trial Runs & ESG storytelling.' }
           ].map((p, i) => (
             <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: i * 0.15 }}
               key={i} className="card bg-white/5 border-white/10 hover:border-cyan-500/50 transition-colors"
             >
                <p className="font-black text-cyan-400 mb-2">{p.title}</p>
                <p className="text-xs text-gray-300">{p.desc}</p>
             </motion.div>
           ))}
        </div>
        <div className="grid grid-cols-5 gap-6 flex-1">
           <div className="col-span-3 card bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-blue-500/30 flex flex-col justify-center items-center text-center relative overflow-hidden">
             <Target size={32} className="text-blue-400 mb-4" />
             <h4 className="font-bold text-xl mb-2">The Trial Run Strategy</h4>
             <p className="text-sm text-gray-300 max-w-lg mb-4">
               We prove our quality on the buyer's machines. By subsidizing initial trial runs for Tier 1 factories, we eliminate perceived risk, paving the way for <b>3-5 year off-take contracts</b>.
             </p>
             <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="inline-block px-4 py-2 bg-green-500/10 text-green-400 text-xs font-bold rounded-full border border-green-500/20"
             >
               ESG Narrative: "Made with Bangladesh Fibers"
             </motion.div>
           </div>
           <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="col-span-2 rounded-2xl overflow-hidden border border-white/10 relative"
           >
              <img src="/product.png" alt="Hygiene Fluff Pulp" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                 <p className="text-sm font-bold text-white">Hygiene-Grade Fluff Pulp</p>
                 <p className="text-[10px] text-cyan-400 uppercase tracking-wider">Premium Softness & Absorbency</p>
              </div>
           </motion.div>
        </div>
      </div>
    )
  },
  {
    id: 6,
    speaker: 3,
    title: 'Operational Flow',
    subtitle: 'From Farm to Factory (Zero-Liquid Discharge)',
    notes: "We run a continuous bio-digestion plant processing 16.5 MT per day. We aggregate jute and bamboo from local cooperatives, digest it, use TCF bleaching, and bale it. Crucially, we utilize a Zero-Liquid Discharge (ZLD) plant—100% of chemicals are recovered. Zero river pollution.",
    content: (
      <div className="h-full flex flex-col">
        <motion.div 
           initial={{ opacity: 0, y: -20 }}
           animate={{ opacity: 1, y: 0 }}
           className="w-full h-48 rounded-2xl overflow-hidden mb-8 relative border border-white/10"
        >
           <img src="/factory.png" alt="Sustainable Manufacturing Facility" className="w-full h-full object-cover opacity-60" />
           <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent flex items-center p-8">
              <div>
                <h3 className="text-2xl font-black text-white mb-1">State-of-the-Art Production</h3>
                <p className="text-cyan-400 text-sm font-bold uppercase tracking-widest">Continuous Bio-Digestion Plant</p>
              </div>
           </div>
        </motion.div>
        
        <div className="w-full relative flex-1 flex items-center">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-800 -translate-y-1/2 z-0 hidden md:block"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative z-10 w-full">
            {[
              { icon: <Leaf size={24}/>, title: '1. Aggregation', desc: 'Local farmer cooperatives supply chipped jute/bamboo.' },
              { icon: <Factory size={24}/>, title: '2. Digestion', desc: 'Bio-pulping at 16.5 MT/day continuous processing.' },
              { icon: <RefreshCw size={24}/>, title: '3. Bleaching', desc: 'Totally Chlorine-Free (TCF) washing for brightness.' },
              { icon: <Package size={24}/>, title: '4. Dispatch', desc: 'Dried, baled, and shipped direct to buyers.' },
              { icon: <Droplet size={24}/>, title: '5. ZLD Plant', desc: '100% chemical recovery. Zero river pollution.', highlight: true }
            ].map((step, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + (i * 0.15) }}
                key={i} className={`card flex flex-col items-center text-center ${step.highlight ? 'border-green-500 bg-green-500/10' : 'bg-black/80 backdrop-blur-md border-gray-700'}`}>
                <div className={`p-3 rounded-full mb-3 ${step.highlight ? 'bg-green-500/20 text-green-400' : 'bg-cyan-500/20 text-cyan-400'}`}>
                  {step.icon}
                </div>
                <h4 className="font-bold text-sm mb-2">{step.title}</h4>
                <p className="text-[10px] text-gray-400">{step.desc}</p>
                {step.highlight && <div className="mt-2 text-[8px] uppercase font-bold text-green-500 bg-green-500/10 px-2 py-1 rounded">DoE Compliant</div>}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    )
  },

  // SPEAKER 4: Financial Plan, Sales & Growth Forecast
  {
    id: 7,
    speaker: 4,
    title: 'The Investment',
    subtitle: 'CAPEX & Project Funding',
    notes: "Initial CAPEX requirement is between 120 and 150 Crore BDT. Funding is heavily allocated towards the continuous digester machinery and the mandatory ZLD effluent plant, along with Year 1 working capital. Finance via 50/50 mix of Syndicated Debt and Private Equity.",
    content: (
      <div className="flex flex-col h-full justify-center items-center text-center">
        <div className="w-48 h-48 rounded-full border-4 border-cyan-500 flex flex-col items-center justify-center bg-cyan-500/5 shadow-[0_0_50px_rgba(6,182,212,0.15)] mb-8">
           <DollarSign size={40} className="text-cyan-400 mb-2" />
           <p className="text-4xl font-black text-white">120-150</p>
           <p className="text-xs uppercase font-bold text-cyan-500 mt-1">Crore BDT</p>
        </div>
        <h4 className="text-2xl font-bold mb-4">Initial Capital Expenditure</h4>
        <p className="text-gray-400 max-w-lg mb-8">
          Funding is allocated towards the continuous digester machinery, the mandatory Zero-Liquid Discharge (ZLD) plant, and Year 1 operational working capital.
        </p>
        <div className="flex gap-4">
           <div className="px-6 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-bold text-gray-300">
             Syndicated Debt
           </div>
           <div className="px-6 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-bold text-gray-300">
             Private Equity
           </div>
        </div>
      </div>
    )
  },
  {
    id: 8,
    speaker: 4,
    title: '3-Year Growth Forecast',
    subtitle: 'Reaching Optimal Output (Million BDT)',
    notes: "We expect a classic J-Curve. Year 1: 40% capacity, 240M BDT revenue, accounting loss due to depreciation. Year 2: Volume jumps 87%, hit Break-Even. Year 3: 90% capacity, 540M revenue, 134M EBITDA. 4.5-year project payback.",
    content: (
      <div className="h-full">
        <div className="grid grid-cols-3 gap-4 mb-8">
           <div className="card text-center border-t-4 border-t-gray-600">
              <p className="text-xs uppercase text-gray-500 mb-1">Year 1 (40% Cap.)</p>
              <p className="text-2xl font-black text-white">240 M</p>
              <p className="text-[10px] text-gray-500 mt-1">2,400 MT Produced</p>
              <p className="text-[10px] text-red-400 mt-2 font-bold bg-red-400/10 py-1 rounded">Accounting Loss (J-Curve)</p>
           </div>
           <div className="card text-center border-t-4 border-t-blue-500 bg-blue-500/5">
              <p className="text-xs uppercase text-blue-400 mb-1">Year 2 (75% Cap.)</p>
              <p className="text-2xl font-black text-white">450 M</p>
              <p className="text-[10px] text-gray-500 mt-1">4,500 MT Produced</p>
              <p className="text-[10px] text-blue-400 mt-2 font-bold bg-blue-400/10 py-1 rounded">Break-Even Point Reached</p>
           </div>
           <div className="card text-center border-t-4 border-t-green-500 bg-green-500/5">
              <p className="text-xs uppercase text-green-400 mb-1">Year 3 (90% Cap.)</p>
              <p className="text-2xl font-black text-white">540 M</p>
              <p className="text-[10px] text-gray-500 mt-1">5,400 MT Produced</p>
              <p className="text-[10px] text-green-400 mt-2 font-bold bg-green-400/10 py-1 rounded">134M EBITDA Generated</p>
           </div>
        </div>
        <div className="card flex items-center justify-between bg-black/40 border-white/10">
           <div>
             <h4 className="font-bold text-lg">The Bottom Line</h4>
             <p className="text-sm text-gray-400 mt-1">Decreasing fixed cost burden per unit drives strong profitability.</p>
           </div>
           <div className="text-right">
             <p className="text-xs uppercase text-gray-500 mb-1">Projected Payback</p>
             <p className="text-2xl font-black text-cyan-400">4.5 Years</p>
           </div>
        </div>
      </div>
    )
  },

  // SPEAKER 5: Organization Structure, Risk & Contingency
  {
    id: 9,
    speaker: 5,
    title: 'Organization Structure',
    subtitle: 'Lean & Technical Pilot Team',
    notes: "Our organizational structure is lean. The Managing Director handles strategy and capital. Below him are three critical pillars: Plant Operations Manager (Chemical Engineering), Head of B2B Sales, and a Supply Chain Director managing our network of rural farmers.",
    content: (
      <div className="flex flex-col h-full items-center justify-center">
        <div className="w-full max-w-2xl bg-white/5 border border-white/10 rounded-2xl p-8 relative">
           {/* Connecting Lines */}
           <div className="absolute top-20 left-1/2 w-px h-12 bg-gray-700 -translate-x-1/2"></div>
           <div className="absolute top-32 left-1/4 w-1/2 h-px bg-gray-700"></div>
           <div className="absolute top-32 left-1/4 w-px h-8 bg-gray-700"></div>
           <div className="absolute top-32 left-3/4 w-px h-8 bg-gray-700"></div>
           
           <div className="flex justify-center mb-12 relative z-10">
              <div className="bg-cyan-900/50 border border-cyan-500/50 px-6 py-3 rounded-xl text-center shadow-lg">
                 <p className="text-[10px] uppercase text-cyan-300 font-bold mb-1">Strategic Authority</p>
                 <p className="text-lg font-black text-white">Managing Director</p>
              </div>
           </div>
           
           <div className="grid grid-cols-3 gap-6 relative z-10">
              <div className="bg-black/50 border border-gray-600 px-4 py-4 rounded-xl text-center">
                 <Cpu size={20} className="mx-auto text-gray-400 mb-2"/>
                 <p className="text-[10px] uppercase text-gray-400 font-bold mb-1">Technical Pillar</p>
                 <p className="text-sm font-bold text-white leading-tight">Plant Ops Manager</p>
                 <p className="text-[9px] text-gray-500 mt-2">Chief Chem. Eng. (ZLD & Digester)</p>
              </div>
              <div className="bg-black/50 border border-gray-600 px-4 py-4 rounded-xl text-center mt-6">
                 <Briefcase size={20} className="mx-auto text-gray-400 mb-2"/>
                 <p className="text-[10px] uppercase text-gray-400 font-bold mb-1">Revenue Pillar</p>
                 <p className="text-sm font-bold text-white leading-tight">Head of B2B Sales</p>
                 <p className="text-[9px] text-gray-500 mt-2">Contract Negotiations</p>
              </div>
              <div className="bg-black/50 border border-gray-600 px-4 py-4 rounded-xl text-center">
                 <Layers size={20} className="mx-auto text-gray-400 mb-2"/>
                 <p className="text-[10px] uppercase text-gray-400 font-bold mb-1">Logistics Pillar</p>
                 <p className="text-sm font-bold text-white leading-tight">Supply Chain Dir.</p>
                 <p className="text-[9px] text-gray-500 mt-2">Farmer Aggregation</p>
              </div>
           </div>
        </div>
      </div>
    )
  },
  {
    id: 10,
    speaker: 5,
    title: 'Risk & Contingency',
    subtitle: 'Prepared for the Worst-Case Scenario',
    notes: "Biggest speculative risk is technical validation—what if our early batches aren't bright or strong enough? We have a strict 'Plan B'. If a batch fails hygiene specs, we immediately downgrade and liquidate it to the packaging sector. This prevents cash burn while we recalibrate.",
    content: (
      <div className="grid-2 h-full gap-8">
        <div className="space-y-4">
          <div className="card border-l-4 border-l-orange-500">
             <h4 className="font-bold flex items-center gap-2 mb-2"><AlertTriangle size={18} className="text-orange-500"/> Tech Validation Risk</h4>
             <p className="text-xs text-gray-300">Will local non-wood pulp run smoothly on high-speed diaper manufacturing machines without tearing?</p>
          </div>
          <div className="card border-l-4 border-l-red-500">
             <h4 className="font-bold flex items-center gap-2 mb-2"><Droplet size={18} className="text-red-500"/> Operational Risk</h4>
             <p className="text-xs text-gray-300">ZLD plant failure leading to immediate Department of Environment (DoE) shutdown.</p>
          </div>
        </div>
        
        <div className="card bg-orange-900/10 border-orange-500/30 flex flex-col justify-center">
           <h4 className="font-black text-xl text-orange-400 mb-4">The Contingency Plan</h4>
           <div className="bg-black/40 p-4 rounded-xl border border-white/5 mb-4">
              <p className="text-sm text-gray-300 leading-relaxed">
                If initial batches fail hygiene-grade strict tensile or brightness specs, we execute an immediate <b className="text-white">Downgrade & Liquidate</b> protocol.
              </p>
           </div>
           
           <div className="flex items-center gap-2 text-sm text-gray-400">
              <div className="px-3 py-1 bg-white/5 border border-white/10 rounded">Failed Batch</div>
              <ArrowRight size={16} />
              <div className="px-3 py-1 bg-yellow-500/20 text-yellow-500 border border-yellow-500/30 rounded font-bold">Packaging Sector</div>
           </div>
           <p className="text-xs text-gray-500 mt-4 italic">
             "This guarantees variable cost recovery while our engineering team recalibrates the chemical recipe, preserving working capital."
           </p>
        </div>
      </div>
    )
  },
  
  // FINAL SLIDE
  {
    id: 11,
    speaker: 'ALL',
    type: 'hero',
    notes: "CelluPulp BD isn't just a pulp mill; it's an economic shield for local FMCG manufacturers. Thank you for your time. We are now open for any questions.",
    content: (
      <div className="flex flex-col items-center justify-center text-center h-full relative z-10">
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="mb-8"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-2 tracking-tighter">THANK YOU</h2>
          <div className="h-1.5 w-40 bg-cyan-500 mx-auto rounded-full"></div>
        </motion.div>
        <p className="text-xl text-gray-400 mb-12 tracking-wide uppercase font-light">Questions? We are ready for implementation.</p>
      </div>
    )
  }
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [showNotes, setShowNotes] = useState(false);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setDirection(1);
      setCurrentSlide(s => s + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(s => s - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key.toLowerCase() === 'n') setShowNotes(prev => !prev);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95
    })
  };

  return (
    <div className="presentation-container overflow-hidden">
      <div className="progress-bar z-50" style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }} />
      
      {/* 3D Background - Persistent with dynamic reactivity */}
      <PulpModel currentSlide={currentSlide} type={slides[currentSlide].type} />

      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          className="slide-content absolute inset-0 p-8 flex flex-col z-20"
        >
          {slides[currentSlide].type !== 'hero' && (
            <div className="mb-8 pt-8">
              <h1 className="slide-title">{slides[currentSlide].title}</h1>
              <p className="slide-subtitle">{slides[currentSlide].subtitle}</p>
            </div>
          )}
          
          <div className="flex-1 w-full max-w-5xl mx-auto relative">
            {slides[currentSlide].content}
          </div>

          <div className="absolute bottom-6 left-8 text-[10px] text-gray-500 uppercase tracking-widest flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
            <span className="font-bold text-white">SPEAKER {slides[currentSlide].speaker}</span> 
            <span>|</span> 
            <span>{currentSlide + 1} OF {slides.length}</span> 
            <span>—</span> 
            <span>CELLUPULP BD</span>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="nav-controls z-50">
        <button className="nav-btn" onClick={() => setShowNotes(!showNotes)} title="Toggle Speaker Notes (N)">
          <FileText size={20} className={showNotes ? 'text-cyan-400' : ''} />
        </button>
        <button className="nav-btn" onClick={prevSlide} disabled={currentSlide === 0}>
          <ChevronLeft size={24} />
        </button>
        <button className="nav-btn" onClick={nextSlide} disabled={currentSlide === slides.length - 1}>
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Presenter Mode Overlay */}
      <AnimatePresence>
        {showNotes && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-24 left-8 right-8 bg-black/90 backdrop-blur-2xl border border-cyan-500/30 p-8 rounded-3xl z-[100] shadow-2xl"
          >
            <div className="flex items-center gap-4 mb-4 border-b border-white/10 pb-4">
              <div className="px-3 py-1 bg-cyan-500/20 rounded-full text-[10px] font-black text-cyan-400 uppercase">Speaker {slides[currentSlide].speaker} Script</div>
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest">{slides[currentSlide].title || "Opening"}</h3>
            </div>
            <p className="text-xl text-white leading-relaxed font-medium italic">
              "{slides[currentSlide].notes}"
            </p>
            <p className="text-[10px] text-gray-500 mt-6 uppercase tracking-tighter">Press 'N' to dismiss notes overlay</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
