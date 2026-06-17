import React from 'react';

export default function HeroSection() {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 flex flex-col justify-center items-center text-center relative overflow-hidden bg-gray-50">
      {/* Soft Background Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-100/50 blur-3xl opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-indigo-100/50 blur-3xl opacity-60 pointer-events-none"></div>

      <div className="max-w-[800px] z-10 animate-fade-in-up">
        <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 font-semibold text-sm mb-6 border border-blue-100">
          Leading IT Solutions Provider
        </span>
        <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 tracking-tight font-heading leading-tight">
          Empowering Your <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Digital Future</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-500 mb-10 leading-relaxed font-light">
          We build scalable, modern, and highly interactive software solutions designed to streamline your business and accelerate growth.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#services" className="px-8 py-4 rounded-full bg-blue-600 text-white font-semibold text-lg hover:bg-blue-700 transition-all shadow-[0_10px_20px_rgba(37,99,235,0.2)] hover:shadow-[0_15px_30px_rgba(37,99,235,0.3)] hover:-translate-y-1 w-full sm:w-auto">
            Explore Services
          </a>
          <a href="#products" className="px-8 py-4 rounded-full bg-white text-gray-800 font-semibold text-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all shadow-sm w-full sm:w-auto">
            View Products
          </a>
        </div>
      </div>
    </section>
  );
}
