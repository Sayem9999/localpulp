export const slides = [
  {
    id: 1, type: 'hero',
    title: 'CelluPulp BD',
    tagline: 'Strategic Import Substitution for Bangladesh\'s Hygiene Sector',
    badge: '6,000 TPY Pilot Facility',
    location: 'BEZA Zone, Dhaka Division',
    team: [
      { n: 'Md Sayem Sarkar', r: 'Founder & MD' },
      { n: 'Operations Lead', r: 'Chemical Engineering' },
      { n: 'Head of B2B Sales', r: 'Revenue Pillar' },
      { n: 'Supply Chain Dir.', r: 'Logistics' },
      { n: 'QC Lab Director', r: 'Technical Validation' }
    ]
  },
  {
    id: 2, type: 'split',
    title: 'The Problem & Our Solution',
    subtitle: 'Breaking the $80M Import Dependency',
    left: {
      heading: 'The Problem', icon: 'AlertTriangle', color: 'red',
      text: 'FMCG hygiene sectors are booming, but completely dependent on importing 60,000-80,000 MT of wood fluff pulp annually.',
      bullets: ['Crippling Dollar Liquidity Crisis', 'Massive LC Margins destroying cash flow', '60-90 Day Oceanic Lead Times']
    },
    right: {
      heading: 'The Solution', icon: 'ShieldCheck', color: 'cyan',
      text: 'CelluPulp BD establishes a local 6,000 TPY Pilot Plant producing hygiene-grade fluff pulp from native jute and bamboo.',
      stats: [{ val: '0%', label: 'Forex Risk' }, { val: '48 hrs', label: 'Lead Time' }]
    },
    image: '/localpulp/rawmaterial.png'
  },
  {
    id: 3, type: 'content',
    title: 'Business Strategy',
    subtitle: 'The "Secondary Supplier" Model',
    highlight: { val: '8-10%', label: 'Target Market Share', desc: 'Pragmatic, low-resistance market entry' },
    points: [
      { title: 'Tier 2 Regional Brands', desc: 'We act as their Primary Supplier, replacing expensive imports.' },
      { title: 'Tier 1 Conglomerates', desc: 'We act as a strategic, risk-free Secondary Supplier for supply chain security.' }
    ]
  },
  {
    id: 4, type: 'content',
    title: 'Revenue & Margin',
    subtitle: 'The Spread: How Profit is Generated',
    highlight: { val: '100,000', unit: 'BDT/MT', label: 'Flat Pricing', desc: '15-25% cheaper than landed imports' },
    margin: { target: '35-40%', label: 'Target Gross Margin at optimal capacity' },
    spread: { left: { label: 'Agri-Feedstock', val: 'Ultra-Low', note: 'Taka-based COGS' }, right: { label: 'Imported Pulp', val: 'Ultra-High', note: 'USD + Freight' } }
  },
  {
    id: 5, type: 'content',
    title: 'Marketing Plan',
    subtitle: 'Go-To-Market (4Ps) & Trial Runs',
    fourPs: [
      { title: 'Product', desc: 'ISO 9001 compatible non-wood fluff pulp' },
      { title: 'Price', desc: '100,000 BDT/MT (insulated from USD)' },
      { title: 'Place', desc: 'Direct-to-Manufacturer (D2M) logistics' },
      { title: 'Promotion', desc: 'Subsidized Tier 1 Trial Runs & ESG story' }
    ],
    trialStrategy: 'We prove quality on the buyer\'s machines. Subsidized trial runs eliminate perceived risk, paving the way for 3-5 year off-take contracts.',
    image: '/localpulp/product.png'
  },
  {
    id: 6, type: 'pipeline',
    title: 'Production Pipeline',
    subtitle: 'From Farm to Factory — Zero-Liquid Discharge',
    image: '/localpulp/pipeline.png',
    steps: [
      { icon: 'Leaf', title: 'Aggregation', desc: 'Local farmer cooperatives supply chipped jute/bamboo' },
      { icon: 'Factory', title: 'Digestion', desc: 'Bio-pulping at 16.5 MT/day continuous processing' },
      { icon: 'RefreshCw', title: 'TCF Bleaching', desc: 'Totally Chlorine-Free washing for brightness' },
      { icon: 'Package', title: 'Dispatch', desc: 'Dried, baled, and shipped direct to buyers' },
      { icon: 'Droplet', title: 'ZLD Plant', desc: '100% chemical recovery. Zero river pollution.', highlight: true }
    ]
  },
  {
    id: 7, type: 'content',
    title: 'Market Opportunity',
    subtitle: '$80M Industry Growing at 15% CAGR',
    image: '/localpulp/market.png',
    marketStats: [
      { val: '$80M', label: 'Annual Import Value' },
      { val: '15%', label: 'CAGR Growth' },
      { val: '60K-80K', label: 'MT Imported/Year' },
      { val: '0', label: 'Local Competitors' }
    ]
  },
  {
    id: 8, type: 'data',
    title: 'The Investment',
    subtitle: 'CAPEX & Project Funding',
    capex: { val: '120-150', unit: 'Crore BDT', usd: '$10M-$12M USD' },
    allocation: [
      { label: 'Machinery', pct: 45, color: '#00f2fe' },
      { label: 'Construction', pct: 30, color: '#4facfe' },
      { label: 'ZLD Plant', pct: 15, color: '#10B981' },
      { label: 'Working Capital', pct: 10, color: '#22d3ee' }
    ]
  },
  {
    id: 9, type: 'data',
    title: '3-Year Growth Forecast',
    subtitle: 'The J-Curve to Profitability',
    years: [
      { yr: 'Year 1', cap: '40%', rev: '240M', mt: '2,400 MT', status: 'Accounting Loss (J-Curve)', statusColor: 'red' },
      { yr: 'Year 2', cap: '75%', rev: '450M', mt: '4,500 MT', status: 'Break-Even Reached', statusColor: 'blue' },
      { yr: 'Year 3', cap: '90%', rev: '540M', mt: '5,400 MT', status: '134M EBITDA', statusColor: 'green' }
    ],
    payback: '4.5 Years'
  },
  {
    id: 10, type: 'content',
    title: 'Organization & Architecture',
    subtitle: 'Lean Technical Pilot Team',
    org: {
      top: { title: 'Managing Director', subtitle: 'Strategic Authority' },
      pillars: [
        { icon: 'Cpu', title: 'Plant Ops Manager', desc: 'Chief Chem. Eng. (ZLD & Digester)', label: 'Technical' },
        { icon: 'Briefcase', title: 'Head of B2B Sales', desc: 'Contract Negotiations', label: 'Revenue' },
        { icon: 'Layers', title: 'Supply Chain Dir.', desc: 'Farmer Aggregation', label: 'Logistics' }
      ]
    }
  },
  {
    id: 11, type: 'content',
    title: 'Risk & Contingency',
    subtitle: 'Prepared for the Worst-Case Scenario',
    risks: [
      { icon: 'AlertTriangle', title: 'Tech Validation Risk', desc: 'Will local non-wood pulp run on high-speed diaper machines without tearing?', color: 'orange' },
      { icon: 'Droplet', title: 'Operational Risk', desc: 'ZLD plant failure leading to DoE shutdown.', color: 'red' }
    ],
    contingency: {
      title: 'The Contingency Plan',
      text: 'If initial batches fail hygiene-grade specs, we execute an immediate Downgrade & Liquidate protocol.',
      flow: ['Failed Batch', 'Packaging Sector'],
      note: 'This guarantees variable cost recovery while we recalibrate.'
    }
  },
  {
    id: 12, type: 'hero',
    title: 'THANK YOU',
    tagline: 'Questions? We are ready for implementation.'
  }
];
