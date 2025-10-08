'use client';

import { useState } from 'react';
import ChatWindow from './ChatWindow';

// --- دالة توليد صوت النقر برمجيًا ---
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

// --- أيقونة جديدة: شرارة الذكاء ---
const SparkleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3L12 6" /><path d="M21 12L18 12" /><path d="M12 21L12 18" /><path d="M3 12L6 12" /><path d="M18.36 5.64L16.24 7.76" /><path d="M18.36 18.36L16.24 16.24" /><path d="M5.64 18.36L7.76 16.24" /><path d="M5.64 5.64L7.76 7.76" />
  </svg>
);

export default function SmartAmbassador() {
  const [isChatOpen, setChatOpen] = useState(false);

  const toggleChatWindow = () => {
    playClickSound(); // تشغيل صوت النقر المولد برمجيًا
    setChatOpen(!isChatOpen);
  };

  return (
    <>
      <button
        onClick={toggleChatWindow}
        className="fixed bottom-6 right-6 h-16 w-16 rounded-full flex items-center justify-center text-white shadow-lg cursor-pointer transition-all duration-300 ease-in-out group z-50"
        style={{ backgroundColor: '#367588' }}
        aria-label="افتح محادثة مع المساعد الذكي"
      >
        <div className="absolute inset-0 rounded-full bg-teal-600 opacity-75 animate-pulse-slow group-hover:animate-none"></div>
        <div className="absolute inset-0 rounded-full bg-teal-700 transform scale-100 group-hover:scale-110 transition-transform duration-300"></div>
        <div className="relative z-10">
          <SparkleIcon />
        </div>
      </button>

      <ChatWindow isOpen={isChatOpen} onClose={() => setChatOpen(false)} />
    </>
  );
}
