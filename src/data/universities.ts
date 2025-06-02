
import type { University } from '@/types';

export const mockUniversities: University[] = [
  {
    id: '1',
    name: 'جامعة ملايا',
    city: 'كوالالمبور',
    annualFees: 5000,
    availableCourses: ['الهندسة', 'الطب', 'علوم الحاسوب', 'إدارة الأعمال', 'الآداب والعلوم الاجتماعية'],
    description: 'تأسست جامعة ملايا عام 1905، وهي أقدم وأعرق جامعة في ماليزيا. تتميز ببرامجها البحثية المتقدمة وتصنيفها العالمي المرتفع.',
    logoUrl: 'https://placehold.co/100x100.png',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'university campus',
    livingCosts: 'USD 600-900 شهريًا',
    acceptanceCriteria: ['شهادة الثانوية العامة بمعدل ممتاز', 'إجادة اللغة الإنجليزية (IELTS/TOEFL)', 'مقابلة شخصية'],
    officialWebsiteUrl: 'https://www.um.edu.my', // Placeholder, actual link
    applicationLink: 'https://apply.um.edu.my', // Placeholder, actual link
  },
  {
    id: '2',
    name: 'جامعة العلوم الماليزية',
    city: 'بينانج',
    annualFees: 4500,
    availableCourses: ['الصيدلة', 'الهندسة الكيميائية', 'الفنون الجميلة', 'علوم البيئة', 'علوم الاتصال'],
    description: 'تُعرف جامعة العلوم الماليزية بتركيزها على البحث العلمي والابتكار، وتقدم مجموعة واسعة من التخصصات العلمية والتطبيقية.',
    logoUrl: 'https://placehold.co/100x100.png',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'modern university',
    livingCosts: 'USD 500-800 شهريًا',
    acceptanceCriteria: ['شهادة الثانوية العامة بمعدل جيد جدًا', 'إجادة اللغة الإنجليزية'],
    officialWebsiteUrl: 'https://www.usm.my', // Placeholder
    applicationLink: 'https://apply.usm.my', // Placeholder
  },
  {
    id: '3',
    name: 'الجامعة الوطنية الماليزية',
    city: 'بانغي، سيلانجور',
    annualFees: 4800,
    availableCourses: ['الدراسات الإسلامية', 'القانون', 'العلوم الاجتماعية', 'الهندسة المعمارية', 'الاقتصاد'],
    description: 'تأسست الجامعة الوطنية الماليزية بهدف تعزيز اللغة والثقافة الماليزية، وتعتبر من الجامعات الرائدة في مجالات العلوم الإنسانية والاجتماعية.',
    logoUrl: 'https://placehold.co/100x100.png',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'university building',
    livingCosts: 'USD 550-850 شهريًا',
    acceptanceCriteria: ['شهادة الثانوية العامة', 'إجادة اللغة الماليزية (لبعض البرامج)', 'إجادة اللغة الإنجليزية'],
    officialWebsiteUrl: 'https://www.ukm.my', // Placeholder
    applicationLink: 'https://apply.ukm.my', // Placeholder
  },
  {
    id: '4',
    name: 'جامعة بوترا ماليزيا',
    city: 'سيردانغ، سيلانجور',
    annualFees: 4200,
    availableCourses: ['الزراعة', 'الطب البيطري', 'علوم الغابات', 'تكنولوجيا المعلومات', 'التغذية وعلوم الغذاء'],
    description: 'تتميز جامعة بوترا ماليزيا ببرامجها القوية في مجالات الزراعة والعلوم المرتبطة بها، وتعد مركزًا بحثيًا هامًا في هذا المجال.',
    logoUrl: 'https://placehold.co/100x100.png',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'campus nature',
    livingCosts: 'USD 500-800 شهريًا',
    acceptanceCriteria: ['شهادة الثانوية العامة', 'خبرة عملية (لبعض البرامج)'],
    officialWebsiteUrl: 'https://www.upm.edu.my', // Placeholder
    applicationLink: 'https://apply.upm.edu.my', // Placeholder
  },
  {
    id: '5',
    name: 'جامعة التكنولوجيا الماليزية',
    city: 'جوهر بهرو',
    annualFees: 5200,
    availableCourses: ['الهندسة الميكانيكية', 'الهندسة الكهربائية', 'علوم الحاسوب المتقدمة', 'العمارة والتخطيط الحضري'],
    description: 'تعتبر جامعة التكنولوجيا الماليزية (UTM) رائدة في مجالات الهندسة والتكنولوجيا، وتشتهر بخريجيها ذوي الكفاءة العالية.',
    logoUrl: 'https://placehold.co/100x100.png',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'technology building',
    livingCosts: 'USD 550-850 شهريًا',
    acceptanceCriteria: ['شهادة الثانوية العامة بمعدل ممتاز في المواد العلمية', 'إجادة اللغة الإنجليزية (IELTS 6.0+)'],
    officialWebsiteUrl: 'https://www.utm.my', // Placeholder
    applicationLink: 'https://apply.utm.my', // Placeholder
  },
  {
    id: '6',
    name: 'الجامعة الإسلامية العالمية ماليزيا',
    city: 'جومباك، سيلانجور',
    annualFees: 3800,
    availableCourses: ['الشريعة والقانون', 'الاقتصاد والعلوم الإدارية الإسلامية', 'اللغة العربية وآدابها', 'العلوم الإنسانية'],
    description: 'تقدم الجامعة الإسلامية العالمية ماليزيا (IIUM) تعليمًا يدمج بين المعرفة الحديثة والقيم الإسلامية، وتستقطب طلابًا من جميع أنحاء العالم.',
    logoUrl: 'https://placehold.co/100x100.png',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'islamic architecture',
    livingCosts: 'USD 450-750 شهريًا',
    acceptanceCriteria: ['شهادة الثانوية العامة', 'إجادة اللغة العربية والإنجليزية', 'تزكية من جهة إسلامية معتمدة'],
    officialWebsiteUrl: 'https://www.iium.edu.my', // Placeholder
    applicationLink: 'https://apply.iium.edu.my', // Placeholder
  },
  {
    id: '7',
    name: 'جامعة تايلورز',
    city: 'سوبانج جايا، سيلانجور',
    annualFees: 7000,
    availableCourses: ['إدارة الفنادق والضيافة', 'فنون الطهي', 'التصميم الداخلي', 'إدارة الأعمال الدولية'],
    description: 'تُعرف جامعة تايلورز ببرامجها المتميزة في مجالات الضيافة والسياحة والتصميم، وتقدم بيئة تعليمية حديثة ومتطورة.',
    logoUrl: 'https://placehold.co/100x100.png',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'modern campus',
    livingCosts: 'USD 700-1000 شهريًا',
    acceptanceCriteria: ['شهادة الثانوية العامة', 'ملف أعمال (لبرامج التصميم)', 'مقابلة شخصية'],
    officialWebsiteUrl: 'https://university.taylors.edu.my', // Placeholder
    applicationLink: 'https://apply.taylors.edu.my', // Placeholder
  },
  {
    id: '8',
    name: 'جامعة أوتارا ماليزيا (UUM)',
    city: 'سينتوك، قدح',
    annualFees: 3500,
    availableCourses: ['إدارة الأعمال', 'المحاسبة', 'تكنولوجيا المعلومات', 'الاقتصاد', 'إدارة السياحة'],
    description: 'تعتبر جامعة أوتارا ماليزيا مركزًا للتميز في الإدارة والأعمال، وتقع في حرم جامعي أخضر وواسع.',
    logoUrl: 'https://placehold.co/100x100.png',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'university management',
    livingCosts: 'USD 400-700 شهريًا',
    acceptanceCriteria: ['شهادة الثانوية العامة', 'إجادة اللغة الإنجليزية'],
    officialWebsiteUrl: 'https://www.uum.edu.my', // Placeholder
    applicationLink: 'https://apply.uum.edu.my', // Placeholder
  },
  {
    id: '9',
    name: 'جامعة ملتميديا (MMU)',
    city: 'سايبرجايا',
    annualFees: 6500,
    availableCourses: ['الهندسة (برمجيات، اتصالات)', 'الوسائط المتعددة الإبداعية', 'السينما والفنون الرقمية', 'تكنولوجيا المعلومات'],
    description: 'جامعة ملتميديا هي رائدة في مجالات تكنولوجيا المعلومات والوسائط المتعددة، ولها فروع في سايبرجايا وملاك.',
    logoUrl: 'https://placehold.co/100x100.png',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'multimedia technology',
    livingCosts: 'USD 600-900 شهريًا',
    acceptanceCriteria: ['شهادة الثانوية العامة', 'إجادة اللغة الإنجليزية', 'متطلبات خاصة لبعض برامج الفنون'],
    officialWebsiteUrl: 'https://www.mmu.edu.my', // Placeholder
    applicationLink: 'https://apply.mmu.edu.my', // Placeholder
  },
  {
    id: '10',
    name: 'جامعة بتروناس للتكنولوجيا (UTP)',
    city: 'سيري إسكندر، فيرق',
    annualFees: 7500,
    availableCourses: ['هندسة البترول', 'الهندسة الكيميائية', 'الهندسة الميكانيكية', 'علوم الحاسوب والمعلومات'],
    description: 'جامعة بتروناس للتكنولوجيا مملوكة بالكامل لشركة بتروناس، وتشتهر ببرامجها الهندسية والتكنولوجية ذات المستوى العالمي.',
    logoUrl: 'https://placehold.co/100x100.png',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'oil gas engineering',
    livingCosts: 'USD 650-950 شهريًا',
    acceptanceCriteria: ['شهادة الثانوية العامة بمعدلات عالية في العلوم والرياضيات', 'إجادة اللغة الإنجليزية (IELTS 6.5+)'],
    officialWebsiteUrl: 'https://www.utp.edu.my', // Placeholder
    applicationLink: 'https://apply.utp.edu.my', // Placeholder
  },
  {
    id: '11',
    name: 'جامعة صنواي',
    city: 'بندر صنواي، سيلانجور',
    annualFees: 6800,
    availableCourses: ['إدارة الأعمال الأمريكية', 'علم النفس', 'فنون الاتصال', 'الضيافة والسياحة', 'علوم الحاسوب'],
    description: 'تقدم جامعة صنواي مجموعة متنوعة من البرامج المعترف بها دوليًا بالشراكة مع جامعات عالمية، وتتميز بمرافقها الحديثة.',
    logoUrl: 'https://placehold.co/100x100.png',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'private university campus',
    livingCosts: 'USD 700-1000 شهريًا',
    acceptanceCriteria: ['شهادة الثانوية العامة', 'إجادة اللغة الإنجليزية'],
    officialWebsiteUrl: 'https://sunwayuniversity.edu.my', // Placeholder
    applicationLink: 'https://apply.sunway.edu.my', // Placeholder
  },
  {
    id: '12',
    name: 'جامعة UCSI',
    city: 'كوالالمبور',
    annualFees: 6000,
    availableCourses: ['الموسيقى المعاصرة', 'الطب', 'الصيدلة', 'الهندسة', 'إدارة الضيافة'],
    description: 'تُعرف جامعة UCSI ببرامجها المتنوعة وتركيزها على التعلم القائم على الممارسة، ولها شبكة واسعة من الشركاء الصناعيين.',
    logoUrl: 'https://placehold.co/100x100.png',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'city campus modern',
    livingCosts: 'USD 600-900 شهريًا',
    acceptanceCriteria: ['شهادة الثانوية العامة', 'إجادة اللغة الإنجليزية', 'اختبارات قبول لبعض التخصصات كالموسيقى'],
    officialWebsiteUrl: 'https://www.ucsiuniversity.edu.my', // Placeholder
    applicationLink: 'https://apply.ucsi.edu.my', // Placeholder
  },
  {
    id: '13',
    name: 'جامعة ليمكوكوينج للتكنولوجيا الإبداعية',
    city: 'سايبرجايا',
    annualFees: 7200,
    availableCourses: ['التصميم الجرافيكي', 'الرسوم المتحركة', 'الأزياء والتجزئة', 'العمارة', 'الاتصال الجماهيري'],
    description: 'جامعة ليمكوكوينج معروفة عالميًا بتركيزها على الإبداع والابتكار، وتقدم برامج فريدة في مجالات التصميم والفنون.',
    logoUrl: 'https://placehold.co/100x100.png',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'creative arts university',
    livingCosts: 'USD 650-950 شهريًا',
    acceptanceCriteria: ['شهادة الثانوية العامة', 'ملف أعمال (portfolio) لبرامج التصميم والفنون'],
    officialWebsiteUrl: 'https://www.limkokwing.net', // Placeholder
    applicationLink: 'https://apply.limkokwing.net', // Placeholder
  },
  {
    id: '14',
    name: 'جامعة ماليزيا باهانج (UMP)',
    city: 'كوانتان، باهانج',
    annualFees: 4300,
    availableCourses: ['الهندسة الميكانيكية', 'الهندسة الكهربائية والإلكترونية', 'هندسة البرمجيات', 'السلامة والصحة المهنية'],
    description: 'تركز جامعة ماليزيا باهانج على التخصصات الهندسية والتكنولوجية، وتسعى لتخريج مهندسين مبتكرين يلبون احتياجات الصناعة.',
    logoUrl: 'https://placehold.co/100x100.png',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'engineering university',
    livingCosts: 'USD 450-750 شهريًا',
    acceptanceCriteria: ['شهادة الثانوية العامة (مسار علمي)', 'إجادة اللغة الإنجليزية'],
    officialWebsiteUrl: 'https://www.ump.edu.my', // Placeholder
    applicationLink: 'https://apply.ump.edu.my', // Placeholder
  },
  {
    id: '15',
    name: 'جامعة السلطان إدريس التربوية (UPSI)',
    city: 'تانجونج ماليم، فيرق',
    annualFees: 3200,
    availableCourses: ['التعليم (مختلف التخصصات)', 'اللغات والاتصال', 'الفنون والتصميم التربوي', 'العلوم الإنسانية'],
    description: 'تعتبر جامعة السلطان إدريس التربوية الجامعة الرائدة في مجال إعداد المعلمين في ماليزيا، ولها تاريخ عريق في هذا المجال.',
    logoUrl: 'https://placehold.co/100x100.png',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'education university campus',
    livingCosts: 'USD 350-650 شهريًا',
    acceptanceCriteria: ['شهادة الثانوية العامة', 'اختبار الكفاءة التربوية الماليزي (MEdSI)'],
    officialWebsiteUrl: 'https://www.upsi.edu.my', // Placeholder
    applicationLink: 'https://apply.upsi.edu.my', // Placeholder
  },
  {
    id: '16',
    name: 'جامعة ماليزيا سرواك (UNIMAS)',
    city: 'كوتا ساماراهان، سرواك',
    annualFees: 4000,
    availableCourses: ['علوم الحاسوب', 'الفنون التطبيقية والإبداعية', 'العلوم الاجتماعية', 'الهندسة', 'الاقتصاد والأعمال'],
    description: 'جامعة ماليزيا سرواك هي جامعة حكومية شاملة تقع في ولاية سرواك، وتهتم بتنمية المنطقة من خلال التعليم والبحث العلمي.',
    logoUrl: 'https://placehold.co/100x100.png',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'sarawak university nature',
    livingCosts: 'USD 400-700 شهريًا',
    acceptanceCriteria: ['شهادة الثانوية العامة', 'إجادة اللغة الإنجليزية'],
    officialWebsiteUrl: 'https://www.unimas.my', // Placeholder
    applicationLink: 'https://apply.unimas.my', // Placeholder
  },
  {
    id: '17',
    name: 'جامعة العلوم الإسلامية الماليزية (USIM)',
    city: 'نيلاي، نيجري سمبيلن',
    annualFees: 3700,
    availableCourses: ['الشريعة والقانون', 'القرآن والسنة', 'الاقتصاد والمعاملات المالية الإسلامية', 'الطب وطب الأسنان (مع منظور إسلامي)'],
    description: 'تركز جامعة العلوم الإسلامية الماليزية على تكامل المعرفة الدينية مع العلوم الحديثة، وتهدف إلى تخريج قادة يجمعون بين العلم والإيمان.',
    logoUrl: 'https://placehold.co/100x100.png',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'islamic science university',
    livingCosts: 'USD 400-700 شهريًا',
    acceptanceCriteria: ['شهادة الثانوية العامة', 'إجادة اللغة العربية والإنجليزية'],
    officialWebsiteUrl: 'https://www.usim.edu.my', // Placeholder
    applicationLink: 'https://apply.usim.edu.my', // Placeholder
  }
];
