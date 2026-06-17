import React from 'react';
import { localizedData } from '../services/mockData';

interface SectionProps {
  theme?: 'dark' | 'light';
  lang: 'id' | 'en';
}

export default function Footer({ theme = 'dark', lang }: SectionProps) {
  const data = localizedData[lang];
  const isDark = theme === 'dark';

  return (
    <footer className={`pt-20 pb-8 border-t px-6 relative overflow-hidden transition-colors duration-500 ${
      isDark ? 'bg-slate-950 border-slate-900' : 'bg-slate-50 border-slate-200'
    }`}>
      
      {/* Glow highlight */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16 relative z-10 text-left">
        
        {/* Brand Information column */}
        <div className="lg:col-span-4 space-y-6">
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-500 flex items-center justify-center text-white font-extrabold text-xl shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
              Z
            </div>
            <span className={`text-xl font-black tracking-tight font-heading ${isDark ? 'text-white' : 'text-slate-800'}`}>
              Zelixa<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Tech</span>
            </span>
          </a>
          
          <p className={`text-sm leading-relaxed font-light ${isDark ? 'text-slate-400' : 'text-slate-650'}`}>
            {data.uiText.footerDesc}
          </p>

          {/* Social Icons Mockup */}
          <div className="flex gap-3 pt-2">
            {["𝕏", "💼", "📸", "🐙"].map((soc, idx) => (
              <a 
                key={idx} 
                href="#" 
                className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-colors ${
                  isDark 
                    ? 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-blue-400' 
                    : 'bg-white border-slate-200 text-slate-500 hover:border-slate-350 hover:text-blue-550 shadow-sm'
                }`}
              >
                {soc}
              </a>
            ))}
          </div>
        </div>

        {/* Links Column 1: Company */}
        <div className="lg:col-span-2 space-y-6">
          <h4 className={`font-bold text-sm font-heading tracking-wide uppercase ${isDark ? 'text-white' : 'text-slate-800'}`}>
            {lang === 'id' ? 'Perusahaan' : 'Company'}
          </h4>
          <ul className={`space-y-3.5 text-sm font-light ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            <li><a href="#about" className="hover:text-blue-500 transition-colors">{lang === 'id' ? 'Tentang Kami' : 'About Us'}</a></li>
            <li><a href="#portfolio" className="hover:text-blue-500 transition-colors">{lang === 'id' ? 'Studi Kasus' : 'Case Studies'}</a></li>
            <li><a href="#process" className="hover:text-blue-500 transition-colors">{lang === 'id' ? 'Alur Kerja' : 'Our Process'}</a></li>
            <li><a href="#pricing" className="hover:text-blue-500 transition-colors">{lang === 'id' ? 'Paket Harga' : 'Pricing Plans'}</a></li>
          </ul>
        </div>

        {/* Links Column 2: Legal */}
        <div className="lg:col-span-2 space-y-6">
          <h4 className={`font-bold text-sm font-heading tracking-wide uppercase ${isDark ? 'text-white' : 'text-slate-800'}`}>
            {lang === 'id' ? 'Hukum' : 'Legal'}
          </h4>
          <ul className={`space-y-3.5 text-sm font-light ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            <li><a href="#" className="hover:text-blue-500 transition-colors">{lang === 'id' ? 'Kebijakan Privasi' : 'Privacy Policy'}</a></li>
            <li><a href="#" className="hover:text-blue-500 transition-colors">{lang === 'id' ? 'Ketentuan Layanan' : 'Terms of Service'}</a></li>
            <li><a href="#" className="hover:text-blue-500 transition-colors">SLA Agreement</a></li>
            <li><a href="#" className="hover:text-blue-500 transition-colors">{lang === 'id' ? 'Audit Keamanan' : 'Security Audits'}</a></li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div className="lg:col-span-4 space-y-6">
          <h4 className={`font-bold text-sm font-heading tracking-wide uppercase ${isDark ? 'text-white' : 'text-slate-800'}`}>
            {data.uiText.footerNewsletterTitle}
          </h4>
          <p className={`text-sm font-light leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-655'}`}>
            {data.uiText.footerNewsletterDesc}
          </p>
          
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="name@email.com" 
              className={`flex-1 rounded-xl px-4 py-3 text-xs border focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 ${
                isDark 
                  ? 'bg-slate-900 border-slate-800 text-white placeholder-slate-600' 
                  : 'bg-white border-slate-200 text-slate-900 placeholder-slate-400'
              }`} 
            />
            <button className="px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-xs hover:opacity-95 transition-all shadow-md cursor-pointer shrink-0">
              {data.uiText.footerSubscribeBtn}
            </button>
          </div>
        </div>

      </div>

      <div className={`max-w-[1200px] mx-auto text-center border-t pt-8 text-xs font-medium ${
        isDark ? 'border-slate-900 text-slate-600' : 'border-slate-200 text-slate-500'
      }`}>
        <p>&copy; {new Date().getFullYear()} Zelixa Tech. {data.uiText.footerCopyright}</p>
      </div>

    </footer>
  );
}
