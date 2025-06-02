
import type { University } from '@/types';

export const mockUniversities: University[] = [
  {
    id: '1',
    name: 'جامعة ملايا (UM)', // University of Malaya
    city: 'كوالالمبور',
    annualFees: 5000,
    availableCourses: ['الهندسة', 'الطب', 'علوم الحاسوب', 'إدارة الأعمال', 'الآداب والعلوم الاجتماعية'],
    description: 'تأسست جامعة ملايا عام 1905، وهي أقدم وأعرق جامعة في ماليزيا. تتميز ببرامجها البحثية المتقدمة وتصنيفها العالمي المرتفع.',
    logoUrl: 'https://placehold.co/100x100.png',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'university campus',
    livingCosts: 'USD 600-900 شهريًا',
    acceptanceCriteria: ['شهادة الثانوية العامة بمعدل ممتاز', 'إجادة اللغة الإنجليزية (IELTS/TOEFL)', 'مقابلة شخصية'],
    officialWebsiteUrl: 'https://www.um.edu.my',
    applicationLink: 'https://apply.um.edu.my',
  },
  {
    id: '2',
    name: 'جامعة العلوم الماليزية (USM)', // Universiti Sains Malaysia
    city: 'بينانج',
    annualFees: 4500,
    availableCourses: ['الصيدلة', 'الهندسة الكيميائية', 'الفنون الجميلة', 'علوم البيئة', 'علوم الاتصال'],
    description: 'تُعرف جامعة العلوم الماليزية بتركيزها على البحث العلمي والابتكار، وتقدم مجموعة واسعة من التخصصات العلمية والتطبيقية.',
    logoUrl: 'https://placehold.co/100x100.png',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'modern university',
    livingCosts: 'USD 500-800 شهريًا',
    acceptanceCriteria: ['شهادة الثانوية العامة بمعدل جيد جدًا', 'إجادة اللغة الإنجليزية'],
    officialWebsiteUrl: 'https://www.usm.my',
    applicationLink: 'https://www.usm.my', // USM Admission Portal (often same as website)
  },
  {
    id: '3',
    name: 'الجامعة الوطنية الماليزية (UKM)', // Universiti Kebangsaan Malaysia
    city: 'بانغي، سيلانجور',
    annualFees: 4800,
    availableCourses: ['الدراسات الإسلامية', 'القانون', 'العلوم الاجتماعية', 'الهندسة المعمارية', 'الاقتصاد'],
    description: 'تأسست الجامعة الوطنية الماليزية بهدف تعزيز اللغة والثقافة الماليزية، وتعتبر من الجامعات الرائدة في مجالات العلوم الإنسانية والاجتماعية.',
    logoUrl: 'https://placehold.co/100x100.png',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'university building',
    livingCosts: 'USD 550-850 شهريًا',
    acceptanceCriteria: ['شهادة الثانوية العامة', 'إجادة اللغة الماليزية (لبعض البرامج)', 'إجادة اللغة الإنجليزية'],
    officialWebsiteUrl: 'https://www.ukm.my/portalukm/',
    applicationLink: 'https://www.ukm.my/portalukm/', // UKM Admission Portal (often same as website)
  },
  {
    id: '4',
    name: 'جامعة بوترا ماليزيا (UPM)', // Universiti Putra Malaysia
    city: 'سيردانغ، سيلانجور',
    annualFees: 4200,
    availableCourses: ['الزراعة', 'الطب البيطري', 'علوم الغابات', 'تكنولوجيا المعلومات', 'التغذية وعلوم الغذاء'],
    description: 'تتميز جامعة بوترا ماليزيا ببرامجها القوية في مجالات الزراعة والعلوم المرتبطة بها، وتعد مركزًا بحثيًا هامًا في هذا المجال.',
    logoUrl: 'https://placehold.co/100x100.png',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'campus nature',
    livingCosts: 'USD 500-800 شهريًا',
    acceptanceCriteria: ['شهادة الثانوية العامة', 'خبرة عملية (لبعض البرامج)'],
    officialWebsiteUrl: 'https://www.upm.edu.my',
    applicationLink: 'https://www.upm.edu.my', // UPM Admission Portal (often same as website)
  },
  {
    id: '5',
    name: 'جامعة التكنولوجيا الماليزية (UTM)', // Universiti Teknologi Malaysia
    city: 'جوهر بهرو',
    annualFees: 5200,
    availableCourses: ['الهندسة الميكانيكية', 'الهندسة الكهربائية', 'علوم الحاسوب المتقدمة', 'العمارة والتخطيط الحضري'],
    description: 'تعتبر جامعة التكنولوجيا الماليزية (UTM) رائدة في مجالات الهندسة والتكنولوجيا، وتشتهر بخريجيها ذوي الكفاءة العالية.',
    logoUrl: 'https://placehold.co/100x100.png',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'technology building',
    livingCosts: 'USD 550-850 شهريًا',
    acceptanceCriteria: ['شهادة الثانوية العامة بمعدل ممتاز في المواد العلمية', 'إجادة اللغة الإنجليزية (IELTS 6.0+)'],
    officialWebsiteUrl: 'https://www.utm.my',
    applicationLink: 'https://admission.utm.my/apply-now/',
  },
  {
    id: '6',
    name: 'الجامعة الإسلامية العالمية ماليزيا (IIUM)', // Universiti Islam Antarabangsa Malaysia
    city: 'جومباك، سيلانجور',
    annualFees: 3800,
    availableCourses: ['الشريعة والقانون', 'الاقتصاد والعلوم الإدارية الإسلامية', 'اللغة العربية وآدابها', 'العلوم الإنسانية'],
    description: 'تقدم الجامعة الإسلامية العالمية ماليزيا (IIUM) تعليمًا يدمج بين المعرفة الحديثة والقيم الإسلامية، وتستقطب طلابًا من جميع أنحاء العالم.',
    logoUrl: 'https://placehold.co/100x100.png',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'islamic architecture',
    livingCosts: 'USD 450-750 شهريًا',
    acceptanceCriteria: ['شهادة الثانوية العامة', 'إجادة اللغة العربية والإنجليزية', 'تزكية من جهة إسلامية معتمدة'],
    officialWebsiteUrl: 'https://www.iium.edu.my',
    applicationLink: 'https://www.iium.edu.my', // IIUM Admission Portal (often same as website)
  },
  {
    id: '7',
    name: 'جامعة تايلورز (Taylor\'s University)',
    city: 'سوبانج جايا، سيلانجور',
    annualFees: 7000,
    availableCourses: ['إدارة الفنادق والضيافة', 'فنون الطهي', 'التصميم الداخلي', 'إدارة الأعمال الدولية'],
    description: 'تُعرف جامعة تايلورز ببرامجها المتميزة في مجالات الضيافة والسياحة والتصميم، وتقدم بيئة تعليمية حديثة ومتطورة.',
    logoUrl: 'https://placehold.co/100x100.png',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'modern campus',
    livingCosts: 'USD 700-1000 شهريًا',
    acceptanceCriteria: ['شهادة الثانوية العامة', 'ملف أعمال (لبرامج التصميم)', 'مقابلة شخصية'],
    officialWebsiteUrl: 'https://university.taylors.edu.my',
    applicationLink: 'https://university.taylors.edu.my', // Taylor's Admission Portal
  },
  {
    id: '8',
    name: 'جامعة أوتارا ماليزيا (UUM)', // Universiti Utara Malaysia
    city: 'سينتوك، قدح',
    annualFees: 3500,
    availableCourses: ['إدارة الأعمال', 'المحاسبة', 'تكنولوجيا المعلومات', 'الاقتصاد', 'إدارة السياحة'],
    description: 'تعتبر جامعة أوتارا ماليزيا مركزًا للتميز في الإدارة والأعمال، وتقع في حرم جامعي أخضر وواسع.',
    logoUrl: 'https://placehold.co/100x100.png',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'university management',
    livingCosts: 'USD 400-700 شهريًا',
    acceptanceCriteria: ['شهادة الثانوية العامة', 'إجادة اللغة الإنجليزية'],
    officialWebsiteUrl: 'https://www.uum.edu.my',
    applicationLink: 'https://www.uum.edu.my', // UUM Admission Portal
  },
  {
    id: '9',
    name: 'جامعة ملتميديا (MMU)', // Multimedia University
    city: 'سايبرجايا',
    annualFees: 6500,
    availableCourses: ['الهندسة (برمجيات، اتصالات)', 'الوسائط المتعددة الإبداعية', 'السينما والفنون الرقمية', 'تكنولوجيا المعلومات'],
    description: 'جامعة ملتميديا هي رائدة في مجالات تكنولوجيا المعلومات والوسائط المتعددة، ولها فروع في سايبرجايا وملاك.',
    logoUrl: 'https://placehold.co/100x100.png',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'multimedia technology',
    livingCosts: 'USD 600-900 شهريًا',
    acceptanceCriteria: ['شهادة الثانوية العامة', 'إجادة اللغة الإنجليزية', 'متطلبات خاصة لبعض برامج الفنون'],
    officialWebsiteUrl: 'https://www.mmu.edu.my',
    applicationLink: 'https://www.mmu.edu.my', // MMU Admission Portal
  },
  {
    id: '10',
    name: 'جامعة بتروناس للتكنولوجيا (UTP)', // Universiti Teknologi Petronas
    city: 'سيري إسكندر، فيرق',
    annualFees: 7500,
    availableCourses: ['هندسة البترول', 'الهندسة الكيميائية', 'الهندسة الميكانيكية', 'علوم الحاسوب والمعلومات'],
    description: 'جامعة بتروناس للتكنولوجيا مملوكة بالكامل لشركة بتروناس، وتشتهر ببرامجها الهندسية والتكنولوجية ذات المستوى العالمي.',
    logoUrl: 'https://placehold.co/100x100.png',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'oil gas engineering',
    livingCosts: 'USD 650-950 شهريًا',
    acceptanceCriteria: ['شهادة الثانوية العامة بمعدلات عالية في العلوم والرياضيات', 'إجادة اللغة الإنجليزية (IELTS 6.5+)'],
    officialWebsiteUrl: 'https://www.utp.edu.my', // Placeholder, actual link needed if different from main
    applicationLink: 'https://www.utp.edu.my', // Placeholder, actual application link needed
  },
  {
    id: '11',
    name: 'جامعة صنواي (Sunway University)',
    city: 'بندر صنواي، سيلانجور',
    annualFees: 6800,
    availableCourses: ['إدارة الأعمال الأمريكية', 'علم النفس', 'فنون الاتصال', 'الضيافة والسياحة', 'علوم الحاسوب'],
    description: 'تقدم جامعة صنواي مجموعة متنوعة من البرامج المعترف بها دوليًا بالشراكة مع جامعات عالمية، وتتميز بمرافقها الحديثة.',
    logoUrl: 'https://placehold.co/100x100.png',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'private university campus',
    livingCosts: 'USD 700-1000 شهريًا',
    acceptanceCriteria: ['شهادة الثانوية العامة', 'إجادة اللغة الإنجليزية'],
    officialWebsiteUrl: 'https://university.sunway.edu.my',
    applicationLink: 'https://university.sunway.edu.my', // Sunway Admission Portal
  },
  {
    id: '12',
    name: 'جامعة UCSI (UCSI University)',
    city: 'كوالالمبور',
    annualFees: 6000,
    availableCourses: ['الموسيقى المعاصرة', 'الطب', 'الصيدلة', 'الهندسة', 'إدارة الضيافة'],
    description: 'تُعرف جامعة UCSI ببرامجها المتنوعة وتركيزها على التعلم القائم على الممارسة، ولها شبكة واسعة من الشركاء الصناعيين.',
    logoUrl: 'https://placehold.co/100x100.png',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'city campus modern',
    livingCosts: 'USD 600-900 شهريًا',
    acceptanceCriteria: ['شهادة الثانوية العامة', 'إجادة اللغة الإنجليزية', 'اختبارات قبول لبعض التخصصات كالموسيقى'],
    officialWebsiteUrl: 'https://www.ucsiuniversity.edu.my',
    applicationLink: 'https://www.ucsiuniversity.edu.my', // UCSI Admission Portal
  },
  {
    id: '13',
    name: 'جامعة ليمكوكوينج للتكنولوجيا الإبداعية (Limkokwing University)',
    city: 'سايبرجايا',
    annualFees: 7200,
    availableCourses: ['التصميم الجرافيكي', 'الرسوم المتحركة', 'الأزياء والتجزئة', 'العمارة', 'الاتصال الجماهيري'],
    description: 'جامعة ليمكوكوينج معروفة عالميًا بتركيزها على الإبداع والابتكار، وتقدم برامج فريدة في مجالات التصميم والفنون.',
    logoUrl: 'https://placehold.co/100x100.png',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'creative arts university',
    livingCosts: 'USD 650-950 شهريًا',
    acceptanceCriteria: ['شهادة الثانوية العامة', 'ملف أعمال (portfolio) لبرامج التصميم والفنون'],
    officialWebsiteUrl: 'https://www.limkokwing.net',
    applicationLink: 'https://www.limkokwing.net', // Limkokwing Admission Portal
  },
  {
    id: '14',
    name: 'جامعة ماليزيا باهانج السلطان عبد الله (UMPSA)', // Previously UMP
    city: 'كوانتان، باهانج',
    annualFees: 4300,
    availableCourses: ['الهندسة الميكانيكية', 'الهندسة الكهربائية والإلكترونية', 'هندسة البرمجيات', 'السلامة والصحة المهنية'],
    description: 'تركز جامعة ماليزيا باهانج على التخصصات الهندسية والتكنولوجية، وتسعى لتخريج مهندسين مبتكرين يلبون احتياجات الصناعة.',
    logoUrl: 'https://placehold.co/100x100.png',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'engineering university',
    livingCosts: 'USD 450-750 شهريًا',
    acceptanceCriteria: ['شهادة الثانوية العامة (مسار علمي)', 'إجادة اللغة الإنجليزية'],
    officialWebsiteUrl: 'https://www.ump.edu.my', // UMPSA Website
    applicationLink: 'https://www.ump.edu.my',   // UMPSA Admission Portal
  },
  {
    id: '15',
    name: 'جامعة السلطان إدريس التربوية (UPSI)', // Universiti Pendidikan Sultan Idris
    city: 'تانجونج ماليم، فيرق',
    annualFees: 3200,
    availableCourses: ['التعليم (مختلف التخصصات)', 'اللغات والاتصال', 'الفنون والتصميم التربوي', 'العلوم الإنسانية'],
    description: 'تعتبر جامعة السلطان إدريس التربوية الجامعة الرائدة في مجال إعداد المعلمين في ماليزيا، ولها تاريخ عريق في هذا المجال.',
    logoUrl: 'https://placehold.co/100x100.png',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'education university campus',
    livingCosts: 'USD 350-650 شهريًا',
    acceptanceCriteria: ['شهادة الثانوية العامة', 'اختبار الكفاءة التربوية الماليزي (MEdSI)'],
    officialWebsiteUrl: 'https://www.upsi.edu.my',
    applicationLink: 'https://www.upsi.edu.my', // UPSI Admission Portal
  },
  {
    id: '16',
    name: 'جامعة ماليزيا سرواك (UNIMAS)', // Universiti Malaysia Sarawak
    city: 'كوتا ساماراهان، سرواك',
    annualFees: 4000,
    availableCourses: ['علوم الحاسوب', 'الفنون التطبيقية والإبداعية', 'العلوم الاجتماعية', 'الهندسة', 'الاقتصاد والأعمال'],
    description: 'جامعة ماليزيا سرواك هي جامعة حكومية شاملة تقع في ولاية سرواك، وتهتم بتنمية المنطقة من خلال التعليم والبحث العلمي.',
    logoUrl: 'https://placehold.co/100x100.png',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'sarawak university nature',
    livingCosts: 'USD 400-700 شهريًا',
    acceptanceCriteria: ['شهادة الثانوية العامة', 'إجادة اللغة الإنجليزية'],
    officialWebsiteUrl: 'https://www.unimas.my',
    applicationLink: 'https://www.unimas.my', // UNIMAS Admission Portal
  },
  {
    id: '17',
    name: 'جامعة العلوم الإسلامية الماليزية (USIM)', // Universiti Sains Islam Malaysia
    city: 'نيلاي، نيجري سمبيلن',
    annualFees: 3700,
    availableCourses: ['الشريعة والقانون', 'القرآن والسنة', 'الاقتصاد والمعاملات المالية الإسلامية', 'الطب وطب الأسنان (مع منظور إسلامي)'],
    description: 'تركز جامعة العلوم الإسلامية الماليزية على تكامل المعرفة الدينية مع العلوم الحديثة، وتهدف إلى تخريج قادة يجمعون بين العلم والإيمان.',
    logoUrl: 'https://placehold.co/100x100.png',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'islamic science university',
    livingCosts: 'USD 400-700 شهريًا',
    acceptanceCriteria: ['شهادة الثانوية العامة', 'إجادة اللغة العربية والإنجليزية'],
    officialWebsiteUrl: 'https://www.usim.edu.my',
    applicationLink: 'https://www.usim.edu.my', // USIM Admission Portal
  },
  // New additions start here
  {
    id: '18',
    name: 'Universiti Malaysia Sabah (UMS)',
    city: 'Sabah', // Placeholder
    annualFees: 4000, // Placeholder
    availableCourses: ['Placeholder Course 1', 'Placeholder Course 2'], // Placeholder
    description: 'Public comprehensive university in Sabah.', // Placeholder
    logoUrl: 'https://placehold.co/100x100.png',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'university campus',
    livingCosts: 'USD 500-800 شهريًا', // Placeholder
    acceptanceCriteria: ['To be updated'], // Placeholder
    officialWebsiteUrl: 'https://www.ums.edu.my',
    applicationLink: 'https://www.ums.edu.my', // UMS Admission Portal
  },
  {
    id: '19',
    name: 'Universiti Teknologi MARA (UiTM)',
    city: 'Shah Alam, Selangor (Main Campus) & various branches', // Placeholder
    annualFees: 3000, // Placeholder
    availableCourses: ['Business Management', 'Engineering', 'Art & Design'], // Placeholder
    description: 'A large public university system with numerous faculties and campuses across Malaysia.', // Placeholder
    logoUrl: 'https://placehold.co/100x100.png',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'large campus',
    livingCosts: 'USD 400-700 شهريًا', // Placeholder
    acceptanceCriteria: ['To be updated'], // Placeholder
    officialWebsiteUrl: 'https://www.uitm.edu.my',
    applicationLink: 'https://www.uitm.edu.my', // UiTM Admission Portal
  },
  {
    id: '20',
    name: 'Universiti Malaysia Kelantan (UMK)',
    city: 'Kelantan', // Placeholder
    annualFees: 3800, // Placeholder
    availableCourses: ['Entrepreneurship', 'Agro-Industry', 'Creative Technology'], // Placeholder
    description: 'Focused public university in Kelantan, emphasizing entrepreneurship.', // Placeholder
    logoUrl: 'https://placehold.co/100x100.png',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'entrepreneurship university',
    livingCosts: 'USD 400-700 شهريًا', // Placeholder
    acceptanceCriteria: ['To be updated'], // Placeholder
    officialWebsiteUrl: 'https://www.umk.edu.my',
    applicationLink: 'https://www.umk.edu.my', // UMK Admission Portal
  },
  {
    id: '21',
    name: 'Universiti Malaysia Perlis (UniMAP)',
    city: 'Perlis', // Placeholder
    annualFees: 4200, // Placeholder
    availableCourses: ['Engineering', 'Technology', 'Applied Sciences'], // Placeholder
    description: 'Focused public university in Perlis, specializing in engineering and technology.', // Placeholder
    logoUrl: 'https://placehold.co/100x100.png',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'technology university',
    livingCosts: 'USD 450-750 شهريًا', // Placeholder
    acceptanceCriteria: ['To be updated'], // Placeholder
    officialWebsiteUrl: 'https://www.unimap.edu.my',
    applicationLink: 'https://www.unimap.edu.my', // UniMAP Admission Portal
  },
  {
    id: '22',
    name: 'Universiti Malaysia Terengganu (UMT)',
    city: 'Terengganu', // Placeholder
    annualFees: 4100, // Placeholder
    availableCourses: ['Marine Science', 'Maritime Studies', 'Fisheries'], // Placeholder
    description: 'Focused public university in Terengganu, specializing in marine and maritime studies.', // Placeholder
    logoUrl: 'https://placehold.co/100x100.png',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'marine science',
    livingCosts: 'USD 400-700 شهريًا', // Placeholder
    acceptanceCriteria: ['To be updated'], // Placeholder
    officialWebsiteUrl: 'https://www.umt.edu.my',
    applicationLink: 'https://www.umt.edu.my', // UMT Admission Portal
  },
  {
    id: '23',
    name: 'Universiti Pertahanan Nasional Malaysia (UPNM)',
    city: 'Kuala Lumpur', // Placeholder
    annualFees: 4500, // Placeholder
    availableCourses: ['Defense Studies', 'Engineering', 'Management'], // Placeholder
    description: 'The National Defence University of Malaysia.', // Placeholder
    logoUrl: 'https://placehold.co/100x100.png',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'defense university',
    livingCosts: 'USD 500-800 شهريًا', // Placeholder
    acceptanceCriteria: ['To be updated, specific physical and academic requirements'], // Placeholder
    officialWebsiteUrl: 'https://www.upnm.edu.my',
    applicationLink: 'https://www.upnm.edu.my', // UPNM Admission Portal
  },
  {
    id: '24',
    name: 'Universiti Sultan Zainal Abidin (UniSZA)',
    city: 'Terengganu', // Placeholder
    annualFees: 3900, // Placeholder
    availableCourses: ['Islamic Studies', 'Law', 'Health Sciences', 'Business'], // Placeholder
    description: 'Public university in Terengganu with a focus on diverse fields including Islamic studies.', // Placeholder
    logoUrl: 'https://placehold.co/100x100.png',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'islamic studies campus',
    livingCosts: 'USD 400-700 شهريًا', // Placeholder
    acceptanceCriteria: ['To be updated'], // Placeholder
    officialWebsiteUrl: 'https://www.unisza.edu.my',
    applicationLink: 'https://www.unisza.edu.my', // UniSZA Admission Portal
  },
  {
    id: '25',
    name: 'Universiti Teknikal Malaysia Melaka (UTeM)',
    city: 'Melaka', // Placeholder
    annualFees: 4400, // Placeholder
    availableCourses: ['Engineering Technology', 'Information Technology', 'Management Technology'], // Placeholder
    description: 'Public technical university in Melaka.', // Placeholder
    logoUrl: 'https://placehold.co/100x100.png',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'technical university',
    livingCosts: 'USD 450-750 شهريًا', // Placeholder
    acceptanceCriteria: ['To be updated'], // Placeholder
    officialWebsiteUrl: 'https://www.utem.edu.my',
    applicationLink: 'https://www.utem.edu.my', // UTeM Admission Portal
  },
  {
    id: '26',
    name: 'Universiti Tun Hussein Onn Malaysia (UTHM)',
    city: 'Batu Pahat, Johor', // Placeholder
    annualFees: 4600, // Placeholder
    availableCourses: ['Engineering', 'Technology Management', 'Vocational Education'], // Placeholder
    description: 'Public university focused on engineering, technology, and technical education.', // Placeholder
    logoUrl: 'https://placehold.co/100x100.png',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'engineering education',
    livingCosts: 'USD 500-800 شهريًا', // Placeholder
    acceptanceCriteria: ['To be updated'], // Placeholder
    officialWebsiteUrl: 'https://www.uthm.edu.my',
    applicationLink: 'https://www.uthm.edu.my', // UTHM Admission Portal
  },
  // Private Universities from user list
  {
    id: '27',
    name: 'Universiti Tunku Abdul Rahman (UTAR)',
    city: 'Kampar, Perak & Sungai Long, Selangor', // Placeholder
    annualFees: 5500, // Placeholder
    availableCourses: ['Business', 'Engineering', 'IT', 'Social Science', 'Chinese Studies'], // Placeholder
    description: 'A well-regarded private university with multiple campuses.', // Placeholder
    logoUrl: 'https://placehold.co/100x100.png',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'private campus',
    livingCosts: 'USD 500-850 شهريًا', // Placeholder
    acceptanceCriteria: ['To be updated'], // Placeholder
    officialWebsiteUrl: 'https://www.utar.edu.my',
    applicationLink: 'https://www.utar.edu.my', // UTAR Admission Portal
  },
  {
    id: '28',
    name: 'INTI International University & Colleges',
    city: 'Various locations (Nilai, Subang, Penang, etc.)', // Placeholder
    annualFees: 6000, // Placeholder
    availableCourses: ['Business', 'IT', 'Engineering', 'Hospitality', 'Art & Design'], // Placeholder
    description: 'A network of private universities and colleges in Malaysia.', // Placeholder
    logoUrl: 'https://placehold.co/100x100.png',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'international college',
    livingCosts: 'USD 600-900 شهريًا', // Placeholder
    acceptanceCriteria: ['To be updated'], // Placeholder
    officialWebsiteUrl: 'https://newinti.edu.my',
    applicationLink: 'https://newinti.edu.my', // INTI Admission Portal
  },
  {
    id: '29',
    name: 'SEGi University',
    city: 'Kota Damansara, Selangor (Main Campus) & other locations', // Placeholder
    annualFees: 5800, // Placeholder
    availableCourses: ['Business', 'IT', 'Health Sciences', 'Engineering', 'Creative Arts'], // Placeholder
    description: 'One of the largest private higher education providers in Malaysia.', // Placeholder
    logoUrl: 'https://placehold.co/100x100.png',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'modern private university',
    livingCosts: 'USD 550-850 شهريًا', // Placeholder
    acceptanceCriteria: ['To be updated'], // Placeholder
    officialWebsiteUrl: 'https://www.segi.edu.my',
    applicationLink: 'https://www.segi.edu.my', // SEGi Admission Portal
  },
  {
    id: '30',
    name: 'Asia Pacific University of Technology & Innovation (APU)',
    city: 'Kuala Lumpur', // Placeholder
    annualFees: 6700, // Placeholder
    availableCourses: ['Computing & Technology', 'Engineering', 'Business & Management', 'Design'], // Placeholder
    description: 'A leading university for technology and innovation, with a strong international student community.', // Placeholder
    logoUrl: 'https://placehold.co/100x100.png',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'technology innovation campus',
    livingCosts: 'USD 600-950 شهريًا', // Placeholder
    acceptanceCriteria: ['To be updated'], // Placeholder
    officialWebsiteUrl: 'https://www.apu.edu.my',
    applicationLink: 'https://www.apu.edu.my', // APU Admission Portal
  },
  {
    id: '31',
    name: 'Heriot-Watt University Malaysia',
    city: 'Putrajaya', // Placeholder
    annualFees: 8000, // Placeholder
    availableCourses: ['Engineering', 'Business', 'Built Environment', 'Data Science'], // Placeholder
    description: 'A Malaysian campus of the renowned UK university, Heriot-Watt.', // Placeholder
    logoUrl: 'https://placehold.co/100x100.png',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'uk university malaysia',
    livingCosts: 'USD 700-1000 شهريًا', // Placeholder
    acceptanceCriteria: ['To be updated, follows UK standards'], // Placeholder
    officialWebsiteUrl: 'https://www.hw.ac.uk/malaysia.htm',
    applicationLink: 'https://www.hw.ac.uk/malaysia.htm', // Heriot-Watt Admission Portal
  }
];
