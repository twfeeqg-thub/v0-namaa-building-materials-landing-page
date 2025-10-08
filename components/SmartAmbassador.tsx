'use client'; // هذا المكون تفاعلي، لذا نحتاج هذا السطر

import { useState } from 'react';

// أيقونة الذكاء الصناعي التي ستكون داخل الزر
const AiIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.5 13a2.5 2.5 0 0 1-5 0 2.5 2.5 0 0 1 5 0Z" />
    <path d="M19.5 13a2.5 2.5 0 0 1-5 0 2.5 2.5 0 0 1 5 0Z" />
    <path d="M12 22a4 4 0 0 0 4-4h-8a4 4 0 0 0 4 4Z" />
    <path d="M12 2v10" />
    <path d="m9 12 3-3 3 3" />
  </svg>
);

export default function SmartAmbassador() {
  // في المستقبل، هذا الزر سيفتح نافذة الدردشة
  const handleIconClick = () => {
    // سنضيف منطق فتح النافذة هنا لاحقًا
    console.log("Smart Ambassador Clicked!");
  };

  return (
    <button
      onClick={handleIconClick}
      className="fixed bottom-6 right-6 h-16 w-16 rounded-full flex items-center justify-center text-white shadow-lg cursor-pointer transition-all duration-300 ease-in-out group z-50"
      style={{ backgroundColor: '#367588' }} // استخدام لون الهوية البصرية
      aria-label="افتح محادثة مع المساعد الذكي"
    >
      {/* الطبقة الخارجية للتوهج النابض */}
      <div className="absolute inset-0 rounded-full bg-teal-600 opacity-75 animate-pulse-slow group-hover:animate-none"></div>
      
      {/* الطبقة الداخلية التي تتوسع عند المرور */}
      <div className="absolute inset-0 rounded-full bg-teal-700 transform scale-100 group-hover:scale-110 transition-transform duration-300"></div>
      
      {/* أيقونة الذكاء الصناعي في المنتصف */}
      <div className="relative z-10">
        <AiIcon />
      </div>
    </button>
  );
}
