import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// 1. استيراد المكون من المسار الصحيح في جذر المشروع
import SmartAmbassador from "@/components/SmartAmbassador"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "نماء لمواد البناء",
  description: "شريكك الموثوق لمواد البناء في جدة",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>
        {children}
        <SmartAmbassador /> {/* 2. إضافة المكون هنا (لا تغيير هنا) */}
      </body>
    </html>
  );
}
