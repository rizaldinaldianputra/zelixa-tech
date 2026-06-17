"use client";
import React, { useState } from 'react';
import { localizedData } from '../services/mockData';

interface SectionProps {
  theme?: 'dark' | 'light';
  lang: 'id' | 'en';
}

export default function ContactSection({ theme = 'dark', lang }: SectionProps) {
  const data = localizedData[lang];
  const [formData, setFormData] = useState({ name: '', email: '', budget: '$1,000 - $5,000', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', budget: '$1,000 - $5,000', message: '' });
    }, 2000);
  };

  const budgetOptions = ['$1,000 - $5,000', '$5,000 - $15,000', '$15,000 - $50,000', '$50,000+'];
  const isDark = theme === 'dark';

  return (
    <section id="contact" className={`py-24 px-6 border-t relative overflow-hidden transition-colors duration-500 ${isDark ? 'bg-slate-950 border-slate-900' : 'bg-white border-slate-200'
      }`}>

      {/* Background orbs */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-20 space-y-4">
          <span className={`inline-flex py-1 px-3.5 rounded-full font-semibold text-xs tracking-wider uppercase border ${isDark
            ? 'bg-slate-900 border-cyan-500/20 text-cyan-400'
            : 'bg-cyan-50 border-cyan-200 text-cyan-600'
            }`}>
            {data.uiText.contactTitle}
          </span>

          <h2 className={`text-4xl md:text-5xl font-black font-heading tracking-tight ${isDark ? 'text-white' : 'text-slate-900'
            }`}>
            {lang === 'id' ? (
              <>Mulai Pembaruan <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 font-black">Digital Anda</span></>
            ) : (
              <>Initiate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 font-black">Digital Upgrade</span></>
            )}
          </h2>

          <p className={`max-w-[600px] mx-auto font-light text-base md:text-lg ${isDark ? 'text-slate-400' : 'text-slate-650'
            }`}>
            {data.uiText.contactDesc}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Left Column: Stateful Contact Form */}
          <div className="lg:col-span-7">
            <div className={`border rounded-3xl p-8 md:p-10 shadow-lg relative overflow-hidden ${isDark ? 'bg-slate-900/40 border-slate-900' : 'bg-slate-50 border-slate-200'
              }`}>

              {isSuccess ? (
                <div className="text-center py-12 space-y-6 animate-fade-in-up">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center text-3xl mx-auto shadow-md">
                    ✔
                  </div>
                  <h3 className={`text-2xl font-bold font-heading ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {data.uiText.contactFormSuccessTitle}
                  </h3>
                  <p className={`text-sm max-w-sm mx-auto font-light ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {data.uiText.contactFormSuccessDesc}
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className={`px-6 py-2.5 rounded-xl border text-xs transition-colors cursor-pointer ${isDark
                      ? 'bg-slate-950 border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
                      : 'bg-white border-slate-250 text-slate-700 hover:bg-slate-100 hover:border-slate-300'
                      }`}
                  >
                    {data.uiText.contactFormSuccessBtn}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 text-left">

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label htmlFor="form-name" className={`text-xs font-semibold ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                        {data.uiText.contactFormName}
                      </label>
                      <input
                        type="text"
                        id="form-name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        placeholder="John Doe"
                        className={`w-full px-5 py-3.5 border rounded-xl text-sm transition-all focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 ${isDark
                          ? 'bg-slate-950 border-slate-800 text-white placeholder-slate-600'
                          : 'bg-white border-slate-200 text-slate-900 placeholder-slate-400'
                          }`}
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label htmlFor="form-email" className={`text-xs font-semibold ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                        {data.uiText.contactFormEmail}
                      </label>
                      <input
                        type="email"
                        id="form-email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        placeholder="john@example.com"
                        className={`w-full px-5 py-3.5 border rounded-xl text-sm transition-all focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 ${isDark
                          ? 'bg-slate-950 border-slate-800 text-white placeholder-slate-600'
                          : 'bg-white border-slate-200 text-slate-900 placeholder-slate-400'
                          }`}
                      />
                    </div>
                  </div>

                  {/* Budget */}
                  <div className="space-y-2">


                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="form-message" className={`text-xs font-semibold ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      {data.uiText.contactFormMsg}
                    </label>
                    <textarea
                      id="form-message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      placeholder={lang === 'id' ? 'Tuliskan deskripsi sistem yang ingin Anda bangun...' : 'Describe what systems you need us to engineer...'}
                      className={`w-full px-5 py-4 border rounded-xl text-sm transition-all resize-none focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 ${isDark
                        ? 'bg-slate-950 border-slate-800 text-white placeholder-slate-600'
                        : 'bg-white border-slate-200 text-slate-900 placeholder-slate-400'
                        }`}
                    />
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white font-bold text-sm hover:opacity-95 shadow-md shadow-blue-500/15 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin"></span>
                        <span>{data.uiText.contactFormSubmitting}</span>
                      </>
                    ) : (
                      <>
                        <span>{data.uiText.contactFormSubmit}</span>
                        <span>→</span>
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

          {/* Right Column: Contact Details & Coordinates */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className={`border rounded-3xl p-8 space-y-8 ${isDark ? 'bg-slate-900/20 border-slate-900' : 'bg-slate-50 border-slate-200'
              }`}>

              <h3 className={`text-2xl font-bold font-heading ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {lang === 'id' ? 'Kantor Pusat Zelixa Tech' : 'Zelixa Tech Headquarters'}
              </h3>

              <div className="space-y-6">

                {/* Email */}
                <div className="flex items-start gap-4">
                  <span className="text-2xl mt-1 select-none">✉</span>
                  <div>
                    <h4 className={`font-semibold text-sm ${isDark ? 'text-slate-300' : 'text-slate-800'}`}>
                      {lang === 'id' ? 'Layanan & Pertanyaan Sales' : 'Security & Sales Enquiries'}
                    </h4>
                    <p className={`text-sm font-light ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>sales@zelixatech.com</p>
                  </div>
                </div>

                {/* Hotline */}
                <div className="flex items-start gap-4">
                  <span className="text-2xl mt-1 select-none">📞</span>
                  <div>
                    <h4 className={`font-semibold text-sm ${isDark ? 'text-slate-300' : 'text-slate-800'}`}>
                      {lang === 'id' ? 'Hotline Telepon Langsung' : 'Direct Office Hotline'}
                    </h4>
                    <p className={`text-sm font-light ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>+62 (21) 8080-9090</p>
                  </div>
                </div>

                {/* Operations hours */}
                <div className="flex items-start gap-4">
                  <span className="text-2xl mt-1 select-none">⏰</span>
                  <div>
                    <h4 className={`font-semibold text-sm ${isDark ? 'text-slate-300' : 'text-slate-800'}`}>
                      {lang === 'id' ? 'Jam Operasional' : 'Operational Availability'}
                    </h4>
                    <p className={`text-sm font-light ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      {lang === 'id' ? 'Senin - Jumat (09:00 - 18:00 WIB)' : 'Monday - Friday (09:00 - 18:00 WIB)'}
                    </p>
                  </div>
                </div>

              </div>

              {/* Locator Map Frame placeholder */}
              <div className={`relative aspect-[16/10] rounded-2xl overflow-hidden border p-4 flex flex-col justify-end text-left select-none bg-gradient-to-tr group ${isDark ? 'bg-slate-950 border-slate-850 from-slate-950 to-slate-900' : 'bg-slate-100 border-slate-200 from-slate-100 to-slate-50'
                }`}>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
                <div className="relative z-10 space-y-1">
                  <span className="text-[10px] font-bold text-blue-500 tracking-widest uppercase">{data.uiText.contactMapTitle}</span>
                  <h4 className={`font-bold text-sm ${isDark ? 'text-white' : 'text-slate-900'}`}>Sudirman Central Business District</h4>
                  <p className="text-[10px] text-slate-500 font-medium">Lat: -6.2244 | Long: 106.8122</p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
