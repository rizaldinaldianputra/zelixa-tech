import React from 'react';
import { localizedData } from '../services/mockData';

interface SectionProps {
  theme?: 'dark' | 'light';
  lang: 'id' | 'en';
}

export default function AboutSection({ theme = 'dark', lang }: SectionProps) {
  const data = localizedData[lang];
  const isDark = theme === 'dark';

  return (
    <section id="about" className={`py-24 px-6 relative overflow-hidden transition-colors duration-500 ${
      isDark ? 'bg-slate-950' : 'bg-white'
    }`}>
      
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-0 w-[300px] h-[300px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Story & Statistics */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className={`inline-flex py-1 px-3.5 rounded-full font-semibold text-xs tracking-wider uppercase border ${
                isDark 
                  ? 'bg-slate-900 border-blue-500/20 text-blue-400' 
                  : 'bg-blue-50 border-blue-200 text-blue-600'
              }`}>
                {data.uiText.aboutTitle}
              </span>
              
              <h2 className={`text-4xl md:text-5xl font-black font-heading tracking-tight leading-tight ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                {lang === 'id' ? (
                  <>Mendorong Kesuksesan Melalui <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">Keahlian Digital</span></>
                ) : (
                  <>Driving Success Through <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">Digital Craftsmanship</span></>
                )}
              </h2>
              
              <p className={`leading-relaxed font-light text-base md:text-lg ${
                isDark ? 'text-slate-400' : 'text-slate-650'
              }`}>
                {data.uiText.aboutDesc}
              </p>
            </div>

            {/* Grid Stats */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              {data.statsData.map((stat, idx) => (
                <div 
                  key={idx} 
                  className={`group border rounded-2xl p-6 transition-all shadow-md hover:shadow-lg ${
                    isDark 
                      ? 'bg-slate-900/50 border-slate-900 hover:border-slate-800' 
                      : 'bg-slate-50 border-slate-200 hover:border-slate-350'
                  }`}
                >
                  <div className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 font-heading mb-1">
                    {stat.value}
                  </div>
                  <div className={`font-semibold text-sm mb-1 ${isDark ? 'text-slate-200' : 'text-slate-850'}`}>
                    {stat.label}
                  </div>
                  <p className="text-xs leading-relaxed text-slate-500">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Premium Glass-framed Mockup (Interactive Hover) */}
          <div className="lg:col-span-6 flex justify-center">
            <div className={`relative w-full max-w-[500px] aspect-square rounded-3xl p-1 bg-gradient-to-br from-indigo-500/30 via-slate-800 to-cyan-500/30 shadow-[0_30px_60px_rgba(0,0,0,0.15)] overflow-hidden group hover:-translate-y-4 hover:scale-[1.03] hover:shadow-[0_30px_60px_rgba(99,102,241,0.25)] transition-all duration-700 ease-out cursor-pointer`}>
              <div className={`absolute inset-0 rounded-[22px] overflow-hidden flex items-center justify-center p-3 border ${
                isDark ? 'bg-slate-950 border-slate-900/50' : 'bg-slate-100 border-slate-200'
              }`}>
                <img 
                  src="/about_illustration.png" 
                  alt="Zelixa Engineering Department" 
                  className="w-full h-full object-cover rounded-2xl opacity-90 group-hover:scale-105 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t via-slate-950/10 to-transparent opacity-35 ${
                  isDark ? 'from-slate-950' : 'from-white'
                }`}></div>
              </div>
              <div className="absolute -inset-10 bg-indigo-500/10 blur-2xl z-[-1]"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
