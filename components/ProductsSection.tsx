"use client";
import React from 'react';
import { localizedData } from '../services/mockData';
import Link from 'next/link';

interface SectionProps {
  theme?: 'dark' | 'light';
  lang: 'id' | 'en';
}

export default function ProductsSection({ theme = 'dark', lang }: SectionProps) {
  const data = localizedData[lang];
  const isDark = theme === 'dark';

  return (
    <section id="products" className={`py-24 px-6 border-t relative overflow-hidden transition-colors duration-500 ${
      isDark ? 'bg-slate-950 border-slate-900' : 'bg-white border-slate-200'
    }`}>
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20 space-y-4">
          <span className={`inline-flex py-1 px-3.5 rounded-full font-semibold text-xs tracking-wider uppercase border ${
            isDark 
              ? 'bg-slate-900 border-blue-500/20 text-blue-400' 
              : 'bg-blue-50 border-blue-200 text-blue-600'
          }`}>
            {data.uiText.productsTitle}
          </span>
          
          <h2 className={`text-4xl md:text-5xl font-black font-heading tracking-tight ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            {lang === 'id' ? (
              <>Rangkaian Perangkat Lunak <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 font-black">Kami</span></>
            ) : (
              <>Our Proprietary <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">Software Suites</span></>
            )}
          </h2>
          
          <p className={`max-w-[600px] mx-auto font-light text-base md:text-lg ${
            isDark ? 'text-slate-400' : 'text-slate-650'
          }`}>
            {data.uiText.productsDesc}
          </p>
        </div>

        {/* Grid Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {data.productsData.slice(0, 4).map((prod, idx) => (
            <Link 
              key={idx} 
              href={`/products/${prod.slug}`}
              className={`group relative rounded-3xl p-[1px] transition-all duration-500 hover:-translate-y-2 shadow-md hover:shadow-lg overflow-hidden block ${
                isDark 
                  ? 'bg-slate-900 hover:bg-gradient-to-br hover:from-blue-500 hover:via-indigo-500 hover:to-cyan-400'
                  : 'bg-slate-200 hover:bg-gradient-to-br hover:from-blue-500 hover:via-indigo-500 hover:to-cyan-400'
              }`}
            >
              {/* Inner card container */}
              <div className={`h-full rounded-[23px] p-6 flex flex-col justify-between relative z-10 ${
                isDark ? 'bg-slate-950' : 'bg-white'
              }`}>
                <div>
                  
                  {/* Product Thumbnail Frame */}
                  <div className={`relative aspect-[16/10] w-full rounded-2xl overflow-hidden mb-6 border p-1 bg-gradient-to-br ${
                    isDark ? 'bg-slate-950 border-slate-900 from-slate-900 to-slate-950' : 'bg-slate-100 border-slate-200 from-slate-50 to-slate-100'
                  }`}>
                    <img 
                      src={prod.gallery && prod.gallery.length > 0 ? prod.gallery[0] : "/portfolio_mockup.png"} 
                      alt={prod.title} 
                      className="w-full h-full object-cover rounded-xl opacity-80 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-102"
                    />
                  </div>

                  {/* Header tag */}
                  <div className="flex justify-between items-start mb-4">
                    <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full border ${
                      isDark 
                        ? 'bg-slate-900 border-slate-800 text-slate-300' 
                        : 'bg-slate-50 border-slate-200 text-slate-700'
                    }`}>
                      {prod.tag}
                    </span>
                    <span className="text-xs font-bold text-blue-550 opacity-60 group-hover:opacity-100 transition-opacity">
                      {lang === 'id' ? 'Detail ↗' : 'Details ↗'}
                    </span>
                  </div>

                  {/* Title & Desc */}
                  <h3 className={`text-2xl font-bold font-heading mb-3 group-hover:text-blue-500 transition-colors ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}>
                    {prod.title}
                  </h3>
                  
                  <p className={`text-sm leading-relaxed mb-6 font-light ${
                    isDark ? 'text-slate-400' : 'text-slate-650'
                  }`}>
                    {prod.desc}
                  </p>

                  {/* Features list */}
                  <ul className={`space-y-2.5 mb-8 border-t pt-6 ${
                    isDark ? 'border-slate-900' : 'border-slate-100'
                  }`}>
                    {prod.features.map((feat, fIdx) => (
                      <li key={fIdx} className={`flex items-start gap-2.5 text-xs font-light ${
                        isDark ? 'text-slate-400' : 'text-slate-650'
                      }`}>
                        <span className="text-blue-500 shrink-0">✔</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                </div>

                {/* CTA Action */}
                <div className={`w-full py-3 rounded-xl font-semibold text-xs transition-all flex items-center justify-center gap-2 border ${
                  isDark 
                    ? 'bg-slate-900 text-slate-250 border-slate-800 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white group-hover:border-transparent' 
                    : 'bg-slate-100 text-slate-700 border-slate-200 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white group-hover:border-transparent'
                }`}>
                  {lang === 'id' ? 'Selengkapnya' : 'View Details'} <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>

              </div>
            </Link>
          ))}
        </div>

        {/* View More See All Catalog Button */}
        <div className="text-center">
          <Link 
            href="/products" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-xl text-sm shadow-lg shadow-blue-500/15 hover:shadow-blue-500/25 transition-all hover:-translate-y-0.5 cursor-pointer"
          >
            <span>{lang === 'id' ? 'Lihat Semua Produk' : 'View All Products'}</span>
            <span className="text-base">→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
