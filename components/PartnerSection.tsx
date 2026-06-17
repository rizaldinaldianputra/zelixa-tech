"use client";
import React from 'react';

interface PartnerSectionProps {
  theme?: 'dark' | 'light';
  lang: 'id' | 'en';
}

interface PartnerItem {
  name: string;
  logo: React.ReactNode;
}

export default function PartnerSection({ theme = 'dark', lang }: PartnerSectionProps) {
  const isDark = theme === 'dark';

  const content = {
    id: {
      title: "Integrasi & Kemitraan",
      subtitle: "Didukung oleh Teknologi Kelas Dunia",
      desc: "Infrastruktur cloud berkecepatan tinggi dan integrasi API tangguh yang kami gunakan untuk mengoptimalkan sistem klien kami."
    },
    en: {
      title: "Integration & Alliances",
      subtitle: "Powered by World-Class Tooling",
      desc: "High-speed cloud infrastructure and resilient API integrations we deploy to optimize our clients' enterprise systems."
    }
  }[lang];

  // Stylized vector brand SVGs
  const partners: PartnerItem[] = [
    {
      name: "Google Cloud",
      logo: (
        <svg className="w-9 h-9 transition-all filter grayscale group-hover:grayscale-0 group-hover:scale-105 duration-300" viewBox="0 0 24 24" fill="none">
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" fill="#4285F4"/>
          <path d="M19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3z" fill="#34A853"/>
          <path d="M12 10v6m-3-3h6" stroke="#EA4335" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      name: "AWS Lambda",
      logo: (
        <svg className="w-9 h-9 transition-all filter grayscale group-hover:grayscale-0 group-hover:scale-105 duration-300" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14.5c-2.5 0-4.5-1.5-5-3.5h10c-.5 2-2.5 3.5-5 3.5zm-5-5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5S7 11.83 7 11zm7.5-1.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5z" fill="#FF9900"/>
        </svg>
      )
    },
    {
      name: "Stripe",
      logo: (
        <svg className="w-9 h-9 transition-all filter grayscale group-hover:grayscale-0 group-hover:scale-105 duration-300" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.96 9.17c0-.82-.67-1.07-1.74-1.07-1.42 0-3.13.43-3.13.43V5.13s1.71-.53 3.39-.53c2.97 0 4.8 1.34 4.8 4.09v6.5c0 1.25.7 1.62.7 1.62v2.79s-.86.29-1.92.29c-1.94 0-2.45-1.29-2.45-1.29s-1.15 1.48-3.17 1.48c-2.09 0-3.79-1.34-3.79-3.66 0-3.08 2.87-4.06 6.36-4.06v-.38zm-3.32 5.08c0 .76.62 1.15 1.44 1.15 1.1 0 1.88-.71 1.88-1.7v-.98c-1.68 0-3.32.29-3.32 1.53z" fill="#635BFF"/>
        </svg>
      )
    },
    {
      name: "Vercel Cloud",
      logo: (
        <svg className="w-9 h-9 transition-all filter grayscale group-hover:grayscale-0 group-hover:scale-105 duration-300" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 22h20L12 2z" fill={isDark ? "#FFFFFF" : "#000000"}/>
        </svg>
      )
    },
    {
      name: "Docker Engine",
      logo: (
        <svg className="w-9 h-9 transition-all filter grayscale group-hover:grayscale-0 group-hover:scale-105 duration-300" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.98 8c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h2c.55 0 1-.45 1-1V8zm-6 4c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h2.02c.55 0 1-.45 1-1v-2zm12-4c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h2c.55 0 1-.45 1-1V8zm-6 4c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-2zM2 17c0 1.66 1.34 3 3 3h14c1.66 0 3-1.34 3-3v-1H2v1z" fill="#2496ED"/>
        </svg>
      )
    },
    {
      name: "Shopify",
      logo: (
        <svg className="w-9 h-9 transition-all filter grayscale group-hover:grayscale-0 group-hover:scale-105 duration-300" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm7 17H5V8h14v12zm-7-8c-1.66 0-3-1.34-3-3h2c0 .55.45 1 1 1s1-.45 1-1h2c0 1.66-1.34 3-3 3z" fill="#95BF47"/>
        </svg>
      )
    },
    {
      name: "Slack",
      logo: (
        <svg className="w-9 h-9 transition-all filter grayscale group-hover:grayscale-0 group-hover:scale-105 duration-300" viewBox="0 0 24 24" fill="currentColor">
          <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523 2.528 2.528 0 0 1-2.522-2.523 2.528 2.528 0 0 1 2.522-2.52h2.52v2.52zm1.261 0a2.528 2.528 0 0 1 2.52-2.52h5.043a2.528 2.528 0 0 1 2.522 2.52v5.042a2.528 2.528 0 0 1-2.522 2.52H8.823a2.528 2.528 0 0 1-2.52-2.52v-5.042zM8.823 5.043a2.528 2.528 0 0 1 2.52-2.52 2.528 2.528 0 0 1 2.522 2.52v2.52h-2.522a2.528 2.528 0 0 1-2.52-2.52zm0 1.261a2.528 2.528 0 0 1 2.52 2.52v5.043a2.528 2.528 0 0 1-2.52 2.522H3.78a2.528 2.528 0 0 1-2.52-2.522V8.824a2.528 2.528 0 0 1 2.52-2.52h5.043z" fill="#E01E5A"/>
        </svg>
      )
    },
    {
      name: "GitHub Enterprise",
      logo: (
        <svg className="w-9 h-9 transition-all filter grayscale group-hover:grayscale-0 group-hover:scale-105 duration-300" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" fill={isDark ? "#FFFFFF" : "#181717"}/>
        </svg>
      )
    }
  ];

  return (
    <section className={`py-20 px-6 border-t relative overflow-hidden transition-colors duration-500 ${
      isDark ? 'bg-slate-950 border-slate-900' : 'bg-slate-50 border-slate-200'
    }`}>
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-gradient-to-r from-indigo-500/5 to-cyan-500/5 rounded-full blur-[90px] pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto text-center space-y-14 relative z-10">
        
        {/* Header */}
        <div className="space-y-4 max-w-[650px] mx-auto">
          <span className={`inline-flex py-1 px-3.5 rounded-full font-semibold text-xs tracking-wider uppercase border ${
            isDark 
              ? 'bg-slate-900 border-indigo-500/20 text-indigo-400' 
              : 'bg-indigo-50 border-indigo-200 text-indigo-650'
          }`}>
            {content.title}
          </span>
          <h2 className={`text-3xl md:text-4xl font-extrabold font-heading tracking-tight ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            {content.subtitle}
          </h2>
          <p className={`text-base font-light leading-relaxed ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}>
            {content.desc}
          </p>
        </div>

        {/* Marquee Ticker Wrapper with fading edges */}
        <div className="relative w-full overflow-hidden py-4">
          
          {/* Gradient Side Masks */}
          <div className={`absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r pointer-events-none z-10 ${
            isDark ? 'from-slate-950' : 'from-slate-50'
          } to-transparent`} />
          
          <div className={`absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l pointer-events-none z-10 ${
            isDark ? 'from-slate-950' : 'from-slate-50'
          } to-transparent`} />

          {/* Scrolling Track (duplicated for seamless scrolling) */}
          <div className="animate-marquee flex gap-16 md:gap-20 items-center">
            
            {/* Set 1 */}
            {partners.map((partner, idx) => (
              <div 
                key={`p1-${idx}`} 
                className="flex items-center gap-4 group select-none"
              >
                <div className="p-2.5 rounded-xl border border-transparent transition-all duration-300 group-hover:border-slate-800/40 dark:group-hover:border-slate-800/80 group-hover:bg-slate-900/10 dark:group-hover:bg-slate-900/30">
                  {partner.logo}
                </div>
                <div className="text-left shrink-0">
                  <span className={`block text-sm font-black tracking-wide font-heading transition-colors duration-300 ${
                    isDark ? 'text-slate-400 group-hover:text-white' : 'text-slate-650 group-hover:text-slate-900'
                  }`}>
                    {partner.name}
                  </span>
                  <span className={`block text-[10px] uppercase tracking-widest font-semibold transition-colors duration-300 ${
                    isDark ? 'text-slate-600 group-hover:text-blue-400' : 'text-slate-400 group-hover:text-blue-500'
                  }`}>
                    {idx % 2 === 0 ? 'Enterprise Integration' : 'Cloud Ecosystem'}
                  </span>
                </div>
              </div>
            ))}

            {/* Set 2 (Duplicated for infinite scroll) */}
            {partners.map((partner, idx) => (
              <div 
                key={`p2-${idx}`} 
                className="flex items-center gap-4 group select-none"
              >
                <div className="p-2.5 rounded-xl border border-transparent transition-all duration-300 group-hover:border-slate-800/40 dark:group-hover:border-slate-800/80 group-hover:bg-slate-900/10 dark:group-hover:bg-slate-900/30">
                  {partner.logo}
                </div>
                <div className="text-left shrink-0">
                  <span className={`block text-sm font-black tracking-wide font-heading transition-colors duration-300 ${
                    isDark ? 'text-slate-400 group-hover:text-white' : 'text-slate-650 group-hover:text-slate-900'
                  }`}>
                    {partner.name}
                  </span>
                  <span className={`block text-[10px] uppercase tracking-widest font-semibold transition-colors duration-300 ${
                    isDark ? 'text-slate-600 group-hover:text-blue-400' : 'text-slate-400 group-hover:text-blue-500'
                  }`}>
                    {idx % 2 === 0 ? 'Enterprise Integration' : 'Cloud Ecosystem'}
                  </span>
                </div>
              </div>
            ))}
            
          </div>

        </div>

      </div>
    </section>
  );
}
