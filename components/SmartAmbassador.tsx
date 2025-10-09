'use client';

import { useState } from 'react';
import ChatWindow from './ChatWindow';
import Image from 'next/image'; // --- [تعديل] الخطوة 1: استيراد مكون Image من Next.js

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

// --- [حذف] تم حذف أيقونة SmartShieldIcon لأننا سنستخدم صورة الشعار ---

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
        className="fixed bottom-6 right-6 h-16 w-16 rounded-full flex items-center justify-center text-white shadow-lg cursor-pointer transition-all duration-300 ease-in-out group z-50"
        // --- [تعديل] الخطوة 2: تغيير الألوان لتتناسب مع هوية الشعار ---
        style={{ backgroundColor: '#00AEEF' }} // استخدام اللون الأزرق السماوي للشعار كلون أساسي
        aria-label="افتح محادثة مع المساعد الذكي"
      >
        {/* طبقات التأثيرات البصرية بألوان متناسقة */}
        <div className="absolute inset-0 rounded-full bg-sky-400 opacity-75 animate-pulse-slow group-hover:animate-none"></div>
        <div className="absolute inset-0 rounded-full bg-sky-500 transform scale-100 group-hover:scale-110 transition-transform duration-300"></div>
        
        <div className="relative z-10">
          {/* --- [تعديل] الخطوة 3: استخدام الشعار بدلاً من الأيقونة --- */}
          <Image
            src="/logo.png" // المسار الصحيح للصورة في مجلد public
            alt="شعار نماء - المساعد الذكي"
            width={40} // حجم مناسب للشعار داخل الدائرة
            height={40}
            objectFit="contain" // لضمان ظهور الشعار كاملاً بدون قص
          />
        </div>
      </button>

      <ChatWindow isOpen={isChatOpen} onClose={() => setChatOpen(false)} />
    </>
  );
}
