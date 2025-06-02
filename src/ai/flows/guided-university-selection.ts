// This file is machine-generated - edit at your own risk.

'use server';

/**
 * @fileOverview Implements a guided university selection flow based on user preferences.
 *
 * - guidedUniversitySelection - A function that takes user's specialization, budget, and preferred city to suggest matching universities.
 * - GuidedUniversitySelectionInput - The input type for the guidedUniversitySelection function.
 * - GuidedUniversitySelectionOutput - The return type for the guidedUniversitySelection function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GuidedUniversitySelectionInputSchema = z.object({
  specialization: z.string().describe('The student\'s desired field of study.'),
  budget: z.number().describe('The student\'s annual budget for university fees and living costs in USD.'),
  city: z.string().describe('The student\'s preferred city in Malaysia.'),
});
export type GuidedUniversitySelectionInput = z.infer<typeof GuidedUniversitySelectionInputSchema>;

const UniversitySchema = z.object({
  name: z.string().describe('The name of the university.'),
  city: z.string().describe('The city where the university is located.'),
  annualFees: z.number().describe('The annual fees for international students in USD.'),
  availableCourses: z.array(z.string()).describe('A list of available courses or programs.'),
});

const GuidedUniversitySelectionOutputSchema = z.array(UniversitySchema).describe('A list of universities that match the student\'s criteria.');
export type GuidedUniversitySelectionOutput = z.infer<typeof GuidedUniversitySelectionOutputSchema>;

export async function guidedUniversitySelection(input: GuidedUniversitySelectionInput): Promise<GuidedUniversitySelectionOutput> {
  return guidedUniversitySelectionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'guidedUniversitySelectionPrompt',
  input: {schema: GuidedUniversitySelectionInputSchema},
  output: {schema: GuidedUniversitySelectionOutputSchema},
  prompt: `Based on the student's specialization, budget, and preferred city, suggest a list of universities in Malaysia that match their criteria.

Student Specialization: {{{specialization}}}
Student Budget (USD): {{{budget}}}
Preferred City: {{{city}}}

Universities should be in JSON format.
`,
});

const guidedUniversitySelectionFlow = ai.defineFlow(
  {
    name: 'guidedUniversitySelectionFlow',
    inputSchema: GuidedUniversitySelectionInputSchema,
    outputSchema: GuidedUniversitySelectionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
