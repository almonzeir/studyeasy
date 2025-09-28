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

  const matchedUniversity = universities.find((uni) => {
    const normalized = (value?: string) => value?.toLowerCase().trim();
    return (
      normalized(uni.name) === normalized(universityName) ||
      normalized(uni.id) === normalized(universityName)
    );
  });

  if (matchedUniversity) {
    return mapUniversityToDetails(matchedUniversity);
  }

  return buildPlaceholderDetails(universityName);
}
