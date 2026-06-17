"use client";
import React, { useState } from 'react';
import { localizedData } from '../services/mockData';

interface SectionProps {
  theme?: 'dark' | 'light';
  lang: 'id' | 'en';
}

export default function PortfolioSection({ theme = 'dark', lang }: SectionProps) {
  const data = localizedData[lang];
  const [selectedCategory, setSelectedCategory] = useState(lang === 'id' ? 'Semua' : 'All');

  const categories = data.uiText.portfolioTabs;
  const isDark = theme === 'dark';

  // Categories helper mapping
  const categoryMapEN: Record<string, string> = {
    'semua': 'all',
    'aplikasi web': 'web apps',
    'aplikasi mobile': 'mobile apps',
    'cloud & devops': 'cloud & devops',
    'ai & ml': 'ai & ml'
  };

  const normalizedCategory = (cat: string) => {
    const lcat = cat.toLowerCase();
    if (lang === 'id' && categoryMapEN[lcat]) {
      return categoryMapEN[lcat];
    }
    return lcat;
  };

  const filteredProjects = selectedCategory === (lang === 'id' ? 'Semua' : 'All')
    ? data.portfolioProjects
    : data.portfolioProjects.filter(p => normalizedCategory(p.category) === normalizedCategory(selectedCategory));

  return (
    <section id="portfolio" className={`py-24 px-6 border-t relative overflow-hidden transition-colors duration-500 ${
      isDark ? 'bg-slate-950 border-slate-900' : 'bg-white border-slate-200'
    }`}>
      
      {/* Background Glow */}
      <div className="absolute top-10 right-10 w-[300px] h-[300px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <span className={`inline-flex py-1 px-3.5 rounded-full font-semibold text-xs tracking-wider uppercase border ${
            isDark 
              ? 'bg-slate-900 border-cyan-500/20 text-cyan-400' 
              : 'bg-cyan-50 border-cyan-200 text-cyan-600'
          }`}>
            {data.uiText.portfolioTitle}
          </span>
          
          <h2 className={`text-4xl md:text-5xl font-black font-heading tracking-tight ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            {lang === 'id' ? (
              <>Deployment yang Telah <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">Kami Selesaikan</span></>
            ) : (
              <>Our Shipped <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">Deployments</span></>
            )}
          </h2>
          
          <p className={`max-w-[600px] mx-auto font-light text-base md:text-lg ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}>
            {data.uiText.portfolioDesc}
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {categories.map((cat, idx) => (
            <button 
              key={idx}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-xs font-semibold border transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white border-transparent shadow-md shadow-blue-500/15'
                  : isDark 
                    ? 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white hover:border-slate-700'
                    : 'bg-slate-100 text-slate-650 border-slate-200 hover:text-slate-900 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Showcase Item (Spotlight Card) */}
        {selectedCategory === (lang === 'id' ? 'Semua' : 'All') && (
          <div className={`group relative rounded-3xl border p-8 md:p-12 mb-12 transition-all duration-300 shadow-lg ${
            isDark 
              ? 'border-slate-900 bg-slate-900/20 hover:border-slate-800' 
              : 'border-slate-200 bg-slate-50 hover:border-slate-300'
          }`}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Product Info */}
              <div className="lg:col-span-6 space-y-6 text-left">
                <span className={`inline-flex py-1 px-3.5 rounded-full border text-xs font-bold ${
                  isDark 
                    ? 'bg-slate-950 border-indigo-500/20 text-indigo-400' 
                    : 'bg-white border-indigo-200 text-indigo-650'
                }`}>
                  {lang === 'id' ? 'Studi Kasus Unggulan' : 'Featured Case Study'}
                </span>
                
                <h3 className={`text-3xl md:text-4xl font-extrabold font-heading ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  {lang === 'id' ? 'Aether - Dasbor Likuiditas Keuangan' : 'Aether - Financial Liquidity Dashboard'}
                </h3>
                
                <p className={`text-sm md:text-base leading-relaxed font-light ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  {lang === 'id' 
                    ? 'Kami merancang Aether untuk memecahkan hambatan pelacakan multi-wallet bagi pertukaran aset digital. Platform ini menangani ribuan feed WebSocket bersamaan, menggambar grafik harga dengan latensi di bawah satu detik.'
                    : 'We engineered Aether to solve multi-wallet tracking bottlenecks for a digital asset exchange. The platform handles thousands of concurrent WebSocket feeds, drawing pricing graphs with sub-second latency.'}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {["Next.js", "TypeScript", "Tailwind CSS", "WebSockets", "Rust Engine", "AWS Fargate"].map((tech, tIdx) => (
                    <span key={tIdx} className={`px-3.5 py-1.5 rounded-lg border text-xs font-semibold ${
                      isDark 
                        ? 'bg-slate-950 border-slate-800 text-slate-300' 
                        : 'bg-white border-slate-200 text-slate-700 shadow-sm'
                    }`}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-4">
                  <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-blue-500 hover:text-blue-600 transition-colors">
                    {data.uiText.portfolioDocLink} <span>→</span>
                  </a>
                </div>
              </div>

              {/* Product Mockup Image */}
              <div className="lg:col-span-6 flex justify-center">
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden p-1 bg-gradient-to-tr from-cyan-500/30 to-purple-500/30 shadow-2xl">
                  <div className={`rounded-xl overflow-hidden w-full h-full border ${
                    isDark ? 'bg-slate-950 border-slate-900' : 'bg-white border-slate-200'
                  }`}>
                    <img 
                      src="/portfolio_mockup.png" 
                      alt="Financial Dashboard UI Showcase" 
                      className="w-full h-full object-cover opacity-90 group-hover:scale-102 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Regular Grid Portfolio */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.filter(p => !p.featured || selectedCategory !== (lang === 'id' ? 'Semua' : 'All')).map((proj, idx) => (
            <div 
              key={idx} 
              className={`group relative rounded-3xl border p-6 flex flex-col justify-between transition-all duration-300 shadow-md hover:shadow-lg ${
                isDark 
                  ? 'border-slate-900 bg-slate-900/30 hover:border-slate-800 hover:bg-slate-900/60' 
                  : 'border-slate-200 bg-slate-50 hover:border-slate-300 hover:bg-white'
              }`}
            >
              <div>
                
                {/* Mockup Frame */}
                <div className={`relative aspect-[16/10] rounded-2xl overflow-hidden border mb-6 select-none p-1 bg-gradient-to-br ${
                  isDark ? 'bg-slate-950 border-slate-900 from-slate-900 to-slate-950' : 'bg-slate-100 border-slate-200 from-slate-50 to-slate-100'
                }`}>
                  <img 
                    src={proj.image} 
                    alt={proj.title} 
                    className="w-full h-full object-cover rounded-xl opacity-80 group-hover:opacity-95 transition-opacity duration-300" 
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t via-transparent to-transparent ${
                    isDark ? 'from-slate-950/40' : 'from-white/40'
                  }`}></div>
                </div>

                {/* Tag & Title */}
                <div className="space-y-2 text-left">
                  <span className="text-xs font-bold text-blue-500 uppercase tracking-widest">{proj.category}</span>
                  <h4 className={`text-2xl font-bold font-heading ${isDark ? 'text-white' : 'text-slate-900'}`}>{proj.title}</h4>
                  <p className={`text-sm font-light leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-650'}`}>{proj.desc}</p>
                </div>

              </div>

              {/* Footer Tech stack badges */}
              <div className={`flex flex-wrap gap-2 mt-6 pt-6 border-t ${
                isDark ? 'border-slate-900' : 'border-slate-200'
              }`}>
                {proj.techStack.map((tech, tIdx) => (
                  <span key={tIdx} className={`px-2.5 py-1 rounded border text-[10px] font-semibold ${
                    isDark 
                      ? 'bg-slate-950 border-slate-800 text-slate-450' 
                      : 'bg-white border-slate-250 text-slate-600 shadow-sm'
                  }`}>
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
