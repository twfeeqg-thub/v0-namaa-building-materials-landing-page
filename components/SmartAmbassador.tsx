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
      {/* حاوية خارجية تأخذ التموضع الثابت */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* المُغلِّف يضيف النقطة النابضة */}
        <WithPulsingDot>
          {/* الزر الأصلي كما هو تقريبًا */}
          <button
            onClick={toggleChatWindow}
            className="h-16 w-16 rounded-full flex items-center justify-center shadow-2xl cursor-pointer transition-all duration-300 ease-in-out group"
            style={{ backgroundColor: '#FFFFFF' }}
            aria-label="افتح محادثة مع المساعد الذكي"
          >
            {/* لم نعد بحاجة لتأثير النبض القديم */}
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
        </WithPulsingDot>
      </div>

      <ChatWindow isOpen={isChatOpen} onClose={() => setChatOpen(false)} />
    </>
  );
}
