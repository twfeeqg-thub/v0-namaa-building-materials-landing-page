// مسار الملف: app/page.tsx (النسخة المحدثة مع الروابط)

import Link from "next/link"
import Image from "next/image"

export default function Component() {
  return (
    <div key="1" className="flex flex-col min-h-[100dvh]" dir="rtl">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-gray-900 text-white">
        <Link className="flex items-center justify-center" href="#">
          <BuildingIcon className="h-6 w-6 text-yellow-400" />
          <span className="sr-only">نماء لمواد البناء</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/">
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    شريكك الموثوق لمواد البناء في جدة
                  </h1>
                  <p className="max-w-[600px] text-gray-300 md:text-xl">
                    جودة، سرعة، وخدمة ذكية. تصفح كتالوجنا الرقمي، اطلب عرض سعر في دقائق، ودع مساعدنا الذكي يخدمك 24/7.
                  </p>
                  <div className="w-full pt-2">
                    <div className="inline-block rounded-lg bg-yellow-500/20 px-3 py-1 text-sm text-yellow-300">
                      جرب المشروع مجاناً لمدة 10 أيام
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-yellow-400 px-8 text-sm font-medium text-gray-900 shadow transition-colors hover:bg-yellow-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-yellow-600"
                    href="#"
                  >
                    تصفح الكتالوج الرقمي
                  </Link>
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-transparent px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-800 hover:text-gray-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-400"
                    href="#"
                  >
                    تحدث مع المساعد الذكي
                  </Link>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="w-full overflow-hidden rounded-xl">
                  <Image
                    alt="واجهة محل نماء لمواد البناء"
                    className="aspect-video w-full object-cover"
                    height="340"
                    src="/images/namaa-1.jpg"
                    width="600"
                  />
                </div>
                <div className="grid grid-cols-5 gap-3">
                  <Image alt="صورة من داخل المحل 1" className="aspect-square w-full rounded-lg object-cover" height="100" src="/images/namaa-2.jpg" width="100" />
                  <Image alt="صورة من داخل المحل 2" className="aspect-square w-full rounded-lg object-cover" height="100" src="/images/namaa-3.jpg" width="100" />
                  <Image alt="صورة من داخل المحل 3" className="aspect-square w-full rounded-lg object-cover" height="100" src="/images/namaa-4.jpg" width="100" />
                  <Image alt="صورة من داخل المحل 4" className="aspect-square w-full rounded-lg object-cover" height="100" src="/images/namaa-5.jpg" width="100" />
                  <Image alt="صورة من داخل المحل 5" className="aspect-square w-full rounded-lg object-cover" height="100" src="/images/namaa-6.jpg" width="100" />
                </div>
              </div>
            </div>
          </div>
        </section>
        
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
            {/* === بداية قسم الكتالوج مع الروابط المحدثة === */}
            <div className="mx-auto grid max-w-5xl grid-cols-2 items-center gap-6 py-12 sm:grid-cols-3 lg:grid-cols-6">
              <Link href="/category/plumbing-tools" className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg hover:bg-gray-100 transition-colors">
                <WrenchIcon className="h-10 w-10" />
                <span className="text-sm font-medium">أدوات السباكة</span>
              </Link>
              <Link href="/category/electrical-supplies" className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg hover:bg-gray-100 transition-colors">
                <BoltIcon className="h-10 w-10" />
                <span className="text-sm font-medium">لوازم الكهرباء</span>
              </Link>
              <Link href="/category/paints-and-finishes" className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg hover:bg-gray-100 transition-colors">
                <PaintbrushIcon className="h-10 w-10" />
                <span className="text-sm font-medium">الدهانات والتشطيبات</span>
              </Link>
              <Link href="/category/construction-tools" className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg hover:bg-gray-100 transition-colors">
                <HammerIcon className="h-10 w-10" />
                <span className="text-sm font-medium">أدوات البناء</span>
              </Link>
              <Link href="/category/safety-equipment" className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg hover:bg-gray-100 transition-colors">
                <ShieldIcon className="h-10 w-10" />
                <span className="text-sm font-medium">معدات السلامة</span>
              </Link>
              <Link href="/category/basic-materials" className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg hover:bg-gray-100 transition-colors">
                <BrickIcon className="h-10 w-10" />
                <span className="text-sm font-medium">مواد البناء الأساسية</span>
              </Link>
            </div>
            {/* === نهاية قسم الكتالوج مع الروابط المحدثة === */}
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

// أيقونات SVG كما هي
function BoltIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  )
}
function BrickIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M12 9v6" />
      <path d="M9 12h6" />
    </svg>
  )
}
function BuildingIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
function HammerIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m15 12-8.373 8.373a1 1 0 1 1-1.414-1.414L12.586 12l.01-.01 3.404-3.404a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414L15 12Z" />
      <path d="M9.086 11.914 2.757 5.586a1 1 0 0 1 0-1.414l2.829-2.829a1 1 0 0 1 1.414 0l6.328 6.328" />
    </svg>
  )
}
function PaintbrushIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
function ShieldIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    </svg>
  )
}
function WrenchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  )
}
