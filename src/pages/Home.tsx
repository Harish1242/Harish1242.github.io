import React, { useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck, Landmark, Building2, HelpCircle, ChevronRight, CheckCircle, Globe, Users2, Activity, TrendingUp, Cpu, Layout, MapPin, Sparkles, UtensilsCrossed, Heart, Truck, Briefcase, Scale, Calculator, BarChart3, Radio, RefreshCw, Smartphone, PackageOpen } from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'convenience' | 'synergy' | 'pipeline'>('convenience');
  const [optimizationFactor, setOptimizationFactor] = useState<number>(75);
  const [selectedYear, setSelectedYear] = useState<number>(2026);
  const [activeMetricDetail, setActiveMetricDetail] = useState<string>('valuation');
  const [cockpitLogs, setCockpitLogs] = useState<string[]>([
    "🛒 Shawlands Node: Dynamic item pricing synchronized to United Wholesale",
    "☕ Morning Crumbs: Sourced premium Arabica-Karak supply chain pipeline",
    "📦 Supply Chain: Sourcing price advantage locked globally (+24%)",
    "🌯 Governance: Board authorized Wrap Republic optimization audit"
  ]);

  useEffect(() => {
    const logsPool = [
      "🥛 Dunblane Hub: Cold storage temp verified compliant (+4°C)",
      "🚴 Shawlands Hub: Courier dispatch rate at peak performance (99.8%)",
      "🏷️ SAAR-INT: ESL shelf tags adjusted automatically",
      "🏛️ Board Desk: Sourced acquisition target pre-vetting complete",
      "💼 Accounting: High-street cashbook operations integrated",
      "🔑 Property Hub: Landlord lease assignation verified",
      "☕ Morning Crumbs: Sourced premium eco packaging lines"
    ];
    const interval = setInterval(() => {
      setCockpitLogs(prev => {
        const randomLog = logsPool[Math.floor(Math.random() * logsPool.length)];
        return [randomLog, ...prev.slice(0, 3)];
      });
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="home" className="scroll-mt-20 animate-fade-in bg-[#FAF9F5] text-slate-900 leading-relaxed font-sans">
      
      {/* ========================================== */}
      {/* 1. CORPORATE HERO SPOTLIGHT                */}
      {/* ========================================== */}
      <section className="relative overflow-hidden pt-20 pb-28 md:pt-24 md:pb-28 bg-gradient-to-b from-white via-[#FAF8F3] to-[#FAF9F5] border-b border-slate-205">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(168,137,42,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(168,137,42,0.015)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none"></div>
 
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center lg:items-start text-left">
            
            {/* Left Column: Vision Statement */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-[#FAF3E5] border border-[#EAC282]/40 text-xs text-[#A8892A] font-extrabold tracking-widest uppercase shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#A8892A] animate-pulse"></span>
                🏛️ STRATEGIC UK INVESTMENT &amp; OPERATIONS
              </div>

              <h1 className="font-serif text-5xl md:text-7xl font-black tracking-tight text-slate-950 leading-[1.08] text-left">
                We Build.<br />
                We <span className="font-serif italic text-[#A8892A]">Hold.</span><br />
                We Grow.
              </h1>
            </div>

            {/* Right Column: Narrative Copy & Action Panels */}
            <div className="lg:col-span-7 space-y-6 text-left lg:border-l lg:border-[#A8892A]/20 lg:pl-12 lg:pt-4">
              <p className="text-slate-700 text-base md:text-lg leading-relaxed text-left">
                SAAR Holdings is a Glasgow-based strategic holding company. We collaborate with UK business owners to stabilize daily operations, acquire physical assets, and deploy automated backend structures.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 pt-2 justify-start font-mono">
                <a 
                  href="#holdings" 
                  className="px-8 py-4 bg-slate-950 text-[#FAF9F5] hover:bg-[#A8892A] transition-all font-bold uppercase tracking-wider text-sm shadow-md animate-pulse"
                >
                  📊 Analyze Subsidiaries Portfolio
                </a>
                <a 
                  href="#services" 
                  className="px-8 py-4 bg-white text-slate-900 border border-slate-250 hover:bg-slate-50 hover:border-[#A8892A]/40 transition-all font-bold uppercase tracking-wider text-sm shadow-sm"
                >
                  Explore Value Pathways 💎
                </a>
              </div>
            </div>

          </div>

          {/* ========================================================= */}
          {/* BROAD, REIMAGINED DYNAMIC SOVEREIGN MANAGEMENT PORTFOLIO PANEL */}
          {/* ========================================================= */}
          <div className="w-full bg-white border-2 border-[#EAC282]/50 shadow-xl relative p-6 md:p-10 flex flex-col justify-between overflow-hidden mt-16 text-slate-850" id="sovereign-cockpit">
            {/* Elegant visual orientation top-ribbon */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#A8892A]"></div>
            
            {/* Floating ambient subtle design elements */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#FAF3E5] rounded-full blur-3xl pointer-events-none opacity-40"></div>
            
            {/* Top Row: Title, Subtitle & Interactive Reporting Year Selector Switcher */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 border-b border-slate-100 pb-6 mb-8">
              <div className="space-y-1.5 text-left">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#A8892A] uppercase block">
                    SOVEREIGN MANAGEMENT PANEL
                  </span>
                  <div className="hidden sm:flex items-center gap-1.5 bg-emerald-50 px-2 py-0.5 border border-emerald-200">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                    </span>
                    <span className="text-xs font-mono font-bold text-emerald-700 tracking-wider">LIVE RECOGNITION</span>
                  </div>
                </div>
                <h3 className="font-serif text-2xl font-bold text-slate-950 flex items-center gap-2">
                  <span>🏛️</span> Interactive Achievement Board
                </h3>
              </div>

              {/* High-End Year Selector Switcher */}
              <div className="space-y-1.5 w-full lg:w-auto text-left lg:text-right">
                <span className="text-xs font-mono text-slate-500 font-bold uppercase tracking-wider block mb-1 leading-none">
                  📅 Select Financial Reporting Year:
                </span>
                <div className="inline-flex gap-1 p-1 bg-[#FAF9F5] border border-slate-200 rounded-none w-full lg:w-auto">
                  {[2026, 2027].map((yr) => (
                    <button
                      key={yr}
                      onClick={() => setSelectedYear(yr)}
                      className={`px-6 py-2.5 text-xs font-mono uppercase tracking-widest font-extrabold transition-all duration-200 cursor-pointer text-center w-1/2 lg:w-auto ${
                        selectedYear === yr
                          ? 'bg-[#A8892A] text-white shadow-sm'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                      }`}
                    >
                      {yr === 2026 ? "🗓️ 2026 (Active)" : "🎯 2027 (Targets)"}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Middle Row: Interactive Metric Cards Grid Matrix (Horizontal Broad Grid) */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6 text-left">
              {[
                {
                  id: 'evaluated',
                  label: 'Business Evaluated',
                  val: selectedYear === 2026 ? '27' : '60+',
                  desc: 'Entities vetted',
                  color: 'text-amber-600'
                },
                {
                  id: 'subsidiary',
                  label: 'Active Subsidiary',
                  val: selectedYear === 2026 ? '1' : '3',
                  desc: 'Trading operations',
                  color: 'text-[#A8892A]'
                },
                {
                  id: 'projects',
                  label: 'Running Project',
                  val: selectedYear === 2026 ? '3' : '5',
                  desc: 'Physical sites',
                  color: 'text-emerald-700'
                },
                {
                  id: 'employees',
                  label: 'Total Employees',
                  val: selectedYear === 2026 ? '4' : '12',
                  desc: 'Expert talent',
                  color: 'text-slate-900'
                },
                {
                  id: 'partners',
                  label: 'Allied Partners',
                  val: selectedYear === 2026 ? '36' : '50+',
                  desc: 'Professional allies',
                  color: 'text-purple-700'
                },
                {
                  id: 'valuation',
                  label: 'Total Valuation',
                  val: selectedYear === 2026 ? '£120k' : '£200k',
                  desc: selectedYear === 2026 ? 'Consolidated value' : '+66.7% Growth Target',
                  color: 'text-amber-800 animate-pulse'
                }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveMetricDetail(item.id)}
                  className={`p-4 border transition-all duration-350 text-left cursor-pointer relative flex flex-col justify-between overflow-hidden group select-none ${
                    activeMetricDetail === item.id
                      ? 'bg-[#FAF3E5] border-[#A8892A] shadow-md ring-1 ring-[#A8892A]/40'
                      : 'bg-[#FAFBF9] border-slate-200 hover:border-slate-400 hover:bg-[#FAF9F5]'
                  }`}
                >
                  <div className="space-y-1">
                    <span className="text-xs font-mono text-[#A8892A] uppercase tracking-wider font-extrabold block">
                      {item.label}
                    </span>
                    <p className="font-serif text-2xl md:text-3xl font-black text-slate-950 leading-tight">
                      {item.val}
                    </p>
                  </div>
                  <span className="text-xs font-mono text-slate-500 block mt-3 border-t border-slate-105 pt-2.5 font-bold truncate">
                    {item.desc}
                  </span>
                  {activeMetricDetail === item.id && (
                    <span className="absolute top-2.5 right-2.5 text-[#A8892A] text-xs font-mono">⚜️</span>
                  )}
                </button>
              ))}
            </div>

            {/* Bottom Row: Metric Breakdown Focal Screen Panel */}
            <div className="bg-[#FCFBF8] border-2 border-[#EAC282]/32 p-5 md:p-6 text-left relative">
              <span className="text-xs font-mono text-[#A8892A] uppercase tracking-widest block mb-2 font-bold flex items-center gap-1.5">
                <span>📜</span> METRIC DETAILS &amp; STRATEGY BRIEF ({selectedYear}):
              </span>
              <p className="text-sm md:text-base text-slate-800 leading-relaxed font-light min-h-[48px] animate-fade-in">
                {selectedYear === 2026 && activeMetricDetail === 'evaluated' && "SAAR board has successfully evaluated 27 prospective commercial businesses all across the UK since inception to uncover optimal turnarounds."}
                {selectedYear === 2026 && activeMetricDetail === 'valuation' && "Current baseline valuation of SAAR Group registered corporate assets, physical fittings, and computer systems is audited at £120,000."}
                {selectedYear === 2026 && activeMetricDetail === 'subsidiary' && "1 fully active operating subsidiary incorporated and trading: SAAR Convenience Stores Ltd, pioneering our unified logistics model."}
                {selectedYear === 2026 && activeMetricDetail === 'projects' && "3 active storefront and food-tech initiatives currently under high-street construction and staging development (Shawlands, Dunblane, Stirling)."}
                {selectedYear === 2026 && activeMetricDetail === 'employees' && "4 direct senior directors, procurement logisticians, and database administrators managing day-to-day administrative workloads."}
                {selectedYear === 2026 && activeMetricDetail === 'partners' && "36 allied professional service firms, legal experts, local surveyors, and capital allocators routing transaction flow to secure high-growth hubs."}

                {selectedYear === 2027 && activeMetricDetail === 'evaluated' && "Targeting 60+ rigorous M&A target assessments across pharmacies and key neighborhood retail assets in central Scotland."}
                {selectedYear === 2027 && activeMetricDetail === 'valuation' && "Targeting £200,000 group valuation, registering a massive +66.7% Year-on-Year growth target from our 2026 baseline through scale."}
                {selectedYear === 2027 && activeMetricDetail === 'subsidiary' && "Targeting 3 fully consolidated operating companies, bringing QSR and automated food-tech models into high-yield formats."}
                {selectedYear === 2027 && activeMetricDetail === 'projects' && "Scaling to 5 running storefront projects with automated shelf monitoring and last-mile logistics pipelines fully live."}
                {selectedYear === 2027 && activeMetricDetail === 'employees' && "Expanding the direct specialist team to 12 expert technicians, store managers, and system auditors in our central Glasgow office."}
                {selectedYear === 2027 && activeMetricDetail === 'partners' && "Scaling strategic professional alliances to 50+ partners, ensuring low-friction legal and administrative scalability."}
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================== */}
      {/* 2. CORE STRATEGIC EXPERIENCES BAR WITH EMOJIS */}
      {/* ========================================== */}
      <section className="bg-slate-950 text-[#FAF9F5] py-14 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          
          <div className="border-l-2 border-[#A8892A] pl-5 space-y-2">
            <div className="flex items-center gap-2">
              <Landmark className="w-5 h-5 text-[#A8892A] shrink-0" />
              <span className="font-serif text-4xl font-extrabold text-[#A8892A]">15+</span>
            </div>
            <span className="text-xs font-mono tracking-widest text-[#FAF9F5] uppercase font-bold block">
              🛠️ UK OPERATING EXPERIENCE
            </span>
            <p className="text-sm font-light text-slate-350 leading-relaxed">
              Specialized in High-Street local asset revitalization.
            </p>
          </div>

          <div className="border-l-2 border-[#A8892A] pl-5 space-y-2">
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-[#A8892A] shrink-0" />
              <span className="font-serif text-4xl font-extrabold text-[#A8892A]">35+</span>
            </div>
            <span className="text-xs font-mono tracking-widest text-[#FAF9F5] uppercase font-bold block">
              🌍 COUNTRIES COVERED
            </span>
            <p className="text-sm font-light text-slate-350 leading-relaxed">
              Global logistics, sourcing and acquisition standards.
            </p>
          </div>

          <div className="border-l-2 border-[#A8892A] pl-5 space-y-2">
            <div className="flex items-center gap-2">
              <Users2 className="w-5 h-5 text-[#A8892A] shrink-0" />
              <span className="font-serif text-4xl font-extrabold text-[#A8892A]">10+</span>
            </div>
            <span className="text-xs font-mono tracking-widest text-[#FAF9F5] uppercase font-bold block">
              🤝 ALLIED FIRMS
            </span>
            <p className="text-sm font-light text-slate-350 leading-relaxed">
              Law, Accounting, and private equity alliances.
            </p>
          </div>

          <div className="border-l-2 border-[#A8892A] pl-5 space-y-2">
            <div className="flex items-center gap-2">
              <Building2 className="w-5 h-5 text-[#A8892A] shrink-0" />
              <span className="font-serif text-4xl font-extrabold text-[#A8892A]">Multi</span>
            </div>
            <span className="text-xs font-mono tracking-widest text-[#FAF9F5] uppercase font-bold block">
              🏢 SECTOR EXPERTISE
            </span>
            <p className="text-sm font-light text-slate-350 leading-relaxed">
              Retail, properties, logistics, and F&amp;B channels.
            </p>
          </div>

        </div>
      </section>

      {/* ========================================== */}
      {/* 3. LITTLE ABOUT US                         */}
      {/* ========================================== */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#A8892A] font-extrabold block">
              🏢 CORPORATE BACKGROUND
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-slate-950 leading-tight">
              The Substance Behind Your Business
            </h2>
            <p className="text-slate-805 text-base md:text-lg font-light pt-2 leading-relaxed">
              SAAR Holdings is a Glasgow-based group specializing in M&amp;A commercial acquisitions, lease assigns, and standalone business optimization consulting. 
            </p>
            <p className="text-slate-805 text-sm leading-relaxed font-light">
              Our executive board matches 15+ years of direct UK trade operations with international compliance oversight spanning over 35 countries. From food and boutique hospitality outlets to medicine sourcing, regional property, q-commerce deliveries, and corporate law structures — we have overseen diverse sectors to scale value safely.
            </p>

            <div className="pt-6">
              <a 
                href="/leadership" 
                className="inline-flex items-center text-xs font-bold text-[#A8892A] uppercase tracking-widest hover:translate-x-1.5 transition-all"
              >
                Board Room Leadership Profiles 🏛️ <ArrowRight size={14} className="ml-2" />
              </a>
            </div>
          </div>

          {/* Target Sectors Grid */}
          <div className="lg:col-span-6 bg-[#FAF9F5] border border-slate-205 p-8 md:p-10 relative shadow-sm">
            <div className="absolute top-0 left-0 bg-slate-950 text-[#FAF9F5] text-xs font-mono font-bold uppercase tracking-widest px-4 py-1.5">
              💼 HOLDINGS NETWORK SCOPE
            </div>
            
            <h3 className="font-serif text-2xl font-bold text-slate-950 mb-4 mt-4 flex items-center gap-2">
              <span>🎯</span> Sourced Sectors &amp; Arenas
            </h3>
            <p className="text-xs text-slate-700 font-mono mb-8 uppercase font-bold">Standard turnaround strategies implemented in the UK:</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Food, Hospitality & F&B", desc: "Premium cafes, bakeries, quick service, virtual brands.", icon: "🌯", subIcon: "☕" },
                { title: "Specialised Healthcare", desc: "Medical clinics, assisted living, pharmacy, compliance audits.", icon: "🏥", subIcon: "🧪" },
                { title: "Property & Lettings", desc: "Commercial high-streets, leasehold purchases, portfolio turnarounds.", icon: "🏢", subIcon: "🔑" },
                { title: "Logistics & Q-Commerce", desc: "Auto-shelf dark storage nodes, dispatch driver meshes, courier logistics.", icon: "🚚", subIcon: "📦" },
                { title: "Professional Services", desc: "B2B SaaS software licensing, corporate law, cashbook compliance.", icon: "⚖️", subIcon: "💼" }
              ].map((sec, idx) => (
                <div key={idx} className="bg-white p-5 border border-slate-205 shadow-xs flex items-start gap-4 hover:border-[#A8892A]/40 transition-colors">
                  <div className="p-2 bg-[#FAF7F2] border border-slate-200 text-lg shrink-0 w-11 h-11 flex items-center justify-center">
                    {sec.icon}
                  </div>
                  <div>
                    <h4 className="font-serif font-extrabold text-slate-950 text-sm mb-1">{sec.title}</h4>
                    <p className="text-sm text-slate-800 font-light leading-relaxed">{sec.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ========================================== */}
      {/* 4. VALUE CREATION PATHWAYS (3 CORES) BRIEF */}
      {/* ========================================== */}
      <section className="bg-white border-t border-b border-slate-205 py-24">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#A8892A] font-extrabold block mb-3">
              💎 ADVANTAGES STRUCTURED
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-slate-950">
              Three Strategic Pathways
            </h2>
            <p className="text-slate-800 font-light text-base max-w-xl mx-auto mt-4 leading-relaxed">
              We operate three cohesive routes to optimize, stabilize, or purchase local UK high-street businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "⚜️ 01",
                title: "Operational Management",
                desc: "Assuming full day-to-day command under tailored Management Service Covenants. You keep assets and secure stable yields, bypassing overhead bottlenecks.",
                link: "/services?tab=operational-management"
              },
              {
                step: "⚜️ 02",
                title: "Strategic Acquisitions",
                desc: "Direct corporate purchases of distressed or undervalue commercial properties. Flexible deferred or baseline buyout deals with clean liability separations.",
                link: "/services?tab=strategic-acquisitions"
              },
              {
                step: "⚜️ 03",
                title: "Business Services",
                desc: "Project-based audits, food and layout modernizations, plus proprietary SAAR-INT automated shelf and delivery software integrations.",
                link: "/services?tab=business-services"
              }
            ].map((p, idx) => (
              <div key={idx} className="bg-[#FAFBF9] border border-slate-205 p-8 flex flex-col justify-between shadow-xs hover:border-[#A8892A]/40 transition-all">
                <div className="space-y-4">
                  <span className="block font-mono text-xl font-extrabold text-[#A8892A]">{p.step}</span>
                  <h3 className="font-serif text-lg font-bold text-slate-950">{p.title}</h3>
                  <p className="text-slate-805 text-sm leading-relaxed font-light pb-4">{p.desc}</p>
                </div>
                <a 
                  href={p.link}
                  className="inline-flex items-center text-xs font-bold text-[#A8892A] uppercase tracking-wider group mt-4"
                >
                  Analyze Service 🔎 <ChevronRight size={14} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================== */}
      {/* 5. REIMAGINED STRATEGIC PARTNER NETWORKS  */}
      {/* ========================================== */}
      <section className="py-24 max-w-6xl mx-auto px-6 text-center animate-fade-in">
        <div className="bg-slate-950 text-white p-8 sm:p-14 border border-slate-900 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#A8892A]/5 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-900 border border-[#A8892A]/20 mb-3">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#A8892A] font-extrabold flex items-center gap-1.5">
                <span>⚜️</span> SYNERGY &amp; PROFESSIONAL ALLIANCES
              </span>
            </div>
            <h3 className="font-serif text-3xl md:text-5xl font-extrabold tracking-tight mb-4 leading-tight text-white">
              Strategic Partner Network Sourcing
            </h3>
            <p className="text-slate-300 text-sm md:text-base font-light leading-relaxed">
              SAAR Holdings maintains direct alliances with premium corporate entities. By structuring mutual pipelines with qualified legal counselors, tax professionals, and logistics architects, we systematically de-risk high-street commercial turnarounds.
            </p>
          </div>
 
          {/* Reimagined Partner Directory Grid with golden round indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-5xl mx-auto mb-14">
            
            {/* Law Allies */}
            <div className="bg-slate-900/60 border border-slate-800 p-6 space-y-4 hover:border-[#A8892A]/40 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-slate-800 group-hover:bg-[#A8892A] transition-colors"></div>
              
              <div className="flex items-center gap-3">
                {/* Circular gold emblem aligned with Holdings */}
                <div className="w-11 h-11 rounded-full border border-[#A8892A]/35 bg-slate-950 flex items-center justify-center shrink-0">
                  <span className="text-lg">⚖️</span>
                </div>
                <div>
                  <span className="block text-base font-bold text-[#FAF9F5]">2+ Law Firms</span>
                  <span className="text-xs font-mono text-slate-300 uppercase tracking-widest font-extrabold block">Legal Structuring</span>
                </div>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed font-light">
                Drafting commercial leaseholds, coordinating TUPE workforce agreements, and managing municipal licensing clearances.
              </p>
              <div className="pt-3 border-t border-slate-800 text-xs text-slate-400 font-mono">
                📍 Geographic: Glasgow, Edinburgh
              </div>
            </div>

            {/* Tax Allies */}
            <div className="bg-slate-900/60 border border-slate-800 p-6 space-y-4 hover:border-[#A8892A]/40 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-slate-800 group-hover:bg-[#A8892A] transition-colors"></div>
              
              <div className="flex items-center gap-3">
                {/* Circular gold emblem aligned with Holdings */}
                <div className="w-11 h-11 rounded-full border border-[#A8892A]/35 bg-slate-950 flex items-center justify-center shrink-0">
                  <span className="text-lg">📊</span>
                </div>
                <div>
                  <span className="block text-base font-bold text-[#FAF9F5]">2+ Accounting Firms</span>
                  <span className="text-xs font-mono text-[#A8892A] uppercase tracking-widest font-extrabold block">Group Treasury</span>
                </div>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed font-light">
                Structuring cap-ex allowances, handling combined corporation returns, auditing assets, and automating ledgers.
              </p>
              <div className="pt-3 border-t border-slate-800 text-xs text-slate-400 font-mono">
                📍 Geographic: Scotland Unified
              </div>
            </div>

            {/* Specialist/Prop Allies */}
            <div className="bg-slate-900/60 border border-slate-800 p-6 space-y-4 hover:border-[#A8892A]/40 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-slate-805 group-hover:bg-[#A8892A] transition-colors"></div>
              
              <div className="flex items-center gap-3">
                {/* Circular gold emblem aligned with Holdings */}
                <div className="w-11 h-11 rounded-full border border-[#A8892A]/35 bg-slate-950 flex items-center justify-center shrink-0">
                  <span className="text-lg">⚙️</span>
                </div>
                <div>
                  <span className="block text-base font-bold text-[#FAF9F5]">20+ Experts</span>
                  <span className="text-xs font-mono text-slate-300 uppercase tracking-widest font-extrabold block">Operations Team</span>
                </div>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed font-light">
                Installing hardware cold-chain nodes, real-time computerized inventory systems, and safety compliance audits.
              </p>
              <div className="pt-3 border-t border-slate-800 text-xs text-slate-400 font-mono">
                📍 Sourcing: Protech &amp; Logistics
              </div>
            </div>
  
          </div>
 
          <a 
            href="/partners" 
            className="inline-flex px-8 py-4 bg-[#A8892A] hover:bg-[#8F7422] text-[#FAF9F5] text-xs font-bold uppercase tracking-widest transition-all hover:translate-y-[-2px] border border-[#8F7422] shadow-md font-mono"
          >
            🤝 Review Strategic Partner Prospectus
          </a>
        </div>
      </section>

    </div>
  );
}
