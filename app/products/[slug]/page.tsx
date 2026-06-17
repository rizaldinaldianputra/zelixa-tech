"use client";
import React, { useState, useEffect, use } from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import FloatingChat from '../../../components/FloatingChat';
import { localizedData } from '../../../services/mockData';
import Link from 'next/link';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function ProductDetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;

  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [lang, setLang] = useState<'id' | 'en'>('id');
  const [isMounted, setIsMounted] = useState(false);

  // Video Player States
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(80);
  
  // Gallery Lightbox States
  const [activeImageIdx, setActiveImageIdx] = useState<number | null>(null);

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
  }, [lang, isMounted]);

  // Video time tracker simulation
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setInterval(() => {
        setCurrentTime(prev => {
          if (prev >= 150) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  if (!isMounted) {
    return <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">Loading...</div>;
  }

  const data = localizedData[lang];
  const product = data.productsData.find(p => p.slug === slug);
  const isDark = theme === 'dark';

  if (!product) {
    return (
      <div className={`min-h-screen flex flex-col justify-between transition-colors duration-500 ${
        isDark ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-800'
      }`}>
        <Navbar theme={theme} setTheme={setTheme} lang={lang} setLang={setLang} />
        <main className="flex-1 flex flex-col items-center justify-center p-6 text-center space-y-6">
          <h2 className="text-4xl font-extrabold font-heading">Product Not Found</h2>
          <Link href="/" className="px-6 py-3 bg-blue-600 rounded-xl text-white font-semibold shadow-md hover:bg-blue-700">
            Back to Home
          </Link>
        </main>
        <Footer theme={theme} lang={lang} />
      </div>
    );
  }

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainingSecs = secs % 60;
    return `${mins}:${remainingSecs < 10 ? '0' : ''}${remainingSecs}`;
  };

  const galleryList = product.gallery || ["/portfolio_mockup.png"];

  return (
    <div className={`min-h-screen font-sans overflow-x-hidden selection:bg-blue-600/35 selection:text-white transition-colors duration-500 ${
      isDark ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-800'
    }`}>
      <Navbar theme={theme} setTheme={setTheme} lang={lang} setLang={setLang} />

      <main className="max-w-[1200px] mx-auto px-6 pt-32 pb-24 space-y-16">
        
        {/* Breadcrumb / Back Navigation */}
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
        <div className="text-left space-y-4">
          <span className={`inline-block px-3.5 py-1 text-xs font-bold rounded-full border ${
            isDark ? 'bg-slate-900 border-slate-800 text-slate-300' : 'bg-white border-slate-200 text-slate-700 shadow-sm'
          }`}>
            {product.tag}
          </span>
          
          <h1 className={`text-4xl md:text-6xl font-black font-heading tracking-tight ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            {product.title}
          </h1>
        </div>

        {/* Dynamic Video Intro Player Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold font-heading text-left flex items-center gap-2">
            <span>🎬</span>
            <span>{lang === 'id' ? 'Video Pengenalan Produk' : 'Product Intro Video'}</span>
          </h3>

          <div className={`aspect-video w-full rounded-3xl overflow-hidden border relative bg-slate-950 shadow-2xl flex flex-col justify-between p-6 ${
            isDark ? 'border-slate-900' : 'border-slate-200'
          }`}>
            
            {/* Play/Pause Main Overlay */}
            {!isPlaying && (
              <div 
                onClick={() => setIsPlaying(true)}
                className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm z-20 flex flex-col items-center justify-center gap-4 cursor-pointer group select-none"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-500 text-white flex items-center justify-center text-3xl shadow-[0_0_30px_rgba(59,130,246,0.5)] group-hover:scale-110 transition-transform">
                  ▶
                </div>
                <span className="text-xs font-bold text-slate-300 tracking-widest uppercase group-hover:text-white transition-colors">
                  {lang === 'id' ? 'Putar Video Demo' : 'Play Demo Video'}
                </span>
              </div>
            )}

            {/* Video Simulated Dashboard (Moving UI during play) */}
            <div className="absolute inset-0 z-0 overflow-hidden flex items-center justify-center bg-slate-950">
              <div className={`w-full h-full p-8 flex flex-col justify-between transition-all duration-1000 ${
                isPlaying ? 'opacity-80 scale-100' : 'opacity-10 scale-95 blur-md'
              }`}>
                {/* Simulated charts & cards */}
                <div className="grid grid-cols-3 gap-6">
                  {Array.from({ length: 3 }).map((_, cIdx) => (
                    <div key={cIdx} className="bg-slate-900/60 border border-slate-800 rounded-xl p-4 space-y-2">
                      <div className="h-2 w-1/3 bg-slate-800 rounded"></div>
                      <div className={`h-8 w-2/3 rounded font-heading font-black text-xl flex items-center text-blue-400`}>
                        {isPlaying ? (Math.random() * 100).toFixed(1) : '00.0'}%
                      </div>
                    </div>
                  ))}
                </div>

                <div className="w-full flex-1 flex items-end justify-center py-8">
                  <div className="w-full h-[60%] flex gap-1 items-end justify-center">
                    {Array.from({ length: 24 }).map((_, bIdx) => (
                      <div 
                        key={bIdx} 
                        className="w-full bg-gradient-to-t from-blue-600 to-cyan-400 rounded-t transition-all"
                        style={{ 
                          height: isPlaying ? `${Math.floor(Math.sin((currentTime + bIdx) * 0.5) * 40 + 50)}%` : '10%',
                          transitionDuration: '500ms'
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Simulated Player Controls (Visible when hovered or playing) */}
            <div className="relative z-30 w-full flex flex-col justify-end flex-1 pointer-events-none">
              <div className="w-full bg-slate-950/90 border border-slate-900 rounded-2xl p-4 flex flex-col md:flex-row items-center justify-between gap-4 pointer-events-auto shadow-2xl opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center gap-4">
                  <button 
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="text-white hover:text-blue-400 text-sm cursor-pointer"
                  >
                    {isPlaying ? '⏸' : '▶'}
                  </button>
                  <span className="text-[10px] font-bold text-slate-400">
                    {formatTime(currentTime)} / 2:30
                  </span>
                </div>

                {/* Progress bar */}
                <div 
                  className="flex-1 h-1 bg-slate-800 rounded-full overflow-hidden cursor-pointer"
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const clickX = e.clientX - rect.left;
                    const width = rect.width;
                    setCurrentTime(Math.floor((clickX / width) * 150));
                  }}
                >
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-400" 
                    style={{ width: `${(currentTime / 150) * 100}%` }}
                  />
                </div>

                <div className="flex items-center gap-4">
                  <button 
                    onClick={() => setIsMuted(!isMuted)}
                    className="text-white hover:text-blue-400 text-sm cursor-pointer"
                  >
                    {isMuted ? '🔇' : '🔊'}
                  </button>
                  <input 
                    type="range" 
                    min={0} 
                    max={100} 
                    value={isMuted ? 0 : volume}
                    onChange={(e) => {
                      setVolume(Number(e.target.value));
                      setIsMuted(false);
                    }}
                    className="w-16 h-1 rounded-full cursor-pointer bg-slate-800 outline-none"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Content Layout (Details & Gallery) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Description, Features & Stack */}
          <div className="lg:col-span-7 space-y-10 text-left">
            
            {/* Detailed Description */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold font-heading border-l-2 border-blue-500 pl-4">
                {lang === 'id' ? 'Detail Proyek' : 'Project Parameters'}
              </h3>
              <p className={`text-base font-light leading-relaxed leading-8 ${
                isDark ? 'text-slate-350' : 'text-slate-650'
              }`}>
                {product.longDesc}
              </p>
            </div>

            {/* Core Specifications */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold font-heading border-l-2 border-blue-500 pl-4">
                {lang === 'id' ? 'Spesifikasi & Fitur' : 'Specifications & Features'}
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.features.map((feat, fIdx) => (
                  <li 
                    key={fIdx} 
                    className={`flex items-start gap-3 p-4 rounded-xl border font-light text-sm ${
                      isDark ? 'bg-slate-900/40 border-slate-900 text-slate-300' : 'bg-white border-slate-200 text-slate-700 shadow-sm'
                    }`}
                  >
                    <span className="text-cyan-500 shrink-0 font-bold">✔</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical Tooling stack */}
            {product.techUsed && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold font-heading border-l-2 border-blue-500 pl-4">
                  {lang === 'id' ? 'Teknologi Utama' : 'Technologies Used'}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {product.techUsed.map((tech, tIdx) => (
                    <span 
                      key={tIdx} 
                      className={`px-4 py-2 rounded-xl border text-sm font-semibold ${
                        isDark 
                          ? 'bg-slate-900 border-slate-850 text-slate-300 shadow-sm' 
                          : 'bg-white border-slate-200 text-slate-700 shadow-md shadow-slate-100'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Right Column: Screenshot Gallery */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <h3 className="text-xl font-bold font-heading border-l-2 border-blue-500 pl-4">
              {lang === 'id' ? 'Galeri Screenshot Antarmuka' : 'Interface Screenshot Gallery'}
            </h3>

            {/* Grid Gallery displaying thumbnails */}
            <div className="grid grid-cols-1 gap-4">
              
              {/* Main thumbnail */}
              <div 
                onClick={() => setActiveImageIdx(0)}
                className={`group aspect-[16/10] rounded-2xl overflow-hidden border p-1 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 cursor-pointer shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${
                  isDark ? 'border-slate-900' : 'border-slate-200'
                }`}
              >
                <div className={`w-full h-full rounded-xl overflow-hidden relative ${
                  isDark ? 'bg-slate-950' : 'bg-slate-50'
                }`}>
                  <img 
                    src={galleryList[0]} 
                    alt={`${product.title} Main Screen`} 
                    className="w-full h-full object-cover opacity-90 group-hover:scale-103 transition-all duration-500" 
                  />
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center text-white font-bold text-xs">
                    {lang === 'id' ? 'Buka Lightbox 🔍' : 'Open Lightbox 🔍'}
                  </div>
                </div>
              </div>

              {/* Smaller sub-thumbnails */}
              <div className="grid grid-cols-2 gap-4">
                {galleryList.slice(1).map((img, idx) => (
                  <div 
                    key={idx}
                    onClick={() => setActiveImageIdx(idx + 1)}
                    className={`group aspect-[16/10] rounded-xl overflow-hidden border cursor-pointer hover:-translate-y-0.5 transition-all shadow ${
                      isDark ? 'bg-slate-900 border-slate-900' : 'bg-white border-slate-200'
                    }`}
                  >
                    <img 
                      src={img} 
                      alt={`${product.title} Screen ${idx + 2}`} 
                      className="w-full h-full object-cover opacity-85 hover:opacity-100 transition-opacity duration-300" 
                    />
                  </div>
                ))}
              </div>

            </div>

            {/* Performance Indicators Metrics panel */}
            {product.metrics && (
              <div className={`p-6 rounded-2xl border ${
                isDark ? 'bg-slate-900/30 border-slate-900' : 'bg-slate-50 border-slate-200 shadow-inner'
              }`}>
                <h4 className="text-sm font-bold uppercase tracking-wider text-blue-500 mb-4">
                  {lang === 'id' ? 'Indikator Keberhasilan' : 'Success Indicators'}
                </h4>
                <div className="grid grid-cols-1 gap-3">
                  {product.metrics.map((metric, mIdx) => (
                    <div 
                      key={mIdx} 
                      className={`px-4 py-3 border rounded-xl flex items-center justify-between gap-4 ${
                        isDark ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-150 shadow-sm'
                      }`}
                    >
                      <span className="text-xs font-semibold text-slate-500">{metric.label}</span>
                      <span className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 font-heading">
                        {metric.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>

      </main>

      {/* Lightbox Modal Carousel */}
      {activeImageIdx !== null && (
        <div className="fixed inset-0 bg-slate-950/90 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <button 
            onClick={() => setActiveImageIdx(null)}
            className="absolute top-6 right-6 w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 text-white font-bold text-xl cursor-pointer flex items-center justify-center hover:bg-slate-800 transition-colors"
          >
            ×
          </button>

          <button 
            onClick={() => setActiveImageIdx(prev => prev !== null ? (prev - 1 + galleryList.length) % galleryList.length : null)}
            className="absolute left-6 w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 text-white font-bold text-lg cursor-pointer flex items-center justify-center hover:bg-slate-800 transition-colors"
          >
            ‹
          </button>

          <div className="w-full max-w-4xl aspect-[16/10] rounded-3xl overflow-hidden border border-slate-800 p-1 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 shadow-2xl relative">
            <img 
              src={galleryList[activeImageIdx]} 
              alt="Screenshot Lightbox Zoom" 
              className="w-full h-full object-cover rounded-2xl" 
            />
            
            {/* Carousel bottom indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-slate-950/80 border border-slate-900 text-[10px] font-bold text-slate-400">
              {activeImageIdx + 1} / {galleryList.length}
            </div>
          </div>

          <button 
            onClick={() => setActiveImageIdx(prev => prev !== null ? (prev + 1) % galleryList.length : null)}
            className="absolute right-6 w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 text-white font-bold text-lg cursor-pointer flex items-center justify-center hover:bg-slate-800 transition-colors"
          >
            ›
          </button>
        </div>
      )}

      <Footer theme={theme} lang={lang} />
      <FloatingChat theme={theme} lang={lang} />
    </div>
  );
}
