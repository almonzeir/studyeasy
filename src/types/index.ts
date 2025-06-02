
export interface University {
  id: string;
  name: string;
  city: string;
  annualFees: number;
  availableCourses: string[];
  description?: string;
  logoUrl?: string;
  imageUrl?: string; // For a general image of the university
  livingCosts?: string; // e.g., "USD 500-800 per month"
  acceptanceCriteria?: string[];
  applicationLink?: string;
  dataAiHint?: string;
}

// This type represents the raw output schema from the guidedUniversitySelection AI flow.
// It's kept separate as the AI might not provide all fields present in the main `University` type.
export interface AISuggestedUniversity {
  name: string;
  city: string;
  annualFees: number;
  availableCourses: string[];
}
