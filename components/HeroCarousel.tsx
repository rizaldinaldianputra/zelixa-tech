"use client";
import React from 'react';
import { localizedData } from '../services/mockData';
import { useCarousel } from '../hooks/useCarousel';
import { cn } from '../utils/cn';

interface SectionProps {
  theme?: 'dark' | 'light';
  lang: 'id' | 'en';
}

export default function HeroCarousel({ theme = 'dark', lang }: SectionProps) {
  const data = localizedData[lang];
  const { current, setCurrent } = useCarousel(data.slidesData.length, 6000);

  const isDark = theme === 'dark';

  return (
    <section id="home" className={`relative min-h-[90vh] lg:min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-500 pt-20 ${
      isDark ? 'bg-slate-950' : 'bg-slate-50'
    }`}>
      
      {/* Cybersecurity Mesh Grid Background */}
      <div className={`absolute inset-0 tech-grid opacity-30 z-0 ${!isDark && 'invert-[0.9]'}`}></div>

      {/* Main Illustration Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-to-tr from-blue-600/10 via-indigo-600/10 to-cyan-500/10 rounded-full blur-[140px] pointer-events-none z-0"></div>

      {/* Floating Animated Orbs */}
      <div className="absolute top-1/4 left-10 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-10 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow"></div>

      <div className="max-w-[1200px] mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 relative py-16">
        
        {/* Left Side: Dynamic Carousel Texts */}
        <div className="lg:col-span-7 relative h-[380px] md:h-[320px] lg:h-[400px] flex flex-col justify-center">
          {data.slidesData.map((slide, idx) => (
            <div 
              key={idx}
              className={cn(
                "absolute inset-0 transition-all duration-1000 flex flex-col justify-center text-left transform",
                idx === current 
                  ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto z-10' 
                  : 'opacity-0 translate-y-8 scale-95 pointer-events-none z-0'
              )}
            >
              <span className={`inline-flex items-center gap-2 py-1.5 px-4 rounded-full font-semibold text-xs mb-6 w-fit shadow-sm border ${
                isDark 
                  ? 'bg-slate-900 border-blue-500/30 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.1)]' 
                  : 'bg-white border-blue-500/20 text-blue-600'
              }`}>
                <span className="w-2 h-2 rounded-full bg-cyan-500 animate-ping"></span>
                Zelixa Innovation Hub
              </span>
              
              <h1 className={`text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight font-heading leading-[1.15] ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                {slide.title.split(' ').map((word, wIdx) => {
                  const highlights = ["Digital", "Products", "Cloud", "Pipelines", "UI/UX", "Design", "Engineering", "Masa", "Depan", "Cerdas", "Kelas", "Dunia"];
                  const isHighlighted = highlights.some(h => word.toLowerCase().includes(h.toLowerCase()));
                  return isHighlighted ? (
                    <span key={wIdx} className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500 glow-text mr-2 inline-block">
                      {word}{' '}
                    </span>
                  ) : (
                    <span key={wIdx} className="mr-2 inline-block">{word} </span>
                  );
                })}
              </h1>
              
              <p className={`text-base md:text-lg mb-8 leading-relaxed font-light max-w-[550px] ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}>
                {slide.subtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a href="#services" className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-sm hover:opacity-95 transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:-translate-y-0.5 w-full sm:w-auto text-center">
                  {lang === 'id' ? 'Jelajahi Layanan' : 'Explore Solutions'}
                </a>
                <a href="#portfolio" className={`px-8 py-4 rounded-xl font-semibold text-sm transition-all w-full sm:w-auto text-center border ${
                  isDark 
                    ? 'bg-slate-900 text-slate-300 border-slate-800 hover:text-white hover:border-slate-700 hover:bg-slate-900/80' 
                    : 'bg-white text-slate-700 border-slate-200 hover:text-slate-900 hover:bg-slate-50'
                }`}>
                  {lang === 'id' ? 'Studi Kasus' : 'View Case Studies'}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side: Glowing Background Illustration Frame (Interactive Hover) */}
        <div className="lg:col-span-5 flex justify-center items-center relative select-none">
          <div className="relative w-[320px] h-[320px] md:w-[400px] md:h-[400px] lg:w-[440px] lg:h-[440px] rounded-3xl p-1 bg-gradient-to-tr from-blue-500 via-indigo-500 to-cyan-400 shadow-[0_20px_50px_rgba(59,130,246,0.2)] animate-float overflow-hidden group hover:-translate-y-4 hover:scale-[1.03] hover:shadow-[0_30px_60px_rgba(59,130,246,0.35)] transition-all duration-700 ease-out cursor-pointer">
            <div className={`absolute inset-0 rounded-[22px] overflow-hidden flex items-center justify-center p-2 border ${
              isDark ? 'bg-slate-950 border-slate-900/50' : 'bg-white border-slate-100'
            }`}>
              <img 
                src="/hero_bg.png" 
                alt="Interactive Technology Showcase" 
                className="w-full h-full object-cover rounded-2xl opacity-90 group-hover:scale-105 transition-transform duration-700" 
              />
              {/* Radial overlay to blend illustration */}
              <div className={`absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-40 ${
                isDark ? 'from-slate-950' : 'from-white'
              }`}></div>
            </div>
            {/* Ambient edge glow */}
            <div className="absolute -inset-10 bg-gradient-to-tr from-cyan-500/20 via-blue-500/20 to-purple-500/20 blur-2xl z-[-1] opacity-75"></div>
          </div>
        </div>

      </div>

      {/* Slider Indicator Navigation */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-4">
        {data.slidesData.map((_, idx) => (
          <button 
            key={idx} 
            onClick={() => setCurrent(idx)}
            className="group flex flex-col items-center py-2 px-1 focus:outline-none"
            aria-label={`Slide ${idx + 1}`}
          >
            <div className={cn(
              "h-1 rounded-full transition-all duration-500",
              idx === current 
                ? 'w-10 bg-gradient-to-r from-blue-500 to-cyan-400' 
                : isDark ? 'w-4 bg-slate-700 group-hover:bg-slate-500' : 'w-4 bg-slate-300 group-hover:bg-slate-400'
            )} />
          </button>
        ))}
      </div>

    </section>
  );
}
