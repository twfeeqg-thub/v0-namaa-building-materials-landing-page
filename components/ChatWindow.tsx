'use client';

import { useState } from 'react';

// --- أيقونات الواجهة ---
const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
);
const SendIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
);

// --- تعريف أنواع البيانات للمحادثة ---
interface Message {
  sender: 'user' | 'assistant';
  text: string;
}

// --- المكون الرئيسي لنافذة الدردشة ---
export default function ChatWindow({ isOpen, onClose }: { isOpen: boolean; onClose: () => void; }) {
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'assistant', text: "مرحباً بك. أنا مساعدك الذكي. كيف يمكنني مساعدتك في إطلاق قوة الذكاء الصناعي اليوم؟" }
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    // إضافة رسالة المستخدم إلى المحادثة
    const userMessage: Message = { sender: 'user', text: inputValue };
    setMessages(prev => [...prev, userMessage]);
    
    // هنا سنضيف منطق رد المساعد الذكي لاحقًا
    // حاليًا، سنضيف ردًا مؤقتًا للتجربة
    setTimeout(() => {
      const assistantResponse: Message = { sender: 'assistant', text: "أنا أقوم بمعالجة طلبك..." };
      setMessages(prev => [...prev, assistantResponse]);
    }, 1000);

    setInputValue(''); // تفريغ حقل الإدخال
  };

  if (!isOpen) return null;

  return (
    // --- الحاوية الرئيسية مع الخلفية المعتمة ---
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      {/* --- نافذة الدردشة الفعلية --- */}
      <div
        className="w-full max-w-md h-[70vh] flex flex-col rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up"
        style={{
          backgroundColor: 'rgba(23, 37, 84, 0.8)', // لون بنفسجي داكن شبه شفاف
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}
        onClick={(e) => e.stopPropagation()} // منع إغلاق النافذة عند النقر بداخلها
      >
        {/* --- رأس النافذة --- */}
        <header className="p-4 flex justify-between items-center border-b border-white/10">
          <p className="text-white font-bold">مساعدك الذكي</p>
          <button onClick={onClose} className="text-white/70 hover:text-white transition-colors">
            <CloseIcon />
          </button>
        </header>

        {/* --- منطقة عرض الرسائل --- */}
        <main className="flex-1 p-4 space-y-4 overflow-y-auto">
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div 
                className={`max-w-xs md:max-w-sm p-3 rounded-2xl ${
                  msg.sender === 'user' 
                    ? 'bg-teal-600 text-white rounded-br-none' 
                    : 'bg-gray-700 text-white rounded-bl-none'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </main>

        {/* --- منطقة إدخال النص --- */}
        <footer className="p-4 border-t border-white/10">
          <div className="flex items-center bg-gray-900/50 rounded-lg">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="اكتب رسالتك هنا..."
              className="flex-1 bg-transparent p-3 text-white placeholder-gray-400 focus:outline-none"
            />
            <button onClick={handleSendMessage} className="p-3 text-teal-400 hover:text-teal-300 transition-colors">
              <SendIcon />
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}
