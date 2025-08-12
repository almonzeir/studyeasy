'use client';

import Link from 'next/link';
import Image from 'next/image';
import SmartImage from '../components/SmartImage';
import type { University } from '../types/university';

type Props = { uni: University };

export default function UniversityCard({ uni }: Props) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-sm ring-1 ring-black/5 backdrop-blur transition hover:shadow-md">
      <div className="relative w-full aspect-[16/9]">
        <div className="absolute inset-0 animate-pulse bg-gradient-to-b from-white/10 to-white/5" />
        <SmartImage
          src={uni.imageUrl}
          alt={`Campus of ${uni.name}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          priority={false}
        />
        {uni.logoUrl && (
          <div className="absolute left-3 top-3 rounded-xl bg-white/90 p-2">
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
        <p className="text-sm text-gray-300/90 line-clamp-3">{uni.description}</p>

        <div className="grid grid-cols-2 gap-2 text-xs text-gray-300">
          <div>
            <span className="block text-gray-400">المدينة</span>
            <span className="font-medium">{uni.city}</span>
          </div>
          <div>
            <span className="block text-gray-400">الرسوم السنوية</span>
            <span className="font-medium">$ {uni.annualFees}</span>
          </div>
          {uni.ranking?.global && (
            <div>
              <span className="block text-gray-400">تصنيف عالمي</span>
              <span className="font-medium">{uni.ranking.global}</span>
            </div>
          )}
          {uni.livingCosts && (
            <div>
              <span className="block text-gray-400">تكاليف المعيشة</span>
              <span className="font-medium">{uni.livingCosts}</span>
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-2 pt-1">
          {uni.availableCourses.slice(0, 3).map((c) => (
            <span key={c} className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[11px]">
              {c}
            </span>
          ))}
          {uni.availableCourses.length > 3 && (
            <span className="rounded-full bg-white/10 px-2 py-1 text-[11px]">
              +{uni.availableCourses.length - 3}
            </span>
          )}
        </div>

        <div className="flex gap-3 pt-2">
          {uni.officialWebsiteUrl && (
            <Link
              href={uni.officialWebsiteUrl}
              target="_blank"
              className="rounded-lg bg-white/90 px-3 py-1.5 text-xs text-black transition hover:opacity-90"
            >
              الموقع الرسمي
            </Link>
          )}
          {uni.applicationLink && (
            <Link
              href={uni.applicationLink}
              target="_blank"
              className="rounded-lg border border-white/20 px-3 py-1.5 text-xs transition hover:bg-white/10"
            >
              التقديم
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
