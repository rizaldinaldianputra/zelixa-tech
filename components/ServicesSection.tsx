import React from 'react';
import { localizedData } from '../services/mockData';

interface SectionProps {
  theme?: 'dark' | 'light';
  lang: 'id' | 'en';
}

export default function ServicesSection({ theme = 'dark', lang }: SectionProps) {
  const data = localizedData[lang];
  const isDark = theme === 'dark';

  return (
    <section id="services" className={`py-24 px-6 relative overflow-hidden transition-colors duration-500 ${
      isDark ? 'bg-slate-950' : 'bg-slate-50'
    }`}>
      
      {/* Background decoration */}
      <div className="absolute top-10 left-10 w-[200px] h-[200px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20 space-y-4">
          <span className={`inline-flex py-1 px-3.5 rounded-full font-semibold text-xs tracking-wider uppercase border ${
            isDark 
              ? 'bg-slate-900 border-indigo-500/20 text-indigo-400' 
              : 'bg-indigo-50 border-indigo-200 text-indigo-600'
          }`}>
            {data.uiText.servicesTitle}
          </span>
          
          <h2 className={`text-4xl md:text-5xl font-black font-heading tracking-tight ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            {lang === 'id' ? (
              <>Keahlian Utama <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500">Kami</span></>
            ) : (
              <>Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500">Expertise</span></>
            )}
          </h2>
          
          <p className={`max-w-[600px] mx-auto font-light text-base md:text-lg ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}>
            {data.uiText.servicesDesc}
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px] mb-8">
          {data.servicesData.map((svc, idx) => {
            const isColSpan2 = svc.colSpan === 2;
            return (
              <div 
                key={idx} 
                className={`group relative overflow-hidden rounded-3xl border p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-lg ${
                  isColSpan2 ? 'md:col-span-2' : 'md:col-span-1'
                } ${
                  isDark 
                    ? `bg-slate-900/40 border-slate-900 hover:border-slate-800 ${svc.bgClass}`
                    : 'bg-white border-slate-200 hover:border-slate-350'
                }`}
              >
                {/* Glow Overlay */}
                <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-gradient-to-tr from-blue-500/10 to-indigo-500/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-500"></div>
                
                {/* Content */}
                <div>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-sm mb-6 group-hover:scale-110 transition-transform ${
                    isDark ? 'bg-slate-950/90 border-slate-800' : 'bg-slate-100 border-slate-200'
                  }`}>
                    {svc.icon}
                  </div>
                  <h3 className={`text-2xl font-bold font-heading mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>{svc.title}</h3>
                  <p className={`text-sm leading-relaxed max-w-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{svc.desc}</p>
                </div>

                <div className="flex items-center gap-2 text-xs font-semibold text-blue-500 hover:text-blue-600 transition-colors cursor-pointer select-none relative z-10">
                  {data.uiText.servicesDocLink} <span>→</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Panoramic Custom Illustration Card */}
        <div className={`group relative overflow-hidden rounded-3xl border p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-8 transition-all duration-300 shadow-lg ${
          isDark 
            ? 'border-slate-900 bg-gradient-to-r from-slate-900/60 to-slate-900/30 hover:border-slate-800' 
            : 'border-slate-200 bg-gradient-to-r from-white via-white to-slate-50 hover:border-slate-300'
        }`}>
          <div className="space-y-4 max-w-xl text-left">
            <span className="text-xs font-bold text-cyan-500 tracking-widest uppercase">{lang === 'id' ? 'Framework Unggulan' : 'Proprietary Stacks'}</span>
            <h3 className={`text-2xl md:text-3xl font-bold font-heading ${isDark ? 'text-white' : 'text-slate-900'}`}>
              {lang === 'id' ? 'Dirancang untuk Skala Produksi Cepat' : 'Engineered for Rapid Production Scale'}
            </h3>
            <p className={`text-sm md:text-base leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              {lang === 'id' 
                ? 'Kami memanfaatkan boilerplate modern, template microservice, dan arsitektur cluster Kubernetes untuk mempercepat siklus produk. Hal ini memungkinkan kami meluncurkan platform beta fungsional dengan kecepatan 10x lebih cepat ke pasar.'
                : 'We leverage modern boilerplates, microservice templates, and Kubernetes clusters to accelerate product cycles. This allows us to launch functional beta platforms with 10x market velocity.'}
            </p>
          </div>
          <div className={`w-full md:w-[280px] lg:w-[320px] aspect-[4/3] rounded-2xl p-1 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 shadow-inner overflow-hidden select-none shrink-0 border ${
            isDark ? 'border-transparent' : 'border-slate-200'
          }`}>
            <img 
              src="/services_illustration.png" 
              alt="Services Ecosystem" 
              className="w-full h-full object-cover rounded-xl opacity-90 group-hover:scale-105 transition-transform duration-700" 
            />
          </div>
        </div>

      </div>
    </section>
  );
}
