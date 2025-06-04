
// src/data/scholarships.ts

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
    id: 'mis',
    name: 'منحة الحكومة الماليزية الدولية (MIS)',
    flag: '🇲🇾',
    level: 'ماجستير ودكتوراه',
    benefits: [
      'تغطية كاملة للرسوم الدراسية',
      'راتب شهري بقيمة 1,500 رينجت ماليزي',
      'تذاكر طيران ذهابًا وإيابًا',
      'تأمين صحي',
    ],
    admissionConditions: [
      'العمر الأقصى: 40 سنة للماجستير، 45 سنة للدكتوراه',
      'إثبات كفاءة اللغة الإنجليزية (IELTS أو TOEFL)',
    ],
    applicationLink: 'https://mtcp.kln.gov.my/scholarship',
    secondaryLinks: [
      { name: 'Opportunity Desk', url: 'https://opportunitydesk.org/2024/06/01/malaysia-international-scholarship-mis-2024-2025/?utm_source=chatgpt.com' },
      { name: 'Fursaty Education (MIS page)', url: 'https://fursatyeducation.com/scholarships/malaysia-international-scholarship-mis/?utm_source=chatgpt.com' }, // Corrected link, assuming this is the intended page. The original reused Al-Bukhari link.
      { name: 'Opportunities for Youth', url: 'https://opportunitiesforyouth.org/2024/06/29/malaysia-international-scholarship-mis-2024-25-for-masters-and-doctoral-programs-apply-now/?utm_source=chatgpt.com' },
    ],
  },
  {
    id: 'mtcp',
    name: 'منحة برنامج التعاون الفني الماليزي (MTCP)',
    flag: '🌍',
    level: 'ماجستير',
    benefits: [
      'تغطية الرسوم الدراسية',
      'راتب شهري بقيمة 3,500 رينجت ماليزي',
      'تذاكر طيران ذهابًا وإيابًا',
    ],
    targetAudience: 'طلاب من الدول النامية',
    applicationLink: 'https://mtcp.kln.gov.my/scholarship', // This is the same link as MIS, official site structure.
    secondaryLinks: [
      { name: 'Opportunities Pedia', url: 'https://opportunitiespedia.com/malaysian-government-scholarship/?utm_source=chatgpt.com' },
      { name: 'نافذة الطلاب', url: 'https://swfors.com/malaysia-government-scholarship-2024/?utm_source=chatgpt.com' },
      { name: 'Fursaty Education (MTCP specific if available, else generic)', url: 'https://fursatyeducation.com/scholarships/malaysian-technical-cooperation-programme-mtcp-scholarship/?utm_source=chatgpt.com' }, // Generic Fursaty link for MTCP
    ],
  },
  {
    id: 'albukhari',
    name: 'منحة جامعة البخاري الدولية',
    flag: '🕌',
    level: 'بكالوريوس',
    benefits: [
      'إعفاء كامل من الرسوم الدراسية',
      'راتب شهري 450 رينجت ماليزي',
      'تأمين طبي',
      'إقامة جامعية',
      'دورة لغة إنجليزية مجانية',
      'تغطية رسوم اختبار IELTS',
    ],
    applicationLink: 'https://fursatyeducation.com/scholarships/al-bukhari-university-fully-funded-scholarship-2024-in-malaysia',
    secondaryLinks: [
      { name: 'فرصة', url: 'https://www.for9a.com/learn/%D8%A3%D9%87%D9%85-10-%D9%85%D9%86%D8%AD-%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%D8%A9-%D9%81%D9%8A-%D9%85%D8%A7%D9%84%D9%8A%D8%B2%D9%8A%D8%A7-%D9%84%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D8%A9-%D9%85%D8%AC%D8%A7%D9%86%D8%A7?utm_source=chatgpt.com' },
    ],
  },
  {
    id: 'perlis',
    name: 'منحة جامعة بيرليس الإسلامية',
    flag: '🏛️',
    level: 'بكالوريوس',
    benefits: [
      'تغطية كاملة للرسوم الدراسية',
      'سكن مجاني',
      'راتب شهري 250 رينجت ماليزي',
    ],
    applicationLink: 'https://masertak.com/en/%D9%85%D9%86%D8%AD%D8%A9-%D8%AC%D8%A7%D9%85%D8%B9%D8%A9-%D8%A8%D9%8A%D8%B1%D9%84%D9%8A%D8%B3-%D8%A7%D9%84%D8%A5%D8%B3%D9%84%D8%A7%D9%85%D9%8A%D8%A9-%D9%81%D9%8A-%D9%85%D8%A7%D9%84%D9%8A%D8%B2%D9%8A%D8%A7/',
    secondaryLinks: [
      { name: 'Fursaty Education (Perlis Islamic Uni specific if available)', url: 'https://fursatyeducation.com/scholarships/' }, // Generic link, specific page not found
      { name: 'Masertak', url: 'https://masertak.com/en/%D9%85%D9%86%D8%AD%D8%A9-%D8%AC%D8%A7%D9%85%D8%B9%D8%A9-%D8%A8%D9%8A%D8%B1%D9%84%D9%8A%D8%B3-%D8%A7%D9%84%D8%A5%D8%B3%D9%84%D8%A7%D9%85%D9%8A%D8%A9-%D9%81%D9%8A-%D9%85%D8%A7%D9%84%D9%8A%D8%B2%D9%8A%D8%A7/' }, // This is the main application link
    ],
  },
  {
    id: 'tar',
    name: 'منحة مؤسسة تونكو عبد الرحمن',
    flag: '🏅',
    level: 'بكالوريوس للطلاب الماليزيين',
    benefits: [
      'دعم مالي للطلاب المتفوقين أكاديميًا',
    ],
    applicationLink: 'http://yayasantar.org.my/index/Biasiswa_BTAR.html',
  },
  {
    id: 'lecordonbleu',
    name: 'منحة Le Cordon Bleu ماليزيا',
    flag: '🧑‍🍳',
    level: 'دبلوم في فنون الطهي أو المعجنات',
    benefits: [
      'خصم يصل إلى 5,000 رينجت ماليزي على رسوم الدورة',
    ],
    applicationLink: 'https://gostudyin.com/malaysia/study-in-canada/scholarships/le-cordon-bleu/le-cordon-bleu-malaysia-scholarship-2024/',
  },
  {
    id: 'nottingham',
    name: 'منحة جامعة نوتنغهام ماليزيا',
    flag: '🏛️',
    level: 'بكالوريوس',
    benefits: [
      'خصم 25% على الرسوم الدراسية للطلاب الدوليين المتفوقين',
    ],
    applicationLink: 'https://www.nottingham.edu.my/Study/Fees-and-scholarships/scholarships/index.aspx', // More specific link
  },
  {
    id: 'monash',
    name: 'منحة جامعة موناش ماليزيا',
    flag: '🏛️',
    level: 'بكالوريوس',
    benefits: [
      'منح دراسية تصل إلى 100% للطلاب المتفوقين',
    ],
    applicationLink: 'https://www.monash.edu.my/student-life/financial-assistance/scholarships', // More specific link
    secondaryLinks: [
      { name: 'دراسة (منح ماليزيا)', url: 'https://dr3sah.com/tag/%D9%85%D9%86%D8%AD-%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%D8%A9-%D9%81%D9%8A-%D9%85%D8%A7%D9%84%D9%8A%D8%B2%D9%8A%D8%A7-%D8%A8%D9%83%D8%A7%D9%84%D9%88%D8%B1%D9%8A%D9%88%D8%B3/?utm_source=chatgpt.com' },
    ],
  },
  {
    id: 'apu',
    name: 'منحة جامعة آسيا والمحيط الهادئ (APU)',
    flag: '🏛️',
    level: 'بكالوريوس',
    benefits: [
      'منح دراسية جزئية للطلاب الدوليين',
    ],
    applicationLink: 'https://www.apu.edu.my/study-apu/financial-assistance-scholarships/apu-scholarships-merit-awards', // More specific
    secondaryLinks: [
      { name: 'The Global Scholarship (MIS page, not APU)', url: 'https://www.theglobalscholarship.org/scholarships/malaysia-government-international-scholarship-2024?source=main&utm_source=chatgpt.com' },
      { name: 'Easy Uni Me', url: 'https://www.easyunime.com/advice/%D8%A3%D9%87%D9%85-%D8%AD%D9%82%D8%A7%D8%A6%D9%82-%D9%85%D9%86%D8%AD-%D9%85%D8%A7%D9%84%D9%8A%D8%B2%D9%8A%D8%A7-2025-3117/?utm_source=chatgpt.com' },
    ],
  },
  {
    id: 'mmu',
    name: 'منحة جامعة MMU',
    flag: '🏛️',
    level: 'بكالوريوس',
    benefits: [
      'منح دراسية جزئية للطلاب الدوليين',
    ],
    applicationLink: 'https://www.mmu.edu.my/financial-aid-scholarships/', // More specific
    secondaryLinks: [
      { name: 'دراسة (منح ماليزيا)', url: 'https://dr3sah.com/tag/%D9%85%D9%86%D8%AD-%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%D8%A9-%D9%81%D9%8A-%D9%85%D8%A7%D9%84%D9%8A%D8%B2%D9%8A%D8%A7-%D8%A8%D9%83%D8%A7%D9%84%D9%88%D8%B1%D9%8A%D9%88%D8%B3/?utm_source=chatgpt.com' },
    ],
  },
];
// Notes extracted from the original text. These are general notes.
export const generalScholarshipNotes: string[] = [
  "تختلف مواعيد التقديم ومتطلبات القبول لكل منحة، لذا يُنصح بزيارة الروابط الرسمية للحصول على أحدث المعلومات.",
  "بعض المنح قد تتطلب تقديم نتائج اختبارات اللغة الإنجليزية مثل IELTS أو TOEFL.",
  "يُنصح بالتواصل مع مكاتب القبول في الجامعات للحصول على إرشادات مفصلة حول عملية التقديم."
];
