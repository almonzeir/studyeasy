import type { University } from '@/types/university';

export const universities: University[] = [
  {
    id: '1',
    name: 'جامعة ملايا (UM)',
    city: 'كوالالمبور',
    annualFees: 5000,
    availableCourses: ['الهندسة', 'الطب', 'علوم الحاسوب', 'إدارة الأعمال', 'الآداب والعلوم الاجتماعية'],
    description:
      'تأسست جامعة ملايا عام 1905، وهي أقدم وأعرق جامعة في ماليزيا. تتميز ببرامجها البحثية المتقدمة وتصنيفها العالمي المرتفع.',
    logoUrl: 'https://placehold.co/100x100.png',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/6/63/University_of_Malaya_Main_Building.jpg',
    ranking: { global: '65', national: 1, source: 'QS World University Rankings 2025' },
    officialWebsiteUrl: 'https://www.um.edu.my',
    applicationLink: 'https://apply.um.edu.my',
    studentHandbookUrl: 'https://fsktm.um.edu.my/student-handbook',
  },
  {
    id: '2',
    name: 'جامعة العلوم الماليزية (USM)',
    city: 'بينانج',
    annualFees: 4500,
    availableCourses: ['الصيدلة', 'الهندسة الكيميائية', 'الفنون الجميلة', 'علوم البيئة', 'علوم الاتصال'],
    description:
      'تُعرف جامعة العلوم الماليزية بتركيزها على البحث العلمي والابتكار، وتقدم مجموعة واسعة من التخصصات العلمية والتطبيقية.',
    logoUrl: 'https://placehold.co/100x100.png',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/7/7f/Main_gate_at_the_Universiti_Sains_Malaysia.jpg',
    ranking: { global: '137', national: 2, source: 'QS World University Rankings 2025' },
    officialWebsiteUrl: 'https://www.usm.my',
  },
  {
    id: '3',
    name: 'الجامعة الوطنية الماليزية (UKM)',
    city: 'بانغي، سيلانجور',
    annualFees: 4800,
    availableCourses: ['الدراسات الإسلامية', 'القانون', 'العلوم الاجتماعية', 'الهندسة المعمارية', 'الاقتصاد'],
    description:
      'تأسست الجامعة الوطنية الماليزية بهدف تعزيز اللغة والثقافة الماليزية، وتعتبر من الجامعات الرائدة في مجالات العلوم الإنسانية والاجتماعية.',
    logoUrl: 'https://placehold.co/100x100.png',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/2/20/Universiti_Kebangsaan_Malaysia_entrance.jpg',
    ranking: { global: '159', national: 3, source: 'QS World University Rankings 2025' },
    officialWebsiteUrl: 'https://www.ukm.my/portalukm/',
  },
  {
    id: '29',
    name: 'SEGi University & Colleges',
    city: 'Kota Damansara (Main), Subang Jaya, KL, Penang, Sarawak',
    annualFees: 5800,
    availableCourses: [
      'Business & Accounting',
      'IT & Computing',
      'Health Sciences',
      'Engineering & Built Environment',
      'Creative Arts & Design',
      'Education',
    ],
    description:
      'مزود رئيسي للتعليم العالي الخاص في ماليزيا مع فروع متعددة وبرامج متنوعة.',
    logoUrl: 'https://placehold.co/100x100.png',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/a/a9/Segi_University_Malaysia.jpg',
    officialWebsiteUrl: 'https://www.segi.edu.my',
  },
  {
    id: '36',
    name: 'Universiti Kuala Lumpur (UniKL)',
    city: 'Kuala Lumpur',
    annualFees: 6000,
    availableCourses: ['Engineering Technology', 'Business', 'IT', 'Design'],
    description:
      'جامعة تقنية متعددة الحُرُم تركز على التعليم والتدريب التقني والمهني العالي (HTVET).',
    logoUrl: 'https://placehold.co/100x100.png',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/8/81/Help_University_Malaysia.jpg',
    officialWebsiteUrl: 'https://www.unikl.edu.my',
  },
  {
    id: '20',
    name: 'Universiti Malaysia Kelantan (UMK)',
    city: 'Kelantan',
    annualFees: 3800,
    availableCourses: [
      'Entrepreneurship & Business',
      'Agro-Industry & Natural Resources',
      'Creative Technology & Heritage',
      'Veterinary Medicine',
    ],
    description:
      'جامعة حكومية تركز على ريادة الأعمال والصناعات الزراعية والتقنية الإبداعية.',
    logoUrl: 'https://placehold.co/100x100.png',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Landmark_UMK.jpg',
    officialWebsiteUrl: 'https://www.umk.edu.my',
  },
  {
    id: '14',
    name: 'Universiti Malaysia Pahang Al-Sultan Abdullah (UMPSA)',
    city: 'كوانتان، باهانج',
    annualFees: 4300,
    availableCourses: ['الهندسة الميكانيكية', 'EEE', 'هندسة البرمجيات', 'السلامة والصحة المهنية'],
    description:
      'جامعة تركز على التخصصات الهندسية والتكنولوجية لإعداد مهندسين مبتكرين.',
    logoUrl: 'https://placehold.co/100x100.png',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/f/fd/UMP_Gambang_Main_Entrance.jpg',
    officialWebsiteUrl: 'https://www.ump.edu.my',
  },
];
