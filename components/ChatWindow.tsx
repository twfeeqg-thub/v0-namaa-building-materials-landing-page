'use client';

import { useState, useEffect } from 'react';
import { getSmartReply } from './DigitalExpert'; // <-- 1. استيراد العقل المفكر

// --- دوال توليد الأصوات (تبقى كما هي) ---
const playSound = (soundFunction: () => void, isMuted: boolean) => { /* ... */ };
const createWhooshSound = () => { /* ... */ };
const createSendSound = () => { /* ... */ };

// --- أيقونات الواجهة (تبقى كما هي) ---
const CloseIcon = () => ( <svg>...</svg> );
const SendIcon = () => ( <svg>...</svg> );
const SoundOnIcon = () => ( <svg>...</svg> );
const SoundOffIcon = () => ( <svg>...</svg> );

interface Message { sender: 'user' | 'assistant'; text: string; }
const initialMessage: Message = { sender: 'assistant', text: "مرحباً بك. أنا مساعدك الذكي. كيف يمكنني خدمتك اليوم؟" };

export default function ChatWindow({ isOpen, onClose }: { isOpen: boolean; onClose: () => void; }) {
  const [messages, setMessages] = useState<Message[]>([initialMessage]);
  const [inputValue, setInputValue] = useState('');
  const [isMuted, setMuted] = useState(false);
  const [isTyping, setIsTyping] = useState(false); // حالة جديدة لإظهار مؤشر الكتابة

  useEffect(() => {
    if (isOpen) {
      playSound(createWhooshSound, isMuted);
    }
  }, [isOpen, isMuted]);

  const handleSendMessage = () => {
    if (inputValue.trim() === '' || isTyping) return;
    
    playSound(createSendSound, isMuted);
    const userMessage: Message = { sender: 'user', text: inputValue };
    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true); // المساعد يبدأ "بالتفكير"

    // --- 2. استدعاء الخبير الرقمي للحصول على رد ذكي ---
    setTimeout(() => {
      const reply = getSmartReply(inputValue); // <-- هنا يتم استدعاء العقل
      const assistantResponse: Message = { sender: 'assistant', text: reply };
      setMessages(prev => [...prev, assistantResponse]);
      setIsTyping(false); // المساعد انتهى من الكتابة
    }, 1200); // تأخير بسيط لمحاكاة التفكير

    setInputValue('');
  };

  const handleNewConversation = () => {
    setMessages([initialMessage]);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={onClose}>
      <div
        className="w-full max-w-md h-[70vh] flex flex-col rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up"
        style={{ backgroundColor: 'rgba(34, 75, 88, 0.8)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.1)' }}
        onClick={(e) => e.stopPropagation()}
      >
        <header className="p-4 flex justify-between items-center border-b border-white/10">
          {/* ... كود الهيدر يبقى كما هو ... */}
        </header>

        <main className="flex-1 p-4 space-y-4 overflow-y-auto">
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              {/* ... كود عرض الرسائل يبقى كما هو ... */}
            </div>
          ))}
          {/* --- 3. إضافة مؤشر الكتابة (Typing Indicator) --- */}
          {isTyping && (
            <div className="flex justify-start">
              <div className="max-w-xs md:max-w-sm p-3 rounded-2xl bg-gray-700 text-white rounded-bl-none flex items-center space-x-2 space-x-reverse">
                <span className="h-2 w-2 bg-white rounded-full animate-bounce-slow"></span>
                <span className="h-2 w-2 bg-white rounded-full animate-bounce-slow [animation-delay:0.2s]"></span>
                <span className="h-2 w-2 bg-white rounded-full animate-bounce-slow [animation-delay:0.4s]"></span>
              </div>
            </div>
          )}
        </main>

        <footer className="p-4 border-t border-white/10">
          {/* ... كود الفوتر يبقى كما هو ... */}
        </footer>
      </div>
    </div>
  );
}
