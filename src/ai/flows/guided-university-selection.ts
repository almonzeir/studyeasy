
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
  specialization: z.string().optional().describe("The student's desired field of study. If omitted, the AI should consider all specializations."),
  budget: z.number().optional().describe("The student's annual budget for university fees and living costs in USD. If omitted, the AI should consider all budgets or not filter by it."),
  city: z.string().optional().describe("The student's preferred city in Malaysia. If omitted, the AI should consider all cities in Malaysia."),
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
  prompt: `Based on the student's preferences, suggest a list of universities in Malaysia.

{{#if specialization}}Student Specialization: {{{specialization}}}{{else}}The student is open to any specialization.{{/if}}
{{#if budget}}Student Budget (USD): {{{budget}}}{{else}}The student has not specified a budget limit, or is open to any budget.{{/if}}
{{#if city}}Preferred City: {{{city}}}{{else}}The student is open to any city in Malaysia.{{/if}}

Consider universities that match any provided criteria. If a criterion is not provided, do not filter by it.
For example, if only a city is provided, list universities in that city across various specializations and budgets.
If only a specialization is provided, list universities offering that specialization in any city and budget.
If only a budget is provided, list universities within that budget for any specialization and city.
If no criteria are provided, list a diverse range of 3-5 popular universities in Malaysia.

List at least 1 university and at most 5 universities.
Ensure the output is in JSON format.
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
    return output || []; // Ensure an empty array is returned if output is null/undefined
  }
);

    