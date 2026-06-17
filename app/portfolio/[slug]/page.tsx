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

export default function PortfolioDetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;

  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [lang, setLang] = useState<'id' | 'en'>('id');
  const [isMounted, setIsMounted] = useState(false);
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

  if (!isMounted) {
    return <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">Loading...</div>;
  }

  const data = localizedData[lang];
  const project = data.portfolioProjects.find(p => p.slug === slug);
  const isDark = theme === 'dark';

  if (!project) {
    return (
      <div className={`min-h-screen flex flex-col justify-between transition-colors duration-500 ${
        isDark ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-800'
      }`}>
        <Navbar theme={theme} setTheme={setTheme} lang={lang} setLang={setLang} />
        <main className="flex-1 flex flex-col items-center justify-center p-6 text-center space-y-6">
          <h2 className="text-4xl font-extrabold font-heading">Case Study Not Found</h2>
          <Link href="/" className="px-6 py-3 bg-blue-600 rounded-xl text-white font-semibold shadow-md hover:bg-blue-700">
            Back to Home
          </Link>
        </main>
        <Footer theme={theme} lang={lang} />
      </div>
    );
  }

  const galleryList = project.gallery || ["/portfolio_mockup.png"];

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

        {/* Title Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 border-b pb-12 border-slate-250 dark:border-slate-850">
          <div className="text-left space-y-4 max-w-[800px]">
            <span className={`inline-block px-3.5 py-1 text-xs font-bold rounded-full border ${
              isDark ? 'bg-slate-900 border-slate-850 text-slate-350' : 'bg-white border-slate-200 text-slate-700 shadow-sm'
            }`}>
              {project.category}
            </span>
            
            <h1 className={`text-4xl md:text-6xl font-black font-heading tracking-tight ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              {project.title}
            </h1>
            <p className={`text-lg font-light leading-relaxed ${isDark ? 'text-slate-450' : 'text-slate-600'}`}>
              {project.desc}
            </p>
          </div>

          <div className="flex flex-wrap gap-3 lg:self-center">
            {project.liveLink && (
              <a 
                href={project.liveLink === '#' ? '#' : project.liveLink}
                target={project.liveLink === '#' ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl text-sm shadow-md hover:shadow-lg hover:opacity-95 transition-all"
              >
                {project.liveText || (lang === 'id' ? 'Lihat Demo Langsung' : 'View Live Demo')}
              </a>
            )}
            <Link 
              href="/#contact" 
              className={`px-6 py-3 border font-semibold rounded-xl text-sm transition-all ${
                isDark 
                  ? 'border-slate-800 bg-slate-900 text-white hover:bg-slate-800' 
                  : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-100 shadow-sm'
              }`}
            >
              {lang === 'id' ? 'Konsultasi Proyek' : 'Discuss Project'}
            </Link>
          </div>
        </div>

        {/* Success Metrics Panel */}
        {project.metrics && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.metrics.map((metric, idx) => (
              <div 
                key={idx}
                className={`p-8 rounded-3xl border text-center transition-all ${
                  isDark 
                    ? 'bg-slate-900/30 border-slate-900 hover:border-slate-850 hover:bg-slate-900/50' 
                    : 'bg-white border-slate-200 hover:border-slate-300 shadow-md shadow-slate-100/50'
                }`}
              >
                <div className="text-4xl md:text-5xl font-black font-heading tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 mb-2">
                  {metric.value}
                </div>
                <div className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-slate-450' : 'text-slate-500'}`}>
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Case Study Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Side: Long Description, Challenges & Solutions */}
          <div className="lg:col-span-8 space-y-12 text-left">
            
            {/* Latar Belakang */}
            <div className="space-y-4">
              <h2 className={`text-2xl font-bold font-heading border-l-4 border-blue-500 pl-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {lang === 'id' ? 'Latar Belakang Proyek' : 'Project Background'}
              </h2>
              <p className={`text-base font-light leading-relaxed leading-8 ${
                isDark ? 'text-slate-350' : 'text-slate-650'
              }`}>
                {project.longDesc}
              </p>
            </div>

            {/* Tantangan Utama */}
            {project.challenges && (
              <div className="space-y-6">
                <h2 className={`text-2xl font-bold font-heading border-l-4 border-blue-500 pl-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {lang === 'id' ? 'Tantangan Teknis Utama' : 'Key Technical Challenges'}
                </h2>
                <div className="grid grid-cols-1 gap-4">
                  {project.challenges.map((challenge, cIdx) => (
                    <div 
                      key={cIdx}
                      className={`flex items-start gap-4 p-5 rounded-2xl border font-light text-sm ${
                        isDark ? 'bg-slate-900/20 border-slate-900 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-red-500/10 text-red-500 border border-red-500/20 shrink-0 font-bold text-xs">
                        {cIdx + 1}
                      </div>
                      <div className="leading-relaxed">{challenge}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Solusi & Rekayasa */}
            {project.solutions && (
              <div className="space-y-6">
                <h2 className={`text-2xl font-bold font-heading border-l-4 border-blue-500 pl-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {lang === 'id' ? 'Solusi & Arsitektur Rekayasa' : 'Solutions & Engineering Architecture'}
                </h2>
                <div className="grid grid-cols-1 gap-4">
                  {project.solutions.map((solution, sIdx) => (
                    <div 
                      key={sIdx}
                      className={`flex items-start gap-4 p-5 rounded-2xl border font-light text-sm ${
                        isDark ? 'bg-slate-900/20 border-slate-900 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0 font-bold text-xs">
                        ✔
                      </div>
                      <div className="leading-relaxed">{solution}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Right Side: Technical Specs & Image Gallery */}
          <div className="lg:col-span-4 space-y-10 text-left">
            
            {/* Tech Stack Listing */}
            <div className="space-y-4">
              <h3 className={`text-lg font-bold font-heading border-l-2 border-blue-500 pl-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {lang === 'id' ? 'Rangkaian Teknologi' : 'Technology Stack'}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {project.techStack.map((tech, tIdx) => (
                  <span 
                    key={tIdx}
                    className={`px-3.5 py-2 rounded-xl border text-xs font-semibold ${
                      isDark 
                        ? 'bg-slate-900 border-slate-850 text-slate-300' 
                        : 'bg-white border-slate-200 text-slate-700 shadow-sm'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Screenshot Gallery Grid */}
            <div className="space-y-4">
              <h3 className={`text-lg font-bold font-heading border-l-2 border-blue-500 pl-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {lang === 'id' ? 'Galeri Antarmuka' : 'Interface Gallery'}
              </h3>

              <div className="grid grid-cols-1 gap-4">
                {/* Main Image Thumbnail */}
                <div 
                  onClick={() => setActiveImageIdx(0)}
                  className={`group aspect-[16/10] rounded-2xl overflow-hidden border p-1 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 cursor-pointer shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 ${
                    isDark ? 'border-slate-900' : 'border-slate-200'
                  }`}
                >
                  <div className={`w-full h-full rounded-xl overflow-hidden relative ${
                    isDark ? 'bg-slate-950' : 'bg-slate-50'
                  }`}>
                    <img 
                      src={galleryList[0]} 
                      alt={`${project.title} Screenshot Main`} 
                      className="w-full h-full object-cover opacity-90 group-hover:scale-102 transition-all duration-500" 
                    />
                    <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center text-white font-bold text-xs">
                      {lang === 'id' ? 'Buka Galeri 🔍' : 'Open Gallery 🔍'}
                    </div>
                  </div>
                </div>

                {/* Sub Image Thumbnails */}
                {galleryList.length > 1 && (
                  <div className="grid grid-cols-2 gap-4">
                    {galleryList.slice(1).map((img, idx) => (
                      <div 
                        key={idx}
                        onClick={() => setActiveImageIdx(idx + 1)}
                        className={`group aspect-[16/10] rounded-xl overflow-hidden border cursor-pointer hover:-translate-y-0.5 transition-all shadow-sm ${
                          isDark ? 'bg-slate-900 border-slate-900' : 'bg-white border-slate-200'
                        }`}
                      >
                        <img 
                          src={img} 
                          alt={`${project.title} Screenshot ${idx + 2}`} 
                          className="w-full h-full object-cover opacity-85 hover:opacity-100 transition-opacity duration-300" 
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

          </div>

        </div>

        {/* Project Call to Action (CTA) */}
        <div className={`rounded-3xl border p-8 md:p-12 relative overflow-hidden transition-all text-center space-y-6 ${
          isDark 
            ? 'bg-slate-900/30 border-slate-900 from-slate-950 to-slate-900 bg-gradient-to-b' 
            : 'bg-white border-slate-200 shadow-lg shadow-slate-100 bg-gradient-to-b from-slate-50 to-white'
        }`}>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-500"></div>
          
          <h3 className={`text-2xl md:text-3xl font-extrabold font-heading ${isDark ? 'text-white' : 'text-slate-900'}`}>
            {lang === 'id' ? 'Ingin Membangun Solusi yang Sama?' : 'Want to Build a Similar Solution?'}
          </h3>
          <p className={`max-w-[600px] mx-auto text-sm md:text-base font-light leading-relaxed ${isDark ? 'text-slate-450' : 'text-slate-600'}`}>
            {lang === 'id' 
              ? 'Konsultasikan kebutuhan operasional, logistik, orkestrasi cloud, atau otomatisasi AI bisnis Anda dengan tim insinyur senior kami sekarang.'
              : 'Consult your operational, logistics, cloud orchestration, or AI automation business requirements with our senior engineering team today.'}
          </p>

          <div className="pt-2">
            <Link 
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-xl text-sm shadow-lg shadow-blue-500/15 hover:shadow-blue-500/25 hover:scale-102 transition-all cursor-pointer"
            >
              <span>{lang === 'id' ? 'Hubungi Tim Developer Kami' : 'Contact Our Developer Team'}</span>
              <span>→</span>
            </Link>
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
              alt="Screenshot Zoom" 
              className="w-full h-full object-cover rounded-2xl" 
            />
            
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
