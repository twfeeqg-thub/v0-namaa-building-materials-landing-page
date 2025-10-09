'use client';

import { useState } from 'react';
import ChatWindow from './ChatWindow';

// --- دالة توليد صوت النقر برمجيًا (تبقى كما هي) ---
const playClickSound = () => {
  try {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(600, audioContext.currentTime);
    gainNode.gain.setValueAtTime(0.5, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 0.1);

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
  } catch (error) {
    console.error("Web Audio API is not supported in this browser.", error);
  }
};

// --- [تعديل] الخطوة 1: استبدال الأيقونة القديمة بأيقونة "الدرع الذكي" ---
const SmartShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    <path d="m12 8 2 2-2 2-2-2z"></path>
    <path d="M12 12v4"></path>
    <path d="m10 10-2-2"></path>
    <path d="m14 10 2-2"></path>
  </svg>
);

export default function SmartAmbassador() {
  const [isChatOpen, setChatOpen] = useState(false);

  const toggleChatWindow = () => {
    playClickSound(); // الحفاظ على تشغيل صوت النقر
    setChatOpen(!isChatOpen);
  };

  return (
    <>
      <button
        onClick={toggleChatWindow}
        className="fixed bottom-6 right-6 h-16 w-16 rounded-full flex items-center justify-center text-white shadow-lg cursor-pointer transition-all duration-300 ease-in-out group z-50"
        style={{ backgroundColor: '#367588' }} // الحفاظ على اللون الأساسي
        aria-label="افتح محادثة مع المساعد الذكي"
      >
        {/* الحفاظ على كل التأثيرات البصرية كما هي */}
        <div className="absolute inset-0 rounded-full bg-teal-600 opacity-75 animate-pulse-slow group-hover:animate-none"></div>
        <div className="absolute inset-0 rounded-full bg-teal-700 transform scale-100 group-hover:scale-110 transition-transform duration-300"></div>
        
        <div className="relative z-10">
          {/* --- [تعديل] الخطوة 2: استدعاء الأيقونة الجديدة --- */}
          <SmartShieldIcon />
        </div>
      </button>

      <ChatWindow isOpen={isChatOpen} onClose={() => setChatOpen(false)} />
    </>
  );
}
