'use client';

import { useState } from 'react';
import ChatWindow from './ChatWindow';
import Image from 'next/image';
import WithPulsingDot from './WithPulsingDot'; // استيراد المُغلِّف

const playClickSound = () => { /* ... دالة الصوت ... */ };

export default function SmartAmbassador() {
  const [isChatOpen, setChatOpen] = useState(false);

  const toggleChatWindow = () => {
    playClickSound();
    setChatOpen(!isChatOpen);
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <WithPulsingDot>
          <button
            onClick={toggleChatWindow}
            // أعدنا relative هنا ليكون مرجعًا للنبض المحيط
            className="relative h-16 w-16 rounded-full flex items-center justify-center shadow-2xl cursor-pointer transition-all duration-300 ease-in-out group"
            style={{ backgroundColor: '#FFFFFF' }}
            aria-label="افتح محادثة مع المساعد الذكي"
          >
            {/* --- [تلميع 2] إعادة تأثير النبض المحيط بالزر --- */}
            <div 
              className="absolute inset-0 rounded-full opacity-75 animate-pulse-slow group-hover:animate-none"
              style={{ backgroundColor: '#005A8C' }}
            ></div>

            {/* تأثير التكبير عند المرور والخلفية البيضاء الأساسية */}
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

      <ChatWindow isOpen={isChatOpen} onClose={() => setChatOpen(false)} />
    </>
  );
}
