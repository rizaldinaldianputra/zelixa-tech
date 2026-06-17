"use client";
import React, { useState } from 'react';
import { localizedData } from '../services/mockData';

interface SectionProps {
  theme?: 'dark' | 'light';
  lang: 'id' | 'en';
}

export default function PricingSection({ theme = 'dark', lang }: SectionProps) {
  const data = localizedData[lang];
  const [isAnnual, setIsAnnual] = useState(false);

  const isDark = theme === 'dark';

  return (
    <section id="pricing" className={`py-24 px-6 border-t relative overflow-hidden transition-colors duration-500 ${
      isDark ? 'bg-slate-950 border-slate-900' : 'bg-white border-slate-200'
    }`}>
      
      {/* Background neon elements */}
      <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <span className={`inline-flex py-1 px-3.5 rounded-full font-semibold text-xs tracking-wider uppercase border ${
            isDark 
              ? 'bg-slate-900 border-blue-500/20 text-blue-400' 
              : 'bg-blue-50 border-blue-200 text-blue-600'
          }`}>
            {data.uiText.pricingTitle}
          </span>
          
          <h2 className={`text-4xl md:text-5xl font-black font-heading tracking-tight ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            {lang === 'id' ? (
              <>Harga yang Transparan, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 font-black">Tanpa Keterikatan</span></>
            ) : (
              <>Predictable Pricing, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 font-black">Zero Lock-in</span></>
            )}
          </h2>
          
          <p className={`max-w-[600px] mx-auto font-light text-base md:text-lg ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}>
            {data.uiText.pricingDesc}
          </p>
        </div>

        {/* Toggle Switch */}
        <div className="flex items-center justify-center gap-4 mb-16 select-none">
          <span className={`text-sm font-semibold transition-colors ${
            !isAnnual 
              ? isDark ? 'text-white' : 'text-slate-900'
              : 'text-slate-500'
          }`}>
            {lang === 'id' ? 'Bulanan' : 'Monthly'}
          </span>
          
          <button 
            onClick={() => setIsAnnual(!isAnnual)}
            className={`w-14 h-8 rounded-full p-1 relative focus:outline-none transition-colors border cursor-pointer ${
              isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-200 border-slate-350'
            }`}
            aria-label="Toggle annual pricing"
          >
            <div className={`w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 ${
              isAnnual ? 'translate-x-6' : 'translate-x-0'
            }`} />
          </button>
          
          <span className={`text-sm font-semibold transition-colors flex items-center gap-1.5 ${
            isAnnual 
              ? isDark ? 'text-white' : 'text-slate-900'
              : 'text-slate-500'
          }`}>
            <span>{lang === 'id' ? 'Tahunan' : 'Annually'}</span>
            <span className="px-2 py-0.5 rounded-md bg-cyan-500/10 text-[9px] font-bold text-cyan-500 border border-cyan-500/20">
              {lang === 'id' ? 'Hemat 20%' : 'Save 20%'}
            </span>
          </span>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {data.pricingPlans.map((plan, idx) => {
            const isPopular = plan.popular;
            const price = isAnnual ? plan.priceAnnually : plan.priceMonthly;
            
            return (
              <div 
                key={idx} 
                className={`group relative rounded-3xl p-[1px] transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between ${
                  isPopular 
                    ? 'bg-gradient-to-br from-blue-500 via-indigo-500 to-cyan-400 shadow-lg lg:scale-105 z-10'
                    : isDark ? 'bg-slate-900 shadow-[0_15px_35px_rgba(0,0,0,0.5)]' : 'bg-slate-200 shadow-md'
                }`}
              >
                {/* Inner Container */}
                <div className={`rounded-[23px] p-8 flex-1 flex flex-col justify-between relative z-10 ${
                  isDark ? 'bg-slate-950' : 'bg-white'
                }`}>
                  <div>
                    
                    {/* Header Tag */}
                    <div className="flex justify-between items-center mb-6">
                      <span className={`text-xl font-bold font-heading ${isDark ? 'text-white' : 'text-slate-900'}`}>{plan.name}</span>
                      {isPopular && (
                        <span className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-[10px] font-bold text-white uppercase tracking-wider">
                          {lang === 'id' ? 'Paling Populer' : 'Most Popular'}
                        </span>
                      )}
                    </div>

                    {/* Price and Period */}
                    <div className="flex items-baseline gap-2 mb-6">
                      <span className={`text-4xl md:text-5xl font-black font-heading ${isDark ? 'text-white' : 'text-slate-900'}`}>{price}</span>
                      <span className="text-slate-500 text-xs font-medium">/ {plan.period}</span>
                    </div>

                    <p className={`text-sm font-light leading-relaxed mb-8 border-b pb-6 ${
                      isDark ? 'text-slate-400 border-slate-900' : 'text-slate-600 border-slate-100'
                    }`}>
                      {plan.description}
                    </p>

                    {/* Features checklist */}
                    <ul className="space-y-4 mb-8 text-left">
                      {plan.features.map((feat, fIdx) => (
                        <li key={fIdx} className={`flex items-start gap-3 text-sm font-light ${
                          isDark ? 'text-slate-300' : 'text-slate-700'
                        }`}>
                          <span className="text-cyan-500 font-bold shrink-0">✔</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                  </div>

                  {/* Pricing Action CTA */}
                  <button className={`w-full py-4 rounded-xl font-bold text-sm transition-all cursor-pointer ${
                    isPopular
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg hover:shadow-xl hover:opacity-95'
                      : isDark 
                        ? 'bg-slate-900 text-slate-300 border border-slate-800 hover:text-white hover:border-slate-700'
                        : 'bg-slate-100 text-slate-700 border border-slate-200 hover:text-slate-900 hover:bg-slate-200'
                  }`}>
                    {plan.ctaText}
                  </button>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
