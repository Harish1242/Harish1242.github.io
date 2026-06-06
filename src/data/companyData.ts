export interface BoardMember {
  name: string;
  role: string;
  roleSubsidiary: string;
  initials: string;
  shareholder: string;
  descriptionHoldings: string;
  descriptionSubsidiary: string;
  specialization: string;
  credentials: string[];
  geographic: string;
  boards: string[];
}

export interface UpcomingSubsidiary {
  id: string;
  name: string;
  timeline: string;
  description: string;
  points: string[];
}

export interface ServiceDetail {
  id: string;
  title: string;
  tagline: string;
  overview: string;
  bullets: string[];
  idealFor: string;
  dealStructure?: string;
}

export interface PartnerVolume {
  category: string;
  count: number;
  roles: string[];
}

export const LEADERSHIP_PROFILES: BoardMember[] = [
  {
    name: "Mr. Asif Raza",
    role: "Shareholder & Strategic Advisor",
    roleSubsidiary: "Chief Operating Officer & Strategic Advisor",
    initials: "AR",
    shareholder: "50% Shareholder (SAAR Holdings Ltd)",
    descriptionHoldings: "Asif leads our high-level corporate deal-sourcing and commercial real estate portfolio acquisition frameworks. Pulling from more than 15 years of prime trade operations across key UK commerce clusters, he directs the holdings group's growth trajectory by identifying undervalued high-street physical assets and negotiating structured, favorable commercial leases.",
    descriptionSubsidiary: "Asif coordinates day-to-day retail operations, physical fulfillment center spacing, and central warehousing setups. He is responsible for managing major merchant partnerships, orchestrating volume wholesale supply networks with providers like United Wholesale Scotland, and implementing SAAR Convenience's automated layout parameters.",
    specialization: "UK Food & Beverage Operations, Wholesale Procurement & Commercial Property Investment",
    credentials: [
      "15+ Years UK Business Operations",
      "UK Commercial Acquisitions Lead",
      "Strategic Supplier Networks Expert"
    ],
    geographic: "London, Manchester, Glasgow, Edinburgh, and UK-wide",
    boards: ["holdings", "convenience"]
  },
  {
    name: "Mr. Harish Manderna",
    role: "Shareholder & Operations Manager",
    roleSubsidiary: "Chief Financial Officer & Head of Compliance",
    initials: "HM",
    shareholder: "50% Shareholder (SAAR Holdings Ltd)",
    descriptionHoldings: "Harish directs parent-level capital allocation models, international treasury auditing, and strict corporate continuation compliance. Pulling from deep compliance auditing experience in global ship management across 35+ countries, he leads the board's complex joint-venture deal-structuring and group-level financial risk mitigation.",
    descriptionSubsidiary: "Harish is the absolute authority over unit-level economics, micro-fulfillment center margins, and localized q-commerce capital routing. He oversees the preparation of P&L audits, manages treasury compliance guidelines for food and alcohol licensing, and leads operational risk management setups.",
    specialization: "Corporate Financial Analysis, International Compliance & Deal Structuring",
    credentials: [
      "Master of Laws (LLM) · University of Strathclyde",
      "International Operations & Vessel Chartering Expert",
      "Executive Financial Auditant Profile"
    ],
    geographic: "USA, China, Australia, Thailand, Netherlands, and 35+ countries worldwide",
    boards: ["holdings", "convenience"]
  },
  {
    name: "Mrs. Harpreet Sharma",
    role: "Director & Secretary",
    roleSubsidiary: "Managing Director & Secretary",
    initials: "HS",
    shareholder: "Executive Directorship",
    descriptionHoldings: "Harpreet directs corporate secretarial affairs, institutional fillings, and legal continuation matrices at the holding company tier. She acts as our primary liaison for Scottish Companies House regulatory compliance and ensures all parent-subsidiary governance frameworks are rigidly enforced.",
    descriptionSubsidiary: "Harpreet manages localized administrative staffing schedules, local government business rates audits, and statutory continuity checklists for brick-and-mortar storefronts. She coordinates localized payroll systems and manages retail administrative communication portals.",
    specialization: "Statutory Compliance, Corporate Administration & Secretariat Sourcing",
    credentials: [
      "Corporate Secretariat Directorship",
      "Liaison for Institutional Affairs",
      "Statutory Continuity Lead"
    ],
    geographic: "Glasgow & Scotland-wide",
    boards: ["holdings", "convenience"]
  },
  {
    name: "Miss Pratibha",
    role: "Chief Technology Officer & Digital Architect",
    roleSubsidiary: "Chief Technology Officer & Tech Authority",
    initials: "P",
    shareholder: "Executive Directorship",
    descriptionHoldings: "Miss Pratibha is the lead technology architect for our B2B SaaS initiatives. She leads the conceptualization of predictive inventory models and data management interfaces currently entering pilot trials.",
    descriptionSubsidiary: "Miss Pratibha is the lead architect and developer behind SAAR Intelligence. Holds absolute technical authority over SAAR's bespoke machine learning modeling, predictive API pipelines, and dynamic client-side applications. She specializes in implementing highly automated, low-wastage retail systems designed for rapid high-street execution.",
    specialization: "Predictive AI Systems, Cloud Database Orchestration & Fulfilment Logic",
    credentials: [
      "MSc in Artificial Intelligence and Data Management",
      "Principal Software architect of SAAR-INT Platform",
      "Expert in low-latency transactional cloud routing"
    ],
    geographic: "Glasgow and central belt Scotland",
    boards: ["convenience"]
  }
];

export const HO_SERVICES: ServiceDetail[] = [
  {
    id: "operational-management",
    title: "Operational Management",
    tagline: "Keep ownership. Lose the headache.",
    overview: "We assume full operational control of your business through a Management Services Agreement (MSA). You remain the legal owner and receive guaranteed income. We handle everything else – staff, suppliers, compliance, and day-to-day decisions. This model is designed for business owners who are tired of the daily grind or want to stabilize operations before an exit.",
    bullets: [
      "Turnaround Management: Immediate cost-control measures, waste reduction protocols, and energy audits.",
      "Supply Chain Optimisation: Leveraging our scale and buying power to reduce material costs by 15-25%.",
      "Staffing & HR: Full management of rotas, recruitment, payroll compliance, and training protocols.",
      "Rebranding & Marketing: Refreshing menus, layout configurations, and digital presence to drive footfall.",
      "Financial Reporting: Transparent monthly statements outlining absolute operational metrics."
    ],
    dealStructure: "We pay you a guaranteed base return (fixed rent or profit percentage). We retain the operational upside generated through our technological and efficiency improvements.",
    idealFor: "Business owners who are exhausted, seek high passive income from their asset, want to stabilize before an exit, or test a partnership before selling."
  },
  {
    id: "strategic-acquisitions",
    title: "Strategic Acquisitions",
    tagline: "Exit with dignity. Exit with value.",
    overview: "Ready to move on? We acquire distressed, underperforming, and undervalued businesses across sectors. Unlike traditional brokers, we evaluate potential — the real value we can create through operational restructuring and technology injection. We preserve brand heritage and modernise systems to build sustainable, profitable businesses.",
    bullets: [
      "Fast, Fair Valuations: Evaluating potential upside and structural value, rather than just historical P&L sheets.",
      "Flexible Deal Structures: Cash purchases, deferred terms, earn-outs, or hybrid models customized to both parties' needs.",
      "Clean Exits: We assume full liability and handle legal complexity, leaving you with clear liquidation value.",
      "Legacy & Staff Preservation: We retain high-performing staff members and respect customer-facing brand heritage."
    ],
    dealStructure: "Fully structured acquisitions with deferred payment pathways or immediate buyout terms, with seamless transfer of operational and physical leases.",
    idealFor: "Owners ready to liquidate fast, struggling to find conventional buyers, or looking to preserve their legacy without prolonged brokerage timelines."
  },
  {
    id: "business-services",
    title: "Business Services",
    tagline: "Expert support. Practical results.",
    overview: "Not ready for a full management takeover or buyout? We offer standalone consulting and tech integrations natively. Access the same internal capabilities we deploy across our own subsidiary companies to optimize your margins.",
    bullets: [
      "Financial & Compliance: Internal auditing and P&L analysis to identify profit leaks, and strict regulatory compliance reviews (GDPR, Employment Law).",
      "Digital & Technology: Conversion-focused website architecture, and dynamic third-party platform integration (Deliveroo, UberEats, Just Eat setup).",
      "Procurement & Operations: Leveraging our vendor network to secure lower wholesale pricing and stream processing optimization."
    ],
    dealStructure: "Structured on a milestone project flat fee or monthly retainer depending on scale.",
    idealFor: "Established operations looking to modernise their margins, businesses seeking to optimize value ahead of a future sale, or merchants needing specialized API support."
  }
];

export const PARTNER_NETWORK: PartnerVolume[] = [
  { category: "Law Firms", count: 2, roles: ["Commercial Leases", "Acquisition Contracts", "Assignation Laws"] },
  { category: "Accounting Firms", count: 2, roles: ["Tax Audits", "Group Payroll", "Intra-group Treasury"] },
  { category: "Business Finance Providers", count: 3, roles: ["Asset Financing", "Start-up Lending", "Equipment Loans"] },
  { category: "Healthcare Professionals", count: 6, roles: ["Clinical Consulting", "Care Home Diligence", "Compliance Advisory"] },
  { category: "Industry Specialists", count: 20, roles: ["Hospitality Experts", "Cold Storage Logistics", "Protech Engineers"] },
  { category: "Business Consultants", count: 3, roles: ["Turnaround Advisors", "M&A Sourcing", "Operations Mentoring"] }
];

export const MORNING_CRUMBS_BRAND = {
  name: "Morning Crumbs",
  tagline: "Baked Fresh. Brewed Right.",
  colors: {
    primary: "#3D1F0D", // Espresso Brown
    accent: "#C4A0C0",  // Morning Lilac
    lightAccent: "#EBD4E9", // Pale Lilac
    background: "#FAF5EE", // Oat Cream
    secondary: "#784B2D" // Warm Mocha
  },
  concept: "A quick service premium bakery and coffee brand engineered for the British high street. Built around comforting daily rituals, warm approachability, and custom bakes reflecting modern British tastes. Strictly verified ingredients, high-street visibility, and premium-yet-accessible pricing.",
  menu: {
    savoury: [
      { name: "Chicken Sausage Roll", desc: "Seasoned chicken in flaky puff pastry, baked fresh in-store.", price: 1.50 },
      { name: "Spicy Lamb Roll", desc: "Minced lamb, cumin, coriander, and fresh green chilli in puff pastry.", price: 1.75 },
      { name: "Chicken Tikka Pasty", desc: "Marinated chicken tikka with aromatic peppers baked in shortcrust pastry.", price: 2.50 },
      { name: "Cheese & Onion Bake (V)", desc: "Mature cheddar and caramelized onion in a rich, golden puff pastry envelope.", price: 1.75 }
    ],
    drinks: [
      { name: "Masala Chai", desc: "Authentic spiced tea brewed with ginger, cardamom, and fresh whole milk.", price: 2.50 },
      { name: "Cardamom Latte", desc: "Our signature double espresso with steamed milk and organic cardamom syrup.", price: 3.25 },
      { name: "Karak Chai", desc: "Extra-strong spiced tea slow-brewed with sweet evaporated milk.", price: 2.75 },
      { name: "Cutting Chai", desc: "Strong, half-cup street-style tea perfect for a quick morning energy boost.", price: 1.50 }
    ],
    bakes: [
      { name: "Gulab Jamun Danish (V)", desc: "Flaky Danish pastry filled with aromatic rose-scented gulab jamun cream.", price: 2.25 },
      { name: "Saffron & Pistachio Croissant (V)", desc: "Crisp croissant filled with golden saffron cream and topped with crushed pistachios.", price: 2.75 }
    ]
  }
};

export const WRAP_REPUBLIC_BRAND = {
  name: "Wrap Republic",
  tagline: "Bold Flavours. Global Roots.",
  address: "Premium High-Street Siting, Central Scotland (Acquisition Phase)",
  concept: "Flagship QSR (Quick Service Restaurant) occupying a premium high-footfall Sauchiehall Street site. Integrates a vibrant street-facing dine-in concept with an extensive, automated backend virtual dark kitchen running state-of-the-art multi-brand delivery logistics (DishD & COOK'D formats) generating over £1,000,000 in existing baseline run-rates.",
  virtualBrands: [
    { holder: "DishD Network", brands: ["Eugreeka Glasgow", "Bao+Bowls", "Wingology", "Leb+Nöm"] },
    { holder: "COOK'D Formats", brands: ["Fried Chix", "Side Tings", "K-Pop Chicken", "Smash Burger"] }
  ],
  menuSample: [
    { name: "Chicken Tikka Paratha Wrap", desc: "Tender grilled chicken tikka, mint chutney, cucumber ribbons, and fresh mozzarella wrapped in buttered paratha.", price: 3.95 },
    { name: "Spicy Beef Flatbread Wrap", desc: "Halal beef strips, jalapeños, melted cheddar, and rich garlic infusion in soft toasted flatbread.", price: 4.25 },
    { name: "Greek Halloumi Salad Bowl (V)", desc: "Crisp seared halloumi, fresh kalamata olive taps, baby cucumbers, and fresh greens tossed in citrus herb dressing.", price: 7.95 }
  ],
  lateNightSynergy: "Next-door proximity to The Garage Nightclub (Scotland's largest venue, 1,500+ capacity) guarantees immediate physical night-traffic between 1 AM and 4 AM, capturing high-margin late-night food queues."
};

export const SAAR_CONVENIENCE_DATA = {
  name: "SAAR Convenience Store Limited",
  registration: "SC890711",
  tagline: "AI-Automated Q-Commerce Platform",
  mission: "To establish a footprint of 100+ stores nationally, radically transforming the UK's legacy convenience retail via fully integrated AI and backend micro-fulfillment grids.",
  pilots: [
    {
      name: "Glasgow Pilot (Walk-In & Dark Store)",
      address: "Shawlands, Glasgow",
      type: "Walk-In Plus Dark Store MFC (Hybrid)",
      description: "Serves as an integrated walk-in retail storefront plus a highly optimized backend dark dispatch node delivering fresh and grocery items across Glasgow south-side."
    },
    {
      name: "Dunblane Hub (Walk-In & MFC Hybrid)",
      address: "Dunblane",
      type: "Hybrid Walk-In Storefront & Backend MFC",
      description: "Integrates physical walk-in sales with backend automated shelves. Uses Electronic Shelf Labels (ESL) to synchronize pricing."
    }
  ],
  phases: [
    {
      title: "Phase 1: Proof-of-Concept Grid",
      timeline: "Year 1 (Stores 1-4)",
      focus: "Deploy and validate 4 initial nodes across central Scotland (Shawlands, Dunblane, Dennistoun, and Alloa). Retrain and optimize the backend AI models (SAAR-INT) using real transaction datasets."
    },
    {
      title: "Phase 2: Scotland-Wide Scale-Out",
      timeline: "Years 2-4 (Stores 5-35)",
      focus: "Expand network to 35 locations covering major Stirling, Edinburgh, Aberdeen, and Dundee suburbs. Transition delivery services from third-party networks to our proprietary 'SAAR Deliveries' fleet to capture 100% margin, and introduce B2B SaaS licensing to independent convenience stores."
    },
    {
      title: "Phase 3: National Rollout & Platform Dominance",
      timeline: "Years 5-10 (Stores 100+)",
      focus: "Scale to 100+ locations across the UK, targeting chronically neglected regional communities of 3,000–10,000 residents using highly refined hyper-local demand metrics. Expand into large-item same-day distribution services."
    }
  ]
};

export const UPCOMING_SUBSIDIARIES: UpcomingSubsidiary[] = [
  {
    id: "intelligence",
    name: "SAAR Intelligence Company",
    timeline: "Post Phase 1 Testing & Licensing",
    description: "The intellectual property and technological foundation of the group. Formed to hold and manage all digital assets, proprietary source codes, machine learning inventory logic, and automated shelf API licenses constructed during Phase 1.",
    points: [
      "SAAR-INT Platform Proprietary Codes",
      "Dynamic Margin Balancing Machine Learning Algorithms",
      "B2B SaaS Licensing Frameworks"
    ]
  },
  {
    id: "deliveries",
    name: "SAAR Deliveries",
    timeline: "Sustained Scaling Tier (20+ Stores)",
    description: "Our dedicated last-mile logistics operator. Transitioning active deliveries onto an specialized internal driver routing fleet to bypass third-party dispatcher commissions and command 100% of our Q-commerce business margin.",
    points: [
      "Proprietary Automated Driver Route Dispatching",
      "In-House Delivery Courier Fleet & Standards",
      "Zero-Commission Transport Economics"
    ]
  },
  {
    id: "logistics",
    name: "SAAR Logistics and Q-Commerce Company",
    timeline: "Infrastructural Maturity",
    description: "Bespoke wholesale redistribution and supply-chain hub organization. Leverages our commercial warehouse facilities and carrier networks to dispatch convenient grocery supplies, advanced electronics, appliances, and general household items safely.",
    points: [
      "Multi-Category High-Street Micro-Fulfillment",
      "Wholesale Redistribution Hub Siting",
      "Electronics & Appliance Direct Delivery Dispatch"
    ]
  }
];
