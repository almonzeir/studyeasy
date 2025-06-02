import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
      </head>
      <body 
        className="font-body antialiased bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('https://rare-gallery.com/uploads/posts/4590017-kuala-lumpur-malaysia-cityscape-city-lights-night-skyline-skyscrapers-petronas-towers-long-exposure.jpg')" }}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
