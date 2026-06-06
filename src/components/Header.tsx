import React from 'react';
import { Menu, X, Landmark, ArrowRight, Linkedin, Instagram } from 'lucide-react';

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  currentPage: string;
}

export default function Header({ mobileMenuOpen, setMobileMenuOpen, currentPage }: HeaderProps) {
  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Value Pathways' },
    { href: '#holdings', label: 'Holdings & Subsidiaries' },
    { href: '#partners', label: 'Partner Network' },
    { href: '#leadership', label: 'Board & Leadership' }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#FFFFFF]/90 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Elegant Logo Mark */}
        <a href="#home" className="flex items-center gap-2 group">
          <span className="font-serif font-black text-4xl md:text-[2.65rem] tracking-tight text-slate-950">
            SAAR
          </span>
        </a>

        {/* Desktop Links Grid */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = currentPage === link.href.substring(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className={`text-[0.8rem] font-medium uppercase tracking-wider transition-all duration-200 ${
                  isActive
                    ? 'text-slate-900 border-b-2 border-slate-900 pb-1 font-semibold'
                    : 'text-slate-500 hover:text-slate-950 hover:translate-y-[-1px]'
                }`}
              >
                {link.label}
              </a>
            );
          })}
          
          <div className="h-6 w-[1px] bg-slate-200"></div>
          
          {/* Social icons */}
          <div className="flex items-center gap-4 text-slate-400">
            <a 
              href="https://www.linkedin.com/company/saar-holdings-uk-ltd/" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-slate-950 transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="https://www.instagram.com/saarholdings?igsh=MWw1aDYwYnlic2t2aA%3D%3D" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-slate-950 transition-colors"
            >
              <Instagram size={18} />
            </a>
          </div>

          <a
            href="#inquiry"
            className="text-[0.75rem] font-bold uppercase tracking-wider bg-slate-900 text-white px-5 py-3 hover:bg-slate-800 transition-all shadow-sm rounded-none"
          >
            Inquiry Desk
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-slate-900 hover:text-[#A8892A] transition-all"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-200 shadow-xl p-8 flex flex-col gap-6 animate-fade-in z-50">
          {navLinks.map((link) => {
            const isActive = currentPage === link.href.substring(1);
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm font-bold uppercase tracking-wider text-slate-700 hover:text-slate-950 ${
                  isActive ? 'text-[#A8892A]' : ''
                }`}
              >
                {link.label}
              </a>
            );
          })}
          
          <div className="h-[1px] bg-slate-100 my-1"></div>
          
          <div className="flex gap-6 justify-center text-slate-500">
            <a href="https://www.linkedin.com/company/saar-holdings-uk-ltd/" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-slate-950 text-xs font-mono font-bold uppercase">
              <Linkedin size={16} /> LinkedIn
            </a>
            <a href="https://www.instagram.com/saarholdings?igsh=MWw1aDYwYnlic2t2aA%3D%3D" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-slate-950 text-xs font-mono font-bold uppercase">
              <Instagram size={16} /> Instagram
            </a>
          </div>

          <a
            href="#inquiry"
            onClick={() => setMobileMenuOpen(false)}
            className="text-center font-bold text-xs uppercase tracking-widest bg-slate-900 text-white py-3.5 hover:bg-[#A8892A]"
          >
            Inquiry Desk
          </a>
        </div>
      )}
    </nav>
  );
}
