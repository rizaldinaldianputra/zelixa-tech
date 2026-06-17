"use client";
import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingChat from '../../components/FloatingChat';
import { localizedData } from '../../services/mockData';
import Link from 'next/link';

export default function ProductsCatalogPage() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [lang, setLang] = useState<'id' | 'en'>('id');
  const [isMounted, setIsMounted] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('Semua');

  // Sync state with localStorage on client mount
  useEffect(() => {
    const localTheme = localStorage.getItem('theme') as 'dark' | 'light';
    const localLang = localStorage.getItem('lang') as 'id' | 'en';
    if (localTheme) setTheme(localTheme);
    if (localLang) setLang(localLang);
    setIsMounted(true);
  }, []);

  // Update layout classes and localStorage
  useEffect(() => {
    if (!isMounted) return;
    localStorage.setItem('theme', theme);
    
    const htmlEl = document.documentElement;
    if (theme === 'light') {
      htmlEl.classList.remove('dark');
      htmlEl.classList.add('light');
      htmlEl.style.backgroundColor = '#f8fafc';
    } else {
      htmlEl.classList.remove('light');
      htmlEl.classList.add('dark');
      htmlEl.style.backgroundColor = '#030712';
    }
  }, [theme, isMounted]);

  useEffect(() => {
    if (!isMounted) return;
    localStorage.setItem('lang', lang);
    setSelectedTag(lang === 'id' ? 'Semua' : 'All');
  }, [lang, isMounted]);

  if (!isMounted) {
    return <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">Loading...</div>;
  }

  const data = localizedData[lang];
  const isDark = theme === 'dark';

  // Get unique product tags for filtering
  const defaultTag = lang === 'id' ? 'Semua' : 'All';
  const rawTags = Array.from(new Set(data.productsData.map(p => p.tag)));
  const filterTags = [defaultTag, ...rawTags];

  // Filter products by search query and tag selection
  const filteredProducts = data.productsData.filter(prod => {
    const matchesSearch = prod.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          prod.desc.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = selectedTag === defaultTag || prod.tag.toLowerCase() === selectedTag.toLowerCase();
    return matchesSearch && matchesTag;
  });

  return (
    <div className={`min-h-screen font-sans overflow-x-hidden selection:bg-blue-600/35 selection:text-white transition-colors duration-500 ${
      isDark ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-800'
    }`}>
      <Navbar theme={theme} setTheme={setTheme} lang={lang} setLang={setLang} />

      <main className="max-w-[1200px] mx-auto px-6 pt-32 pb-24 space-y-16">
        
        {/* Breadcrumb Navigation */}
        <div className="text-left">
          <Link 
            href="/" 
            className={`inline-flex items-center gap-2 text-sm font-semibold hover:text-blue-500 transition-colors ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            <span>←</span>
            <span>{lang === 'id' ? 'Kembali ke Beranda' : 'Back to Home'}</span>
          </Link>
        </div>

        {/* Title Header */}
        <div className="text-center space-y-4 max-w-[700px] mx-auto">
          <span className={`inline-flex py-1 px-3.5 rounded-full font-semibold text-xs tracking-wider uppercase border ${
            isDark 
              ? 'bg-slate-900 border-blue-500/20 text-blue-400' 
              : 'bg-blue-50 border-blue-200 text-blue-600'
          }`}>
            {lang === 'id' ? 'Katalog Produk Lengkap' : 'Complete Product Catalog'}
          </span>
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-black font-heading tracking-tight ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            {lang === 'id' ? (
              <>Eksplorasi Semua Rangkaian <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 font-black">Software Kami</span></>
            ) : (
              <>Explore All Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">Software Suites</span></>
            )}
          </h1>
          <p className={`text-base md:text-lg font-light leading-relaxed ${
            isDark ? 'text-slate-400' : 'text-slate-650'
          }`}>
            {lang === 'id' 
              ? 'Temukan solusi teknologi spesifik yang disesuaikan untuk melayani ritel, korporat, analitik, pergudangan, hingga operasional kesehatan.'
              : 'Find tailored enterprise technology suites built to scale retail, logistics, analytics, marketing, and healthcare operations.'}
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="space-y-6 max-w-[800px] mx-auto">
          {/* Search Input */}
          <div className="relative">
            <input 
              type="text" 
              placeholder={lang === 'id' ? 'Cari nama produk atau deskripsi...' : 'Search product title or features...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full px-6 py-4 pl-12 rounded-2xl border text-sm outline-none transition-all ${
                isDark 
                  ? 'bg-slate-900/50 border-slate-800 text-white focus:border-blue-500 focus:bg-slate-900' 
                  : 'bg-white border-slate-200 text-slate-800 focus:border-blue-550 shadow-sm focus:bg-white'
              }`}
            />
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg">🔍</span>
          </div>

          {/* Tag Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2">
            {filterTags.map((tag, tIdx) => (
              <button
                key={tIdx}
                onClick={() => setSelectedTag(tag)}
                className={`px-4.5 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                  selectedTag.toLowerCase() === tag.toLowerCase()
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white border-transparent shadow-md shadow-blue-500/10'
                    : isDark 
                      ? 'bg-slate-900 text-slate-400 border-slate-805 hover:text-white hover:border-slate-700'
                      : 'bg-white text-slate-600 border-slate-200 hover:text-slate-900 hover:bg-slate-50 shadow-sm'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((prod, idx) => (
              <Link 
                key={idx} 
                href={`/products/${prod.slug}`}
                className={`group relative rounded-3xl p-[1px] transition-all duration-500 hover:-translate-y-2 shadow-md hover:shadow-lg overflow-hidden block ${
                  isDark 
                    ? 'bg-slate-900 hover:bg-gradient-to-br hover:from-blue-500 hover:via-indigo-500 hover:to-cyan-400'
                    : 'bg-slate-200 hover:bg-gradient-to-br hover:from-blue-500 hover:via-indigo-500 hover:to-cyan-400'
                }`}
              >
                {/* Inner Card Frame */}
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
                          ? 'bg-slate-900 border-slate-800 text-slate-350' 
                          : 'bg-slate-55 border-slate-200 text-slate-700 shadow-sm'
                      }`}>
                        {prod.tag}
                      </span>
                      <span className="text-xs font-bold text-blue-500 opacity-60 group-hover:opacity-100 transition-opacity">
                        {lang === 'id' ? 'Detail ↗' : 'Details ↗'}
                      </span>
                    </div>

                    {/* Title & Description */}
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
                      {prod.features.slice(0, 3).map((feat, fIdx) => (
                        <li key={fIdx} className={`flex items-start gap-2.5 text-xs font-light ${
                          isDark ? 'text-slate-400' : 'text-slate-650'
                        }`}>
                          <span className="text-blue-500 shrink-0">✔</span>
                          <span className="text-left">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Details button */}
                  <div className={`w-full py-3 rounded-xl font-semibold text-xs transition-all flex items-center justify-center gap-2 border ${
                    isDark 
                      ? 'bg-slate-900 text-slate-250 border-slate-800 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white group-hover:border-transparent' 
                      : 'bg-slate-100 text-slate-750 border-slate-200 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white group-hover:border-transparent shadow-sm'
                  }`}>
                    {lang === 'id' ? 'Selengkapnya' : 'View Details'} <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 space-y-4">
            <div className="text-4xl">🔍</div>
            <h3 className="text-xl font-bold">{lang === 'id' ? 'Produk Tidak Ditemukan' : 'No Products Found'}</h3>
            <p className={`text-sm font-light ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              {lang === 'id' ? 'Coba ganti filter kategori atau kata kunci pencarian Anda.' : 'Try adjusting your category filter or search keywords.'}
            </p>
          </div>
        )}

      </main>

      <Footer theme={theme} lang={lang} />
      <FloatingChat theme={theme} lang={lang} />
    </div>
  );
}
