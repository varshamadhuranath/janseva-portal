'use client';
import React, { useState } from 'react';
import { DATA, Scheme } from './data';
import { VoiceAssistant, FloatingMic } from './VoiceAssistant';

export default function JanSevaPortal() {
  const [lang, setLang] = useState<'en' | 'hi' | 'kn' | null>(null);
  const [tab, setTab] = useState<'health' | 'loan' | 'banking'>('health');

  // 1. Language Gateway Screen (Shown First)
  if (!lang) {
    return (
      <div className="fixed inset-0 bg-slate-900 flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-2xl font-black text-white mb-2">JAN SEVA • जन सेवा</h1>
        <p className="text-sm text-slate-400 mb-8">Choose Your Language / भाषा चुनें / ಭಾಷೆ ಆಯ್ಕೆಮಾಡಿ</p>
        <div className="w-full max-w-xs space-y-4">
          <button onClick={() => setLang('en')} className="w-full py-4 bg-white font-bold rounded-xl text-slate-900 shadow text-lg">English 🇬🇧</button>
          <button onClick={() => setLang('hi')} className="w-full py-4 bg-white font-bold rounded-xl text-slate-900 shadow text-lg">हिन्दी 🇮🇳</button>
          <button onClick={() => setLang('kn')} className="w-full py-4 bg-white font-bold rounded-xl text-slate-900 shadow text-lg">ಕನ್ನಡ ❤️💛</button>
        </div>
      </div>
    );
  }

  const activeScheme = DATA.find(s => s.type === tab) as Scheme;
  const voiceScript = `${activeScheme.title[lang]}. What you pay: ${activeScheme.pay[lang]}. What you get: ${activeScheme.get[lang]}. How to get it: ${activeScheme.how[lang]}`;

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col justify-between overflow-x-hidden text-slate-900 pb-24">
      {/* Top Banner */}
      <header className="bg-slate-900 text-white p-4 flex justify-between items-center sticky top-0 z-50">
        <h2 className="font-black tracking-wide text-md">🇮🇳 {lang === 'en' ? 'JAN SEVA' : lang === 'hi' ? 'जन सेवा' : 'ಜನ ಸೇವೆ'}</h2>
        <button onClick={() => setLang(null)} className="text-xs border px-3 py-1 rounded-lg font-bold">🔄 {lang === 'en' ? 'Language' : 'भाषा'}</button>
      </header>

      {/* Main Container */}
      <main className="p-4 flex-1 space-y-4">
        {/* Voice Playback Integration */}
        <VoiceAssistant text={voiceScript} lang={lang} />

        {/* Visual Main Details Card */}
        <div className="bg-white border-2 border-slate-200 rounded-2xl overflow-hidden shadow-sm">
          <img src={activeScheme.image} alt="Document View" className="w-full h-48 object-cover border-b" />
          <div className="p-4 space-y-4">
            <h3 className="text-xl font-black text-slate-900 leading-tight">{activeScheme.title[lang]}</h3>
            
            <div className="border-l-4 border-emerald-500 pl-3">
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">{lang === 'en' ? 'What you pay' : 'आपको क्या देना है'}</span>
              <p className="text-base font-extrabold text-emerald-700">{activeScheme.pay[lang]}</p>
            </div>

            <div className="border-l-4 border-indigo-500 pl-3">
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">{lang === 'en' ? 'What you get' : 'आपको क्या मिलेगा'}</span>
              <p className="text-sm text-slate-700 leading-relaxed font-bold">{activeScheme.get[lang]}</p>
            </div>

            <div className="bg-slate-50 rounded-xl p-3 border">
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-1">{lang === 'en' ? 'How to get it' : 'कैसे प्राप्त करें'}</span>
              <p className="text-xs text-slate-800 leading-relaxed font-semibold">{activeScheme.how[lang]}</p>
            </div>
          </div>
        </div>

        {/* Severe Safe Fraud Guardrail Box */}
        <div className="bg-amber-50 border-2 border-amber-300 rounded-xl p-3 text-xs text-amber-900 flex items-start gap-2 shadow-sm">
          <span className="text-lg">⚠️</span>
          <p className="leading-relaxed font-bold">
            {lang === 'en' && "Government schemes are FREE. Never pay money or share your phone OTP with private agents or middlemen."}
            {lang === 'hi' && "सरकारी योजनाएं मुफ्त हैं। किसी भी दलाल या एजेंट को पैसे न दें और अपना ओटीपी (OTP) किसी को न बताएं।"}
            {lang === 'kn' && "ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು ಉಚಿತವಾಗಿವೆ. ಯಾವುದೇ ಮಧ್ಯವರ್ತಿಗಳಿಗೆ ಹಣ ನೀಡಬೇಡಿ ಮತ್ತು ನಿಮ್ಮ ಓಟಿಪಿ (OTP) ಹಂಚಿಕೊಳ್ಳಬೇಡಿ."}
          </p>
        </div>
      </main>

      {/* Mic Input Controller */}
      <FloatingMic lang={lang} onCommand={(cmd) => {
        if (cmd.includes('hospital') || cmd.includes('अस्पताल') || cmd.includes('ಆಸ್ಪತ್ರೆ')) setTab('health');
        if (cmd.includes('loan') || cmd.includes('कर्ज') || cmd.includes('ಸಾಲ')) setTab('loan');
        if (cmd.includes('bank') || cmd.includes('खाता') || cmd.includes('ಬ್ಯಾಂಕ್')) setTab('banking');
      }} />

      {/* Sticky Bottom Navigation View */}
      <nav className="fixed bottom-0 inset-x-0 bg-white border-t border-slate-200 p-2 grid grid-cols-3 gap-2 shadow-[0_-4px_12px_rgba(0,0,0,0.08)] z-50">
        <button onClick={() => setTab('health')} className={`py-3 rounded-xl flex flex-col items-center justify-center font-bold text-xs ${tab === 'health' ? 'bg-indigo-600 text-white' : 'text-slate-500 bg-slate-50'}`}>
          <span className="text-lg">🏥</span>
          <span>{lang === 'en' ? 'Hospital' : lang === 'hi' ? 'अस्पताल' : 'ಆಸ್ಪತ್ರೆ'}</span>
        </button>

        <button onClick={() => setTab('loan')} className={`py-3 rounded-xl flex flex-col items-center justify-center font-bold text-xs ${tab === 'loan' ? 'bg-indigo-600 text-white' : 'text-slate-500 bg-slate-50'}`}>
          <span className="text-lg">🛒</span>
          <span>{lang === 'en' ? 'Loans' : lang === 'hi' ? 'लोन' : 'ಸಾಲಗಳು'}</span>
        </button>

        <button onClick={() => setTab('banking')} className={`py-3 rounded-xl flex flex-col items-center justify-center font-bold text-xs ${tab === 'banking' ? 'bg-indigo-600 text-white' : 'text-slate-500 bg-slate-50'}`}>
          <span className="text-lg">🏦</span>
          <span>{lang === 'en' ? 'Bank' : lang === 'hi' ? 'खाता' : 'ಬ್ಯಾಂಕ್'}</span>
        </button>
      </nav>
    </div>
  );
}
