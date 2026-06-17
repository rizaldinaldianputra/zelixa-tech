import React from 'react';
import { localizedData } from '../services/mockData';

interface SectionProps {
  theme?: 'dark' | 'light';
  lang: 'id' | 'en';
}

export default function WhyChooseUsSection({ theme = 'dark', lang }: SectionProps) {
  const data = localizedData[lang];
  const isDark = theme === 'dark';

  return (
    <section id="whychooseus" className={`py-24 px-6 border-t relative overflow-hidden transition-colors duration-500 ${
      isDark ? 'bg-slate-950 border-slate-900' : 'bg-slate-50 border-slate-200'
    }`}>
      
      {/* Background orbs */}
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20 space-y-4">
          <span className={`inline-flex py-1 px-3.5 rounded-full font-semibold text-xs tracking-wider uppercase border ${
            isDark 
              ? 'bg-slate-900 border-purple-500/20 text-purple-400' 
              : 'bg-purple-50 border-purple-200 text-purple-600'
          }`}>
            {data.uiText.whyTitle}
          </span>
          
          <h2 className={`text-4xl md:text-5xl font-black font-heading tracking-tight ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            {lang === 'id' ? (
              <>Dibangun Berbeda. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 font-black">Dirancang Lebih Baik.</span></>
            ) : (
              <>Built Different. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 font-black">Engineered Better.</span></>
            )}
          </h2>
          
          <p className={`max-w-[600px] mx-auto font-light text-base md:text-lg ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}>
            {data.uiText.whyDesc}
          </p>
        </div>

        {/* 4-column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.whyChooseUsData.map((item, idx) => (
            <div 
              key={idx} 
              className={`group relative rounded-3xl border p-8 transition-all duration-300 shadow-md hover:shadow-lg ${
                isDark 
                  ? 'border-slate-900 bg-slate-900/30 hover:bg-slate-900/60 hover:border-slate-800' 
                  : 'border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300'
              }`}
            >
              
              {/* Custom background aura glow that expands on card hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.glowColor} opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500 blur-xl pointer-events-none`}></div>

              <div className="relative z-10 space-y-6">
                
                {/* Icon Circle */}
                <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center text-3xl transition-transform group-hover:scale-110 ${
                  isDark 
                    ? 'bg-slate-950 border-slate-800 shadow-lg shadow-black/50' 
                    : 'bg-slate-50 border-slate-200 shadow-sm shadow-slate-100'
                }`}>
                  {item.icon}
                </div>

                {/* Title & Desc */}
                <div className="space-y-3">
                  <h3 className={`text-xl font-bold font-heading group-hover:text-blue-500 transition-colors ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}>
                    {item.title}
                  </h3>
                  <p className={`text-sm leading-relaxed font-light ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    {item.desc}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
