// مسار الملف: app/category/[slug]/page.tsx
// هذا الكود يعرض صفحة فئة ديناميكية بناءً على البيانات المحددة.

import Link from "next/link";
import Image from "next/image";

// 1. تعريف أنواع البيانات (Interfaces)
// هذا يساعد على ضمان أن هيكل البيانات متسق ويمنع الأخطاء.
interface Product {
  name: string;
  description: string;
  price: string;
  image: string;
}

interface Category {
  name: string;
  products: Product[];
}

// 2. بيانات الفئات والمنتجات
// هذا هو "مصدر الحقيقة" لصفحات الفئات. كل كائن يمثل فئة بمنتجاتها.
// تم تحديثه ليشمل صورة واحدة لكل قسم مع الوصف والسعر المقترح.
const categoryData: { [key: string]: Category } = {
  "safety-equipment": {
    name: "معدات السلامة",
    products: [
      {
        name: "مجموعة أدوات السلامة",
        description: "مجموعة متكاملة تشمل الخوذة، النظارات، والقفازات لضمان أقصى حماية.",
        price: "تبدأ من 75 ر.س",
        image: "/images/safety-1.jpg",
      },
    ],
  },
  "construction-tools": {
    name: "العدد والأدوات",
    products: [
      {
        name: "تشكيلة عدد يدوية",
        description: "مجموعة من العدد اليدوية الاحترافية لإنجاز عملك بكفاءة وسرعة.",
        price: "تبدأ من 25 ر.س",
        image: "/images/tools-1.jpg",
      },
    ],
  },
  "paints-and-finishes": {
    name: "الدهانات",
    products: [
      {
        name: "دهانات جوتن عالية الجودة",
        description: "ألوان عصرية وتغطية ممتازة لضمان لمسة نهائية مثالية تدوم طويلاً.",
        price: "تبدأ من 95 ر.س",
        image: "/images/paints-1.jpg",
      },
    ],
  },
  "electrical-supplies": {
    name: "الكهرباء",
    products: [
      {
        name: "مستلزمات تمديدات كهربائية",
        description: "منتجات آمنة ومعتمدة من أسلاك ومفاتيح تضمن سلامة مشروعك.",
        price: "تبدأ من 15 ر.س",
        image: "/images/electrical-1.jpg",
      },
    ],
  },
  "plumbing-tools": {
    name: "السباكة",
    products: [
      {
        name: "حلول سباكة متكاملة",
        description: "أنابيب ووصلات عالية المتانة لضمان نظام سباكة فعال وموثوق.",
        price: "تبدأ من 10 ر.س",
        image: "/images/plumbing-1.jpg",
      },
    ],
  },
  // هذا القسم سيبقى فارغاً لإظهار رسالة "لا توجد منتجات".
  "basic-materials": {
    name: "مواد البناء الأساسية",
    products: [],
  },
};

// 3. تعريف الدالة generateStaticParams
// هذه الدالة مهمة جداً في Next.js لتحسين الأداء.
// تقوم بإخبار Next.js مسبقاً بكل الصفحات الديناميكية التي يجب بناؤها أثناء عملية التصدير (build).
// هذا يعني أن الصفحات ستكون جاهزة ومُعدة مسبقاً، مما يجعل تحميلها سريعاً جداً للمستخدم.
export async function generateStaticParams() {
  // نحصل على كل "slugs" من بياناتنا (مثل "safety-equipment", "construction-tools", etc.)
  const slugs = Object.keys(categoryData);
  // نرجعها بالتنسيق الذي يتوقعه Next.js
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

// 4. المكون الرئيسي للصفحة (CategoryPage)
// هذا هو المكون الذي سيتم عرضه فعلياً في المتصفح.
export default function CategoryPage({ params }: { params: { slug: string } }) {
  // نستخرج `slug` من الرابط (URL) ونبحث عن بيانات الفئة المطابقة.
  // إذا لم نجد الفئة، نعرض رسالة خطأ افتراضية.
  const category = categoryData[params.slug] || { name: "الفئة غير موجودة", products: [] };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50" dir="rtl">
      {/* رأس الصفحة */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 lg:px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl md:text-2xl font-bold text-gray-800">قسم: {category.name}</h1>
          <Link href="/" className="text-sm font-medium text-blue-600 hover:underline">
            → العودة إلى الرئيسية
          </Link>
        </div>
      </header>

      {/* المحتوى الرئيسي */}
      <main className="flex-1 container mx-auto p-4 md:p-8">
        {/* شبكة عرض المنتجات */}
        {category.products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {category.products.map((product, index) => (
              <div key={index} className="bg-white border rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="relative w-full h-56">
                  <Image
                    alt={`صورة ${product.name}`}
                    src={product.image}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
                  <p className="text-sm text-gray-600 mt-2 h-10">{product.description}</p>
                  <p className="text-md font-semibold text-blue-700 mt-4">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // رسالة في حال عدم وجود منتجات
          <div className="text-center py-24">
            <h2 className="text-3xl font-bold text-gray-700">قريباً...</h2>
            <p className="text-gray-500 mt-3 max-w-md mx-auto">
              نحن نعمل بجد على إضافة أفضل المنتجات في هذه الفئة. يرجى التحقق مرة أخرى قريباً لاكتشاف جديدنا!
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
