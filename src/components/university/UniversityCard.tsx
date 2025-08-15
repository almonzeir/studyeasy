'use client';

import Link from 'next/link';
import SmartImage from '../SmartImage';
import type { University } from '@/types/university';

type Props = { uni: University };

/**
 * Card component for displaying a single university's details.
 * Uses SmartImage for image loading and includes key fields for clarity.
 */
export default function UniversityCard({ uni }: Props) {
  return (
    <div className="border rounded p-4 shadow-sm bg-white flex flex-col gap-2">
      {uni.imageUrl && (
        <SmartImage
          src={uni.imageUrl}
          alt={uni.name}
          width={600}
          height={300}
          className="w-full h-auto object-cover rounded"
        />
      )}
      <h2 className="text-lg font-semibold mt-2">{uni.name}</h2>
      <p className="text-sm text-gray-700">{uni.description}</p>
      <div className="text-sm text-gray-600 mt-2">
        <p>
          <strong>المدينة:</strong> {uni.city}
        </p>
        <p>
          <strong>الرسوم السنوية:</strong> {uni.annualFees}
        </p>
        {uni.livingCosts && (
          <p>
            <strong>تكاليف المعيشة:</strong> {uni.livingCosts}
          </p>
        )}
        {uni.ranking?.global && (
          <p>
            <strong>تصنيف عالمي:</strong> {uni.ranking.global}
          </p>
        )}
      </div>
      <div className="mt-auto flex flex-wrap gap-3">
        {uni.officialWebsiteUrl && (
          <Link
            href={uni.officialWebsiteUrl}
            className="text-blue-500 hover:underline"
          >
            الموقع الرسمي
          </Link>
        )}
        {uni.applicationLink && (
          <Link
            href={uni.applicationLink}
            className="text-blue-500 hover:underline"
          >
            التقديم
          </Link>
        )}
      </div>
    </div>
  );
}
