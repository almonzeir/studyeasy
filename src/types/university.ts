export type University = {
  id: string;
  name: string;
  city: string;
  annualFees: number | string;
  availableCourses: string[];
  description: string;
  logoUrl?: string;
  imageUrl: string;
  dataAiHint?: string;
  slug?: string;
  englishName?: string;
  aliases?: string[];
  livingCosts?: string;
  acceptanceCriteria?: string[];
  officialWebsiteUrl?: string;
  applicationLink?: string;
  studentHandbookUrl?: string;
  ranking?: {
    global?: string | number;
    national?: string | number;
    source?: string;
  };
  translations?: {
    ar?: {
      name?: string;
      city?: string;
      description?: string;
      livingCosts?: string;
      annualFees?: string;
    };
  };
};
