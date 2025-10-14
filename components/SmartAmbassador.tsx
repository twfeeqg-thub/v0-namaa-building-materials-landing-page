'use client';

import { useState } from 'react';
import ChatWindow from './ChatWindow';
import Image from 'next/image';
import WithPulsingDot from './WithPulsingDot'; // <-- الخطوة 1: استيراد المُغلِّف

// ... دالة playClickSound (تبقى كما هي) ...
const playClickSound = () => { /* ... */ };

export default function SmartAmbassador() {
  const [isChatOpen, setChatOpen] = useState(false);

  const toggleChatWindow = () => {
    playClickSound();
    setChatOpen(!isChatOpen);
  };

  return (
    <>
      {/* --- الخطوة 2: استخدام المُغلِّف لتغليف الزر --- */}
      <WithPulsingDot>
        <button
          onClick={toggleChatWindow}
          // تم إزالة fixed bottom-6 right-6 من هنا ووضعها في حاوية خارجية إذا لزم الأمر
          // أو يمكننا وضعها في div خارجي حول WithPulsingDot
          className="h-16 w-16 rounded-full flex items-center justify-center shadow-2xl cursor-pointer transition-all duration-300 ease-in-out group z-40" // خفضنا z-index قليلاً
          style={{ backgroundColor: '#FFFFFF' }}
          aria-label="افتح محادثة مع المساعد الذكي"
        >
          {/* لم نعد بحاجة لتأثير النبض القديم هنا */}
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

      {/* وضع الزر العائم داخل حاوية لتحديد موقعه */}
      <div className="fixed bottom-6 right-6 z-50">
        <WithPulsingDot>
          <button
            onClick={toggleChatWindow}
            className="h-16 w-16 rounded-full flex items-center justify-center shadow-2xl cursor-pointer transition-all duration-300 ease-in-out group"
            style={{ backgroundColor: '#FFFFFF' }}
            aria-label="افتح محادثة مع المساعد الذكي"
          >
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
