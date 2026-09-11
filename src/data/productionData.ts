import { ProductionHub, ServiceCapability, PortfolioProject, ProductionPillar } from '../types';

export const PRODUCTION_HUBS: ProductionHub[] = [
  {
    id: 'nyc',
    city: 'New York',
    country: 'United States',
    region: 'Americas',
    timezone: 'America/New_York',
    timeZoneCode: 'EDT',
    permitTurnaround: '48–72 Hours (MOFTB)',
    taxRebate: 'Up to 30% NY State Film Tax Credit',
    strengths: ['Union Tier 1–3 Crewing', 'Direct Expedited Municipal Permits', 'Stage Complexes & Soundstages'],
    headOfProduction: 'Julian Moscot',
    addressSummary: '530 West 25th Street, New York, NY 10001',
    status: 'Operational'
  },
  {
    id: 'ldn',
    city: 'London',
    country: 'United Kingdom',
    region: 'Europe & UK',
    timezone: 'Europe/London',
    timeZoneCode: 'BST',
    permitTurnaround: '3–5 Business Days',
    taxRebate: 'Up to 34% Audio-Visual Expenditure Credit (AVEC)',
    strengths: ['Pan-European ATA Carnet Handling', 'BFC & Heritage Location Access', 'High-Spec Technical Facilities'],
    headOfProduction: 'Eleanor Vance',
    addressSummary: '14 Berwick Street, Soho, London W1F 0PP',
    status: 'Active Units on Set'
  },
  {
    id: 'cdmx',
    city: 'Mexico City',
    country: 'Mexico',
    region: 'Americas',
    timezone: 'America/Mexico_City',
    timeZoneCode: 'CST',
    permitTurnaround: '48 Hours (CFILMA)',
    taxRebate: 'Fidecine & High Purchasing Power Parity',
    strengths: ['Bilingual Department Heads', 'Brutalist & Colonial Architectural Roster', 'Rapid Customs & Flight Logistics'],
    headOfProduction: 'Mateo Cárdenas',
    addressSummary: 'Colonia Roma Norte, Cuauhtémoc, 06700 CDMX',
    status: 'Operational'
  },
  {
    id: 'par',
    city: 'Paris',
    country: 'France',
    region: 'Europe & UK',
    timezone: 'Europe/Paris',
    timeZoneCode: 'CEST',
    permitTurnaround: '5–7 Business Days',
    taxRebate: 'Up to 30% TRIP (Tax Rebate for International Production)',
    strengths: ['Luxury & Fashion Production Infrastructure', 'Historic Landmark Authority Access', 'Bilingual Key Grips & Gaffers'],
    headOfProduction: 'Camille Roche',
    addressSummary: '28 Rue du Faubourg Saint-Honoré, 75008 Paris',
    status: 'Operational'
  },
  {
    id: 'tyo',
    city: 'Tokyo',
    country: 'Japan',
    region: 'Asia-Pacific',
    timezone: 'Asia/Tokyo',
    timeZoneCode: 'JST',
    permitTurnaround: '5–10 Business Days (Police/Metropolitan)',
    taxRebate: 'J-LOD International Co-Production Subsidy',
    strengths: ['Discreet Public Space Management', 'Precision Remote Monitoring Workflows', 'High-Speed Transport & Gear Networks'],
    headOfProduction: 'Kenji Takahashi',
    addressSummary: 'Minami-Aoyama, Minato-ku, Tokyo 107-0062',
    status: 'Active Units on Set'
  },
  {
    id: 'kef',
    city: 'Reykjavik',
    country: 'Iceland',
    region: 'Specialized Units',
    timezone: 'Atlantic/Reykjavik',
    timeZoneCode: 'GMT',
    permitTurnaround: '24–48 Hours',
    taxRebate: 'Up to 35% Production Reimbursement',
    strengths: ['Glacier & Volcano Specialty Rigging', 'Extreme Weather Safety Logistics', '24-Hour Daylight Summer Units'],
    headOfProduction: 'Arnar Sigurdsson',
    addressSummary: 'Grandagarður 14, 101 Reykjavík',
    status: 'Operational'
  },
  {
    id: 'syd',
    city: 'Sydney',
    country: 'Australia',
    region: 'Asia-Pacific',
    timezone: 'Australia/Sydney',
    timeZoneCode: 'AEST',
    permitTurnaround: '3–5 Business Days',
    taxRebate: 'Up to 30% Location Offset & State Top-Ups',
    strengths: ['Opposite-Season Northern Hemisphere Shoots', 'Marine & Aerial Specialized Units', 'World-Class Technical Crews'],
    headOfProduction: 'Fiona Macintyre',
    addressSummary: 'Surry Hills, NSW 2010, Australia',
    status: 'Operational'
  }
];

export const SERVICE_CAPABILITIES: ServiceCapability[] = [
  {
    id: 'line-production',
    index: '01',
    title: 'Comprehensive Line Production',
    category: 'Full-Unit Execution',
    summary: 'Turnkey on-the-ground management from initial budget feasibility and union negotiation through final wrap and payroll reconciliation.',
    deliverables: [
      'Union & non-union crewing across all 35+ departments',
      'Transparent multi-currency ledger & client audit prep',
      'Tier-1 local production insurance & contingency indemnities',
      'Turnkey equipment leasing (Arri, RED, Panavision, Cooke)'
    ],
    fieldNote: 'Zero hidden agency markup. Detailed daily hot costs issued by 21:00 local time.'
  },
  {
    id: 'location-intelligence',
    index: '02',
    title: 'Location Intelligence & Access',
    category: 'Scouting & Permitting',
    summary: 'Proprietary global scouting roster with pre-cleared access to restricted architectural landmarks, public infrastructure, and wild natural reserves.',
    deliverables: [
      'Expedited municipal, national park, and aviation film permits',
      'Bespoke visual scouting decks with solar angle & tidal data',
      'Structural engineering sign-offs for heavy rigs and cranes',
      'Community notification and localized traffic control management'
    ],
    fieldNote: 'Direct standing relationships with metropolitan film commissions in 24 major cities.'
  },
  {
    id: 'cross-border-logistics',
    index: '03',
    title: 'Cross-Border Logistics & Carnets',
    category: 'Freight & Customs',
    summary: 'End-to-end international transport of bespoke camera packages, prop consignments, wardrobe collections, and technical crew.',
    deliverables: [
      'Preparation and clearance of multi-country ATA Carnets',
      'White-glove hazardous cargo & lithium battery air freight',
      'Expedited consular visas & work authorizations for key talent',
      'Dedicated airport tarmac escort & bonded warehouse holding'
    ],
    fieldNote: '100% border clearance track record across 48 sovereign territories.'
  },
  {
    id: 'remote-broadcasting',
    index: '04',
    title: 'Ultra-Low-Latency Remote Monitoring',
    category: 'Virtual Agency Feeds',
    summary: 'Secure, encrypted, broadcast-grade multi-camera live feeds connecting directors and agency creative teams across oceans without delay.',
    deliverables: [
      'Sub-200ms QTake & Teradek bonded cellular / satellite video stream',
      'Color-calibrated iPad feeds for remote executive creative directors',
      'Dedicated two-way comms channel for immediate client feedback',
      'Automated watermarking and encrypted daily asset handoff'
    ],
    fieldNote: 'Enables global clients to approve takes in New York or London while shooting in Tokyo.'
  },
  {
    id: 'tax-incentives',
    index: '05',
    title: 'Fiscal Structuring & Rebate Capture',
    category: 'Financial Optimization',
    summary: 'Expert structuring to maximize regional production rebates, cash refunds, and co-production treaties, reducing net production expenditure.',
    deliverables: [
      'Comprehensive regional rebate comparison modeling before script lock',
      'Local qualifying spend tracking with licensed legal auditors',
      'Co-production treaty qualification for bilateral co-ventures',
      'Guaranteed post-production tax rebate cash-flow bridging'
    ],
    fieldNote: 'Average realized client savings between 22% and 34% on qualifying territorial spend.'
  },
  {
    id: 'safety-extreme',
    index: '06',
    title: 'High-Risk, Aerial & Marine Safety',
    category: 'Risk Mitigation',
    summary: 'Certified safety coordinators, mountain guides, maritime captains, and medic teams embedded directly into complex location units.',
    deliverables: [
      'Sub-sea and marine vessel camera boat coordination',
      'Heavy-lift drone operation with FAA / EASA certified pilots',
      'High-altitude, glacier, and desert emergency evacuation plans',
      'Strict NDA and high-security protocol for embargoed products'
    ],
    fieldNote: 'Zero reportable incidents across 420+ international shoot days over the past 36 months.'
  }
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'aura-tokyo',
    index: 'PROJ-01',
    title: 'Aura Horizon',
    client: 'Monolith Global Motors',
    format: 'Commercial',
    year: '2025',
    locations: ['Tokyo', 'Kyoto & Shiga Expressway', 'Japan'],
    heroImage: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1600&auto=format&fit=crop',
    cameraPackage: 'Arri Alexa 35 · Hawk V-Lite Anamorphic',
    crewSize: 64,
    shootDays: 5,
    logisticsChallenge: 'Secured rare midnight closure of the Metropolitan Expressway and traditional temple grounds with 4-hour turnaround between units.',
    aspectRatio: '2.39:1',
    tags: ['Night City Permitting', 'Anamorphic Rigging', 'Remote Agency Feed']
  },
  {
    id: 'atacama-vanguard',
    index: 'PROJ-02',
    title: 'High Altitude Test Unit',
    client: 'Vanguard Aerospace & Chrono',
    format: 'Brand Film',
    year: '2025',
    locations: ['Atacama Desert (4,200m ASL)', 'Chile'],
    heroImage: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1600&auto=format&fit=crop',
    cameraPackage: 'RED V-Raptor XL 8K · Cooke S7/i Full Frame',
    crewSize: 38,
    shootDays: 6,
    logisticsChallenge: 'Self-sufficient basecamp at 14,000 feet elevation with hyperbaric safety chambers, satellite uplink, and zero environmental footprint.',
    aspectRatio: '16:9',
    tags: ['Extreme Elevation', 'High-Speed Tracking Vehicle', 'Off-Grid Power']
  },
  {
    id: 'paris-atelier',
    index: 'PROJ-03',
    title: 'The Silent Atelier',
    client: 'Maison Saint-Honoré',
    format: 'Fashion Editorial',
    year: '2024',
    locations: ['Palais Galliera & Le Vésinet', 'Paris, France'],
    heroImage: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1600&auto=format&fit=crop',
    cameraPackage: 'Panavision Millennium DXL2 · Primo 70 Optics',
    crewSize: 42,
    shootDays: 3,
    logisticsChallenge: 'Private heritage access to fragile 18th-century salons under strict archival lighting guidelines and micro-vibration thresholds.',
    aspectRatio: '4:3',
    tags: ['Heritage Location Access', 'Fashion Haute Couture', 'Archival Lighting']
  },
  {
    id: 'nordic-monolith',
    index: 'PROJ-04',
    title: 'Structures of Silence',
    client: 'Nordic Architecture Review',
    format: 'Feature / Doc',
    year: '2024',
    locations: ['Snæfellsnes & Westfjords', 'Iceland'],
    heroImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1600&auto=format&fit=crop',
    cameraPackage: 'Sony Venice 2 8K · Rialto Extension System',
    crewSize: 26,
    shootDays: 8,
    logisticsChallenge: 'Filming through 65-knot gale winds, coordinating tracked amphibious vehicles and continuous lens heating systems.',
    aspectRatio: '2.00:1',
    tags: ['Sub-Zero Weather', 'Rialto Backpack Rigging', '35% Tax Rebate']
  },
  {
    id: 'cdmx-brutalist',
    index: 'PROJ-05',
    title: 'Concrete Horizons',
    client: 'Kroma Sound Systems',
    format: 'Commercial',
    year: '2024',
    locations: ['Tlatelolco & Pedregal', 'Mexico City'],
    heroImage: 'https://images.unsplash.com/photo-1518638150340-f706e86654de?q=80&w=1600&auto=format&fit=crop',
    cameraPackage: 'Arri Mini LF · Tribe7 Blackwing7 T-Tuned',
    crewSize: 52,
    shootDays: 4,
    logisticsChallenge: 'Coordinated simultaneous 120-foot technocrane rigging in public plazas with dynamic street closures and localized power generation.',
    aspectRatio: '2.39:1',
    tags: ['Technocrane Rigging', 'CFILMA Fast Permitting', '48h Prep']
  },
  {
    id: 'london-underground',
    index: 'PROJ-06',
    title: 'Zero Latency',
    client: 'Apex Fintech Group',
    format: 'Brand Film',
    year: '2024',
    locations: ['Canary Wharf & Thames Barrier', 'London, UK'],
    heroImage: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1600&auto=format&fit=crop',
    cameraPackage: 'Arri Alexa 35 · Leitz Summilux-C',
    crewSize: 45,
    shootDays: 3,
    logisticsChallenge: 'Secured dawn river authority permissions for precision drone flyovers through London shipping lanes with live police maritime escort.',
    aspectRatio: '16:9',
    tags: ['Port of London Permits', 'Drone Flight Corridor', 'AVEC Tax Incentive']
  }
];

export const PRODUCTION_PILLARS: ProductionPillar[] = [
  {
    number: '01',
    title: 'Absolute Fiscal Rigor',
    subtitle: 'Transparent accounting with zero hidden markups.',
    body: 'International production collapses when budgets become opaque. MGPS operates open-book accounting across all territories. You receive raw vendor invoices, real-time FX hedging, and standardized daily cost reports reconciled to the cent.',
    metric: '100%',
    metricLabel: 'Audit-ready reconciled spend'
  },
  {
    number: '02',
    title: 'Permitting Muscle & Authority Access',
    subtitle: 'Where others get denied, MGPS has standing relationships.',
    body: 'We hold direct lines to metropolitan film offices, heritage conservancies, national aviation boards, and port authorities across 48 sovereign nations. We understand local administrative psychology and turn permits around in hours, not weeks.',
    metric: '48+',
    metricLabel: 'Sovereign territories with direct access'
  },
  {
    number: '03',
    title: 'Rapid Cross-Border Mobilization',
    subtitle: 'Complete production units on the ground in 72 hours.',
    body: 'When weather shifts, scripts change, or high-profile talent availability suddenly opens, MGPS can mobilize a qualified 40-person camera, grip, and sound unit in almost any major global market within 72 hours with pre-cleared carnets.',
    metric: '72h',
    metricLabel: 'Standard emergency unit mobilization'
  },
  {
    number: '04',
    title: 'Executive Discretion & Confidentiality',
    subtitle: 'Military-grade protocol for unannounced products.',
    body: 'Having produced for the world’s most secretive technology enterprises and top-tier luxury houses, our NDA protocols are institutional. From Faraday cage staging areas to air-gapped on-set media vaults, your IP stays completely protected.',
    metric: '0',
    metricLabel: 'IP or image leaks in company history'
  }
];
