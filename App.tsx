import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

// Page Imports
import Home from './pages/Home';
import Services from './pages/Services';
import Holdings from './pages/Holdings';
import Partners from './pages/Partners';
import Leadership from './pages/Leadership';
import Inquiry from './pages/Inquiry';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<string>('home');

  useEffect(() => {
    const handleHashChange = () => {
      // Extract hash path, stripping any query parameters (like ?tab=)
      const fullHash = window.location.hash.substring(1) || 'home';
      const cleanHash = fullHash.split('?')[0];

      const validPages = ['home', 'services', 'holdings', 'partners', 'leadership', 'inquiry'];
      if (validPages.includes(cleanHash)) {
        setCurrentPage(cleanHash);
      } else {
        setCurrentPage('home');
      }
      
      // Auto scroll to top of viewport on virtual route transfer
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    window.addEventListener('hashchange', handleHashChange);
    // Initial parse on paint
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Simple state router rendering map
  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'services':
        return <Services />;
      case 'holdings':
        return <Holdings />;
      case 'partners':
        return <Partners />;
      case 'leadership':
        return <Leadership />;
      case 'inquiry':
        return <Inquiry />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FCFCFD] text-slate-800 selection:bg-[#EBD4E9] selection:text-[#3D1F0D] flex flex-col justify-between">
      
      {/* Dynamic Multi-Page Navigation Header */}
      <Header 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen} 
        currentPage={currentPage}
      />

      {/* Main Dynamic Viewport Mount */}
      <main className="flex-grow">
        {renderCurrentPage()}
      </main>

      {/* Compliant Multi-Column Regulatory Footer */}
      <Footer />

    </div>
  );
}
