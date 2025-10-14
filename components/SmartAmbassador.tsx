'use client';

import { useState } from 'react';
import ChatWindow from './ChatWindow';
import Image from 'next/image';
import WithPulsingDot from './WithPulsingDot'; // استيراد المُغلِّف

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
      {/* --- هذا هو الكود الوحيد لعرض الزر --- */}
      {/* حاوية خارجية تأخذ التموضع الثابت */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* المُغلِّف يضيف النقطة النابضة */}
        <WithPulsingDot>
          {/* الزر الأصلي */}
          <button
            onClick={toggleChatWindow}
            className="h-16 w-16 rounded-full flex items-center justify-center shadow-2xl cursor-pointer transition-all duration-300 ease-in-out group"
            style={{ backgroundColor: '#FFFFFF' }}
            aria-label="افتح محادثة مع المساعد الذكي"
          >
            {/* تأثير التكبير عند المرور */}
            <div className="absolute inset-0 rounded-full bg-white transform scale-100 group-hover:scale-110 transition-transform duration-300"></div>
            
            {/* حاوية الشعار */}
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
        </WithPulsingDot>
      </div>

      {/* نافذة المحادثة (تبقى كما هي) */}
      <ChatWindow isOpen={isChatOpen} onClose={() => setChatOpen(false)} />
    </>
  );
}
