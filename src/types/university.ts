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
};
