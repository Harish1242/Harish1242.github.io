import React from 'react';
import { MapPin, Mail, Phone, Globe, ChevronRight, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-100 py-20 px-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-slate-800 pb-16 mb-12">
        
        {/* Company Pitch and Brand Column */}
        <div className="md:col-span-5 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-10 bg-white text-slate-950 flex items-center justify-center font-serif text-lg font-extrabold border border-slate-700 tracking-tighter">
              SA
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg tracking-wider text-slate-50">SAAR Holdings</span>
              <span className="text-[9px] font-mono tracking-widest text-[#A8892A] uppercase font-bold">
                Strategic Governance &amp; Turnarounds
              </span>
            </div>
          </div>
          
          <p className="text-sm text-slate-400 font-light leading-relaxed max-w-sm">
            We Build. We Hold. We Grow. <br />
            SAAR Holdings is a UK-based strategic investment and operational management company.
          </p>

          <div className="space-y-3.5 text-xs font-mono text-slate-400 pt-3">
            <div className="flex items-start gap-3">
              <MapPin size={15} className="text-[#A8892A] shrink-0 mt-0.5" />
              <span>27 Dalziel Crescent, Cambuslang, Glasgow, G72 7UR, United Kingdom</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={15} className="text-[#A8892A] shrink-0" />
              <a href="mailto:operations@saarholdings.co.uk" className="hover:underline">operations@saarholdings.co.uk</a>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={15} className="text-[#A8892A] shrink-0" />
              <a href="tel:+447359574175" className="hover:underline">+44 (0) 7359 574175</a>
            </div>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="text-xs font-mono uppercase font-bold text-[#A8892A] tracking-wider">Navigation</h4>
          <ul className="space-y-3.5 text-xs text-slate-400 font-light">
            <li>
              <a href="#home" className="hover:text-white transition-all flex items-center gap-1.5">
                <ChevronRight size={12} className="text-slate-650" /> Home Overview
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-white transition-all flex items-center gap-1.5">
                <ChevronRight size={12} className="text-slate-650" /> Value Pathways
              </a>
            </li>
            <li>
              <a href="#holdings" className="hover:text-white transition-all flex items-center gap-1.5">
                <ChevronRight size={12} className="text-slate-650" /> Holdings &amp; Subsidiaries
              </a>
            </li>
            <li>
              <a href="#partners" className="hover:text-white transition-all flex items-center gap-1.5">
                <ChevronRight size={12} className="text-slate-650" /> Strategic Partner Network
              </a>
            </li>
            <li>
              <a href="#leadership" className="hover:text-white transition-all flex items-center gap-1.5">
                <ChevronRight size={12} className="text-slate-650" /> Board &amp; Executives
              </a>
            </li>
            <li>
              <a href="#inquiry" className="hover:text-white transition-all flex items-center gap-1.5">
                <ChevronRight size={12} className="text-slate-650" /> Inquiry Desk
              </a>
            </li>
          </ul>

          <div className="pt-4 space-y-2">
            <h4 className="text-[10px] font-mono uppercase font-bold text-[#A8892A] tracking-wider">Social Channels</h4>
            <div className="flex items-center gap-4 text-slate-400">
              <a href="https://www.linkedin.com/company/saar-holdings-uk-ltd/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1 text-xs font-mono">
                <Linkedin size={15} /> LinkedIn
              </a>
              <a href="https://www.instagram.com/saarholdings?igsh=MWw1aDYwYnlic2t2aA%3D%3D" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1 text-xs font-mono">
                <Instagram size={15} /> Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Corporate Records Column */}
        <div className="md:col-span-4 space-y-4">
          <h4 className="text-xs font-mono uppercase font-bold text-[#A8892A] tracking-wider">UK Registrations</h4>
          
          <div className="space-y-4 font-mono text-[10px]">
            <div className="bg-slate-900 p-4 border border-slate-800">
              <span className="text-[#A8892A] block font-bold mb-1 uppercase tracking-wider">Parent Venture</span>
              <span className="text-slate-100 block font-semibold text-xs font-sans">SAAR Holdings Ltd</span>
              <span className="text-slate-400 block font-light mt-1">Company No: SC878352</span>
              <span className="text-slate-500 block font-light">Registered in Scotland, UK</span>
            </div>

            <div className="bg-slate-900 p-4 border border-slate-800">
              <span className="text-[#A8892A] block font-bold mb-1 uppercase tracking-wider">Active Subsidiary</span>
              <span className="text-slate-100 block font-semibold text-xs font-sans">SAAR Convenience Store Limited</span>
              <span className="text-slate-400 block font-light mt-1">Company No: SC890711</span>
              <span className="text-slate-500 block font-light">Registered in Scotland, UK</span>
            </div>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 font-light gap-6">
        <p>&copy; {currentYear} SAAR Holdings Ltd. All rights reserved across UK jurisdictions.</p>
        <p className="font-mono text-[10px] text-slate-600 text-center md:text-right max-w-md">
          Registered in Scotland. Content is meant only as a strategic directory brief and does not constitute a direct offer for public retail licensing.
        </p>
      </div>
    </footer>
  );
}
