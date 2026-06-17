"use client";
import React, { useState } from 'react';
import { localizedData } from '../services/mockData';
import { Product } from '../types';

interface SectionProps {
  theme?: 'dark' | 'light';
  lang: 'id' | 'en';
}

export default function ProductsSection({ theme = 'dark', lang }: SectionProps) {
  const data = localizedData[lang];
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const isDark = theme === 'dark';

  const handleCardClick = (prod: Product) => {
    setSelectedProduct(prod);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const handleInquiryRedirect = () => {
    closeModal();
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
              <>Our Proprietary <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 font-black">Software Suites</span></>
            )}
          </h2>
          
          <p className={`max-w-[600px] mx-auto font-light text-base md:text-lg ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}>
            {data.uiText.productsDesc}
          </p>
        </div>

        {/* Grid Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.productsData.map((prod, idx) => (
            <div 
              key={idx} 
              onClick={() => handleCardClick(prod)}
              className={`group relative rounded-3xl p-[1px] transition-all duration-500 hover:-translate-y-2 shadow-md hover:shadow-lg overflow-hidden cursor-pointer ${
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
                  
                  {/* Header tag */}
                  <div className="flex justify-between items-start mb-6">
                    <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full border ${
                      isDark 
                        ? 'bg-slate-900 border-slate-800 text-slate-300' 
                        : 'bg-slate-50 border-slate-200 text-slate-700'
                    }`}>
                      {prod.tag}
                    </span>
                    <span className="text-xs font-bold text-blue-500 opacity-60 group-hover:opacity-100 transition-opacity">
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
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    {prod.desc}
                  </p>

                  {/* Features list */}
                  <ul className={`space-y-2.5 mb-8 border-t pt-6 ${
                    isDark ? 'border-slate-900' : 'border-slate-100'
                  }`}>
                    {prod.features.map((feat, fIdx) => (
                      <li key={fIdx} className={`flex items-start gap-2.5 text-xs font-light ${
                        isDark ? 'text-slate-400' : 'text-slate-600'
                      }`}>
                        <span className="text-blue-500 shrink-0">✔</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                </div>

                {/* CTA Action */}
                <button className={`w-full py-3 rounded-xl font-semibold text-xs transition-all flex items-center justify-center gap-2 border cursor-pointer ${
                  isDark 
                    ? 'bg-slate-900 text-slate-250 border-slate-800 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white group-hover:border-transparent' 
                    : 'bg-slate-100 text-slate-700 border-slate-200 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white group-hover:border-transparent'
                }`}>
                  {lang === 'id' ? 'Selengkapnya' : 'View Details'} <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Product Details Modal Overlay */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-md z-50 flex items-center justify-center p-4 md:p-6 transition-all duration-300">
          
          <div 
            className={`w-full max-w-3xl rounded-3xl border p-8 md:p-10 shadow-2xl relative max-h-[90vh] overflow-y-auto animate-fade-in-up transition-colors duration-500 ${
              isDark 
                ? 'bg-slate-900 border-slate-800 text-white' 
                : 'bg-white border-slate-200 text-slate-800'
            }`}
          >
            {/* Close Button */}
            <button 
              onClick={closeModal}
              className={`absolute top-6 right-6 w-10 h-10 rounded-xl border flex items-center justify-center font-bold text-lg cursor-pointer transition-colors ${
                isDark 
                  ? 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700' 
                  : 'bg-slate-100 border-slate-200 text-slate-600 hover:text-slate-900'
              }`}
              aria-label="Close Modal"
            >
              ×
            </button>

            {/* Modal Header */}
            <div className="space-y-2 mb-8 text-left">
              <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full border ${
                isDark ? 'bg-slate-950 border-slate-800 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'
              }`}>
                {selectedProduct.tag}
              </span>
              <h3 className={`text-3xl md:text-4xl font-black font-heading tracking-tight ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                {selectedProduct.title}
              </h3>
            </div>

            {/* Modal Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-left">
              
              {/* Main Description Column */}
              <div className="md:col-span-7 space-y-6">
                <div className="space-y-3">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-blue-500">
                    {lang === 'id' ? 'Deskripsi Sistem' : 'System Overview'}
                  </h4>
                  <p className={`text-sm md:text-base font-light leading-relaxed ${
                    isDark ? 'text-slate-300' : 'text-slate-650'
                  }`}>
                    {selectedProduct.longDesc}
                  </p>
                </div>

                {/* Features Specifications */}
                <div className="space-y-3">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-blue-500">
                    {lang === 'id' ? 'Spesifikasi Inti' : 'Key Specifications'}
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedProduct.features.map((feat, fIdx) => (
                      <li key={fIdx} className={`flex items-start gap-2.5 text-xs font-light ${
                        isDark ? 'text-slate-350' : 'text-slate-600'
                      }`}>
                        <span className="text-cyan-500 shrink-0">✔</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies used */}
                {selectedProduct.techUsed && (
                  <div className="space-y-3 pt-2">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-blue-500">
                      {lang === 'id' ? 'Teknologi Utama' : 'Technologies Used'}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProduct.techUsed.map((tech, tIdx) => (
                        <span 
                          key={tIdx} 
                          className={`px-3 py-1.5 rounded-lg border text-xs font-semibold ${
                            isDark 
                              ? 'bg-slate-950 border-slate-800 text-slate-300' 
                              : 'bg-slate-50 border-slate-200 text-slate-700 shadow-sm'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar Metrics Column */}
              <div className="md:col-span-5 space-y-6">
                
                {/* Metric list */}
                {selectedProduct.metrics && (
                  <div className="space-y-4">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-blue-500">
                      {lang === 'id' ? 'Indikator Performa' : 'Performance Indicators'}
                    </h4>
                    <div className="grid grid-cols-1 gap-4">
                      {selectedProduct.metrics.map((metric, mIdx) => (
                        <div 
                          key={mIdx} 
                          className={`border rounded-2xl p-4 flex items-center justify-between gap-4 ${
                            isDark ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'
                          }`}
                        >
                          <span className={`text-xs font-semibold ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                            {metric.label}
                          </span>
                          <span className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 font-heading">
                            {metric.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Inquiry Action */}
                <div className={`p-6 rounded-2xl border text-center space-y-4 ${
                  isDark ? 'bg-slate-950/50 border-slate-850' : 'bg-slate-50/50 border-slate-200'
                }`}>
                  <p className={`text-xs font-light ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {lang === 'id' 
                      ? 'Tertarik menggunakan modul ini? Hubungi kami untuk menjadwalkan demo sandbox.' 
                      : 'Interested in this module? Connect with us to reserve a sandbox session.'}
                  </p>
                  <button 
                    onClick={handleInquiryRedirect}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-xs shadow-md cursor-pointer hover:opacity-95"
                  >
                    {lang === 'id' ? 'Hubungi Penjualan' : 'Contact Sales'}
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>
      )}

    </section>
  );
}
