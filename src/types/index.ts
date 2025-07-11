
import {z} from 'zod';

// Base schema for AI-suggested university (minimal info from guided selection)
export const AISuggestedUniversitySchema = z.object({
  name: z.string().describe('The name of the university.'),
  city: z.string().describe('The city where the university is located.'),
  annualFees: z.number().describe('The annual fees for international students in USD.'),
  availableCourses: z.array(z.string()).describe('A list of available courses or programs.'),
});
export type AISuggestedUniversity = z.infer<typeof AISuggestedUniversitySchema>;

// Schema for university ranking details
export const UniversityRankingSchema = z.object({
  national: z.union([z.number(), z.string()]).optional().describe("National ranking of the university."),
  global: z.union([z.number(), z.string()]).optional().describe("Global ranking of the university."),
  source: z.string().optional().describe("Source of the ranking information (e.g., QS World University Rankings, THE)."),
});
export type UniversityRanking = z.infer<typeof UniversityRankingSchema>;


// Schema for detailed university information, potentially fetched by AI
// This is what the getUniversityDetailsByName flow will output.
export const UniversityDetailsOutputSchema = z.object({
  name: z.string().describe("The official name of the university."),
  city: z.string().optional().describe("The city where the main campus is located."),
  annualFees: z.number().optional().describe("Estimated annual tuition fees in USD for international students."),
  availableCourses: z.array(z.string()).optional().describe("A list of 3-5 popular or notable courses offered."),
  description: z.string().optional().describe("A brief description of the university (2-3 sentences)."),
  logoUrl: z.string().optional().describe("A placeholder URL for a logo. If unknown, omit."),
  imageUrl: z.string().optional().describe("A placeholder URL for a campus image. If unknown, omit."),
  dataAiHint: z.string().optional().describe("One or two keywords for a campus image. If unknown, omit."),
  livingCosts: z.string().optional().describe("Estimated monthly living costs for a student in USD. If unknown, omit."),
  acceptanceCriteria: z.array(z.string()).optional().describe("Key acceptance criteria. If unknown, omit."),
  officialWebsiteUrl: z.string().optional().describe("The official website URL. If unknown, omit."),
  applicationLink: z.string().optional().describe("The direct application portal URL. If unknown, omit."),
  studentHandbookUrl: z.string().optional().describe("The URL for the university's student handbook. If unknown, omit."),
  ranking: UniversityRankingSchema.optional().describe("Ranking information for the university."),
});
export type UniversityDetailsOutput = z.infer<typeof UniversityDetailsOutputSchema>;

// Main University type used throughout the application, includes an ID.
// It can be constructed from mock data or from AI-fetched details.
export interface University extends UniversityDetailsOutput {
  id: string;
  // Ensure all fields from UniversityDetailsOutput are optional here as well, or make them mandatory if they must exist
  name: string; // name is mandatory in UniversityDetailsOutput, so it is here too
  city?: string;
  annualFees?: number;
  availableCourses?: string[];
  description?: string;
  logoUrl?: string;
  imageUrl?: string;
  dataAiHint?: string;
  livingCosts?: string;
  acceptanceCriteria?: string[];
  officialWebsiteUrl?: string;
  applicationLink?: string;
  studentHandbookUrl?: string;
  ranking?: UniversityRanking;
}
