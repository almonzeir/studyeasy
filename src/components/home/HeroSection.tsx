"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Wand2, ChevronLeft } from 'lucide-react';

export function HeroSection() {
  return (
    <section
      className="relative py-24 text-primary-foreground md:py-40 bg-cover bg-center"
      style={{ backgroundImage: "url('https://4kwallpapers.com/images/wallpapers/petronas-towers-kuala-lumpur-malaysia-cityscape-night-2560x1440-2109.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="container relative z-10 text-center">
        <h1
          className="mb-6 font-headline text-5xl font-bold text-shadow-strong sm:text-6xl md:text-7xl lg:text-8xl animate-fade-in-down"
        >
          أهلاً بك في <span className="text-accent text-shadow-accent">دليلك في ماليزيا</span>
        </h1>
        <p
          className="mb-10 text-lg md:text-xl lg:text-2xl text-primary-foreground/95 text-shadow-medium animate-fade-in-up"
        >
          استكشف أفضل الجامعات الماليزية وابدأ رحلتك الأكاديمية معنا.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 transition-transform hover:scale-105 shadow-xl hover:shadow-accent/50 focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background">
            <Link href="/wizard">
              <Wand2 className="me-2 h-5 w-5" />
              ابدأ بمساعد الاختيار
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-2 border-accent text-accent hover:text-accent-foreground hover:bg-accent/80 transition-transform hover:scale-105 hover:border-accent/80 shadow-xl hover:shadow-accent/40 focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background">
            <Link href="/universities">
              تصفح الجامعات
              <ChevronLeft className="ms-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
