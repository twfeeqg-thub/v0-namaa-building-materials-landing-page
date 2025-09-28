// مسار الملف: app/category/[slug]/page.tsx (النسخة المصححة مع تعريف الأنواع)

import Link from "next/link";
import Image from "next/image";

// === بداية التعديل: تعريف أنواع البيانات ===
interface Product {
  name: string;
  description: string;
  image: string;
}

interface Category {
  name: string;
  products: Product[];
}
// === نهاية التعديل ===

// بيانات وهمية للتجربة.
const categoryData: { [key: string]: Category } = {
  "plumbing-tools": {
    name: "أدوات السباكة",
    products: [
      { name: "محبس زاوية", description: "جودة عالية ومقاوم للصدأ", image: "/images/placeholder.svg" },
      { name: "خلاط دش", description: "تصميم عصري وسهل التركيب", image: "/images/placeholder.svg" },
      { name: "سخان مياه فوري", description: "كفاءة في استهلاك الطاقة", image: "/images/placeholder.svg" },
    ],
  },
  "electrical-supplies": {
    name: "لوازم الكهرباء",
    products: [
      { name: "قاطع دائرة", description: "حماية فائقة من الحمل الزائد", image: "/images/placeholder.svg" },
      { name: "مفتاح إنارة ذكي", description: "تحكم عبر التطبيق", image: "/images/placeholder.svg" },
      { name: "شريط إضاءة LED", description: "إضاءة ديكورية متعددة الألوان", image: "/images/placeholder.svg" },
    ],
  },
  // يمكنك إضافة بيانات الفئات الأخرى هنا بنفس الطريقة
  "paints-and-finishes": { name: "الدهانات والتشطيبات", products: [] },
  "construction-tools": { name: "أدوات البناء", products: [] },
  "safety-equipment": { name: "معدات السلامة", products: [] },
  "basic-materials": { name: "مواد البناء الأساسية", products: [] },
};

// هذا هو المكون الذي سيعرض الصفحة
export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = categoryData[params.slug] || { name: "الفئة غير موجودة", products: [] };

  return (
    <div className="flex flex-col min-h-screen" dir="rtl">
      <header className="bg-gray-900 text-white px-4 lg:px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl md:text-2xl font-bold">قسم: {category.name}</h1>
        <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
          → العودة إلى الرئيسية
        </Link>
      </header>
      <main className="flex-1 p-4 md:p-8 lg:p-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* الآن TypeScript يعرف أن 'product' هو من نوع 'Product' */}
          {category.products.map((product: Product, index: number) => (
            <div key={index} className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <Image
                alt={`صورة ${product.name}`}
                className="aspect-square w-full object-cover"
                height={300}
                src={product.image}
                width={300}
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">{product.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
        {category.products.length === 0 && (
            <div className="text-center py-20">
                <h2 className="text-2xl font-bold">لا توجد منتجات في هذه الفئة بعد</h2>
                <p className="text-gray-500 mt-2">نحن نعمل على إضافة المنتجات قريباً. يرجى التحقق مرة أخرى لاحقاً.</p>
            </div>
        )}
      </main>
    </div>
  );
}
