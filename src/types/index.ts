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
}

export interface GuidedUniversityOutput extends University {
  // No additional fields needed if University already has all required fields
}
