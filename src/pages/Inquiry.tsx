import React, { useState } from 'react';
import { Mail, CheckCircle, ArrowRight, Phone, ShieldCheck, Linkedin, Instagram, Landmark, Send, FileText, CheckCircle2 } from 'lucide-react';

export default function Inquiry() {
  const [targetCompany, setTargetCompany] = useState<'holdings' | 'convenience'>('holdings');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [purpose, setPurpose] = useState('jv');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Dynamic selector options
  const purposeOptions = targetCompany === 'holdings' 
    ? [
        { value: 'jv', label: 'Joint-Venture Strategy or Corporate Acquisition' },
        { value: 'prospectus', label: 'Strategic Partner Network Sourcing / Prospectus' },
        { value: 'consulting', label: 'Standalone Management & Business Consulting' },
        { value: 'general', label: 'Holding Corporate Administration' }
      ]
    : [
        { value: 'leasing', label: 'Landlord & Retail Site Lease Proposals' },
        { value: 'supply', label: 'Supply Chain, Wholesaler or Vendor Onboarding' },
        { value: 'licensing', label: 'SAAR-INT Automated Software Licensing (B2B SaaS)' },
        { value: 'rider', label: 'Courier Fleet / Rider Logistics Collaborations' }
      ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && email.trim() && message.trim()) {
      setSubmitted(true);
    }
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setPhone('');
    setPurpose(purposeOptions[0].value);
    setMessage('');
    setSubmitted(false);
  };

  return (
    <div id="inquiry" className="scroll-mt-20 bg-[#FAF9F5] py-20 min-h-screen text-slate-800 animate-fade-in text-left">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Elite Executive Header */}
        <div className="text-left max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 bg-white border border-[#EAC282]/40">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#A8892A] font-extrabold flex items-center gap-1.5">
              <span>⚜️</span> SECURE M&amp;A INTAKE GATEWAY
            </span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Executive Inquiry Desk
          </h1>
          <p className="text-slate-705 font-light text-lg md:text-xl mt-4 leading-relaxed">
            Submit formal proposals or prospectus applications directly to the Glasgow administrative desk. Your transmissions regarding assets, lease assignments, or supplier integrations are categorized and processed securely in compliance with corporate indices.
          </p>
        </div>

        {/* Reimagined Grid Structure */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Left Side: Dynamic Workspace Input */}
          <div className="lg:col-span-8 bg-white border border-slate-200 shadow-sm p-8 md:p-12 relative overflow-hidden">
            {/* Visual Header ribbon */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#A8892A]"></div>
            
            {submitted ? (
              <div className="text-center py-16 space-y-6 animate-fade-in">
                <div className="w-20 h-20 bg-[#FAF6EE] text-[#A8892A] border border-[#EAC282]/40 rounded-full flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle size={40} className="stroke-[1.5]" />
                </div>
                <div className="space-y-3">
                  <span className="text-xs font-mono font-bold tracking-widest text-[#A8892A] uppercase block">Ledger ID Code: SC-1092-A</span>
                  <h3 className="font-serif text-3xl font-bold text-slate-950">Intake Dossier Transmitted</h3>
                  <p className="text-sm text-slate-700 leading-relaxed max-w-lg mx-auto font-light">
                    Thank you, <strong>{name}</strong>. Your executive inquiry regarding <strong>{purposeOptions.find(o => o.value === purpose)?.label}</strong> has been logged inside our Glasgow administrative repository. A board advisor will inspect the dossier within 48 business hours.
                  </p>
                </div>
                <div className="pt-6">
                  <button 
                    onClick={resetForm}
                    className="px-8 py-4 bg-slate-950 hover:bg-[#A8892A] text-[#FAF9F5] text-xs font-mono uppercase tracking-widest cursor-pointer shadow-md transition-all font-bold"
                  >
                    🔄 Compile New Intake Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* STEP 1: SELECT COGNIZANT TARGET */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full border border-[#A8892A]/35 bg-[#FAF6EE] flex items-center justify-center shrink-0">
                      <span className="font-mono text-xs font-bold text-[#A8892A]">1</span>
                    </div>
                    <label className="text-xs font-mono uppercase text-slate-950 font-extrabold tracking-widest">
                      Specify Target Enterprise Sector
                    </label>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => {
                        setTargetCompany('holdings');
                        setPurpose('jv');
                      }}
                      className="p-5 text-left border cursor-pointer transition-all duration-300 relative border-[#A8892A] bg-[#FAF9F5] shadow-xs"
                    >
                      {targetCompany === 'holdings' && (
                        <div className="absolute top-4 right-4 w-4 h-4 rounded-full bg-[#A8892A] flex items-center justify-center text-white text-xs font-bold font-mono">✓</div>
                      )}
                      <span className="block text-base font-serif font-extrabold text-[#A8892A]">⚖️ SAAR Holdings Ltd.</span>
                      <span className="text-sm text-slate-700 block mt-1.5 font-light leading-relaxed">Parent acquisitions, strategic partnerships, M&amp;A consulting, and joint-ventures.</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setTargetCompany('convenience');
                        setPurpose('leasing');
                      }}
                      className="p-5 text-left border cursor-pointer transition-all duration-300 relative border-slate-205 hover:bg-slate-50"
                    >
                      {targetCompany === 'convenience' && (
                        <div className="absolute top-4 right-4 w-4 h-4 rounded-full bg-[#A8892A] flex items-center justify-center text-white text-xs font-bold font-mono">✓</div>
                      )}
                      <span className="block text-base font-serif font-extrabold text-slate-950">🛒 SAAR Convenience Ltd.</span>
                      <span className="text-sm text-slate-700 block mt-1.5 font-light leading-relaxed">High-street storefront leases, wholesale supply lines, and software licensing.</span>
                    </button>
                  </div>
                </div>

                {/* STEP 2: PROFESSIONAL IDENTIFICATION DATA */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 border-t border-slate-100 pt-6">
                    <div className="w-7 h-7 rounded-full border border-[#A8892A]/35 bg-[#FAF6EE] flex items-center justify-center shrink-0">
                      <span className="font-mono text-xs font-bold text-[#A8892A]">2</span>
                    </div>
                    <label className="text-xs font-mono uppercase text-slate-950 font-extrabold tracking-widest">
                      Executive &amp; Corporate Identity Details
                    </label>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-xs font-mono uppercase text-slate-400 font-bold">Contact / Company Name <span className="text-[#A8892A]">*</span></label>
                      <input 
                        type="text" 
                        required
                        value={name} 
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Campbell Operations Ltd."
                        className="w-full bg-[#FAF9F6] border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#A8892A] focus:bg-white text-slate-900 transition-colors placeholder-slate-400 font-mono"
                      />
                    </div>
                    <div className="space-y-2">
                       <label className="block text-xs font-mono uppercase text-slate-400 font-bold">Secure Work Email <span className="text-[#A8892A]">*</span></label>
                      <input 
                        type="email" 
                        required
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. m&a@campbell.co.uk"
                        className="w-full bg-[#FAF9F6] border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#A8892A] focus:bg-white text-slate-900 transition-colors placeholder-slate-400 font-mono"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                    <div className="space-y-2">
                      <label className="block text-xs font-mono uppercase text-slate-400 font-bold">Telephone Number <span className="text-[#A8892A]">*</span></label>
                      <input 
                        type="tel" 
                        required
                        value={phone} 
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. +44 141 552 4499"
                        className="w-full bg-[#FAF9F6] border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#A8892A] focus:bg-white text-slate-900 transition-colors placeholder-slate-400 font-mono"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-xs font-mono uppercase text-slate-400 font-bold">Inquiry Pathway Option <span className="text-[#A8892A]">*</span></label>
                      <select
                        value={purpose}
                        onChange={(e) => setPurpose(e.target.value)}
                        className="w-full bg-[#FAF9F6] border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#A8892A] focus:bg-white text-slate-900 transition-colors appearance-none min-h-[46px] font-mono"
                      >
                        {purposeOptions.map(opt => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* STEP 3: ASSIGNMENT DOSSIER */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 border-t border-slate-100 pt-6">
                    <div className="w-7 h-7 rounded-full border border-[#A8892A]/35 bg-[#FAF6EE] flex items-center justify-center shrink-0">
                      <span className="font-mono text-xs font-bold text-[#A8892A]">3</span>
                    </div>
                    <label className="text-xs font-mono uppercase text-slate-950 font-extrabold tracking-widest">
                      Proposal Scope &amp; Case Study Details
                    </label>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-mono uppercase text-[#A8892A] font-extrabold">Write Dossier Content <span className="text-[#A8892A]">*</span></label>
                    <textarea 
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Specify your portfolio criteria, commercial lease metrics, address details, logistics alignment scope, or partner network qualifications..."
                      className="w-full bg-[#FAF9F6] border border-slate-200 p-4 text-sm outline-none focus:border-[#A8892A] focus:bg-white text-slate-900 transition-colors resize-none leading-relaxed placeholder-slate-400 font-mono"
                    />
                  </div>
                </div>

                {/* Secure Data Protection Footer */}
                <div className="bg-[#FAF9F6] border border-slate-200/90 p-4 flex gap-3 text-sm leading-relaxed text-slate-700">
                  <ShieldCheck size={18} className="text-[#A8892A] shrink-0 mt-0.5" />
                  <p className="font-light">
                    <strong className="font-bold text-slate-950 block mb-0.5 tracking-wide uppercase text-xs font-mono">Institutional Compliance Notice:</strong> 
                    Submissions are safely encoded and logged directly under secure Scottish Corporate indices. Absolute privacy and full confidentiality are contractually guaranteed prior to evaluation.
                  </p>
                </div>

                {/* Action button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-10 py-4 bg-slate-950 hover:bg-[#A8892A] text-[#FAF9F5] text-xs font-mono uppercase tracking-widest transition-all shadow-md flex items-center justify-center gap-2.5 cursor-pointer ml-auto font-bold"
                  >
                    🚀 TRANSMIT SECURE DOSSIER <Send size={12} />
                  </button>
                </div>

              </form>
            )}
          </div>

          {/* Right Column: Premium Contacts Card */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Glasgow HQ Direct Terminal Box */}
            <div className="bg-slate-950 text-[#FAF9F5] border border-slate-900 shadow-xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#A8892A]/5 rounded-full blur-2xl pointer-events-none"></div>
              
              <h4 className="font-serif font-extrabold text-[#FAF9F5] text-xl border-b border-[#A8892A]/30 pb-3 mb-6 flex items-center gap-2">
                <span>🏰</span> Glasgow Connect Desk
              </h4>
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block font-bold">CONNECT OR CONTACT</span>
                  <div className="flex items-center gap-2 bg-slate-900/60 p-3.5 border border-slate-800">
                    <Phone size={14} className="text-[#A8892A]" />
                    <a href="tel:+447359574175" className="text-base font-mono font-extrabold text-white hover:text-[#A8892A] hover:underline transition-colors">
                      +44 (0) 7359 574175
                    </a>
                  </div>
                  <p className="text-xs text-slate-505 font-light font-mono leading-normal">*Mon–Fri, 9:00 AM – 5:00 PM GMT (Administrative Office)</p>
                </div>

                <div className="space-y-2 border-t border-slate-900 pt-6">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block font-bold">OFFICIAL TRANSMISSIONS</span>
                  <div className="flex items-start gap-2.5">
                    <Mail size={14} className="text-[#A8892A] mt-1 shrink-0" />
                    <div className="space-y-1.5">
                      <a href="mailto:operations@saarholdings.co.uk" className="text-sm font-bold text-white hover:text-[#A8892A] hover:underline block font-mono">
                        operations@saarholdings.co.uk
                      </a>
                      <a href="mailto:director@saarholdings.co.uk" className="text-sm text-slate-400 hover:text-[#A8892A] hover:underline block font-mono">
                        director@saarholdings.co.uk
                      </a>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 border-t border-slate-900 pt-6">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block font-bold">BOARD COMPLIANCE DIRECTORY</span>
                  <p className="text-sm text-slate-402 font-light leading-relaxed">
                    All formal communications are systematically checked prior to submission to Shareholders Mr. Raza and Mr. Manderna.
                  </p>
                </div>
              </div>
            </div>

            {/* Corporate Media Channels */}
            <div className="bg-white border border-slate-205 p-8 space-y-5 shadow-xs">
              <span className="text-xs font-mono text-slate-505 uppercase tracking-widest block font-bold">BOARD STREAMS</span>
              <h5 className="font-serif font-extrabold text-slate-950 text-base">Follow Administrative Milestones</h5>
              
              <div className="flex flex-col gap-3">
                <a 
                  href="https://www.linkedin.com/company/saar-holdings-uk-ltd/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-2.5 p-3.5 border border-slate-200 hover:border-[#A8892A] text-xs text-slate-800 font-mono transition-all font-bold uppercase tracking-wider bg-[#FAF9F6]"
                >
                  <Linkedin size={15} className="text-[#A8892A]" /> CONNECT via LinkedIn
                </a>
                
                <a 
                  href="https://www.instagram.com/saarholdings?igsh=MWw1aDYwYnlic2t2aA%3D%3D" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-2.5 p-3.5 border border-slate-200 hover:border-[#A8892A] text-xs text-slate-800 font-mono transition-all font-bold uppercase tracking-wider bg-[#FAF9F6]"
                >
                  <Instagram size={15} className="text-[#A8892A]" /> ARCHIVE on Instagram
                </a>
              </div>

              <div className="text-xs text-slate-450 font-mono italic pt-2 leading-normal">
                *Adhering strictly to Scottish Corporate Guidelines.*
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
