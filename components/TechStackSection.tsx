"use client";
import React, { useState } from 'react';
import { localizedData } from '../services/mockData';

interface SectionProps {
  theme?: 'dark' | 'light';
  lang: 'id' | 'en';
}

export default function TechStackSection({ theme = 'dark', lang }: SectionProps) {
  const data = localizedData[lang];
  const [activeTab, setActiveTab] = useState(lang === 'id' ? 'Semua' : 'All');

  const tabs = lang === 'id' 
    ? ['Semua', 'Frontend & Mobile', 'Backend & Sistem', 'Cloud Ops & AI']
    : ['All', 'Frontend & Mobile', 'Backend & Systems', 'Cloud Ops & AI'];

  const isDark = theme === 'dark';

  // Category normalization for filter matching
  const categoryMapEN: Record<string, string> = {
    'semua': 'all',
    'backend & sistem': 'backend & systems',
    'cloud ops & ai': 'cloud ops & ai',
    'frontend & mobile': 'frontend & mobile'
  };

  const normalizedCategory = (cat: string) => {
    const lcat = cat.toLowerCase();
    if (lang === 'id' && categoryMapEN[lcat]) {
      return categoryMapEN[lcat];
    }
    return lcat;
  };

  const filteredCategories = activeTab === (lang === 'id' ? 'Semua' : 'All')
    ? data.techCategories
    : data.techCategories.filter(cat => normalizedCategory(cat.category) === normalizedCategory(activeTab));

  return (
    <section id="tech" className={`py-24 px-6 border-t relative overflow-hidden transition-colors duration-500 ${
      isDark ? 'bg-slate-950 border-slate-900' : 'bg-white border-slate-200'
    }`}>
      
      {/* Background radial overlay */}
      <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <span className={`inline-flex py-1 px-3.5 rounded-full font-semibold text-xs tracking-wider uppercase border ${
            isDark 
              ? 'bg-slate-900 border-blue-500/20 text-blue-400' 
              : 'bg-blue-50 border-blue-200 text-blue-600'
          }`}>
            {data.uiText.techTitle}
          </span>
          
          <h2 className={`text-4xl md:text-5xl font-black font-heading tracking-tight ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            {lang === 'id' ? (
              <>Rangkaian Teknologi <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">Teruji Kami</span></>
            ) : (
              <>Our Battle-Tested <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">Toolchains</span></>
            )}
          </h2>
          
          <p className={`max-w-[600px] mx-auto font-light text-base md:text-lg ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}>
            {data.uiText.techDesc}
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {tabs.map((tab, idx) => (
            <button 
              key={idx}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                activeTab === tab 
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-transparent shadow-md'
                  : isDark 
                    ? 'bg-slate-900 text-slate-400 border-slate-900 hover:text-white hover:border-slate-800'
                    : 'bg-slate-100 text-slate-650 border-slate-200 hover:text-slate-900 hover:bg-slate-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Display Stack */}
        <div className="space-y-12">
          {filteredCategories.map((cat, catIdx) => (
            <div key={catIdx} className="space-y-6 text-left">
              <h3 className={`text-xl font-bold border-l-2 border-blue-500 pl-4 font-heading tracking-wide ${
                isDark ? 'text-white' : 'text-slate-850'
              }`}>
                {cat.category}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {cat.items.map((item, itemIdx) => (
                  <div 
                    key={itemIdx} 
                    className={`group relative rounded-2xl border p-5 transition-all duration-300 shadow-md hover:shadow-lg ${
                      isDark 
                        ? 'border-slate-900 bg-slate-900/20 hover:border-slate-800 hover:bg-slate-900/60' 
                        : 'border-slate-200 bg-slate-50 hover:border-slate-300 hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl border flex items-center justify-center text-xl shadow ${
                          isDark ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200'
                        }`}>
                          {item.icon}
                        </div>
                        <span className={`font-bold font-heading text-sm ${
                          isDark ? 'text-white' : 'text-slate-800'
                        }`}>{item.name}</span>
                      </div>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${
                        isDark 
                          ? 'bg-slate-950 border-slate-900 text-blue-400' 
                          : 'bg-white border-slate-200 text-blue-600 shadow-sm'
                      }`}>
                        {item.level}
                      </span>
                    </div>

                    {/* Proficiency percentage indicators */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-[10px] font-semibold text-slate-500">
                        <span>{lang === 'id' ? 'Keahlian' : 'Proficiency'}</span>
                        <span className="group-hover:text-blue-500 transition-colors">{item.percentage}%</span>
                      </div>
                      <div className={`h-1.5 w-full rounded-full overflow-hidden ${
                        isDark ? 'bg-slate-950' : 'bg-slate-200'
                      }`}>
                        <div 
                          className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-500" 
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
