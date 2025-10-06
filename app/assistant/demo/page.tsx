'use client'; // هذا السطر ضروري لجعل المكون تفاعليًا

import { useState } from 'react';
import Link from 'next/link';

// مكون زر مخصص لإعادة استخدامه
function ScenarioButton({ onClick, children, disabled }: { onClick: () => void; children: React.ReactNode; disabled?: boolean }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="w-full md:w-auto text-lg font-semibold py-3 px-6 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-all duration-200 disabled:bg-gray-800 disabled:text-gray-500 disabled:cursor-not-allowed"
    >
      {children}
    </button>
  );
}

export default function AssistantInteractivePage() {
  const [stage, setStage] = useState('intro');
  const [completedScenarios, setCompletedScenarios] = useState<string[]>([]);

  const handleScenarioSelection = (scenario: string) => {
    setStage(scenario);
    if (!completedScenarios.includes(scenario)) {
      setCompletedScenarios([...completedScenarios, scenario]);
    }
  };

  const resetToChoices = () => {
    setStage('choices');
  };

  const renderContent = () => {
    // --- شاشة البداية ---
    if (stage === 'intro') {
      return (
        <div className="text-center animate-fade-in">
          <h1 className="text-3xl md:text-5xl font-extrabold text-yellow-400 mb-4">أهلاً بك أستاذ توفيق.</h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">أنا مساعدك الرقمي، جاهز للعمل على مدار الساعة. لقد حللت آلاف التفاعلات واكتشفت أن معظم الأرباح الضائعة تأتي من 3 مواقف رئيسية.</p>
          <p className="text-2xl md:text-3xl font-bold mb-6">دعنا نختبر كيف يمكنني تحويل هذه المواقف من خسارة إلى ربح.</p>
          {/* === الزر الأول: تم إضافة كلاس pulsing-button === */}
          <button 
            onClick={() => setStage('choices')}
            className="pulsing-button bg-yellow-400 text-gray-900 font-bold text-xl py-3 px-10 rounded-lg shadow-lg hover:bg-yellow-500 transition-transform transform hover:scale-105"
          >
            اختر سيناريو لتبدأ
          </button>
        </div>
      );
    }

    // --- شاشة اختيار السيناريوهات ---
    if (stage === 'choices') {
      const allDone = completedScenarios.length === 3;
      return (
        <div className="text-center animate-fade-in">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">{allDone ? "لقد أكملت كل السيناريوهات!" : "اختر أحد السيناريوهات:"}</h2>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <ScenarioButton onClick={() => handleScenarioSelection('pricing')} disabled={completedScenarios.includes('pricing')}>
              عميل يسأل عن الأسعار (خارج الدوام) {completedScenarios.includes('pricing') && '✅'}
            </ScenarioButton>
            <ScenarioButton onClick={() => handleScenarioSelection('quote')} disabled={completedScenarios.includes('quote')}>
              مقاول يطلب عرض سعر لمشروع {completedScenarios.includes('quote') && '✅'}
            </ScenarioButton>
            <ScenarioButton onClick={() => handleScenarioSelection('availability')} disabled={completedScenarios.includes('availability')}>
              عميل يسأل عن توفر منتج {completedScenarios.includes('availability') && '✅'}
            </ScenarioButton>
          </div>
          {allDone && (
            <div className="mt-10">
              {/* === الزر الثاني: تم إضافة كلاس pulsing-button وتوحيد اللون === */}
              <button onClick={() => setStage('final')} className="pulsing-button bg-yellow-400 text-gray-900 font-bold text-xl py-3 px-10 rounded-lg shadow-lg hover:bg-yellow-500 transition-transform transform hover:scale-105">
                شاهد الخلاصة النهائية
              </button>
            </div>
          )}
        </div>
      );
    }

    // --- السيناريوهات ---
    if (stage === 'pricing' || stage === 'quote' || stage === 'availability') {
      const scenarios: { [key: string]: any } = {
        pricing: {
          title: "سيناريو: عميل يسأل عن الأسعار",
          customerMessage: "السلام عليكم، بكم كيس الأسمنت عندكم؟",
          assistantResponse: "وعليكم السلام! سعر كيس الأسمنت المقاوم لدينا هو 'س' ريال. هل تحتاج كمية كبيرة لمشروع؟ لدينا أسعار خاصة للكميات.",
          analysis: [
            "أجبنا على سؤاله فورًا ومنعناه من الذهاب للمنافس.",
            "لم نكتفِ بالسعر، بل فتحنا بابًا لصفقة أكبر.",
            "وفرنا وقت موظفيك للتركيز على العملاء الجادين."
          ],
          conclusion: "هذه أول نقطة ألم حولناها إلى فرصة."
        },
        quote: {
          title: "سيناريو: مقاول يطلب عرض سعر",
          customerMessage: "مساء الخير، عندي مشروع فيلا وأحتاج عرض سعر لكميات كبيرة. كيف الطريقة؟",
          assistantResponse: "مساء النور أستاذ. يسعدنا خدمتك. لتجهيز عرض سعر دقيق ومنافس، يرجى تزويدنا باسمك ورقم جوالك، وسيقوم مدير المبيعات بالتواصل معك شخصيًا كأولوية قصوى.",
          analysis: [
            "أظهرنا احترافية عالية وأعطينا المقاول شعورًا بالأهمية.",
            "قمنا بفلترة الطلب وتأهيل العميل عبر جمع بياناته.",
            "سيبدأ موظفوك يومهم بقائمة عملاء كبار جاهزين للتواصل."
          ],
          conclusion: "هذه ثاني نقطة ألم حولناها إلى نظام عمل."
        },
        availability: {
          title: "سيناريو: عميل يسأل عن التوفر",
          customerMessage: "لو سمحت، عندكم غراء سيراميك أسباني؟",
          assistantResponse: "أهلاً بك. نعم، نوفر أفضل أنواع غراء السيراميك الإسباني. هل تبحث عن نوع معين؟ يمكننا أيضًا أن نرشح لك النوع الأنسب حسب استخدامك.",
          analysis: [
            "أجبنا على سؤاله مباشرة وحافظنا عليه كعميل.",
            "عرضنا المساعدة وقدمنا أنفسنا كخبراء لبناء الثقة.",
            "تخيل عدد المكالمات الهاتفية التي سنوفرها عليك يوميًا!"
          ],
          conclusion: "هذه ثالث نقطة ألم حولناها إلى كفاءة."
        }
      };
      const current = scenarios[stage];
      return (
        <div className="w-full max-w-3xl animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-6 text-center">{current.title}</h2>
          <div className="space-y-4">
            <div className="p-4 bg-blue-900/50 rounded-lg border border-blue-500 self-start">
              <p className="font-bold">رسالة العميل (11:00 مساءً):</p>
              <p className="text-lg">"{current.customerMessage}"</p>
            </div>
            <div className="p-4 bg-green-900/50 rounded-lg border border-green-500 self-end">
              <p className="font-bold">رد المساعد الذكي (فورًا):</p>
              <p className="text-lg">"{current.assistantResponse}"</p>
            </div>
          </div>
          <div className="mt-8 p-6 bg-gray-800 rounded-lg">
            <h3 className="text-xl font-bold text-yellow-400 mb-3">التحليل:</h3>
            <ul className="space-y-2 list-disc list-inside">
              {current.analysis.map((point: string, i: number) => <li key={i}>{point}</li>)}
            </ul>
            <p className="mt-4 font-bold text-lg">{current.conclusion}</p>
          </div>
          <div className="text-center mt-8">
            <button onClick={resetToChoices} className="bg-gray-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-gray-500 transition-colors">
              {completedScenarios.length === 3 ? 'العودة لرؤية الخلاصة' : 'تجربة سيناريو آخر'}
            </button>
          </div>
        </div>
      );
    }

    // --- الخاتمة الكبرى ---
    if (stage === 'final') {
      return (
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-extrabold">لقد رأيت بنفسك.</h1>
          <p className="text-xl md:text-2xl text-gray-200 mt-4 leading-relaxed">
            هذه ليست محاكاة، بل هو مستقبلك الرقمي. المنافسون يعتمدون على موظفين ينامون ويأخذون إجازات. أنت ستعتمد على نظام يعمل 24/7 بلا كلل.
          </p>
          <div className="mt-8 p-4 border border-red-500 rounded-lg bg-red-900/30">
            <p className="text-xl md:text-2xl font-bold text-red-400">
              كل دقيقة تمر، قد يكون هناك عميل يذهب لمنافس آخر.
            </p>
          </div>
          <div className="mt-10">
            <p className="text-2xl md:text-3xl font-bold">هل أنت مستعد لتفعيل نسختك الخاصة قبل أن يسبقك الآخرون؟</p>
            {/* === الزر الثالث: تم إضافة كلاس pulsing-button === */}
            <Link 
              href="/activation"
              className="pulsing-button mt-6 inline-block bg-yellow-400 text-gray-900 font-bold text-xl py-3 px-10 rounded-lg shadow-lg hover:bg-yellow-500 transition-transform transform hover:scale-105"
            >
              نعم، ابدأ في بناء المساعد الخاص بي الآن!
            </Link>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4" dir="rtl">
      {renderContent()}
    </div>
  );
}
