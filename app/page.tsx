'use client';
import React, { useState } from 'react';
import { DATA, Scheme } from './data';
import { VoiceAssistant, FloatingMic } from './VoiceAssistant';

export default function JanSevaPortal() {
  const [lang, setLang] = useState<'en' | 'hi' | 'kn' | null>(null);
  const [tab, setTab] = useState<'health' | 'loan' | 'banking'>('health');

  // 1. Language Gateway Screen (Premium Full-Screen UI Overlay)
  if (!lang) {
    return (
      <div className="fixed inset-0 bg-slate-950 flex flex-col items-center justify-center p-6 antialiased">
        <div className="w-full max-w-sm space-y-6">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-indigo-600 shadow-lg text-2xl mb-2">🇮🇳</div>
            <h1 className="text-3xl font-black text-white tracking-tight">JAN SEVA</h1>
            <p className="text-sm text-slate-400 font-medium">Information Gateway • सूचना द्वार • ಮಾಹಿತಿ ದ್ವಾರ</p>
          </div>
          
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-3 shadow-xl">
            <button onClick={() => setLang('en')} className="w-full py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl border border-slate-700 transition-all text-base active:scale-98">English 🇬🇧</button>
            <button onClick={() => setLang('hi')} className="w-full py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl border border-slate-700 transition-all text-base active:scale-98">हिन्दी 🇮🇳</button>
            <button onClick={() => setLang('kn')} className="w-full py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl border border-slate-700 transition-all text-base active:scale-98">ಕನ್ನಡ ❤️💛</button>
          </div>
        </div>
      </div>
    );
  }

  const activeScheme = DATA.find(s => s.type === tab) as Scheme;
  const voiceScript = `${activeScheme.title[lang]}. Cost: ${activeScheme.pay[lang]}. Benefit: ${activeScheme.get[lang]}. Method: ${activeScheme.how[lang]}`;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between overflow-x-hidden antialiased font-sans pb-28">
      
      {/* Premium Header Layout */}
      <header className="bg-slate-900 text-white px-4 py-3.5 flex justify-between items-center sticky top-0 z-50 shadow-md border-b border-slate-800">
        <div className="flex items-center gap-2">
          <span className="text-xl">🇮🇳</span>
          <h2 className="font-black text-base tracking-wider text-slate-100">
            {lang === 'en' && 'JAN SEVA'}
            {lang === 'hi' && 'जन सेवा'}
            {lang === 'kn' && 'ಜನ ಸೇವೆ'}
          </h2>
        </div>
        <button 
          onClick={() => setLang(null)} 
          className="text-xs bg-slate-800 hover:bg-slate-700 border border-slate-700 px-3 py-1.5 rounded-lg font-bold text-slate-300 transition-colors"
        >
          🔄 {lang === 'en' ? 'Language' : lang === 'hi' ? 'भाषा बदलें' : 'ಭಾಷೆ'}
        </button>
      </header>

      {/* Main Content View Frame */}
      <main className="p-4 max-w-md mx-auto w-full flex-1 space-y-4">
        
        {/* Voice Playback Block */}
        <div className="shadow-sm rounded-xl overflow-hidden">
          <VoiceAssistant text={voiceScript} lang={lang} />
        </div>

        {/* Dynamic Professional Benefits Display Card */}
        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          {/* Bug 2 Fixed: Uses responsive max-widths and relative aspect ratios instead of hardcoded pixel bounds */}
          <div className="w-full aspect-[16/10] bg-slate-100 relative overflow-hidden">
            <img 
              src={activeScheme.image} 
              alt="Scheme Reference" 
              className="w-full h-full object-cover object-center"
              loading="eager"
            />
          </div>
          
          <div className="p-5 space-y-5">
            <h3 className="text-xl font-black text-slate-900 tracking-tight leading-snug border-b pb-3 border-slate-100">
              {activeScheme.title[lang]}
            </h3>
            
            <div className="flex gap-3 items-start">
              <div className="bg-emerald-50 text-emerald-700 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-md border border-emerald-200">💰</div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 block mb-0.5">
                  {lang === 'en' ? 'What you pay' : lang === 'hi' ? 'खर्च / फीस' : 'ನಿಮ್ಮ ವೆಚ್ಚ'}
                </span>
                <p className="text-base font-extrabold text-emerald-700 leading-tight">{activeScheme.pay[lang]}</p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <div className="bg-indigo-50 text-indigo-700 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-md border border-indigo-200">🎁</div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 block mb-0.5">
                  {lang === 'en' ? 'Your Benefit' : lang === 'hi' ? 'आपको क्या मिलेगा' : 'ನಿಮಗೆ ಸಿಗುವ ಲಾಭ'}
                </span>
                <p className="text-sm text-slate-700 font-bold leading-relaxed">{activeScheme.get[lang]}</p>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex gap-3 items-start">
              <div className="bg-slate-200 text-slate-700 w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0 font-bold text-xs">📍</div>
              <div className="space-y-0.5">
                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 block">
                  {lang === 'en' ? 'How to get it' : lang === 'hi' ? 'कैसे प्राप्त करें' : 'ಪಡೆಯುವುದು ಹೇಗೆ'}
                </span>
                <p className="text-xs text-slate-800 font-semibold leading-relaxed">{activeScheme.how[lang]}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Security / Guardrail Box */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs text-amber-900 flex items-start gap-3 shadow-inner">
          <span className="text-xl mt-0.5">⚠️</span>
          <div className="space-y-0.5">
            <span className="font-black uppercase tracking-wider text-[10px] text-amber-800 block">
              {lang === 'en' ? "Anti-Scam Protection" : lang === 'hi' ? "धोखाधड़ी से सावधान" : "ವಂಚನೆ ತಡೆ ಎಚ್ಚರಿಕೆ"}
            </span>
            <p className="leading-relaxed font-bold text-amber-900">
              {lang === 'en' && "Government schemes are entirely FREE. Never give cash or share your mobile phone OTP codes with unknown agents."}
              {lang === 'hi' && "सभी सरकारी योजनाएं बिल्कुल मुफ्त हैं। किसी भी एजेंट को पैसे न दें और अपना फोन ओटीपी (OTP) गुप्त रखें।"}
              {lang === 'kn' && "ಎಲ್ಲಾ ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು ಉಚಿತವಾಗಿವೆ. ಯಾವುದೇ ಏಜೆಂಟರಿಗೆ ಹಣ ನೀಡಬೇಡಿ ಮತ್ತು ನಿಮ್ಮ ಫೋನ್ ಓಟಿಪಿ (OTP) ರಹಸ್ಯವಾಗಿಡಿ."}
            </p>
          </div>
        </div>
      </main>

      {/* Floating Microphone Trigger */}
      <FloatingMic lang={lang} onCommand={(cmd) => {
        if (cmd.includes('hospital') || cmd.includes('अस्पताल') || cmd.includes('ಆಸ್ಪತ್ರೆ')) setTab('health');
        if (cmd.includes('loan') || cmd.includes('कर्ज') || cmd.includes('ಸಾಲ')) setTab('loan');
        if (cmd.includes('bank') || cmd.includes('खाता') || cmd.includes('ಬ್ಯಾಂಕ್')) setTab('banking');
      }} />

      {/* Premium Sticky Nav Bar (Thumb-Optimized Design) */}
      <nav className="fixed bottom-0 inset-x-0 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 grid grid-cols-3 gap-2 shadow-[0_-6px_20px_rgba(0,0,0,0.06)] z-50 pb-safe">
        <button 
          onClick={() => setTab('health')} 
          className={`py-2.5 rounded-xl flex flex-col items-center justify-center font-bold text-xs gap-0.5 transition-all active:scale-95 ${tab === 'health' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'}`}
        >
          <span className="text-xl">🏥</span>
          <span className="font-extrabold tracking-wide">{lang === 'en' ? 'Hospital' : lang === 'hi' ? 'अस्पताल' : 'ಆಸ್ಪತ್ರೆ'}</span>
        </button>

        <button 
          onClick={() => setTab('loan')} 
          className={`py-2.5 rounded-xl flex flex-col items-center justify-center font-bold text-xs gap-0.5 transition-all active:scale-95 ${tab === 'loan' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'}`}
        >
          <span className="text-xl">🛒</span>
          <span className="font-extrabold tracking-wide">{lang === 'en' ? 'Loans' : lang === 'hi' ? 'लोन' : 'ಸಾಲಗಳು'}</span>
        </button>

        <button 
          onClick={() => setTab('banking')} 
          className={`py-2.5 rounded-xl flex flex-col items-center justify-center font-bold text-xs gap-0.5 transition-all active:scale-95 ${tab === 'banking' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'}`}
        >
          <span className="text-xl">🏦</span>
          <span className="font-extrabold tracking-wide">{lang === 'en' ? 'Bank Account' : lang === 'hi' ? 'बचत खाता' : 'ಬ್ಯಾಂಕ್'}</span>
        </button>
      </nav>
    </div>
  );
}
