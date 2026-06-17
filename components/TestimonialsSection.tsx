import React from 'react';
import { localizedData } from '../services/mockData';

interface SectionProps {
  theme?: 'dark' | 'light';
  lang: 'id' | 'en';
}

export default function TestimonialsSection({ theme = 'dark', lang }: SectionProps) {
  const data = localizedData[lang];
  const isDark = theme === 'dark';

  return (
    <section id="testimonials" className={`py-24 px-6 border-t relative overflow-hidden transition-colors duration-500 ${
      isDark ? 'bg-slate-950 border-slate-900' : 'bg-slate-50 border-slate-200'
    }`}>
      
      {/* Background glowing effects */}
      <div className="absolute top-1/4 right-10 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20 space-y-4">
          <span className={`inline-flex py-1 px-3.5 rounded-full font-semibold text-xs tracking-wider uppercase border ${
            isDark 
              ? 'bg-slate-900 border-blue-500/20 text-blue-400' 
              : 'bg-blue-50 border-blue-200 text-blue-600'
          }`}>
            {data.uiText.testimonialTitle}
          </span>
          
          <h2 className={`text-4xl md:text-5xl font-black font-heading tracking-tight ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            {lang === 'id' ? (
              <>Dipercaya oleh <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 font-black">Pendiri & Tim Bisnis</span></>
            ) : (
              <>Loved by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 font-black">Founders & Teams</span></>
            )}
          </h2>
          
          <p className={`max-w-[600px] mx-auto font-light text-base md:text-lg ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}>
            {data.uiText.testimonialDesc}
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.testimonialsData.map((testi, idx) => (
            <div 
              key={idx} 
              className={`group relative border rounded-3xl p-8 transition-all duration-300 shadow-md hover:shadow-lg flex flex-col justify-between ${
                isDark 
                  ? 'bg-slate-900/30 border-slate-900 hover:bg-slate-900/50 hover:border-slate-800' 
                  : 'bg-white border-slate-200 hover:bg-slate-50 hover:border-slate-300'
              }`}
            >
              {/* Quote mark decoration */}
              <div className="text-7xl text-blue-500/10 absolute top-4 right-6 font-serif select-none pointer-events-none transition-colors group-hover:text-blue-500/20">
                “
              </div>
              
              <p className={`italic mb-8 relative z-10 text-sm md:text-base leading-relaxed font-light text-left ${
                isDark ? 'text-slate-300' : 'text-slate-755'
              }`}>
                "{testi.text}"
              </p>

              {/* User profile identifier */}
              <div className={`flex items-center gap-4 border-t pt-6 ${
                isDark ? 'border-slate-900' : 'border-slate-100'
              }`}>
                <div className="w-12 h-12 bg-gradient-to-tr from-blue-500 via-indigo-600 to-cyan-400 rounded-xl flex items-center justify-center text-white font-bold font-heading text-lg shadow-md select-none shrink-0">
                  {testi.name.charAt(0)}
                </div>
                <div className="text-left">
                  <h4 className={`font-bold text-sm ${isDark ? 'text-white' : 'text-slate-800'}`}>{testi.name}</h4>
                  <p className="text-xs text-slate-500 font-medium">{testi.role}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
