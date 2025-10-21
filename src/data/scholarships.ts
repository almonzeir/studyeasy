export interface ScholarshipLink {
  name: string;
  url: string;
}

export interface Scholarship {
  id: string;
  name: string;
  flag?: string;
  level: string;
  benefits: string[];
  targetAudience?: string;
  admissionConditions?: string[];
  applicationLink: string;
  secondaryLinks?: ScholarshipLink[];
  notes?: string[];
}

export const scholarshipsData: Scholarship[] = [
  {
    id: "mis",
    name: "Malaysia International Scholarship (MIS)",
    flag: "MY",
    level: "Masters and PhD",
    benefits: [
      "Full tuition coverage at selected Malaysian public universities",
      "Monthly living allowance of MYR 1,500",
      "Medical insurance and visa support during the study period",
    ],
    admissionConditions: [
      "First-class honours degree or equivalent CGPA of 3.5",
      "IELTS 6.5 or TOEFL 92 for English proficiency",
      "Two academic recommendation letters and a study plan",
    ],
    applicationLink: "https://educationmalaysia.gov.my/malaysia-international-scholarship",
    secondaryLinks: [
      { name: "Official MIS guidelines", url: "https://educationmalaysia.gov.my/guidelines" },
      { name: "FAQ", url: "https://educationmalaysia.gov.my/faq" },
    ],
  },
  {
    id: "mtcp",
    name: "Malaysian Technical Cooperation Programme (MTCP)",
    flag: "MY",
    level: "Postgraduate (Coursework or Research)",
    benefits: [
      "Tuition fees for up to 36 months of study",
      "Monthly stipend of MYR 3,500",
      "Economy-class return flight ticket to Malaysia",
    ],
    targetAudience: "Citizens of MTCP partner countries currently working in public service or academia",
    admissionConditions: [
      "Minimum CGPA 3.0 or equivalent in undergraduate studies",
      "English proficiency via IELTS 6.0 or TOEFL 550 (paper)",
      "Employment confirmation letter and a statement of purpose",
    ],
    applicationLink: "https://mtcp.kln.gov.my/scholarship",
    secondaryLinks: [
      { name: "MTCP overview", url: "https://mtcp.kln.gov.my" },
      { name: "Eligible universities list", url: "https://mtcp.kln.gov.my/institutions" },
    ],
  },
  {
    id: "albukhari",
    name: "Albukhary International University Scholarship",
    flag: "MY",
    level: "Undergraduate",
    benefits: [
      "Full tuition fee waiver for four-year programmes",
      "Monthly living allowance and on-campus accommodation",
      "Leadership development camps and community engagement projects",
    ],
    targetAudience: "High-potential students from low-income families across Asia, Africa, and the Middle East",
    admissionConditions: [
      "Evidence of financial need (annual family income below USD 5,000)",
      "Minimum of five distinctions in secondary school examinations",
      "Participation in community service or leadership activities",
    ],
    applicationLink: "https://www.aiu.edu.my/admissions/scholarship",
    secondaryLinks: [
      { name: "Scholarship brochure", url: "https://www.aiu.edu.my/media/brochure.pdf" },
    ],
    notes: [
      "Applicants attend an online interview to discuss motivation and community contribution.",
      "Successful candidates must maintain CGPA 3.0 to retain the award.",
    ],
  },
  {
    id: "taylors-excellence",
    name: "Taylor's University Excellence Award",
    flag: "MY",
    level: "Pre-university and Undergraduate",
    benefits: [
      "Tuition fee reduction between 20% and 100% based on academic merit",
      "Access to industry mentoring and internship placements",
    ],
    targetAudience: "International students applying to foundation, diploma, or degree programmes at Taylor's",
    admissionConditions: [
      "Strong academic track record (minimum 5 As at IGCSE or equivalent)",
      "Personal statement outlining career goals and leadership experience",
      "Co-curricular achievements such as competitions or volunteer work",
    ],
    applicationLink: "https://university.taylors.edu.my/financial-aid/scholarships/excellence-award",
    secondaryLinks: [
      { name: "Scholarship calculator", url: "https://college2university.com/taylors-scholarship-calculator" },
    ],
  },
];

export const generalScholarshipNotes: string[] = [
  "Deadlines typically fall between March and June each year. Start preparing documents at least three months in advance.",
  "Have scanned copies of passports, transcripts, recommendation letters, and language certificates ready in PDF format.",
  "Most scholarships require you to accept an offer from a Malaysian university before funds are released.",
  "Keep an eye on your email inbox and spam folder for interview invites or additional document requests.",
];
