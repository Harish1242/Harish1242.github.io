import React, { useState, useEffect } from 'react';
import { HO_SERVICES } from '../data/companyData';
import { 
  Building2, 
  Landmark, 
  Sparkles, 
  Scale, 
  ShieldCheck, 
  DollarSign, 
  ArrowUpRight, 
  Zap, 
  Workflow, 
  ShieldAlert, 
  CheckCircle2, 
  Layers, 
  FileText, 
  ChevronRight, 
  ArrowRight,
  TrendingUp,
  Award
} from 'lucide-react';

export default function Services() {
  const [activeTab, setActiveTab] = useState<string>('operational-management');

  // Sync tab with URL parameters cleanly
  useEffect(() => {
    const checkUrl = () => {
      const match = window.location.hash.split('?tab=')[1];
      if (match && ['operational-management', 'strategic-acquisitions', 'business-services'].includes(match)) {
        setActiveTab(match);
      }
    };
    checkUrl();
    window.addEventListener('hashchange', checkUrl);
    return () => window.removeEventListener('hashchange', checkUrl);
  }, []);

  const activeService = HO_SERVICES.find(s => s.id === activeTab) || HO_SERVICES[0];

  // Map icons for display
  const getIconForService = (id: string, size = 24) => {
    switch (id) {
      case 'operational-management':
        return <Landmark size={size} className="text-[#A8892A]" />;
      case 'strategic-acquisitions':
        return <Building2 size={size} className="text-[#A8892A]" />;
      case 'business-services':
        return <Sparkles size={size} className="text-[#A8892A]" />;
      default:
        return <Layers size={size} className="text-[#A8892A]" />;
    }
  };

  // Map service badge symbol
  const getEmojiForService = (id: string) => {
    switch (id) {
      case 'operational-management': return '🏰';
      case 'strategic-acquisitions': return '🏛️';
      case 'business-services': return '💎';
      default: return '🛡️';
    }
  };

  // Flowchart steps map
  const getStepsForService = (id: string) => {
    switch (id) {
      case 'operational-management':
        return [
          { phase: "STAGE I", title: "Site Audits & Energy Saving", desc: "Evaluate rota budgets, lease liabilities, and execute electricity sourcing contract renegotiations." },
          { phase: "STAGE II", title: "Supply Chain Alignment", desc: "Proxy buying lines onto United Wholesale Scotland contracts to slash grocery input bills by 15-25%." },
          { phase: "STAGE III", title: "SAAR-INT Active Setup", desc: "Integrate Electronic Shelf Labels (ESL) and trigger real-time AI inventory pricing matrix." }
        ];
      case 'strategic-acquisitions':
        return [
          { phase: "STAGE I", title: "Diligence & Lease Assignation", desc: "Pre-evaluate commercial leases, legal liabilities, and coordinate local licensing clearances." },
          { phase: "STAGE II", title: "Asset Liquid Valuation", desc: "Formulate a fair buyout rate encompassing equipment, inventory, and prime physical high-street site values." },
          { phase: "STAGE III", title: "Integration & Modernisation", desc: "Bypass typical brokerage friction, complete payout, absorb staff in clean legacy preservation." }
        ];
      case 'business-services':
        return [
          { phase: "STAGE I", title: "Consultative Margin Audit", desc: "Identify profit leaks, structural wastage rates, and local compliance gaps on-site." },
          { phase: "STAGE II", title: "Platform Integration", desc: "Inject digital presence (Deliveroo, UberEats, JustEat) with bespoke API inventory linkages." },
          { phase: "STAGE III", title: "Operations Optimisation", desc: "Empower localized management with the standard SAAR-INT predictive software suite." }
        ];
      default:
        return [];
    }
  };

  return (
    <div id="services" className="scroll-mt-20 bg-[#FAF9F5] py-20 animate-fade-in text-slate-800 font-sans leading-relaxed">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* ========================================== */}
        {/* 1. ELEGANT EXECUTIVES HEADER               */}
        {/* ========================================== */}
        <div className="max-w-4xl mb-16 relative text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#A8892A]/30 text-xs font-mono uppercase tracking-[0.2em] text-[#A8892A] font-extrabold shadow-xs mb-4">
            <span>⚜️</span> CAPITAL ALLOCATION &amp; VALUE CREATION PATHWAYS
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight leading-none">
            Corporate Pathways to Modernise <span className="font-serif italic text-[#A8892A]">High-Street</span> Operations
          </h1>
          <p className="text-slate-650 font-light text-base md:text-lg mt-4 leading-relaxed max-w-3xl">
            We collaborate directly with UK business owners. Whether you seek a reliable passive yield without the daily burden of physical management, or require a swift, high-value corporate exit — our frameworks deliver structured outcomes.
          </p>
        </div>

        {/* ========================================== */}
        {/* 2. DYNAMIC NAVIGATION PREVIEWS (THE HEROES)*/}
        {/* ========================================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {HO_SERVICES.map((serv) => {
            const isActive = activeTab === serv.id;
            return (
              <button
                key={serv.id}
                onClick={() => {
                  setActiveTab(serv.id);
                  window.location.hash = `services?tab=${serv.id}`;
                }}
                className={`p-6 text-left border relative transition-all duration-300 rounded-none cursor-pointer text-slate-900 group ${
                  isActive
                    ? 'bg-slate-950 text-white border-slate-950 shadow-xl scale-[1.01]'
                    : 'bg-white text-slate-800 border-slate-205 hover:bg-slate-50 hover:border-[#A8892A]/40 hover:shadow-md'
                }`}
              >
                {/* Symbol Tagline top-right */}
                <div className="absolute top-4 right-4 flex items-center gap-1">
                  <span className="text-sm">{getEmojiForService(serv.id)}</span>
                  <span className={`text-xs font-mono tracking-widest font-extrabold ${isActive ? 'text-[#A8892A]' : 'text-slate-400'}`}>
                    {serv.id === 'operational-management' ? 'PATHWAY A' : (serv.id === 'strategic-acquisitions' ? 'PATHWAY B' : 'PATHWAY C')}
                  </span>
                </div>

                {/* Icon wrapper - Golden Round Badge aligned with Holdings aesthetic */}
                <div className={`w-11 h-11 rounded-full border flex items-center justify-center mb-5 shrink-0 transition-all ${
                  isActive 
                    ? 'bg-[#A8892A]/10 border-[#A8892A] shadow-inner' 
                    : 'bg-[#FAF6EE] border-[#A8892A]/35 group-hover:border-[#A8892A]'
                }`}>
                  {getIconForService(serv.id, 16)}
                </div>

                <h3 className="font-serif text-lg font-bold mb-2 group-hover:text-[#A8892A] transition-colors">{serv.title}</h3>
                <p className={`text-xs leading-relaxed font-light ${isActive ? 'text-slate-300' : 'text-slate-500'}`}>
                  {serv.tagline}
                </p>

                <div className="mt-5 flex items-center gap-1 text-xs font-mono font-bold uppercase tracking-wider">
                  <span className={isActive ? 'text-[#A8892A]' : 'text-slate-700'}>Select Pathway</span>
                  <ChevronRight size={12} className={`transition-transform duration-300 ${isActive ? 'translate-x-1 text-[#A8892A]' : 'text-slate-400 group-hover:translate-x-1'}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* ========================================== */}
        {/* 3. CORE DETAILED BLUEPRINT CONFIGURATION   */}
        {/* ========================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 bg-white border border-slate-200 shadow-sm p-6 md:p-10 relative">
          
          {/* Main informational grid */}
          <div className="lg:col-span-8 space-y-8 text-left">
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 border-b border-slate-100 pb-6">
              <div className="w-14 h-14 bg-[#FAF5EE] border border-[#A8892A]/30 flex items-center justify-center shrink-0">
                {getIconForService(activeService.id, 24)}
              </div>
              <div>
                <span className="text-xs font-mono tracking-[0.25em] text-[#A8892A] uppercase font-extrabold block">
                  ACTIVE DETAILED BLUEPRINT
                </span>
                <h4 className="font-serif text-2xl md:text-3xl font-extrabold text-slate-950 mt-0.5">
                  {getEmojiForService(activeService.id)} {activeService.title}
                </h4>
              </div>
            </div>

            <div className="space-y-4 text-left">
              <h5 className="text-xs font-mono uppercase tracking-[0.15em] text-[#A8892A] font-extrabold">
                MODEL OVERVIEW
              </h5>
              <p className="text-slate-800 text-[0.95rem] leading-relaxed font-light">
                {activeService.overview}
              </p>
            </div>

            {/* INTEGRATED PROGRESS PIPELINE (ROADMAP VISUAL) */}
            <div className="pt-6 border-t border-slate-100 text-left">
              <h5 className="text-xs font-mono uppercase tracking-[0.15em] text-[#A8892A] font-extrabold mb-6 flex items-center gap-2">
                <span>🔄</span> STEP-BY-STAGE INTEGRATION TIMELINE
              </h5>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {getStepsForService(activeService.id).map((step, sIdx) => (
                  <div key={sIdx} className="bg-[#FAF9F5] border border-slate-200 p-5 relative group hover:border-[#A8892A]/40 transition-colors text-left">
                    {/* Badge */}
                    <span className="absolute top-4 right-4 font-mono text-xs font-extrabold text-[#A8892A] bg-[#A8892A]/10 px-2 py-0.5">
                      {step.phase}
                    </span>
                    <div className="text-xs font-mono font-bold text-slate-400 mb-2">Step 0{sIdx + 1}</div>
                    <h6 className="font-serif font-extrabold text-slate-900 text-sm mb-2 leading-snug">
                      {step.title}
                    </h6>
                    <p className="text-xs text-slate-606 font-light leading-normal">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* WHAT WE DELIVER CHECKLIST - RICH AND APPEAL */}
            <div className="pt-6 border-t border-slate-100 text-left">
              <h5 className="text-xs font-mono uppercase tracking-[0.15em] text-[#A8892A] font-extrabold mb-5 flex items-center gap-2">
                <span>🏆</span> GUARANTEED DELIVERABLES &amp; TARGET PARAMETERS
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {activeService.bullets.map((del, dIdx) => {
                  const [boldPart, normalPart] = del.split(': ');
                  return (
                    <div 
                      key={dIdx} 
                      className="bg-white border border-slate-150 p-4 shadow-2xs hover:border-[#A8892A]/30 transition-all duration-200 relative group flex items-start gap-3.5"
                    >
                      <div className="p-1.5 bg-[#FAF5EE] border border-slate-200 text-[#A8892A] group-hover:bg-slate-950 group-hover:text-white transition-colors mt-0.5">
                        <CheckCircle2 size={13} strokeWidth={3} />
                      </div>
                      <div className="text-xs text-slate-700 leading-relaxed">
                        <strong className="font-serif font-bold text-slate-900 block mb-0.5 uppercase tracking-wide">
                          {boldPart}
                        </strong>
                        <span className="font-light text-slate-600">
                          {normalPart}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Majestic terms sidebar covenant */}
          <div className="lg:col-span-4 bg-[#FAFDFB] border border-emerald-800/10 p-8 flex flex-col justify-between shadow-xs relative">
            <div className="absolute top-0 right-0 py-1.5 px-4 bg-emerald-950 text-emerald-100 text-xs font-mono uppercase tracking-widest font-extrabold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              INSTITUTIONAL COVENANT
            </div>

            <div className="space-y-6 pt-6 text-left">
              <div className="flex items-center gap-2 text-emerald-800 text-left">
                <ShieldCheck size={18} strokeWidth={2.5} />
                <span className="text-xs font-mono uppercase tracking-wider font-extrabold text-left">
                  Sovereign Structuring
                </span>
              </div>
              
              {activeService.dealStructure && (
                <div className="bg-slate-50 p-4 border border-slate-205 text-left">
                  <h4 className="text-xs font-mono uppercase font-extrabold text-slate-500 tracking-wider mb-1.5 block text-left">
                    The Deal Structure:
                  </h4>
                  <p className="text-xs text-slate-800 leading-relaxed font-light text-left">
                    {activeService.dealStructure}
                  </p>
                </div>
              )}

              <div className="bg-[#FFFDF9] p-6 border-l-4 border-[#A8892A] shadow-xs text-left">
                <h4 className="text-xs font-mono uppercase font-extrabold text-[#A8892A] tracking-widest mb-2.5 block text-left">
                  👉 IDEAL FOR:
                </h4>
                <p className="text-base md:text-lg text-slate-950 font-serif italic font-bold leading-relaxed text-left">
                  "{activeService.idealFor}"
                </p>
              </div>

              {/* Security parameters */}
              <div className="pt-4 border-t border-slate-100 space-y-2 text-xs font-mono text-slate-600 font-bold text-left">
                <p className="flex items-center gap-2">
                  <span className="text-emerald-600">✔</span> Absolute Lease Protection
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-emerald-600">✔</span> Certified Scottish High-Street Legals
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-emerald-600">✔</span> Zero Asset Brokerage Complexities
                </p>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-200 mt-8">
              <a 
                href="#inquiry" 
                className="w-full bg-slate-950 hover:bg-[#A8892A] text-white text-center py-3.5 text-xs font-bold uppercase tracking-widest block transition-colors shadow-md"
              >
                Inquire &amp; Setup Advisory ⚜️
              </a>
            </div>
          </div>

        </div>

        {/* ========================================== */}
        {/* 4. COMPARISON STRUCTURAL MATRIX            */}
        {/* ========================================== */}
        <div className="mt-16 text-left">
          <div className="mb-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#A8892A] font-extrabold block">
              TRANSPARENT FRAMEWORKS COMPARISON
            </span>
            <h4 className="font-serif text-xl font-bold text-slate-900 mt-1">
              Pathways Side-by-Side Comparison
            </h4>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm bg-white border border-slate-205">
              <thead>
                <tr className="bg-slate-950 text-[#FAF9F5] font-mono font-bold uppercase text-xs tracking-wider border-b border-slate-900">
                  <th className="p-4">Key Criteria</th>
                  <th className="p-4 border-l border-slate-800">Operational Takeover (MSA)</th>
                  <th className="p-4 border-l border-slate-800">Strategic Acquisition</th>
                  <th className="p-4 border-l border-slate-800">Business Services</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-150 text-slate-700 font-light">
                <tr>
                  <td className="p-4 font-bold text-slate-900">Ownership Transfer</td>
                  <td className="p-4 border-l border-slate-150">None. You retain 100% legal ownership.</td>
                  <td className="p-4 border-l border-slate-150">Full commercial transfer of physical assets.</td>
                  <td className="p-4 border-l border-slate-150">None. Work on a milestone project basis.</td>
                </tr>
                <tr className="bg-[#FAFBF9]/60">
                  <td className="p-4 font-bold text-slate-900">Guaranteed Return</td>
                  <td className="p-4 border-l border-slate-150 text-emerald-800 font-semibold">Fixed rent or guaranteed profit level.</td>
                  <td className="p-4 border-l border-slate-150 text-slate-800">Immediate cash valuation or hybrid terms.</td>
                  <td className="p-4 border-l border-slate-150 text-slate-600">N/A (Consulting fees on retainers).</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-900">Daily Management Role</td>
                  <td className="p-4 border-l border-slate-150 text-[#A8892A] font-bold">Absolutely zero. Handover to SAAR.</td>
                  <td className="p-4 border-l border-slate-150">None. Absolute legal exit completed.</td>
                  <td className="p-4 border-l border-slate-150">You operate; our experts advise &amp; inject code.</td>
                </tr>
                <tr className="bg-[#FAFBF9]/60">
                  <td className="p-4 font-bold text-slate-900">Technology Sourcing</td>
                  <td className="p-4 border-[#CBD5E1] border-l">Full injection of standard SAAR-INT tools.</td>
                  <td className="p-4 border-[#CBD5E1] border-l">Complete restructuration of backend tools.</td>
                  <td className="p-4 border-[#CBD5E1] border-l font-medium text-slate-950">Standalone website &amp; delivery gateway APIs.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
