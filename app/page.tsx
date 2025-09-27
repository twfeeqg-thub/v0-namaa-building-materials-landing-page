'use client'

import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import Link from "next/link"
import { JSX, SVGProps } from "react"
import fs from 'fs' // لاستيراد مكتبة نظام الملفات
import path from 'path' // لاستيراد مكتبة المسارات

// --- بداية الكود الديناميكي ---
// هذه الدالة ستقرأ الصور من المجلد قبل بناء الصفحة
const getImages = () => {
  // نحدد المسار إلى مجلد الصور
  const imagesDirectory = path.join(process.cwd(), 'public/images');
  try {
    // نقرأ أسماء جميع الملفات في المجلد
    const filenames = fs.readdirSync(imagesDirectory);
    // نقوم بإنشاء الروابط الصحيحة للصور
    return filenames.map(filename => `/images/${filename}`);
  } catch (error) {
    console.error("Could not read the images directory:", error);
    return []; // نرجع مصفوفة فارغة في حال حدوث خطأ
  }
};
// --- نهاية الكود الديناميكي ---


export default function Component() {
  const [emblaRef] = useEmblaCarousel({ loop: true }); 
  
  // الآن، imageUrls يتم إنشاؤها تلقائياً
  const imageUrls = getImages();

  return (
    <div key="1" className="flex flex-col min-h-[100dvh]" dir="rtl">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-gray-900 text-white">
        <Link className="flex items-center justify-center" href="#">
          <BuildingIcon className="h-6 w-6" />
          <span className="sr-only">نماء لمواد البناء</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            الرئيسية
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            المنتجات
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            تواصل معنا
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-900 text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    شريكك الموثوق لمواد البناء في جدة
                  </h1>
                  <p className="max-w-[600px] text-gray-300 md:text-xl">
                    جودة، سرعة، وخدمة ذكية. تصفح كتالوجنا الرقمي، اطلب عرض سعر في دقائق، ودع مساعدنا الذكي يخدمك 24/7. جرب المشروع مجاناً لمدة 10 أيام.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-yellow-400 px-8 text-sm font-medium text-gray-900 shadow transition-colors hover:bg-yellow-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-yellow-600 disabled:pointer-events-none disabled:opacity-50"
                    href="#"
                  >
                    تصفح الكتالوج الرقمي
                  </Link>
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-transparent px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-800 hover:text-gray-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-400 disabled:pointer-events-none disabled:opacity-50"
                    href="#"
                  >
                    تحدث مع المساعد الذكي
                  </Link>
                </div>
              </div>
              
              {/* === السلايدر الديناميكي === */}
              <div className="embla rounded-xl" ref={emblaRef}>
                <div className="embla__container">
                  {imageUrls.length > 0 ? (
                    imageUrls.map((url, index) => (
                      <div className="embla__slide" key={index}>
                        <Image
                          alt={`صورة عرض ${index + 1}`}
                          className="aspect-square object-cover"
                          src={url}
                          width={550}
                          height={550}
                          priority={index === 0}
                        />
                      </div>
                    ))
                  ) : (
                    <div className="embla__slide flex items-center justify-center bg-gray-800">
                      <p>لا توجد صور لعرضها</p>
                    </div>
                  )}
                </div>
              </div>

            </div>
          </div>
        </section>
        
        {/* ... باقي أقسام الصفحة تبقى كما هي بدون تغيير ... */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">كتالوج شامل بين يديك</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  تصفح مجموعتنا الواسعة من مواد البناء عالية الجودة، منظمة حسب الفئات لتسهيل العثور على ما تحتاجه لمشروعك.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-2 items-center gap-6 py-12 sm:grid-cols-3 lg:grid-cols-6">
              <div className="flex flex-col items-center justify-center gap-2">
                <WrenchIcon className="h-10 w-10" />
                <span className="text-sm font-medium">أدوات السباكة</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <BoltIcon className="h-10 w-10" />
                <span className="text-sm font-medium">لوازم الكهرباء</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <PaintbrushIcon className="h-10 w-10" />
                <span className="text-sm font-medium">الدهانات والتشطيبات</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <HammerIcon className="h-10 w-10" />
                <span className="text-sm font-medium">أدوات البناء</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <ShieldIcon className="h-10 w-10" />
                <span className="text-sm font-medium">معدات السلامة</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <BrickIcon className="h-10 w-10" />
                <span className="text-sm font-medium">مواد البناء الأساسية</span>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">من الطلب إلى الفاتورة في 3 خطوات بسيطة</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                نظامنا الجديد يحل مشكلة بطء العمليات. احصل على ما تحتاجه بسرعة وكفاءة.
              </p>
            </div>
            <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center justify-center space-y-2">
                <div className="rounded-full bg-gray-900 p-4 text-white">
                  <ShoppingCartIcon className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-bold">الخطوة 1: جهّز قائمة طلبك</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">استخدم كتالوجنا لبناء سلة عرض الأسعار.</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2">
                <div className="rounded-full bg-gray-900 p-4 text-white">
                  <ClockIcon className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-bold">الخطوة 2: احصل على رد سريع</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">يقوم فريقنا بمراجعة طلبك والرد فوراً.</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2">
                <div className="rounded-full bg-gray-900 p-4 text-white">
                  <FileTextIcon className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-bold">الخطوة 3: استلم فاتورتك</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">استلم فاتورتك الرسمية لبدء العمل.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">تعرف على مساعدك الذكي المتفرغ</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  مساعدنا الذكي متاح دائماً للإجابة على أسئلتك حول توفر المنتجات، إيجاد المواد المناسبة لمشروعك، أو حتى حساب الكميات التقريبية. يعمل حتى عندما نكون خارج أوقات الدوام.
                </p>
              </div>
              <div className="flex justify-center">
                <MessageCircleIcon className="h-32 w-32 text-gray-300 dark:text-gray-600" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gray-900 text-white">
        <p className="text-xs text-gray-400">© 2025 نماء لمواد البناء. جميع الحقوق محفوظة.</p>
        <div className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            حي الريان، جدة
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            +966 56 206 1338
          </Link>
        </div>
      </footer>
    </div>
  )
}

// === مكونات الأيقونات (تبقى كما هي بدون تغيير) ===
function BoltIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  )
}
function BrickIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M12 9v6" />
        <path d="M9 12h6" />
      </svg>
    )
  }
  function BuildingIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
        <path d="M9 22v-4h6v4" />
        <path d="M8 6h.01" />
        <path d="M16 6h.01" />
        <path d="M12 6h.01" />
        <path d="M12 10h.01" />
        <path d="M12 14h.01" />
        <path d="M16 10h.01" />
        <path d="M16 14h.01" />
        <path d="M8 10h.01" />
        <path d="M8 14h.01" />
      </svg>
    )
  }
  function ClockIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    )
  }
  function FileTextIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" x2="8" y1="13" y2="13" />
        <line x1="16" x2="8" y1="17" y2="17" />
        <line x1="10" x2="8" y1="9" y2="9" />
      </svg>
    )
  }
  function HammerIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m15 12-8.373 8.373a1 1 0 1 1-1.414-1.414L12.586 12l.01-.01 3.404-3.404a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414L15 12Z" />
        <path d="M9.086 11.914 2.757 5.586a1 1 0 0 1 0-1.414l2.829-2.829a1 1 0 0 1 1.414 0l6.328 6.328" />
      </svg>
    )
  }
  function MessageCircleIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
      </svg>
    )
  }
  function PaintbrushIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18.2 4.8a2 2 0 0 0-2.8 0l-8.4 8.4" />
        <path d="M16 6h2" />
        <path d="M12 10h2" />
        <path d="M14 2c-1 0-2 1-2 2s1 2 2 2 2-1 2-2-1-2-2-2z" />
        <path d="M20 10c0-1.1.9-2 2-2V4a2 2 0 0 0-2-2h-2" />
        <path d="m12 11 9 9" />
        <path d="M3 21h4" />
        <path d="M4 16l4-4" />
      </svg>
    )
  }
  function ShieldIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      </svg>
    )
  }
  function ShoppingCartIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="8" cy="21" r="1" />
        <circle cx="19" cy="21" r="1" />
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
      </svg>
    )
  }
  function WrenchIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    )
  }
