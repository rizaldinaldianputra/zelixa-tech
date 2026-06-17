"use client";
import React, { useState, useEffect, useRef } from 'react';
import { localizedData } from '../services/mockData';

interface Message {
  sender: 'bot' | 'user';
  text: string;
}

interface SectionProps {
  theme?: 'dark' | 'light';
  lang: 'id' | 'en';
}

export default function FloatingChat({ theme = 'dark', lang }: SectionProps) {
  const data = localizedData[lang];
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const isDark = theme === 'dark';

  // Initialize welcome message when language changes
  useEffect(() => {
    setMessages([
      { sender: 'bot', text: data.uiText.chatWelcome }
    ]);
  }, [lang, data.uiText.chatWelcome]);

  const quickPrompts = lang === 'id'
    ? [
      { label: "Layanan Kami 💻", text: "Apa saja layanan yang ditawarkan?" },
      { label: "Harga Produk 💰", text: "Berapa biaya pembuatan software?" },
      { label: "Teknologi 🚀", text: "Teknologi apa saja yang digunakan?" },
      { label: "Konsultasi 🤝", text: "Saya ingin menjadwalkan panggilan konsultasi teknis." }
    ]
    : [
      { label: "Our Services 💻", text: "What services do you offer?" },
      { label: "Product Pricing 💰", text: "How much does it cost to build a software?" },
      { label: "Tech Stack 🚀", text: "What technologies do you use?" },
      { label: "Consultation 🤝", text: "I want to schedule a technical call." }
    ];

  const chatResponses = {
    id: {
      services: "Kami berspesialisasi dalam Rekayasa Perangkat Lunak Kustom, Desain UI/UX, Operasional Cloud, dan pipeline AI & Otomatisasi. Anda dapat menjelajahinya di bagian Layanan.",
      pricing: "Harga kami dimulai dari $1.499/bulan untuk paket MVP Launchpad hingga kontrak Kustom Perusahaan. Silakan lihat bagian Harga untuk daftar lengkap fiturnya!",
      tech: "Kami membangun sistem menggunakan Next.js, TypeScript, React Native, Go, Python, FastAPI, Docker, Kubernetes, AWS, dan integrasi AI mutakhir.",
      consultation: "Luar biasa! Silakan isi formulir anggaran dan kebutuhan proyek di bagian Hubungi Kami di bawah, dan tim teknisi kami akan segera mengirimkan undangan rapat.",
      default: "Saya tidak yakin mengenai hal itu, tetapi tim kami dapat menjelaskannya melalui panggilan konsultasi teknis!"
    },
    en: {
      services: "We specialize in Custom Software Engineering, UI/UX Design, Cloud Operations, and AI & Automation pipelines. You can explore them in the Services section.",
      pricing: "Our plans start from $1,499/month for MVP Launchpad up to customized Enterprise structures. Check out the Pricing section for feature checklists!",
      tech: "We build using Next.js, TypeScript, React Native, Go, Python, FastAPI, Docker, Kubernetes, AWS, and modern LLM integrations.",
      consultation: "Fantastic! Fill out the budget and requirements form in the Contact section below, and our lead architect will send you a calendar invite.",
      default: "I'm not sure about that, but our team can clarify on a call!"
    }
  };

  const handlePromptClick = (promptText: string) => {
    // Add user message
    setMessages(prev => [...prev, { sender: 'user', text: promptText }]);
    setIsTyping(true);

    // Simulated Bot Responses
    setTimeout(() => {
      let botResponse = chatResponses[lang].default;
      const lowerText = promptText.toLowerCase();

      if (lowerText.includes("layanan") || lowerText.includes("services") || lowerText.includes("ditawarkan")) {
        botResponse = chatResponses[lang].services;
      } else if (lowerText.includes("biaya") || lowerText.includes("cost") || lowerText.includes("harga") || lowerText.includes("pricing")) {
        botResponse = chatResponses[lang].pricing;
      } else if (lowerText.includes("teknologi") || lowerText.includes("tech") || lowerText.includes("stack") || lowerText.includes("gunakan")) {
        botResponse = chatResponses[lang].tech;
      } else if (lowerText.includes("jadwal") || lowerText.includes("call") || lowerText.includes("konsultasi") || lowerText.includes("consultation")) {
        botResponse = chatResponses[lang].consultation;
      }

      setMessages(prev => [...prev, { sender: 'bot', text: botResponse }]);
      setIsTyping(false);
    }, 1200);
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  return (
    <div className="fixed bottom-6 right-6 z-50 select-none">

      {/* Assistant Window */}
      {isOpen && (
        <div className={`absolute bottom-18 right-0 w-[330px] md:w-[360px] rounded-3xl shadow-2xl border overflow-hidden flex flex-col transform origin-bottom-right transition-all animate-fade-in-up ${isDark ? 'bg-slate-950/90 border-slate-900' : 'bg-white/95 border-slate-200'
          } backdrop-blur-2xl`}>

          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3 text-left">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center font-bold text-base">Z</div>
              <div>
                <h3 className="font-bold text-sm">{data.uiText.chatTitle}</h3>
                <div className="flex items-center gap-1.5 text-[10px] text-blue-100 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>{data.uiText.chatStatus}</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-slate-200 text-lg cursor-pointer">×</button>
          </div>

          {/* Messages list */}
          <div className="h-[280px] p-4 overflow-y-auto flex flex-col gap-4 bg-transparent">
            {messages.map((msg, idx) => {
              const isBot = msg.sender === 'bot';
              return (
                <div
                  key={idx}
                  className={`max-w-[85%] rounded-2xl p-3.5 text-xs leading-relaxed text-left ${isBot
                    ? isDark
                      ? 'bg-slate-900 border border-slate-800 text-slate-200 rounded-tl-sm self-start shadow-sm'
                      : 'bg-slate-100 border border-slate-200 text-slate-800 rounded-tl-sm self-start shadow-sm'
                    : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-tr-sm self-end shadow-md shadow-blue-500/10'
                    }`}
                >
                  {msg.text}
                </div>
              );
            })}

            {isTyping && (
              <div className={`rounded-2xl rounded-tl-sm p-3.5 text-[10px] font-medium self-start flex items-center gap-1.5 border ${isDark ? 'bg-slate-900 border-slate-800 text-slate-400' : 'bg-slate-100 border-slate-200 text-slate-500'
                }`}>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500 animate-bounce"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500 animate-bounce delay-100"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500 animate-bounce delay-200"></span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts */}
          <div className={`p-3 border-t flex flex-wrap gap-2 justify-start ${isDark ? 'border-slate-900 bg-slate-950/60' : 'border-slate-150 bg-slate-50/60'
            }`}>
            {quickPrompts.map((p, idx) => (
              <button
                key={idx}
                onClick={() => handlePromptClick(p.text)}
                className={`px-3 py-1.5 rounded-lg text-[10px] font-bold transition-colors text-left border cursor-pointer ${isDark
                  ? 'bg-slate-900 border-slate-850 hover:border-slate-700 text-slate-350 hover:text-white'
                  : 'bg-white border-slate-200 hover:border-slate-300 text-slate-700 hover:text-slate-950'
                  }`}
              >
                {p.label}
              </button>
            ))}
          </div>

        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-500 text-white rounded-2xl shadow-lg hover:scale-105 transition-all flex items-center justify-center text-2xl font-bold relative group cursor-pointer"
        aria-label="Toggle assistant widget"
      >
        {isOpen ? '×' : '💬'}
        {!isOpen && (
          <span className="absolute top-[-2px] right-[-2px] w-3.5 h-3.5 rounded-full bg-emerald-400 border-[3px] border-slate-950 animate-pulse"></span>
        )}
      </button>

    </div>
  );
}
