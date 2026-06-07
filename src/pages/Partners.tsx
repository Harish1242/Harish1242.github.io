import React from 'react';
import { PARTNER_NETWORK } from '../data/companyData';
import { ShieldCheck, CheckCircle, Scale, Calculator, Briefcase, Activity, Building2, Users, FlameKindling, Sparkles } from 'lucide-react';

export default function Partners() {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Law Firms':
        return <Scale className="w-4 h-4 text-[#A8892A]" />;
      case 'Accounting Firms':
        return <Calculator className="w-4 h-4 text-[#A8892A]" />;
      case 'Business Finance Providers':
        return <Briefcase className="w-4 h-4 text-[#A8892A]" />;
      case 'Healthcare Professionals':
        return <Activity className="w-4 h-4 text-[#A8892A]" />;
      case 'Industry Specialists':
        return <Building2 className="w-4 h-4 text-[#A8892A]" />;
      case 'Business Consultants':
        return <Users className="w-4 h-4 text-[#A8892A]" />;
      default:
        return <ShieldCheck className="w-4 h-4 text-[#A8892A]" />;
    }
  };

  const getCategoryDescription = (category: string) => {
    switch (category) {
      case 'Law Firms':
        return 'Drafting secure leaseholds and corporate structuring agreements.';
      case 'Accounting Firms':
        return 'Structuring centralized cashbook operations and tax diligence.';
      case 'Business Finance Providers':
        return 'Unlocking equipment leases and acquisition asset leverages.';
      case 'Healthcare Professionals':
        return 'Sourcing compliance frameworks and high-quality care audits.';
      case 'Industry Specialists':
        return 'Integrating hardware cold-chains and modern Protech standards.';
      case 'Business Consultants':
        return 'Mentoring staff and driving transaction origination pipelines.';
      default:
        return 'Securing high-integrity operations and alliances.';
    }
  };

  const models = [
    {
      name: "Model A: Per Assignment",
      desc: "Get paid for each specific task or project. Suits specialists who prefer a well-defined operational scope without long-term commitments.",
      badge: "🎯 TASK BASED",
      points: [
        "Single, defined engagements",
        "Your standard commercial rates",
        "No ongoing corporate overheads",
        "Ideal for specialist advisory"
      ]
    },
    {
      name: "Model B: Monthly Retainer",
      desc: "Fixed monthly fee for ongoing administrative support, providing revenue predictability and first-priority access to new transactions.",
      badge: "🔄 PACED CORRIDOR",
      points: [
        "Predictable recurring cash flow",
        "Priority review on new deals",
        "Bundled service scope packages",
        "Deep operational integration"
      ]
    },
    {
      name: "Model C: Profit Share / Equity",
      desc: "Take an equity stake inside our portfolio companies you support. Fully aligns long-term performance incentives with business success.",
      badge: "⚜️ HIGH SYNERGY",
      points: [
        "Direct equity participation",
        "Profit-share allocation mechanisms",
        "Future capital appreciation potential",
        "Strategic group partner status"
      ]
    }
  ];

  return (
    <div id="partners" className="scroll-mt-20 bg-[#FAF9F5] py-16 animate-fade-in text-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Elegant Editorial Header */}
        <div className="max-w-3xl mb-16 text-left relative">
          <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 bg-white border border-[#EAC282]/40">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#A8892A] font-extrabold flex items-center gap-1.5">
              <span>⚜️</span> SYNERGY &amp; CAPITAL SYNDICATION
            </span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Strategic Partner Network Sourcing
          </h1>
          <p className="text-slate-700 font-light text-lg md:text-xl mt-4 leading-relaxed">
            SAAR Holdings establishes low-friction partnerships with prominent professional service firms across the UK. Every acquisition node and high-street lease we secure triggers high-quality professional instructions — we funnel this guaranteed transactional volume directly to our partner network.
          </p>
        </div>

        {/* Visual blocks displaying partner numbers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 text-left">
          {PARTNER_NETWORK.map((pn, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-slate-200 p-6 relative flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:border-[#A8892A]/60 group overflow-hidden"
            >
              {/* Premium Top Micro-Bar */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-slate-200 group-hover:bg-[#A8892A] transition-colors"></div>
              
              <div>
                <div className="flex items-center justify-between mb-5 pb-3 border-b border-slate-100">
                  {/* Golden Shield Symbol wrapper resembling the custom brand indicators of WRAP/MC */}
                  <div className="w-10 h-10 rounded-full border border-[#A8892A]/35 bg-[#FAF6EE] flex items-center justify-center shrink-0">
                    {getCategoryIcon(pn.category)}
                  </div>
                  <span className="font-mono text-xs text-[#A8892A] bg-[#FAF6EE] px-2.5 py-1 border border-[#EAC282]/30 font-bold uppercase tracking-wider leading-none mt-0.5">
                    {pn.count} {pn.count === 1 ? 'Active Partner' : 'Active Allies'}
                  </span>
                </div>
                
                <h3 className="font-serif text-lg font-bold text-slate-900 group-hover:text-[#A8892A] leading-tight mb-2.5 transition-colors">
                  {pn.category}
                </h3>
                
                <p className="text-base text-slate-600 font-light leading-relaxed mb-5">
                  {getCategoryDescription(pn.category)}
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-100 text-left">
                <span className="text-xs font-mono uppercase tracking-[0.1em] text-slate-400 block mb-2.5 font-bold">
                  Sourcing Duties &amp; Pipeline:
                </span>
                <div className="space-y-2">
                  {pn.roles.map((r, rIdx) => (
                    <div key={rIdx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#A8892A]"></span>
                      <span className="text-xs font-mono text-slate-700 font-bold">{r}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Engagement Models Segment */}
        <div className="bg-white border border-slate-200 p-8 md:p-12 shadow-xs mb-14 text-left relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#A8892A]"></div>
          
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#A8892A] font-extrabold block mb-2">ENGAGEMENT ARCHITECTURE</span>
            <h3 className="font-serif text-3xl font-extrabold text-slate-950">Flexible Syndication Models</h3>
            <p className="text-sm text-slate-500 font-mono mt-1 uppercase">Tailoring legal, advisory, and financial integration paths:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {models.map((mod, mIdx) => (
              <div key={mIdx} className="bg-[#FAF9F6] border border-slate-200 p-6 flex flex-col justify-between relative group hover:border-[#A8892A] transition-colors">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4 border-b border-slate-200 pb-3">
                    <h4 className="font-serif font-extrabold text-slate-950 text-base">{mod.name.replace('Model ', '')}</h4>
                    <span className="text-xs font-mono font-bold bg-[#A8892A]/10 text-[#A8892A] px-2 py-0.5 border border-[#EAC282]/32">
                      {mod.badge}
                    </span>
                  </div>
                  <p className="text-base text-slate-700 leading-relaxed font-light mb-6">{mod.desc}</p>
                </div>
                <ul className="space-y-2.5 pt-4 border-t border-slate-200 bg-white p-4">
                  {mod.points.map((p, pIdx) => (
                    <li key={pIdx} className="text-xs font-mono text-slate-800 flex items-center gap-2">
                      <CheckCircle size={11} className="text-[#A8892A] shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits panel summary */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 bg-white border border-slate-200 p-8 md:p-12 shadow-xs text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#FAF9F5] rotate-45 transform translate-x-12 -translate-y-12"></div>
          <div className="lg:col-span-8 space-y-4">
            <h4 className="font-serif font-bold text-slate-950 text-2xl flex items-center gap-2">
              <span>💎</span> Co-Investment Syndication
            </h4>
            <p className="text-base text-slate-700 leading-relaxed font-light">
              One of our network's most compelling benefits is strategic access to premium asset buyouts. When we structure high-street asset acquisitions or property restorations under our proprietary turnaround models, we approach our healthcare, hospitality, and legal partners to invest equity alongside us, yielding combined statutory fees and portfolio appreciation.
            </p>
          </div>
          <div className="lg:col-span-4 flex items-center lg:justify-end">
            <a 
              href="#inquiry" 
              className="w-full lg:w-auto px-8 py-4 bg-[#A8892A] hover:bg-[#8F7422] text-white text-sm font-bold uppercase tracking-widest block font-sans text-center transition-all duration-300 hover:shadow-md border border-[#8F7422]"
            >
              Request Partner Discussion
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
