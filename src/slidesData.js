export const slides = [
  // ── 01: THE PITCH (3 slides) ──
  { id:1, type:'hero', section:'01 — The Pitch',
    title:'CelluPulp BD', tagline:'Strategic Import Substitution for Bangladesh\'s Hygiene Sector',
    badge:'6,000 TPY Pilot Facility', location:'BEZA Zone, Dhaka Division',
    kpis:[{val:'$80M',label:'Import Drain/yr',color:'#f87171'},{val:'80K MT',label:'Pulp Imported',color:'#fb923c'},{val:'90 Days',label:'Avg Lead Time',color:'#facc15'},{val:'100%',label:'Forex Exposure',color:'#ef4444'}]
  },
  { id:2, type:'kpi', section:'01 — The Pitch',
    title:'The $80M Crisis', subtitle:'Why Bangladesh Bleeds Forex for Fluff Pulp',
    image:'/localpulp/rawmaterial.png',
    problems:[
      {val:'$80M',label:'Annual USD Drain',desc:'Entire hygiene supply chain dependent on imports'},
      {val:'60-80K',label:'MT Imported/Year',desc:'Zero local production capacity exists'},
      {val:'90 Days',label:'Ocean Lead Time',desc:'Massive working capital lock-up'},
      {val:'35%',label:'LC Margin Cost',desc:'Letter of Credit fees crushing manufacturers'}
    ]
  },
  { id:3, type:'pillars', section:'01 — The Pitch',
    title:'The 4-Pillar Solution', subtitle:'CelluPulp BD\'s Strategic Advantage',
    pillars:[
      {icon:'Leaf',title:'Renewable',desc:'Jute & bamboo fiber — infinitely renewable, locally abundant',color:'#10B981'},
      {icon:'Zap',title:'Fast',desc:'48-hour delivery vs 90-day ocean shipping',color:'#facc15'},
      {icon:'TrendingDown',title:'Cost Leader',desc:'15-25% cheaper than landed imports, priced in BDT',color:'#00f2fe'},
      {icon:'ShieldCheck',title:'Risk-Free',desc:'Zero forex exposure, zero LC margin, zero supply shock',color:'#4ade80'}
    ]
  },
  // ── 02: BUSINESS & REVENUE MODEL (3 slides) ──
  { id:4, type:'canvas', section:'02 — Business & Revenue Model',
    title:'B2B Model Canvas', subtitle:'The "Secondary Supplier" Strategy',
    canvas:[
      {label:'Value Proposition',items:['15-25% cost reduction','Zero forex risk','48hr delivery','BDT-denominated contracts']},
      {label:'Customer Segments',items:['Tier 1: Conglomerates (Secondary Supplier)','Tier 2: Regional brands (Primary Supplier)']},
      {label:'Key Partners',items:['Farmer cooperatives','BEZA economic zone','Chemical suppliers']},
      {label:'Revenue Streams',items:['Long-term off-take contracts (3-5yr)','Spot sales for packaging grade']}
    ]
  },
  { id:5, type:'economics', section:'02 — Business & Revenue Model',
    title:'Unit Economics', subtitle:'The Margin Spread Advantage',
    cards:[
      {label:'Selling Price',val:'100,000',unit:'BDT/MT',color:'#00f2fe',note:'Flat local currency rate'},
      {label:'COGS',val:'60,000',unit:'BDT/MT',color:'#fb923c',note:'Agri-feedstock, chemicals, energy'},
      {label:'Gross Margin',val:'40%',unit:'',color:'#4ade80',note:'At optimal capacity utilization'},
      {label:'Breakeven',val:'3,200',unit:'MT/yr',color:'#facc15',note:'~53% capacity utilization'}
    ],
    formula:{revenue:'100,000 × Volume',cogs:'60,000 × Volume',result:'40,000 × Volume'}
  },
  { id:6, type:'scaleKpi', section:'02 — Business & Revenue Model',
    title:'Year 3 Scale KPIs', subtitle:'Target Metrics at 90% Capacity',
    metrics:[
      {val:'540M',unit:'BDT',label:'Annual Revenue',icon:'TrendingUp',color:'#00f2fe'},
      {val:'5,400',unit:'MT',label:'Production Volume',icon:'Package',color:'#10B981'},
      {val:'134M',unit:'BDT',label:'EBITDA',icon:'DollarSign',color:'#4ade80'},
      {val:'4.5',unit:'Years',label:'Payback Period',icon:'Clock',color:'#4facfe'},
      {val:'8-10%',unit:'',label:'Market Share',icon:'Target',color:'#c084fc'},
      {val:'90%',unit:'',label:'Capacity Util.',icon:'Gauge',color:'#facc15'}
    ]
  },
  // ── 03: MARKETING & OPERATIONS (3 slides) ──
  { id:7, type:'marketing', section:'03 — Marketing & Operations',
    title:'Core Marketing Plan', subtitle:'Go-To-Market Strategy & 4Ps',
    fourPs:[
      {title:'Product',desc:'ISO 9001/OEKO-TEX compatible non-wood fluff pulp',icon:'Box'},
      {title:'Price',desc:'₿100,000 BDT/MT — insulated from USD fluctuations',icon:'Tag'},
      {title:'Place',desc:'Direct-to-Manufacturer (D2M) via local logistics',icon:'Truck'},
      {title:'Promotion',desc:'Subsidized Tier 1 Trial Runs + ESG narrative',icon:'Megaphone'}
    ],
    trialStrategy:'We prove quality on the buyer\'s machines. Subsidized trials → 3-5yr off-take contracts.',
    image:'/localpulp/product.png'
  },
  { id:8, type:'pipeline', section:'03 — Marketing & Operations',
    title:'5-Step Operational Flow', subtitle:'From Feedstock to Dispatch — Zero-Liquid Discharge',
    image:'/localpulp/pipeline.png',
    steps:[
      {icon:'Leaf',title:'Feedstock',desc:'Jute/bamboo aggregated from farmer cooperatives'},
      {icon:'Factory',title:'Digestion',desc:'Continuous bio-pulping at 16.5 MT/day'},
      {icon:'Sparkles',title:'Bleaching',desc:'Totally Chlorine-Free (TCF) process'},
      {icon:'Droplet',title:'ZLD',desc:'100% chemical recovery, zero river pollution',highlight:true},
      {icon:'Package',title:'Dispatch',desc:'Dried, baled, shipped direct to buyers'}
    ]
  },
  { id:9, type:'factory', section:'03 — Marketing & Operations',
    title:'Production Facility', subtitle:'BEZA Industrial Zone — 24/7 Continuous Operation',
    image:'/localpulp/factory.png',
    specs:[
      {label:'Daily Output',val:'16.5 MT'},
      {label:'Annual Capacity',val:'6,000 MT'},
      {label:'Shift Pattern',val:'24/7 × 3 shifts'},
      {label:'Effluent',val:'Zero-Liquid Discharge'},
      {label:'Land',val:'BEZA Economic Zone'},
      {label:'Compliance',val:'DoE Certified'}
    ]
  },
  // ── 04: FINANCIAL PLAN (3 slides) ──
  { id:10, type:'forecast', section:'04 — Financial Plan',
    title:'3-Year Financial Forecast', subtitle:'Revenue, EBITDA & Net Profit Projections (Million BDT)',
    table:{
      headers:['Metric','Year 1','Year 2','Year 3'],
      rows:[
        ['Capacity Utilization','40%','75%','90%'],
        ['Volume (MT)','2,400','4,500','5,400'],
        ['Revenue','240M','450M','540M'],
        ['COGS','(168M)','(292M)','(340M)'],
        ['Gross Profit','72M','158M','200M'],
        ['EBITDA','(36M)','89M','134M'],
        ['Net Profit','(108M)','(45M)','14M']
      ]
    }
  },
  { id:11, type:'chart', section:'04 — Financial Plan',
    title:'Revenue vs EBITDA vs Net Profit', subtitle:'Combo Chart — 3-Year Trend (Million BDT)',
    bars:[
      {year:'Year 1',revenue:240,ebitda:-36,net:-108},
      {year:'Year 2',revenue:450,ebitda:89,net:-45},
      {year:'Year 3',revenue:540,ebitda:134,net:14}
    ]
  },
  { id:12, type:'jcurve', section:'04 — Financial Plan',
    title:'The J-Curve', subtitle:'Why Early Losses Are Strategic',
    phases:[
      {phase:'Investment Phase',period:'Year 0-1',status:'Capital deployment, plant commissioning, trial runs',color:'#ef4444',icon:'ArrowDown'},
      {phase:'Break-Even Phase',period:'Year 2',status:'Volume ramp to 75%, operational break-even reached',color:'#facc15',icon:'Minus'},
      {phase:'Profit Phase',period:'Year 3+',status:'90% capacity, 134M EBITDA, positive net income',color:'#4ade80',icon:'ArrowUp'}
    ],
    insight:'Heavy depreciation front-loads accounting losses. Cash flow turns positive in Year 2.'
  },
  // ── 05: ORG STRUCTURE & RISK (3 slides) ──
  { id:13, type:'orgchart', section:'05 — Organization & Risk',
    title:'Organizational Structure', subtitle:'4-Division Lean Pilot Team',
    org:{
      ceo:{title:'Managing Director',name:'Md Sayem Sarkar',desc:'Strategy, Capital & Governance'},
      divisions:[
        {title:'Plant Operations',head:'Chief Engineer',items:['Digester ops','ZLD management','Quality control'],color:'#00f2fe'},
        {title:'Commercial',head:'Head of B2B Sales',items:['Contract negotiation','Pricing strategy','Client relations'],color:'#10B981'},
        {title:'Supply Chain',head:'Logistics Director',items:['Farmer aggregation','Raw material QA','Inventory mgmt'],color:'#4facfe'},
        {title:'Finance & Admin',head:'CFO',items:['Financial reporting','Compliance','HR operations'],color:'#c084fc'}
      ]
    }
  },
  { id:14, type:'governance', section:'05 — Organization & Risk',
    title:'Governance Framework', subtitle:'Board Structure & Compliance',
    items:[
      {title:'Board of Directors',desc:'3-member board: MD, Investor Rep, Independent Director',icon:'Users'},
      {title:'Advisory Board',desc:'Chemical engineering professor + FMCG industry veteran',icon:'GraduationCap'},
      {title:'Audit & Compliance',desc:'Annual external audit, BEZA reporting, DoE environmental compliance',icon:'ClipboardCheck'},
      {title:'Risk Committee',desc:'Quarterly review of operational, financial & market risks',icon:'ShieldAlert'}
    ]
  },
  { id:15, type:'riskmatrix', section:'05 — Organization & Risk',
    title:'Risk Matrix', subtitle:'Identified Risks, Probability, Impact & Mitigation',
    risks:[
      {risk:'Tech validation failure',prob:'Medium',impact:'High',mitigation:'Downgrade to packaging pulp; recalibrate recipe',color:'#f97316'},
      {risk:'ZLD plant breakdown',prob:'Low',impact:'Critical',mitigation:'Redundant pumps, 48hr emergency repair SLA',color:'#ef4444'},
      {risk:'Raw material shortage',prob:'Low',impact:'Medium',mitigation:'Multi-source contracts across 3 cooperatives',color:'#facc15'},
      {risk:'Demand below forecast',prob:'Medium',impact:'Medium',mitigation:'Pivot to packaging sector (secondary market)',color:'#fb923c'},
      {risk:'Currency devaluation',prob:'Low',impact:'Low',mitigation:'100% BDT operations — zero forex exposure',color:'#4ade80'}
    ]
  },
  // ── 06: CONTINGENCY PLAN (2 slides) ──
  { id:16, type:'contingency', section:'06 — Contingency Plan',
    title:'Contingency Trigger', subtitle:'When Does Plan B Activate?',
    trigger:'If initial production batches fail hygiene-grade tensile strength or brightness specifications after 3 consecutive runs.',
    actions:[
      {title:'Immediate Halt',desc:'Stop hygiene-grade production line. Preserve raw materials.',icon:'Pause',color:'#ef4444'},
      {title:'Downgrade & Liquidate',desc:'Reclassify output as packaging-grade pulp. Sell to corrugated box manufacturers.',icon:'ArrowDownRight',color:'#fb923c'},
      {title:'Recalibrate',desc:'Engineering team adjusts chemical recipe, digestion parameters, and bleaching sequence.',icon:'Settings',color:'#facc15'}
    ]
  },
  { id:17, type:'fallback', section:'06 — Contingency Plan',
    title:'Fallback Market Strategy', subtitle:'Packaging Sector as Safety Net',
    points:[
      {label:'Target Market',val:'Corrugated packaging, paper board manufacturers'},
      {label:'Price Point',val:'70,000-80,000 BDT/MT (lower but guaranteed demand)'},
      {label:'Volume Absorption',val:'100% of production — packaging sector has unlimited demand'},
      {label:'Cash Recovery',val:'Covers variable costs while R&D recalibrates for hygiene grade'},
      {label:'Timeline',val:'Return to hygiene-grade trials within 6-8 weeks'}
    ]
  },
  // ── CLOSING (1 slide) ──
  { id:18, type:'closing', section:'Closing',
    title:'CelluPulp BD',
    milestones:[
      {label:'Q1 2027',desc:'Plant commissioning complete'},
      {label:'Q3 2027',desc:'First commercial batch delivered'},
      {label:'Q4 2028',desc:'Break-even reached'},
      {label:'Q2 2029',desc:'90% capacity, net profit positive'}
    ],
    funding:{ask:'120-150 Crore BDT',usd:'$10M-$12M USD',split:'50/50 Syndicated Debt + Private Equity'},
    contact:{name:'Md Sayem Sarkar',role:'Founder & Managing Director',email:'md.sayem@cellupulpbd.com'}
  }
];
