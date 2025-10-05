import Link from 'next/link';

export default function AssistantPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4" dir="rtl">
      <div className="text-center max-w-3xl mx-auto">
        
        <div className="mb-8">
          <p className="text-2xl md:text-4xl font-bold text-yellow-400 animate-pulse">
            ...أنت الآن خارج أوقات الدوام الرسمي
          </p>
          <p className="text-lg md:text-xl text-gray-300 mt-2">
            الوقت الآن 10:30 مساءً... المحل مغلق.
          </p>
        </div>

        <div className="space-y-6 border-t-2 border-yellow-400 pt-8">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            ولكن... موظفك الرقمي لا ينام.
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
            في هذه اللحظة تمامًا، بينما أنت تستريح، أو تقضي وقتًا مع عائلتك، هناك عميل محتمل يبحث عن مواد بناء لمشروعه. لقد وجد صفحتك... ولكنه وجد المتجر مغلقًا.
          </p>

          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-semibold">
            ماذا لو كان بإمكانه الحصول على إجابات فورية؟
          </p>

          <div className="text-left bg-gray-800 p-6 rounded-lg shadow-lg max-w-xl mx-auto">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">المساعد الذكي يعمل من أجلك 24/7:</h2>
            <ul className="space-y-3 list-disc list-inside text-lg">
              <li><span className="font-bold">يستقبل استفسارات العملاء</span> في منتصف الليل، الفجر، أو حتى خلال إجازة يوم الجمعة.</li>
              <li><span className="font-bold">يقدم معلومات عن المنتجات</span> وأسعارها الأولية.</li>
              <li><span className="font-bold">يجمع بيانات العملاء المهتمين</span> (الاسم، رقم الجوال، الطلب) لتعاود الاتصال بهم.</li>
              <li><span className="font-bold">يحول كل دقيقة ضائعة</span> إلى فرصة ربح محتملة.</li>
            </ul>
          </div>

          <div className="mt-8 p-4 border border-red-500 rounded-lg bg-red-900/30">
            <p className="text-xl md:text-2xl font-bold text-red-400">
              الحقيقة القاسية: العميل لن ينتظر. سيذهب إلى المنافس الذي يرد عليه أولاً.
            </p>
            <p className="text-lg text-gray-300 mt-2">
              كل استفسار لا يتم الرد عليه هو عميل يذهب مباشرة إلى منافسيك. كم فرصة ضاعت بالفعل هذا الأسبوع؟
            </p>
          </div>

          <div className="mt-10">
            <p className="text-2xl md:text-3xl font-bold">
              هذه ليست مجرد خدمة، بل هي هيمنة على السوق.
            </p>
            <p className="text-xl text-gray-300 mt-2">
              هل أنت مستعد لتفعيل موظفك الذي لا يكل ولا يمل؟
            </p>
            {/* === التعديل الجوهري هنا === */}
            <Link 
              href="/assistant/demo" //  تم تغيير الرابط إلى صفحة التجربة التفاعلية
              className="mt-6 inline-block bg-yellow-400 text-gray-900 font-bold text-xl py-3 px-10 rounded-lg shadow-lg hover:bg-yellow-500 transition-transform transform hover:scale-105"
            >
              نعم، أريد هذه الميزة!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
