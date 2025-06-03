
'use server';
/**
 * @fileOverview Fetches detailed information for a specific university by its name.
 *
 * - getUniversityDetailsByName - A function that takes a university name and returns its details.
 * - GetUniversityDetailsByNameInput - The input type for the getUniversityDetailsByName function.
 * - UniversityDetailsOutput - The return type for the getUniversityDetailsByName function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import type { UniversityDetailsOutput } from '@/types'; // Ensure this type is defined or adjust path
import { UniversityDetailsOutputSchema } from '@/types';


const GetUniversityDetailsByNameInputSchema = z.object({
  universityName: z.string().describe('The official name of the university to fetch details for.'),
});
export type GetUniversityDetailsByNameInput = z.infer<typeof GetUniversityDetailsByNameInputSchema>;


export async function getUniversityDetailsByName(input: GetUniversityDetailsByNameInput): Promise<UniversityDetailsOutput> {
  return getUniversityDetailsByNameFlow(input);
}

const prompt = ai.definePrompt({
  name: 'getUniversityDetailsByNamePrompt',
  input: {schema: GetUniversityDetailsByNameInputSchema},
  output: {schema: UniversityDetailsOutputSchema},
  prompt: `You are an expert academic advisor. Given the university name: {{{universityName}}}, provide detailed information about it.

Please include the following details if available:
- Official name (if different or more complete than input)
- City where the main campus is located
- Estimated annual tuition fees in USD for international students (provide a number)
- A list of 3-5 popular or notable courses offered
- A brief description of the university (2-3 sentences)
- A placeholder URL for a logo, e.g., https://placehold.co/100x100.png. If unknown, omit this field.
- A placeholder URL for a campus image, e.g., https://placehold.co/600x400.png. If unknown, omit this field.
- One or two keywords for a campus image if imageUrl is provided, e.g., 'university campus'. If unknown, omit.
- Estimated monthly living costs for a student in USD, e.g., 'USD 500-800'. If unknown, omit.
- A few key acceptance criteria or general requirements (as an array of strings). If unknown, omit.
- The official website URL. If unknown, omit.
- The direct application portal URL. If unknown, omit, or use the official website URL if it's generally the same.
- The URL for the student handbook, if known. Omit if not found.

If specific information (like fees or URLs) is not found, please omit those fields rather than guessing excessively.
Ensure the output is in JSON format matching the provided schema.
The name field in the output should be the most accurate official name you can find for the university.
`,
});

const getUniversityDetailsByNameFlow = ai.defineFlow(
  {
    name: 'getUniversityDetailsByNameFlow',
    inputSchema: GetUniversityDetailsByNameInputSchema,
    outputSchema: UniversityDetailsOutputSchema,
  },
  async (input: GetUniversityDetailsByNameInput): Promise<UniversityDetailsOutput> => {
    const {output} = await prompt(input);
    
    if (!output) {
      // If AI fails to return a structured response, return a minimal object based on the input name.
      // This ensures the wizard form always receives a valid UniversityDetailsOutput structure.
      return {
        name: input.universityName,
        // Other fields will be undefined, which is acceptable by UniversityDetailsOutputSchema (all optional)
        // and will be handled by the wizard form's display logic (e.g., showing placeholders or "Not available").
        description: `Details for ${input.universityName} are currently unavailable. Please check their official website.`,
        imageUrl: 'https://placehold.co/600x400.png?text=Info+Unavailable',
        dataAiHint: 'university campus',
      };
    }

    // Ensure the name field in the output uses the AI's provided name if available,
    // otherwise falls back to the input name. This prioritizes the AI's potentially more accurate/official name.
    return {
        ...output, // Spread AI's output first
        name: output.name || input.universityName, // Ensure name is present
    };
  }
);
