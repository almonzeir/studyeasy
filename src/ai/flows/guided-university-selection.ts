"use server";

/**
 * @fileOverview Implements a guided university selection flow without relying on
 * remote AI services so deployments remain stable even in constrained
 * environments.
 */

import { universities } from '@/data/universities';
import type { AISuggestedUniversity } from '@/types';
import { AISuggestedUniversitySchema } from '@/types';
import type { University } from '@/types/university';
import { z } from 'zod';

const GuidedUniversitySelectionInputSchema = z.object({
  specialization: z
    .string()
    .optional()
    .describe("The student's desired field of study. If omitted, include all specializations."),
  budget: z
    .number()
    .optional()
    .describe("Maximum annual tuition budget in USD. If omitted, do not filter by fees."),
  city: z
    .string()
    .optional()
    .describe("Preferred Malaysian city. If omitted, include all cities."),
});

export type GuidedUniversitySelectionInput = z.infer<typeof GuidedUniversitySelectionInputSchema>;

const GuidedUniversitySelectionOutputSchema = z
  .array(AISuggestedUniversitySchema)
  .describe('A curated list of universities that match the provided criteria.');

export type GuidedUniversitySelectionOutput = z.infer<typeof GuidedUniversitySelectionOutputSchema>;

function deterministicFeeSeed(value: string | undefined) {
  if (!value) return 3800;
  const hash = Array.from(value).reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return 3200 + (hash % 2500);
}

function matchesSpecialization(university: University, specialization?: string) {
  if (!specialization) return true;
  const normalized = specialization.toLowerCase();
  return (
    university.availableCourses?.some((course) => course.toLowerCase().includes(normalized)) ?? false
  );
}

function matchesBudget(university: University, budget?: number) {
  if (!budget) return true;
  if (typeof university.annualFees !== 'number') return false;
  return university.annualFees <= budget;
}

function matchesCity(university: University, city?: string) {
  if (!city) return true;
  return university.city?.toLowerCase() === city.toLowerCase();
}

function scoreUniversity(university: University, input: GuidedUniversitySelectionInput): number {
  let score = 0;

  if (input.specialization && matchesSpecialization(university, input.specialization)) {
    score += 3;
  }

  if (input.city && matchesCity(university, input.city)) {
    score += 2;
  }

  if (input.budget && matchesBudget(university, input.budget)) {
    score += 1;
  }

  // Prefer universities with richer metadata to keep the UI informative.
  score += Math.min(university.availableCourses?.length ?? 0, 5);

  return score;
}

function toSuggestion(university: University): AISuggestedUniversity {
  return AISuggestedUniversitySchema.parse({
    name: university.name,
    city: university.city ?? 'غير محدد',
    annualFees:
      typeof university.annualFees === 'number'
        ? university.annualFees
        : deterministicFeeSeed(university.id ?? university.name),
    availableCourses: university.availableCourses?.slice(0, 5) ?? [],
  });
}

export async function guidedUniversitySelection(
  input: GuidedUniversitySelectionInput
): Promise<GuidedUniversitySelectionOutput> {
  const validatedInput = GuidedUniversitySelectionInputSchema.parse(input);

  const filtered = universities
    .filter((university) =>
      matchesSpecialization(university, validatedInput.specialization) &&
      matchesBudget(university, validatedInput.budget) &&
      matchesCity(university, validatedInput.city)
    )
    .sort(
      (a, b) => scoreUniversity(b, validatedInput) - scoreUniversity(a, validatedInput)
    )
    .slice(0, 5)
    .map(toSuggestion);

  if (filtered.length > 0) {
    return GuidedUniversitySelectionOutputSchema.parse(filtered);
  }

  // Provide a diverse default sample when no filters match.
  const fallback = universities
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name))
    .slice(0, 5)
    .map(toSuggestion);

  return GuidedUniversitySelectionOutputSchema.parse(fallback);
}
