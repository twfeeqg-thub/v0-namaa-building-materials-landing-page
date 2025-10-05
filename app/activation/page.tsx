import Link from 'next/link';

// --- مكونات الأيقونات ---
const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor"><path d="M16.75 13.96c.25.13.43.2.5.28.08.08.14.18.18.28.04.1.06.2.06.28s-.04.15-.08.2a1.1 1.1 0 0 1-.18.2c-.06.08-.14.15-.25.23-.1.08-.2.13-.3.18-.1.05-.2.1-.3.13a.8.8 0 0 1-.38.08h-.03c-.2 0-.4-.04-.6-.13a2.5 2.5 0 0 1-.55-.38c-.2-.15-.4-.3-.6-.5a5.3 5.3 0 0 1-.75-.83 8.2 8.2 0 0 1-1.1-1.42c-.2-.3-.4-.6-.55-.9-.16-.3-.3-.6-.4-.9a4.8 4.8 0 0 1-.2-1.1v-.1c0-.2.03-.4.1-.6.06-.2.15-.38.28-.5s.28-.2.45-.23a.9.9 0 0 1 .35-.05h.03c.15 0 .3.03.4.1.1.05.2.13.28.2.1.1.18.2.25.3a.9.9 0 0 1 .13.4c.03.15.02.3 0 .4s-.03.28-.08.4a.7.7 0 0 1-.15.28.7.7 0 0 1-.2.18l-.12.08c-.03.02-.05.05-.06.08a.2.2 0 0 0 0 .1c.02.06.05.1.1.15.03.05.1.12.18.2a3.3 3.3 0 0 0 .4.42c.15.15.3.3.5.42.2.14.4.25.6.33.05.03.1.05.13.06.06.02.1.03.15.03h.02c.05 0 .1 0 .14-.02.03-.02.06-.04.08-.06l.1-.1c.03-.03.06-.06.1-.1.05-.03.1-.06.14-.08.05-.03.1-.05.15-.06.1-.03.2-.03.3-.02.15.02.3.06.4.13.1.08.18.18.25.3.06.1.1.2.13.3s.02.2.02.3zm-4.8-11.46a10 10 0 0 0-7.6 16.4L3 21l2.2-1.2a10 10 0 1 0-1.2-15.2z"/></svg>
);
const EmailIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
);
const TelegramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.84c-.15.45-.45.84-.82 1.16l-3.26 2.72-1.38 4.98c-.07.26-.2.4-.4.46-.2.07-.4.04-.56-.06l-2.02-1.4-2.03-1.3c-.2-.13-.3-.33-.26-.54.03-.2.16-.38.35-.46l4.1-1.6 6.5-5.9c.1-.1.25-.13.38-.08.13.05.2.17.15.3z"/></svg>
);
const PhoneIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
);

// --- المكون الرئيسي للصفحة ---
export default function ActivationPage() {
  return (
    <div className="min-h-screen bg-gray-100" dir="rtl">
      <div className="container mx-auto px-4 py-12 md:py-20">
        
        {/* الجزء الأول: الترحيب */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-teal-700">تهانينا أستاذ توفيق!</h1>
          <p className="mt-4 text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            لقد اتخذت القرار الذي سيضعك في مقدمة المنافسة. والآن، لنقم بتخصيص مساعدك الرقمي ليتحدث بلسان "نماء لمواد البناء".
          </p>
        </div>

        {/* الجزء الثاني: قائمة الطلبات */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">المعلومات المطلوبة (3 خطوات بسيطة)</h2>
          <div className="space-y-6">
            
            {/* البطاقة 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-teal-600">
              <h3 className="text-2xl font-bold text-teal-700">1. معلومات المتجر الأساسية</h3>
              <p className="mt-2 text-gray-700"><span className="font-semibold">المطلوب:</span> أوقات الدوام الرسمية، أيام الإجازات، ومعلومات الاتصال المحدثة.</p>
              <p className="mt-1 text-sm text-gray-500"><span className="font-semibold">لماذا؟</span> ليعرف المساعد متى يوجه العملاء للاتصال المباشر، ومتى يخبرهم بأن فريقك سيتواصل معهم في بداية يوم العمل.</p>
            </div>

            {/* البطاقة 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-teal-600">
              <h3 className="text-2xl font-bold text-teal-700">2. قائمة المنتجات والأسعار</h3>
              <p className="mt-2 text-gray-700"><span className="font-semibold">المطلوب:</span> ملف (Excel أو PDF) يحتوي على أهم 20-50 منتجًا مع أسعارها الأولية.</p>
              <p className="mt-1 text-sm text-gray-500"><span className="font-semibold">لماذا؟</span> لتمكين المساعد من الإجابة على أسئلة الأسعار الأكثر شيوعًا فورًا، وتحويل المتصفحين إلى عملاء مهتمين.</p>
            </div>

            {/* البطاقة 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-teal-600">
              <h3 className="text-2xl font-bold text-teal-700">3. الأسئلة الشائعة</h3>
              <p className="mt-2 text-gray-700"><span className="font-semibold">المطلوب:</span> قائمة بأكثر 5-10 أسئلة تتلقونها (مثل: "هل توصلون؟"، "ما هي مناطق التوصيل؟"، "هل لديكم فرع آخر؟").</p>
              <p className="mt-1 text-sm text-gray-500"><span className="font-semibold">لماذا؟</span> لتدريب المساعد على تخفيف العبء عن موظفيك والرد على الاستفسارات الروتينية بكفاءة عالية.</p>
            </div>

          </div>
        </div>

        {/* الجزء الثالث: خيارات التسليم */}
        <div className="max-w-5xl mx-auto mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">اختر الطريقة الأسهل لك لإرسال هذه المعلومات:</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            
            {/* واتساب */}
            <Link href="https://wa.me/966XXXXXXXXX?text=أهلاً،%20أنا%20جاهز%20لتزويدكم%20ببيانات%20متجر%20نماء%20لتفعيل%20المساعد%20الذكي." target="_blank" className="group">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center gap-3">
                <WhatsAppIcon className="h-12 w-12 text-green-500"/>
                <span className="text-lg font-semibold text-gray-800 group-hover:text-teal-600">واتساب</span>
              </div>
            </Link>

            {/* إيميل */}
            <Link href="mailto:your-email@example.com?subject=بيانات%20تفعيل%20المساعد%20الذكي%20لمتجر%20نماء&body=أهلاً،%0A%0Aمرفق%20لكم%20البيانات%20المطلوبة." target="_blank" className="group">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center gap-3">
                <EmailIcon className="h-12 w-12 text-red-500"/>
                <span className="text-lg font-semibold text-gray-800 group-hover:text-teal-600">بريد إلكتروني</span>
              </div>
            </Link>

            {/* تيليجرام */}
            <Link href="https://t.me/your_telegram_username" target="_blank" className="group">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center gap-3">
                <TelegramIcon className="h-12 w-12 text-blue-500"/>
                <span className="text-lg font-semibold text-gray-800 group-hover:text-teal-600">تيليجرام</span>
              </div>
            </Link>

            {/* مكالمة */}
            <Link href="tel:+966XXXXXXXXX" className="group">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center gap-3">
                <PhoneIcon className="h-12 w-12 text-gray-600"/>
                <span className="text-lg font-semibold text-gray-800 group-hover:text-teal-600">مكالمة هاتفية</span>
              </div>
            </Link>

          </div>
        </div>

      </div>
    </div>
  );
}
