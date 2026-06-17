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

  const slideImages = [
    "/hero_bg.png",
    "/services_illustration.png",
    "/about_illustration.png"
  ];

  return (
    <section id="home" className={`relative min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-500 pt-20 ${
      isDark ? 'bg-slate-950' : 'bg-slate-50'
    }`}>
      
      {/* Background Image Container spanning full screen */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        
        {/* Dynamic Image Slides Cross-fade */}
        {slideImages.map((img, idx) => (
          <img 
            key={idx}
            src={img}
            alt="Full Screen Background" 
            className={cn(
              "absolute inset-0 w-full h-full object-cover transition-all duration-[1500ms] transform",
              idx === current 
                ? 'opacity-30 dark:opacity-20 scale-100 pointer-events-auto' 
                : 'opacity-0 scale-105 pointer-events-none'
            )}
          />
        ))}

        {/* Dynamic Shifting Gradient overlay */}
        <div className={`absolute inset-0 animate-gradient-shift opacity-50 dark:opacity-60 pointer-events-none bg-gradient-to-tr ${
          isDark 
            ? 'from-slate-950 via-purple-950/30 via-blue-900/25 to-slate-950' 
            : 'from-slate-50 via-blue-100/15 via-purple-100/15 to-slate-50'
        }`} />

        {/* Subtle grid accent inside the image background */}
        <div className={`absolute inset-0 tech-grid opacity-20 pointer-events-none ${!isDark && 'invert'}`} />

        {/* Radial vignette overlay to guarantee text legibility */}
        <div 
          className="absolute inset-0 pointer-events-none" 
          style={{
            background: isDark
              ? 'radial-gradient(circle, rgba(3,7,18,0.15) 30%, rgba(3,7,18,0.92) 85%)'
              : 'radial-gradient(circle, rgba(248,250,252,0.15) 30%, rgba(248,250,252,0.92) 85%)'
          }}
        />
      </div>

      {/* Main Content Layout */}
      <div className="max-w-[1000px] mx-auto px-6 w-full text-center z-10 relative py-20 flex flex-col items-center justify-center">
        
        {/* Text Slides Container */}
        <div className="relative w-full h-[460px] md:h-[350px] lg:h-[380px] flex flex-col justify-center items-center">
          {data.slidesData.map((slide, idx) => (
            <div 
              key={idx}
              className={cn(
                "absolute inset-0 transition-all duration-1000 flex flex-col justify-center items-center text-center transform",
                idx === current 
                  ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto z-10' 
                  : 'opacity-0 translate-y-8 scale-95 pointer-events-none z-0'
              )}
            >
              <span className={`inline-flex items-center gap-2 py-1.5 px-4 rounded-full font-semibold text-xs mb-6 w-fit shadow-sm border ${
                isDark 
                  ? 'bg-slate-900 border-blue-500/30 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.1)]' 
                  : 'bg-white border-blue-500/20 text-blue-600 shadow-sm'
              }`}>
                <span className="w-2 h-2 rounded-full bg-cyan-500 animate-ping"></span>
                Zelixa Innovation Hub
              </span>
              
              <h1 className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 tracking-tight font-heading leading-[1.15] max-w-[900px] ${
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
              
              <p className={`text-base md:text-lg lg:text-xl mb-8 leading-relaxed font-light max-w-[650px] ${
                isDark ? 'text-slate-450' : 'text-slate-650'
              }`}>
                {slide.subtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
                <a href="#services" className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-sm hover:opacity-95 transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:-translate-y-0.5 w-full sm:w-auto text-center cursor-pointer">
                  {lang === 'id' ? 'Jelajahi Layanan' : 'Explore Solutions'}
                </a>
                <a href="#portfolio" className={`px-8 py-4 rounded-xl font-semibold text-sm transition-all w-full sm:w-auto text-center border ${
                  isDark 
                    ? 'bg-slate-900 text-slate-300 border-slate-800 hover:text-white hover:border-slate-700 hover:bg-slate-900/80' 
                    : 'bg-white text-slate-700 border-slate-200 hover:text-slate-900 hover:bg-slate-50 shadow-sm'
                }`}>
                  {lang === 'id' ? 'Studi Kasus' : 'View Case Studies'}
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Slider Indicator Navigation */}
      <div className="absolute bottom-8 lg:bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-4">
        {data.slidesData.map((_, idx) => (
          <button 
            key={idx} 
            onClick={() => setCurrent(idx)}
            className="group flex flex-col items-center py-2 px-1 focus:outline-none cursor-pointer"
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
