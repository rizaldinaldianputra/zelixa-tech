"use client";
import React, { useState } from 'react';
import { localizedData } from '../services/mockData';

interface SectionProps {
  theme?: 'dark' | 'light';
  lang: 'id' | 'en';
}

export default function FAQSection({ theme = 'dark', lang }: SectionProps) {
  const data = localizedData[lang];
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const isDark = theme === 'dark';

  return (
    <section id="faq" className={`py-24 px-6 border-t relative overflow-hidden transition-colors duration-500 ${
      isDark ? 'bg-slate-950 border-slate-900' : 'bg-slate-50 border-slate-200'
    }`}>
      
      {/* Background orbs */}
      <div className="absolute top-1/4 left-10 w-[200px] h-[200px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-[800px] mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20 space-y-4">
          <span className={`inline-flex py-1 px-3.5 rounded-full font-semibold text-xs tracking-wider uppercase border ${
            isDark 
              ? 'bg-slate-900 border-blue-500/20 text-blue-400' 
              : 'bg-blue-50 border-blue-200 text-blue-600'
          }`}>
            {data.uiText.faqTitle}
          </span>
          
          <h2 className={`text-4xl md:text-5xl font-black font-heading tracking-tight ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            {lang === 'id' ? (
              <>Pertanyaan yang Sering <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 font-black">Diajukan</span></>
            ) : (
              <>Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 font-black">Questions</span></>
            )}
          </h2>
          
          <p className={`font-light text-base md:text-lg ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}>
            {data.uiText.faqDesc}
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {data.faqData.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div 
                key={idx} 
                className={`group rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? isDark 
                      ? 'bg-slate-900/40 border-slate-800 shadow-lg' 
                      : 'bg-white border-slate-350 shadow-lg'
                    : isDark 
                      ? 'bg-slate-900/10 border-slate-900 hover:border-slate-800' 
                      : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                
                {/* Header Toggle */}
                <button 
                  onClick={() => toggleFAQ(idx)}
                  className="w-full py-6 px-6 md:px-8 flex items-center justify-between gap-4 text-left focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className={`font-bold font-heading text-base md:text-lg group-hover:text-blue-500 transition-colors ${
                    isDark ? 'text-white' : 'text-slate-800'
                  }`}>
                    {faq.question}
                  </span>
                  
                  {/* Glowing expand button */}
                  <span className={`w-8 h-8 rounded-xl flex items-center justify-center border text-xs font-bold transition-all duration-300 shrink-0 ${
                    isOpen 
                      ? 'bg-gradient-to-tr from-blue-600 to-cyan-500 border-transparent text-white rotate-45 shadow-md shadow-blue-500/15'
                      : isDark ? 'bg-slate-950 border-slate-800 text-slate-400' : 'bg-slate-50 border-slate-250 text-slate-500'
                  }`}>
                    +
                  </span>
                </button>

                {/* Body Content */}
                <div 
                  className={`transition-all duration-500 ease-in-out ${
                    isOpen 
                      ? 'max-h-[300px] border-t opacity-100' 
                      : 'max-h-0 opacity-0 pointer-events-none'
                  } ${isDark ? 'border-slate-900' : 'border-slate-100'}`}
                >
                  <p className={`p-6 md:p-8 text-sm md:text-base leading-relaxed font-light text-left ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    {faq.answer}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
