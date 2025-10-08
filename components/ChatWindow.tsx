'use client';

import { useState, useEffect } from 'react';
// [مراجعة] التأكد من استيراد الواجهة الجديدة بجانب الدالة
import { getSmartReply, SmartReply } from './DigitalExpert';

// --- دوال توليد الأصوات برمجيًا (بدون تغيير) ---
const playSound = (soundFunction: () => void, isMuted: boolean) => {
  if (isMuted) return;
  try {
    soundFunction();
  } catch (error) {
    console.error("Web Audio API is not supported in this browser.", error);
  }
};

const createWhooshSound = () => {
  const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();
  oscillator.type = 'sine';
  gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
  oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
  oscillator.frequency.exponentialRampToValueAtTime(1000, audioContext.currentTime + 0.2);
  gainNode.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 0.2);
  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);
  oscillator.start();
  oscillator.stop(audioContext.currentTime + 0.2);
};

const createSendSound = () => {
  const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();
  oscillator.type = 'triangle';
  oscillator.frequency.setValueAtTime(880, audioContext.currentTime);
  gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 0.15);
  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);
  oscillator.start();
  oscillator.stop(audioContext.currentTime + 0.15);
};

// --- أيقونات الواجهة (بدون تغيير) ---
const CloseIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> );
const SendIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> );
const SoundOnIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg> );
const SoundOffIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="1" x2="1" y2="23"></line></svg> );

interface Message { sender: 'user' | 'assistant'; text: string; }
// [مراجعة] تحسين الرسالة الترحيبية لتكون أكثر اتساقًا
const initialMessage: Message = { sender: 'assistant', text: "أهلاً بك في نماء لمواد البناء. أنا مساعدك الذكي، كيف أقدر أخدمك اليوم؟" };

export default function ChatWindow({ isOpen, onClose }: { isOpen: boolean; onClose: () => void; }) {
  const [messages, setMessages] = useState<Message[]>([initialMessage]);
  const [inputValue, setInputValue] = useState('');
  const [isMuted, setMuted] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  // [إضافة] حالة لتخزين اسم العميل
  const [customerName, setCustomerName] = useState<string | null>(null);

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
    setIsTyping(true);

    setTimeout(() => {
      // [تصحيح رئيسي] استدعاء الدالة مع الوسيطين المطلوبين
      const replyObject: SmartReply = getSmartReply(inputValue, customerName);
      
      const assistantResponse: Message = { sender: 'assistant', text: replyObject.reply };
      setMessages(prev => [...prev, assistantResponse]);
      
      // [تعديل] تحديث اسم العميل إذا تم التعرف عليه
      if (replyObject.newName) {
        setCustomerName(replyObject.newName);
      }
      
      setIsTyping(false);
    }, 1200);

    setInputValue('');
  };

  const handleNewConversation = () => {
    // [تعديل] إعادة تعيين اسم العميل عند بدء محادثة جديدة
    setCustomerName(null);
    setMessages([initialMessage]);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={onClose}>
      <div
        className="w-full max-w-md h-[70vh] flex flex-col rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up"
        style={{
          backgroundColor: 'rgba(34, 75, 88, 0.65)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '1px solid rgba(255, 255, 255, 0.18)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <header className="p-4 flex justify-between items-center border-b border-white/10">
          <div className="flex items-center gap-3">
            {/* [تعديل] تخصيص العنوان باسم العميل إن وجد */}
            <p className="text-white font-bold">{customerName ? `أهلاً يا ${customerName}` : 'مساعدك الذكي'}</p>
            <button onClick={() => setMuted(!isMuted)} className="text-white/70 hover:text-white transition-colors" aria-label={isMuted ? "إعادة تشغيل الصوت" : "كتم الصوت"}>
              {isMuted ? <SoundOffIcon /> : <SoundOnIcon />}
            </button>
          </div>
          <button onClick={onClose} className="text-white/70 hover:text-white transition-colors">
            <CloseIcon />
          </button>
        </header>

        <main className="flex-1 p-4 space-y-4 overflow-y-auto">
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-xs md:max-w-sm p-3 rounded-2xl ${msg.sender === 'user' ? 'bg-teal-600 text-white rounded-br-none' : 'bg-gray-700 text-white rounded-bl-none'}`}>
                {msg.text}
              </div>
            </div>
          ))}
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
          <div className="flex items-center bg-gray-900/50 rounded-lg mb-2">
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
          <div className="text-center">
            <button onClick={handleNewConversation} className="text-xs text-gray-400 hover:text-white transition-colors">
              بدء محادثة جديدة
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}
