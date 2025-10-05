import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-950" dir="rtl">
      <header className="px-4 lg:px-6 h-16 flex items-center shadow-sm">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          {/* تأكد من وضع الشعار في public/logo.png */}
          <img src="/logo.png" alt="شعار نماء لمواد البناء" className="h-12 w-auto" />
          <span className="sr-only">نماء لمواد البناء</span>
        </Link>
        <nav className="ml-auto hidden lg:flex gap-4 sm:gap-6">
          <Link href="#features" className="text-sm font-medium hover:underline underline-offset-4 text-gray-700 dark:text-gray-300" prefetch={false}>
            الأقسام
          </Link>
          <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4 text-gray-700 dark:text-gray-300" prefetch={false}>
            من نحن
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4 text-gray-700 dark:text-gray-300" prefetch={false}>
            اتصل بنا
          </Link>
        </nav>
        <div className="ml-4 lg:hidden">
          <Button size="icon" variant="outline">
            <MenuIcon className="h-6 w-6" style={{ color: '#367588' }} />
            <span className="sr-only">فتح القائمة</span>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-100 dark:bg-gray-800/40">
          <div className="container px-4 md:px-6 text-center">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter" style={{ color: '#367588' }}>
                متجر نماء لمواد البناء
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl dark:text-gray-400">
                شريكك الموثوق لجميع احتياجات البناء والتشييد. جودة عالية وأسعار تنافسية.
              </p>
              <div className="mx-auto max-w-sm space-y-2">
                <form className="flex space-x-2" dir="ltr">
                  <Input type="email" placeholder="ادخل بريدك الإلكتروني" className="max-w-lg flex-1 text-right" />
                  <Button type="submit" style={{ backgroundColor: '#367588', color: 'white' }}>
                    اشترك
                  </Button>
                </form>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  اشترك ليصلك جديد عروضنا.{" "}
                  <Link href="#" className="underline underline-offset-2" prefetch={false}>
                    سياسة الخصوصية
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl" style={{ color: '#367588' }}>
                  أقسام المنتجات
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  تصفح مجموعتنا الواسعة من مواد البناء عالية الجودة التي تلبي جميع احتياجات مشاريعك.
                </p>
              </div>
            </div>
            <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {/* فئة معدات السلامة */}
              <div className="flex flex-col items-center text-center p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <img src="/images/safety-1.jpg" alt="معدات السلامة" className="rounded-lg object-cover w-full h-48 mb-4" />
                <h3 className="text-xl font-bold mb-2">معدات السلامة</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  خوذات، نظارات، أحذية، وأحزمة أمان لبيئة عمل آمنة.
                </p>
                <p className="text-lg font-semibold" style={{ color: '#367588' }}>تبدأ من 50 ر.س</p>
              </div>
              {/* فئة أدوات البناء */}
              <div className="flex flex-col items-center text-center p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <img src="/images/tools-1.jpg" alt="أدوات البناء" className="rounded-lg object-cover w-full h-48 mb-4" />
                <h3 className="text-xl font-bold mb-2">أدوات البناء</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  مطارق، مثاقب، ومناشير يدوية وكهربائية عالية الجودة.
                </p>
                <p className="text-lg font-semibold" style={{ color: '#367588' }}>تبدأ من 30 ر.س</p>
              </div>
              {/* فئة الدهانات والتشطيبات */}
              <div className="flex flex-col items-center text-center p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <img src="/images/paints-1.jpg" alt="الدهانات والتشطيبات" className="rounded-lg object-cover w-full h-48 mb-4" />
                <h3 className="text-xl font-bold mb-2">الدهانات والتشطيبات</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  ألوان عصرية وجودة عالية لتشطيبات داخلية وخارجية مميزة.
                </p>
                <p className="text-lg font-semibold" style={{ color: '#367588' }}>تبدأ من 75 ر.س</p>
              </div>
              {/* فئة لوازم الكهرباء */}
              <div className="flex flex-col items-center text-center p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <img src="/images/electrical-1.jpg" alt="لوازم الكهرباء" className="rounded-lg object-cover w-full h-48 mb-4" />
                <h3 className="text-xl font-bold mb-2">لوازم الكهرباء</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  مفاتيح، برايز، وشاسيهات بتصاميم عصرية وآمنة.
                </p>
                <p className="text-lg font-semibold" style={{ color: '#367588' }}>تبدأ من 15 ر.س</p>
              </div>
              {/* فئة أدوات السباكة */}
              <div className="flex flex-col items-center text-center p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <img src="/images/plumbing-1.jpg" alt="أدوات السباكة" className="rounded-lg object-cover w-full h-48 mb-4" />
                <h3 className="text-xl font-bold mb-2">أدوات السباكة</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  مواسير، محابس، ومفاتيح سباكة لجميع أعمال الصيانة والتركيب.
                </p>
                <p className="text-lg font-semibold" style={{ color: '#367588' }}>تبدأ من 40 ر.س</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer id="contact" className="bg-gray-100 p-6 md:py-8 w-full dark:bg-gray-800">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-right">
          <div className="space-y-2">
            <h3 className="text-lg font-bold" style={{ color: '#367588' }}>نماء لمواد البناء</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">شريكك الموثوق في عالم البناء.</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-bold" style={{ color: '#367588' }}>روابط سريعة</h3>
            <nav className="flex flex-col space-y-1">
              <Link href="#features" className="text-sm hover:underline" prefetch={false}>الأقسام</Link>
              <Link href="#about" className="text-sm hover:underline" prefetch={false}>من نحن</Link>
              <Link href="#" className="text-sm hover:underline" prefetch={false}>سياسة الخصوصية</Link>
            </nav>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-bold" style={{ color: '#367588' }}>اتصل بنا</h3>
            <div className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
              <p>جوال: ٠٥٣٩٦١٩٩٩٧</p>
              <p>بريد إلكتروني: nabm2030@gmail.com</p>
              <p>س.ت: ٤٠٣٠٢٩٨٦٤٠</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>&copy; 2025 نماء لمواد البناء. جميع الحقوق محفوظة.</p>
        </div>
      </footer>
    </div>
  )
}

// أيقونة القائمة
function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}
