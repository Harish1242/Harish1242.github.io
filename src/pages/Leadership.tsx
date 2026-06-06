import React, { useState } from 'react';
import { LEADERSHIP_PROFILES } from '../data/companyData';
import { Sparkles, ShieldCheck, Mail, Briefcase, GraduationCap, MapPin, ChevronRight, Award, Fingerprint, Network } from 'lucide-react';

export default function Leadership() {
  const [boardType, setBoardType] = useState<'holdings' | 'convenience'>('holdings');

  return (
    <div id="leadership" className="scroll-mt-20 bg-[#FAF9F5] py-16 animate-fade-in text-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Editorial Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 bg-white border border-[#EAC282]/40">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#A8892A] font-extrabold flex items-center gap-1.5">
              <span>🏛️</span> GOVERNANCE &amp; TRUST CUSTODY
            </span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Corporate Leadership Board
          </h1>
          <p className="text-slate-700 font-light text-lg md:text-xl mt-4 leading-relaxed">
            A highly balanced, legally compliant team combining UK convenience store procurement assets, elite commercial lease negotiating expertise, global logistics audits, and advanced database engineering credentials.
          </p>
        </div>

        {/* Board of Directors Switcher Tabs */}
        <div className="flex border-b border-slate-200 pb-2 mb-12 gap-2 text-left">
          <button
            onClick={() => setBoardType('holdings')}
            className={`px-5 py-3 text-xs font-mono uppercase tracking-widest relative transition-all cursor-pointer font-bold border-t border-x ${
              boardType === 'holdings' 
                ? 'text-white bg-[#A8892A] border-[#A8892A]' 
                : 'text-slate-500 hover:text-slate-800 bg-white border-slate-200'
            }`}
          >
            SAAR Holdings Board
          </button>
          <button
            onClick={() => setBoardType('convenience')}
            className={`px-5 py-3 text-xs font-mono uppercase tracking-widest relative transition-all cursor-pointer font-bold border-t border-x ${
              boardType === 'convenience' 
                ? 'text-white bg-[#A8892A] border-[#A8892A]' 
                : 'text-slate-500 hover:text-slate-800 bg-white border-slate-200'
            }`}
          >
            SAAR Convenience Board
          </button>
        </div>

        {/* Profile grids matching selected board Type */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {LEADERSHIP_PROFILES.filter(leader => leader.boards.includes(boardType)).map((leader, idx) => {
            const displayRole = boardType === 'holdings' ? leader.role : leader.roleSubsidiary;
            const displayDescription = boardType === 'holdings' ? leader.descriptionHoldings : leader.descriptionSubsidiary;
            return (
              <div 
                key={idx} 
                className="bg-white border border-slate-200 p-8 relative flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:border-[#A8892A]/50 group"
              >
                {/* Premium Accent Top-Bar */}
                <span className="absolute top-0 left-0 right-0 h-[3px] bg-slate-100 group-hover:bg-[#A8892A] transition-colors"></span>
                
                {/* Specialized Tag Badges */}
                {leader.name === 'Miss Pratibha' && (
                  <span className="absolute top-0 right-0 py-1 px-3 bg-slate-900 text-[#A8892A] font-mono text-xs uppercase tracking-widest font-extrabold border-l border-b border-slate-800">
                    💻 TECHNICAL ARCHITECT
                  </span>
                )}
                {leader.name === 'Mr. Harish Manderna' && (
                  <span className="absolute top-0 right-0 py-1 px-3 bg-slate-900 text-[#A8892A] font-mono text-xs uppercase tracking-widest font-extrabold border-l border-b border-slate-800">
                    📊 FINANCE PRINCIPAL
                  </span>
                )}

                <div className="space-y-5">
                  <div className="flex items-center gap-4">
                    {/* Golden Circle Emblem Initial Frame, matching wrap/morning styles */}
                    <div className="w-14 h-14 rounded-full border border-[#A8892A]/35 bg-[#FAF6EE] flex items-center justify-center font-serif font-extrabold text-[#A8892A] text-lg">
                      {leader.initials}
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl font-extrabold text-slate-950 leading-tight">
                        {leader.name}
                      </h3>
                      <p className="text-[#A8892A] font-mono text-xs uppercase font-bold tracking-widest mt-1">
                        {displayRole}
                      </p>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-xs text-slate-500 font-mono tracking-wide uppercase border-b border-dashed border-slate-200 pb-1 font-bold">
                    👥 SHAREHOLDER STATUS: <strong className="font-extrabold text-slate-800">{leader.shareholder.replace('Shareholder · ', '')}</strong>
                  </span>

                  <p className="text-slate-705 text-base leading-relaxed font-light">
                    {displayDescription}
                  </p>

                  <div className="pt-4 border-t border-slate-150 space-y-3 bg-[#FAFBF9] p-4 border text-left">
                    <div className="flex items-start gap-2 text-sm text-left">
                      <Briefcase size={14} className="text-[#A8892A] shrink-0 mt-0.5" />
                      <p className="font-light text-slate-700 text-left">
                        <strong className="font-bold text-slate-950 block font-sans uppercase text-xs tracking-wider mb-0.5 text-left">Core Specialization:</strong>
                        {leader.specialization}
                      </p>
                    </div>

                    <div className="flex items-start gap-2 text-sm text-left">
                      <MapPin size={14} className="text-[#A8892A] shrink-0 mt-0.5" />
                      <p className="font-light text-slate-700 text-left">
                        <strong className="font-bold text-slate-950 block font-sans uppercase text-xs tracking-wider mb-0.5 text-left">Geographic Accountabilities:</strong>
                        {leader.geographic}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-150 mt-6 md:flex flex-row justify-between items-center bg-slate-50 p-4 border border-dashed border-slate-200">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-widest font-extrabold block">VERIFIED SIGN-OFF MATRIX:</span>
                  <div className="flex flex-wrap gap-1 mt-2 md:mt-0">
                    {leader.credentials.map((cred, cIdx) => (
                      <span key={cIdx} className="bg-white font-mono text-xs text-[#A8892A] px-2.5 py-1 border border-slate-250 uppercase font-bold">
                        {cred.split(' · ')[0]}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
