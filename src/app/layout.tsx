import type { Metadata } from 'next';
import { PT_Sans } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

const ptSans = PT_Sans({
  subsets: ['latin', 'cyrillic'], // Assuming latin and cyrillic subsets are needed, adjust if not.
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-pt-sans', // Optional: for use with Tailwind CSS `fontFamily` if needed elsewhere
});

export const metadata: Metadata = {
  title: 'دليلك في ماليزيا',
  description: 'استكشف أفضل الجامعات الماليزية وابدأ رحلتك الأكاديمية',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head />
      <body 
        className={`${ptSans.className} font-body antialiased bg-cover bg-center bg-fixed`}
        style={{ backgroundImage: "url('https://cdn.unifiedcommerce.com/content/product/media/large/5900511103946.jpg')" }}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
