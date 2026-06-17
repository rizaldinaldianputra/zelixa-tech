"use client";
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroCarousel from '../components/HeroCarousel';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ProductsSection from '../components/ProductsSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import PortfolioSection from '../components/PortfolioSection';
import TechStackSection from '../components/TechStackSection';
import TestimonialsSection from '../components/TestimonialsSection';
import PricingSection from '../components/PricingSection';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import FloatingChat from '../components/FloatingChat';

export default function Home() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [lang, setLang] = useState<'id' | 'en'>('id'); // Default starts as Indonesian (bahasa indonesia)

  // Toggle themes in HTML element to support global classes
  useEffect(() => {
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
  }, [theme]);

  return (
    <div className={`min-h-screen font-sans overflow-x-hidden selection:bg-blue-600/35 selection:text-white transition-colors duration-500 ${
      theme === 'light' 
        ? 'bg-slate-50 text-slate-800' 
        : 'bg-slate-950 text-slate-100'
    }`}>
      <Navbar theme={theme} setTheme={setTheme} lang={lang} setLang={setLang} />
      
      <main>
        {/* 1. Hero Carousel Section */}
        <HeroCarousel theme={theme} lang={lang} />
        
        {/* 2. About Us Section */}
        <AboutSection theme={theme} lang={lang} />
        
        {/* 3. Services Section */}
        <ServicesSection theme={theme} lang={lang} />
        
        {/* 4. Products Section */}
        <ProductsSection theme={theme} lang={lang} />
        
        {/* 5. Why Choose Us Section */}
        <WhyChooseUsSection theme={theme} lang={lang} />
        
        {/* 6. Portfolio Section */}
        <PortfolioSection theme={theme} lang={lang} />
        
        {/* 7. Technology Stack Section */}
        <TechStackSection theme={theme} lang={lang} />
        
        {/* 8. Testimonials Section */}
        <TestimonialsSection theme={theme} lang={lang} />
        
        {/* 9. Pricing Section */}
        <PricingSection theme={theme} lang={lang} />
        
        {/* 10. FAQ Section */}
        <FAQSection theme={theme} lang={lang} />
        
        {/* 11. Contact / CTA Section */}
        <ContactSection theme={theme} lang={lang} />
      </main>
      
      <Footer theme={theme} lang={lang} />
      <FloatingChat theme={theme} lang={lang} />
    </div>
  );
}
