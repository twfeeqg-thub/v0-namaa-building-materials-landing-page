'use client';

import { useState } from 'react';
// 1. تصحيح مسار الاستيراد هنا
import ChatWindow from './ChatWindow'; 

// أيقونة الذكاء الصناعي (تبقى كما هي)
const AiIcon = () => (
    // ... كود الأيقونة ...
);

export default function SmartAmbassador() {
  const [isChatOpen, setChatOpen] = useState(false);

  const toggleChatWindow = () => {
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
          <AiIcon />
        </div>
      </button>

      <ChatWindow isOpen={isChatOpen} onClose={() => setChatOpen(false)} />
    </>
  );
}

