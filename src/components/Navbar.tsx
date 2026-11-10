import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Globe, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const location = useLocation();
  const path = location.pathname;
  const { t, i18n } = useTranslation();
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLangMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-[1200px] mx-auto bg-black/40 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] rounded-full px-6 py-3 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-2 flex-1">
          <img src="/images/logo_cropped.png" alt="AgroSathi" className="h-10 w-auto object-contain" />
          <span className="text-xl font-bold text-[#2D5B5B] tracking-tight">Agro Sathi</span>
        </div>
        
        {/* Navigation - Properly Centered */}
        <div className="hidden lg:flex items-center justify-center">
          <div className="flex items-center gap-8 text-[15px] font-medium text-white/90 bg-black/20 backdrop-blur-xl px-8 py-3 rounded-full border border-white/10 shadow-lg">
            <Link to="/" className={`transition-colors ${path === '/' ? 'text-brand-accent font-bold' : 'hover:text-brand-accent'}`}>{t('nav.home')}</Link>
            <Link to="/services" className={`transition-colors ${path === '/services' ? 'text-brand-accent font-bold' : 'hover:text-brand-accent'}`}>{t('nav.services')}</Link>
            <Link to="/dashboard" className={`transition-colors ${path === '/dashboard' ? 'text-brand-accent font-bold' : 'hover:text-brand-accent'}`}>{t('nav.dashboard')}</Link>
            <Link to="/pricing" className={`transition-colors ${path === '/pricing' ? 'text-brand-accent font-bold' : 'hover:text-brand-accent'}`}>{t('nav.pricing')}</Link>
            <Link to="/about" className={`transition-colors ${path === '/about' ? 'text-brand-accent font-bold' : 'hover:text-brand-accent'}`}>{t('nav.about')}</Link>
            <Link to="/contact" className={`transition-colors ${path === '/contact' ? 'text-brand-accent font-bold' : 'hover:text-brand-accent'}`}>{t('nav.contact')}</Link>
          </div>
        </div>

        {/* Action */}
        <div className="flex justify-end items-center gap-4 flex-1 relative">
          
          {/* Language Switcher */}
          <div className="relative">
            <button 
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-black/30 hover:bg-black/50 border border-white/10 rounded-full text-white/90 text-sm font-medium transition-colors"
            >
              <Globe className="w-4 h-4 text-brand-accent" />
              <span>{i18n.language === 'kn' ? '🇮🇳 ಕನ್ನಡ' : '🇺🇸 EN'}</span>
              <ChevronDown className="w-3 h-3 text-white/50" />
            </button>
            
            {langMenuOpen && (
              <div className="absolute top-full right-0 mt-2 w-32 bg-[#0a1f12]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl overflow-hidden z-50">
                <button onClick={() => changeLanguage('en')} className="w-full text-left px-4 py-2.5 text-sm text-white/90 hover:bg-brand-accent hover:text-[#0a1f12] font-medium transition-colors">🇺🇸 English</button>
                <button onClick={() => changeLanguage('kn')} className="w-full text-left px-4 py-2.5 text-sm text-white/90 hover:bg-brand-accent hover:text-[#0a1f12] font-medium transition-colors">🇮🇳 ಕನ್ನಡ</button>
              </div>
            )}
          </div>

          <button className="hidden sm:inline-flex bg-brand-accent hover:bg-[#a5db40] text-brand-dark font-bold text-sm px-6 py-3 rounded-full shadow-lg transition-transform hover:scale-105">
            {t('nav.getStarted')}
          </button>
        </div>
      </div>
    </nav>
  );
}
