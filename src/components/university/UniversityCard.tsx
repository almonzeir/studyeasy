'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { University } from '@/types/university';
import { useState } from 'react';
import { BookOpen } from 'lucide-react';

type Props = { uni: University };

export default function UniversityCard({ uni }: Props) {
  const [imgErr, setImgErr] = useState(false);

  return (
    <article className="group overflow-hidden rounded-2xl border bg-white/50 shadow-sm transition hover:shadow-md">
      <div className="relative w-full aspect-[16/9]">
        {uni.imageUrl && !imgErr ? (
          <Image
            src={uni.imageUrl}
            alt={`Campus of ${uni.name}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            onError={() => setImgErr(true)}
            priority={false}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gray-100">
            <BookOpen className="h-16 w-16 text-gray-300" />
          </div>
        )}
        {uni.logoUrl && (
          <div className="absolute left-3 top-3 rounded-xl bg-white/80 p-2 backdrop-blur">
            <Image
              src={uni.logoUrl}
              alt={`${uni.name} logo`}
              width={36}
              height={36}
              className="h-9 w-9 object-contain"
            />
          </div>
        )}
      </div>

      <div className="space-y-3 p-4">
        <h3 className="text-lg font-semibold leading-snug">{uni.name}</h3>
        <p className="text-sm text-gray-600 line-clamp-3">{uni.description}</p>

        <div className="grid grid-cols-2 gap-2 text-xs text-gray-700">
          <div>
            <span className="block text-gray-500">المدينة</span>
            <span className="font-medium">{uni.city}</span>
          </div>
          <div>
            <span className="block text-gray-500">الرسوم السنوية</span>
            <span className="font-medium">USD {uni.annualFees}</span>
          </div>
          {uni.ranking?.global && (
            <div>
              <span className="block text-gray-500">تصنيف عالمي</span>
              <span className="font-medium">{uni.ranking.global}</span>
            </div>
          )}
          {uni.livingCosts && (
            <div>
              <span className="block text-gray-500">تكاليف المعيشة</span>
              <span className="font-medium">{uni.livingCosts}</span>
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-2 pt-1">
          {uni.availableCourses.slice(0, 3).map((c) => (
            <span
              key={c}
              className="rounded-full border px-2 py-1 text-[11px] text-gray-700"
            >
              {c}
            </span>
          ))}
          {uni.availableCourses.length > 3 && (
            <span className="rounded-full bg-gray-100 px-2 py-1 text-[11px]">
              +{uni.availableCourses.length - 3}
            </span>
          )}
        </div>

        <div className="flex gap-3 pt-2">
          {uni.officialWebsiteUrl && (
            <Link
              href={uni.officialWebsiteUrl}
              className="rounded-lg bg-black px-3 py-1.5 text-xs text-white transition hover:opacity-90"
              target="_blank"
            >
              الموقع الرسمي
            </Link>
          )}
          {uni.applicationLink && (
            <Link
              href={uni.applicationLink}
              className="rounded-lg border px-3 py-1.5 text-xs transition hover:bg-gray-50"
              target="_blank"
            >
              التقديم
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
