"use client";
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  theme: 'dark' | 'light';
  setTheme: React.Dispatch<React.SetStateAction<'dark' | 'light'>>;
  lang: 'id' | 'en';
  setLang: React.Dispatch<React.SetStateAction<'id' | 'en'>>;
}

export default function Navbar({ theme, setTheme, lang, setLang }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Updated Scroll spy excluding 'process'
      const sections = ['home', 'about', 'services', 'products', 'whychooseus', 'portfolio', 'tech', 'testimonials', 'pricing', 'faq', 'contact'];
      let currentSection = 'home';

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            currentSection = sectionId;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Excluded "Proses" / "Process" links
  const navLinks = lang === 'id'
    ? [
      { label: 'Layanan', id: 'services' },
      { label: 'Produk', id: 'products' },
      { label: 'Portofolio', id: 'portfolio' },
      { label: 'FAQ', id: 'faq' }
    ]
    : [
      { label: 'Services', id: 'services' },
      { label: 'Products', id: 'products' },
      { label: 'Portfolio', id: 'portfolio' },
      { label: 'FAQ', id: 'faq' }
    ];

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const toggleLanguage = () => {
    setLang(prev => prev === 'id' ? 'en' : 'id');
  };

  const isDark = theme === 'dark';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${isScrolled
      ? isDark
        ? 'bg-slate-950/80 backdrop-blur-xl border-slate-900/80 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.3)]'
        : 'bg-white/80 backdrop-blur-xl border-slate-200/80 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.05)]'
      : 'bg-transparent border-transparent py-6'
      }`}>
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-500 flex items-center justify-center text-white font-extrabold text-2xl shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
            Z
          </div>
          <span className={`text-2xl font-black tracking-tight font-heading group-hover:text-blue-500 transition-colors ${isDark ? 'text-white' : 'text-slate-800'
            }`}>
            Zelixa<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">Tech</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className={`hidden lg:flex items-center gap-8 font-medium ${isDark ? 'text-slate-300' : 'text-slate-600'
          }`}>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`text-sm hover:text-blue-500 transition-colors relative py-1 ${activeSection === link.id
                ? 'text-blue-500 font-bold'
                : isDark ? 'hover:text-white' : 'hover:text-slate-900'
                }`}
            >
              {link.label}
              {activeSection === link.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full animate-pulse"></span>
              )}
            </a>
          ))}
        </nav>

        {/* Controls (Theme, Language Flag, CTA) */}
        <div className="flex items-center gap-4">

          {/* Language Toggle Capsule showing flags clearly */}


          {/* Theme Switcher Sun/Moon */}
          <button
            onClick={toggleTheme}
            className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-all cursor-pointer ${isDark
              ? 'bg-slate-900 border-slate-800 text-amber-400 hover:border-slate-700'
              : 'bg-white border-slate-200 text-indigo-650 hover:bg-slate-50 shadow-sm'
              }`}
            aria-label="Toggle Theme Mode"
          >
            {isDark ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          {/* Contact Sales button */}
          <a
            href="#contact"
            className="hidden md:inline-flex px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white font-semibold text-xs hover:opacity-95 transition-all shadow-md shadow-blue-500/10 hover:-translate-y-0.5"
          >
            {lang === 'id' ? 'Hubungi Kami' : 'Contact Sales'}
          </a>

          {/* Mobile Drawer Trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 transition-colors cursor-pointer ${isDark ? 'text-white hover:text-blue-400' : 'text-slate-800 hover:text-blue-600'}`}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className={`lg:hidden fixed inset-0 top-20 z-40 border-t animate-fade-in-up ${isDark ? 'bg-slate-950/95 border-slate-900' : 'bg-slate-50/95 border-slate-200'
          } backdrop-blur-2xl`}>
          <nav className="flex flex-col p-8 gap-6 text-lg font-medium text-left">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center justify-between border-b pb-2 transition-colors ${activeSection === link.id
                  ? 'text-blue-500 font-bold border-blue-500/20'
                  : isDark
                    ? 'text-slate-200 border-slate-900 hover:text-blue-400'
                    : 'text-slate-700 border-slate-200 hover:text-blue-600'
                  }`}
              >
                <span>{link.label}</span>
                <span className="text-slate-500 text-sm">→</span>
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 px-6 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-center shadow-lg"
            >
              {lang === 'id' ? 'Hubungi Kami' : 'Contact Sales'}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
