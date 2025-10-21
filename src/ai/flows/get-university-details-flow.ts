"use server";
/**
 * @fileOverview Provides a resilient, build-friendly implementation that enriches
 * university details without depending on heavy optional Genkit tracing modules
 * that regularly break Vercel builds.
 */

import { universities } from '@/data/universities';
import type { University } from '@/types/university';
import type { UniversityDetailsOutput } from '@/types';
import { UniversityDetailsOutputSchema } from '@/types';
import { z } from 'zod';

const GetUniversityDetailsByNameInputSchema = z.object({
  universityName: z.string().trim().min(1, 'University name is required.'),
});

export type GetUniversityDetailsByNameInput = z.infer<typeof GetUniversityDetailsByNameInputSchema>;

function mapUniversityToDetails(university: University): UniversityDetailsOutput {
  return UniversityDetailsOutputSchema.parse({
    name: university.name,
    city: university.city,
    annualFees: typeof university.annualFees === 'number' ? university.annualFees : undefined,
    availableCourses: university.availableCourses,
    description: university.description,
    logoUrl: university.logoUrl,
    imageUrl: university.imageUrl,
    dataAiHint: university.dataAiHint,
    livingCosts: university.livingCosts,
    acceptanceCriteria: university.acceptanceCriteria,
    officialWebsiteUrl: university.officialWebsiteUrl,
    applicationLink: university.applicationLink,
    studentHandbookUrl: university.studentHandbookUrl,
    ranking: university.ranking,
  });
}

function normalizeForMatching(value?: string) {
  if (!value) {
    return undefined;
  }

  return value
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/&/g, 'and')
    .replace(/[’'`]/g, '')
    .replace(/[^a-z0-9\u0600-\u06FF]+/gu, ' ')
    .trim();
}

function buildUniversityNameVariants(university: University): string[] {
  const variants = new Set<string>();
  const push = (value?: string | string[]) => {
    if (!value) {
      return;
    }

    if (Array.isArray(value)) {
      value.forEach((entry) => push(entry));
      return;
    }

    const normalized = normalizeForMatching(value);
    if (normalized) {
      variants.add(normalized);
    }
  };

  push(university.id);
  push(university.name);
  push(university.englishName);
  push(university.slug);
  push(university.aliases);

  const parentheticalMatches = university.name.match(/\(([^)]+)\)/g);
  if (parentheticalMatches) {
    parentheticalMatches.forEach((match) => push(match.slice(1, -1)));
  }

  push(university.name.replace(/\([^)]*\)/g, ' '));

  return Array.from(variants);
}

function buildPlaceholderDetails(universityName: string): UniversityDetailsOutput {
  const formattedName = universityName.trim();

  return UniversityDetailsOutputSchema.parse({
    name: formattedName,
    description:
      'المعلومات التفصيلية عن هذه الجامعة غير متوفرة حاليًا، لكننا نعمل على تحديث الدليل باستمرار لضمان تجربة موثوقة للطلاب.',
    availableCourses: [],
    logoUrl: 'https://placehold.co/100x100?text=UNI',
    imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80',
    dataAiHint: 'university campus skyline',
    acceptanceCriteria: [
      'التواصل مع مكتب القبول للحصول على متطلبات التقديم المحدثة.',
      'إعداد المستندات الأكاديمية والشخصية الأساسية.',
    ],
    livingCosts: 'USD 320 - 540 شهريًا (تقديري)',
    officialWebsiteUrl: undefined,
    applicationLink: undefined,
    studentHandbookUrl: undefined,
  });
}

export async function getUniversityDetailsByName(
  input: GetUniversityDetailsByNameInput
): Promise<UniversityDetailsOutput> {
  const { universityName } = GetUniversityDetailsByNameInputSchema.parse(input);

  const normalizedQuery = normalizeForMatching(universityName);

  const matchedUniversity = universities.find((uni) => {
    const variants = buildUniversityNameVariants(uni);

    if (!normalizedQuery) {
      return false;
    }

    if (variants.some((value) => value === normalizedQuery)) {
      return true;
    }

    if (normalizedQuery.length < 3) {
      return false;
    }

    return variants.some(
      (value) =>
        value.length >= 3 && (value.includes(normalizedQuery) || normalizedQuery.includes(value))
    );
  });

  if (matchedUniversity) {
    return mapUniversityToDetails(matchedUniversity);
  }

  return buildPlaceholderDetails(universityName);
}
