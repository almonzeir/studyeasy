import type { University } from '@/types/university';

/**
 * Sample universities data used for testing the application locally.
 * Each university entry includes a locally-hosted image.
 */
export const universities: University[] = [
  {
    id: '1',
    name: 'جامعة ملايا (UM)',
    city: 'كوالالمبور',
    annualFees: 5000,
    availableCourses: [
      'الهندسة',
      'الطب',
      'علوم الحاسوب',
      'إدارة الأعمال',
      'الآداب والعلوم الاجتماعية',
    ],
    description:
      'تأسست جامعة ملايا عام 1905، وهي أقدم وأعرق جامعة في ماليزيا. تتميز ببرامجها البحثية المتقدمة وتصنيفها العالمي المرتفع.',
    imageUrl: 'https://picsum.photos/seed/uni1/600/300',
    livingCosts: 'USD 320-540 شهريًا',
    acceptanceCriteria: [
      'شهادة الثانوية العامة بمعدل ممتاز',
      'إجادة اللغة الإنجليزية (IELTS/TOEFL)',
      'مقابلة شخصية',
    ],
    officialWebsiteUrl: 'https://www.um.edu.my',
    applicationLink: 'https://apply.um.edu.my',
    studentHandbookUrl: 'https://fsktm.um.edu.my/student-handbook',
    ranking: {
      global: '65',
      national: 1,
      source: 'QS World University Rankings 2025',
    },
  },
  {
    id: '2',
    name: 'Universiti Sains Malaysia (USM)',
    city: 'Penang',
    annualFees: 4500,
    availableCourses: [
      'Pharmacy',
      'Chemical Engineering',
      'Fine Arts',
      'Environmental Science',
      'Communication Studies',
    ],
    description:
      'Known for its focus on scientific research and innovation, offering a wide range of science and applied disciplines.',
    imageUrl: 'https://picsum.photos/seed/uni2/600/300',
    livingCosts: 'USD 320-540 monthly',
    acceptanceCriteria: [
      'High school certificate with very good grades',
      'English proficiency',
    ],
    officialWebsiteUrl: 'https://www.usm.my',
    applicationLink: 'https://www.usm.my',
    ranking: {
      global: '137',
      national: 2,
      source: 'QS World University Rankings 2025',
    },
  },
  {
    id: '3',
    name: 'Universiti Kebangsaan Malaysia (UKM)',
    city: 'Bangi, Selangor',
    annualFees: 4800,
    availableCourses: [
      'Islamic Studies',
      'Law',
      'Social Sciences',
      'Architecture',
      'Economics',
    ],
    description:
      'Established to promote the Malay language and culture, a leading university in humanities and social sciences.',
    imageUrl: 'https://picsum.photos/seed/uni3/600/300',
    livingCosts: 'USD 320-540 monthly',
    acceptanceCriteria: [
      'High school certificate',
      'Malay language proficiency (for some programs)',
      'English proficiency',
    ],
    officialWebsiteUrl: 'https://www.ukm.my/portalukm/',
    applicationLink: 'https://www.ukm.my/portalukm/',
    ranking: {
      global: '159',
      national: 3,
      source: 'QS World University Rankings 2025',
    },
  },
  {
    id: '4',
    name: 'Universiti Putra Malaysia (UPM)',
    city: 'Serdang, Selangor',
    annualFees: 4200,
    availableCourses: [
      'Agriculture',
      'Veterinary Medicine',
      'Forestry',
      'Information Technology',
      'Nutrition and Food Science',
    ],
    description:
      'Distinguished for its strong programs in agriculture and related sciences, a major research center in this field.',
    imageUrl: 'https://picsum.photos/seed/uni4/600/300',
    livingCosts: 'USD 320-540 monthly',
    acceptanceCriteria: [
      'High school certificate',
      'Work experience (for some programs)',
    ],
    officialWebsiteUrl: 'https://www.upm.edu.my',
    applicationLink: 'https://www.upm.edu.my',
    ranking: {
      global: '158',
      national: 4,
      source: 'QS World University Rankings 2025',
    },
  },
  {
    id: '5',
    name: 'Universiti Teknologi Malaysia (UTM)',
    city: 'Johor Bahru',
    annualFees: 5200,
    availableCourses: [
      'Mechanical Engineering',
      'Electrical Engineering',
      'Advanced Computer Science',
      'Architecture and Urban Planning',
    ],
    description:
      'A leader in engineering and technology, renowned for its highly competent graduates.',
    imageUrl: 'https://picsum.photos/seed/uni5/600/300',
    livingCosts: 'USD 320-540 monthly',
    acceptanceCriteria: [
      'High school certificate with excellent grades in science subjects',
      'English proficiency (IELTS 6.0+)',
    ],
    officialWebsiteUrl: 'https://www.utm.my',
    applicationLink: 'https://admission.utm.my/apply-now/',
    studentHandbookUrl: 'https://science.utm.my/undergraduate/academic-handbook/',
    ranking: {
      global: '188',
      national: 5,
      source: 'QS World University Rankings 2025',
    },
  },
];
