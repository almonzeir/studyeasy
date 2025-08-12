"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { UniversityCard } from '@/components/university/UniversityCard';
import { mockUniversities } from '@/data/universities';
import { ChevronLeft } from 'lucide-react';

export function FeaturedUniversities() {
  const featuredUniversities = mockUniversities.slice(0, 3);

  return (
    <section className="py-16 bg-transparent md:py-24">
      <div className="container">
        <div className="mb-14 text-center">
          <h2 className="font-headline text-4xl font-bold md:text-5xl">
            الجامعات <span className="text-accent">المميزة</span>
          </h2>
          <div className="mt-2 h-1 w-24 mx-auto bg-accent rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredUniversities.map((uni) => (
            <UniversityCard key={uni.id} university={uni} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild variant="link" className="text-lg text-accent hover:text-accent/80">
            <Link href="/universities">
              عرض جميع الجامعات
              <ChevronLeft className="ms-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
