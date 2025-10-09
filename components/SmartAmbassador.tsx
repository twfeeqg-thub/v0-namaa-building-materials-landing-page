'use client';

import { useState } from 'react';
import ChatWindow from './ChatWindow';
import Image from 'next/image';

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

export default function SmartAmbassador() {
  const [isChatOpen, setChatOpen] = useState(false);

  const toggleChatWindow = () => {
    playClickSound();
    setChatOpen(!isChatOpen);
  };

  return (
    <>
      <button
        onClick={toggleChatWindow}
        className="fixed bottom-6 right-6 h-16 w-16 rounded-full flex items-center justify-center shadow-2xl cursor-pointer transition-all duration-300 ease-in-out group z-50"
        style={{ backgroundColor: '#FFFFFF' }} // خلفية بيضاء نقية
        aria-label="افتح محادثة مع المساعد الذكي"
      >
        {/* --- [تعديل نهائي] الخطوة 1: تغيير لون النبض إلى أزرق غامق --- */}
        <div 
          className="absolute inset-0 rounded-full opacity-75 animate-pulse-slow group-hover:animate-none"
          style={{ backgroundColor: '#005A8C' }} // استخدام درجة أزرق غامق للنبض
        ></div>
        
        <div className="absolute inset-0 rounded-full bg-white transform scale-100 group-hover:scale-110 transition-transform duration-300"></div>
        
        <div className="relative z-10">
          <Image
            src="/logo.png"
            alt="شعار نماء - المساعد الذكي"
            width={40}
            height={40}
            objectFit="contain"
          />
        </div>
      </button>

      <ChatWindow isOpen={isChatOpen} onClose={() => setChatOpen(false)} />
    </>
  );
}
