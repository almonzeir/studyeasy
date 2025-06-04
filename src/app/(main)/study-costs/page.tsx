
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import {
  FileText,
  DollarSign,
  ClipboardCheck,
  MailCheck,
  Plane,
  Stethoscope,
  StickyNote,
  Landmark,
  Users,
  Scroll,
  PiggyBank,
  Home,
  Utensils,
  Bus,
  Wifi,
  ShoppingBag,
  Lightbulb,
  BookOpen,
  Briefcase,
  CheckCircle,
  Info,
  ExternalLink
} from 'lucide-react';

const visaSteps = [
  {
    icon: <ClipboardCheck className="h-8 w-8 text-accent" />,
    title: 'الخطوة 1: القبول في جامعة معترف بها',
    description: 'التقديم عبر بوابة الجامعة، رفع المستندات المطلوبة (شهادة الثانوية/البكالوريوس، كشف الدرجات، شهادة IELTS/TOEFL، نسخة جواز السفر، صور شخصية). دفع رسوم القبول الابتدائية (200–500 RM). استلام رسالة القبول الرسمية (Offer Letter).',
  },
  {
    icon: <MailCheck className="h-8 w-8 text-accent" />,
    title: 'الخطوة 2: تقديم طلب خطاب الموافقة المبدئية على التأشيرة (eVAL)',
    description: (
      <>
        التسجيل في نظام EMGS (Education Malaysia Global Services -{' '}
        <Link href="https://educationmalaysia.gov.my" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
          educationmalaysia.gov.my
        </Link>
        ). الجامعة تقوم بإدخالك وتدفع رسوم eVAL (150–200 RM). رفع المستندات: رسالة القبول، جواز السفر، صور، شهادة طبية أولية (TB & HIV)، إثبات مالي (Minimum RM 10,000). انتظار معالجة EMGS (1–2 أسابيع عمل).
      </>
    ),
  },
  {
    icon: <FileText className="h-8 w-8 text-accent" />,
    title: 'الخطوة 3: تقديم طلب تأشيرة الدخول لمرة واحدة (Single Entry Visa – SEV)',
    description: 'الذهاب إلى السفارة/القنصلية الماليزية في بلدك. المستندات: جواز سفر، صورة شخصية، eVAL letter، خطاب قبول، شهادة فحص طبي، إيصال دفع رسوم التأشيرة (تقريبًا 200–300 USD). استلام التأشيرة (3–5 أيام عمل).',
  },
  {
    icon: <Plane className="h-8 w-8 text-accent" />,
    title: 'الخطوة 4: تعبئة بطاقة الوصول الرقمية الماليزية (MDAC)',
    description: (
      <>
        زيارة الموقع الإلكتروني{' '}
        <Link href="https://mdac.imi.gov.my" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
          mdac.imi.gov.my
        </Link>
        . تعبئة البيانات الشخصية ومعلومات الرحلة. يجب تعبئتها قبل 3 أيام على الأقل من الوصول.
      </>
    ),
  },
  {
    icon: <Landmark className="h-8 w-8 text-accent" />,
    title: 'الخطوة 5: السفر والوصول إلى ماليزيا',
    description: 'التقديم على جمرك الهجرة عند الوصول. تقديم: جواز السفر مع SEV، MDAC، eVAL letter، خطاب القبول، نتائج فحص TB & HIV. التوقيع على سند شخصي (Personal Bond) (2,000–3,000 RM قابل للاسترداد).',
  },
  {
    icon: <Stethoscope className="h-8 w-8 text-accent" />,
    title: 'الخطوة 6: الفحص الطبي في ماليزيا (Post-Arrival Medical Examination)',
    description: 'في المراكز المعتمدة من EMGS (الجامعة تحددها). فحوص: أشعة الصدر (TB)، فحص الدم (HIV). تكلفة: 200–300 RM. النتائج: 2–3 أيام عمل.',
  },
  {
    icon: <StickyNote className="h-8 w-8 text-accent" />,
    title: 'الخطوة 7: إصدار تصريح الطالب (Student Pass)',
    description: 'الجامعة تتولى تقديم جواز السفر ونتائج الفحص الطبي لإدارة الهجرة. استلام Student Pass Sticker في جواز السفر، يسمح بالإقامة والدراسة.',
  }
];

const requiredDocuments = [
  'نسخة من جواز السفر (صالح لمدة لا تقل عن 12 شهرًا)',
  'صورة شخصية بخلفية بيضاء (نمط جواز السفر)',
  'خطاب القبول من المؤسسة التعليمية (Unconditional Offer Letter)',
  'الشهادات الأكاديمية والنصوص المعتمدة',
  'نموذج التصريح الصحي (Medical Examination Form) مع فحص TB & HIV',
  'إثبات مالي (كشف حساب بنكي أو خطاب ضمان مالي - Minimum RM 10,000)',
  'سند شخصي (Personal Bond) - يُطلب عند الوصول عادةً',
];

const visaFees = [
  { item: 'رسوم التقديم عبر EMGS (تشمل eVAL)', costRM: '1,080 - 1,250' },
  { item: 'رسوم الفحص الطبي (بعد الوصول)', costRM: '250 - 300' },
  { item: 'رسوم تصريح الطالب السنوي', costRM: '60 - 100' },
  { item: 'تأمين صحي (سنوي إلزامي عبر EMGS)', costRM: '500 – 1,000' },
  { item: 'سند شخصي (قابل للاسترداد)', costRM: '200 – 2,000 (حسب الجنسية)' },
  { item: 'رسوم تأشيرة الدخول SEV (تُدفع للسفارة)', costRM: 'تختلف (ما يعادل 200-300 USD)' },
];

const accommodationData = [
  { type: 'سكن داخل الحرم الجامعي', costRM: '300 – 600', costUSD: '65 – 130', notes: 'مُنخفض الكلفة، غالبًا يشمل فواتير، أماكن محدودة؛ سجّل مبكرًا.' },
  { type: 'سكن مشترك (غرفة/شقة)', costRM: '600 – 1,000', costUSD: '130 – 215', notes: 'شارك لتقليل التكاليف، يُفضَّل قربه من الجامعة.' },
  { type: 'شقة صغيرة/استوديو', costRM: '1,200 – 1,800', costUSD: '260 – 390', notes: 'خصوصية أكثر لكنه الأعلى تكلفة، ابحث عن “fully-furnished”.' },
  { type: 'بيت طلابي خاص', costRM: '800 – 1,200', costUSD: '180 – 260', notes: 'تشرف عليه جهات خاصة، قد يتضمّن خدمات إنترنت.' },
  { type: 'مسكن عائلي (Homestay)', costRM: '800 – 1,500', costUSD: '180 – 325', notes: 'يثري تجربتك الثقافية، غالبًا يتضمّن وجبات.' },
];

const foodData = [
  { type: 'طهي في المنزل (بقالة)', costRM: '300 – 500', costUSD: '65 – 110', notes: 'استغل عروض السوبرماركت (Tesco, Giant, Aeon) والمنتجات المحلية.' },
  { type: 'وجبات خارجية اقتصادية (أكشاك/ساحات طعام)', costRM: '300 – 400', costUSD: '65 – 85', notes: 'أطعمة ماليزية شعبية (5–12 RM للوجبة)، مقاصف جامعية مخفضة.' },
  { type: 'مطاعم متوسطة السعر', costRM: '400 – 600', costUSD: '85 – 130', notes: 'وجبات عالمية (10–20 RM)، استخدم كوبونات تطبيقات التوصيل.' },
  { type: 'المشروبات والوجبات الخفيفة', costRM: '100 – 200', costUSD: '20 – 45', notes: 'قهوة محلية (3–6 RM)، مشروبات معلبة من السوبرماركت.' },
];

const transportData = [
  { type: 'باصات عامة (City Bus)', costRM: '50 – 100', costUSD: '11 – 22', notes: 'استخدم RapidKL, Go KL (مجانية ببعض المناطق). حمّل تطبيق MyRapid.' },
  { type: 'قطارات ومترو (MRT/LRT/Monorail)', costRM: '100 – 150', costUSD: '22 – 32', notes: 'تذكرة (1.2–4.4 RM). اشترِ بطاقة Touch ‘n Go لخصومات.' },
  { type: 'أوبر/جراب (Grab/Maxim)', costRM: '300 – 500 (اختياري)', costUSD: '65 – 110', notes: 'مريحة للسفر الليلي. استخدم كوبونات الطلاب.' },
  { type: 'تأجير دراجة/دراجة نارية', costRM: '200 – 300 (حسب المكان)', costUSD: '45 – 65', notes: 'بعض الجامعات توفرها بسعر رمزي. جيد للمناطق الصغيرة.' },
];

const utilitiesData = [
  { type: 'كهرباء وماء', costRM: '100 – 200', costUSD: '22 – 45', notes: 'غالبًا تُشمل في السكن الجامعي. قسّم التكلفة في السكن الخاص.' },
  { type: 'إنترنت منزلي (Wi-Fi)', costRM: '100 – 150', costUSD: '22 – 32', notes: 'Unifi, Maxis Fibre (100–149 RM شهريًا). بعض المجمعات توفر إنترنت مشترك.' },
  { type: 'باقة هاتف محمول (SIM)', costRM: '20 – 50', costUSD: '5 – 11', notes: 'شركات: Digi, U Mobile, Maxis, Celcom. باقات إنترنت (30 RM لـ 5–10 GB).' },
];

const personalExpensesData = [
  { type: 'ملابس وأحذية', costRM: '100 – 200', costUSD: '22 – 45', notes: 'استغل التخفيضات الموسمية. تجنب المحلات الفاخرة.' },
  { type: 'كتب وأدوات دراسية', costRM: '50 – 100', costUSD: '11 – 22', notes: 'مكتبات جامعية مخفضة. اشترِ أثناء عروض "Back-to-School".' },
  { type: 'أنشطة ترفيهية (سينما، رياضة)', costRM: '100 – 200', costUSD: '22 – 45', notes: 'استخدم بطاقة الطالب للخصومات. تابع عروض الأندية الرياضية.' },
  { type: 'سفر داخلي (رحلات قصيرة)', costRM: '50 – 150', costUSD: '11 – 32', notes: 'باصات (10–20 RM). استخدم Easybook للتذاكر المبكرة.' },
];

const costReductionTips = [
  { icon: <Home className="h-5 w-5 text-primary" />, text: "اختر سكنًا اقتصاديًا: السكن الجامعي أو المشترك يوفر الكثير." },
  { icon: <Utensils className="h-5 w-5 text-primary" />, text: "اطبخ في المنزل: إعداد وجباتك بنفسك يقلل النفقات بشكل كبير." },
  { icon: <Bus className="h-5 w-5 text-primary" />, text: "استخدم النقل العام: الحافلات والقطارات أرخص من سيارات الأجرة." },
  { icon: <DollarSign className="h-5 w-5 text-primary" />, text: "استفد من الخصومات الطلابية: العديد من الأماكن تقدم أسعارًا خاصة للطلاب." },
  { icon: <Briefcase className="h-5 w-5 text-primary" />, text: "العمل بدوام جزئي: مسموح به حتى 20 ساعة أسبوعيًا خلال الإجازات لزيادة الدخل." },
  { icon: <BookOpen className="h-5 w-5 text-primary" />, text: "اشترِ الكتب المستعملة: ابحث في مجموعات الطلاب أو المكتبات عن كتب مستعملة." },
  { icon: <Wifi className="h-5 w-5 text-primary" />, text: "شارك تكاليف الإنترنت: إذا كنت في سكن خاص، شارك فاتورة الإنترنت مع زملائك." },
];

const additionalTips = [
    "خطط ماليًا مسبقًا: حدد ميزانيتك الشهرية وافتح حساب بنكي محلي (مثل Maybank أو CIMB).",
    "حضّر مستندات التقديم للجامعات مبكرًا: تحقق من متطلبات كل جامعة. بعضها يطلب IELTS ≥ 6.0.",
    "اتبع إجراءات التأشيرة بدقة: لا تتأخر في دفع الرسوم وتقديم المستندات لـ EMGS.",
    "التأمين الصحي إلزامي: تأكد من اشتراكك في التأمين الجامعي أو تأمين خارجي معتمد.",
    "شارك في الأنشطة الطلابية: انضم للنوادي والجمعيات لتكوين صداقات واستكشاف ماليزيا."
];

const importantLinks = [
  { name: 'Education Malaysia Global Services (EMGS)', url: 'https://educationmalaysia.gov.my', description: 'الموقع الرسمي لتأشيرات الطلاب وإجراءات الاعتماد.' },
  { name: 'EMGS - Visa Application Guide', url: 'https://visa.educationmalaysia.gov.my/guidelines/required-documents.html', description: 'دليل طلب التأشيرة والمستندات المطلوبة.' },
  { name: 'EMGS - Student Visa User Guide (PDF)', url: 'https://visa.educationmalaysia.gov.my/media/docs/Student_Visa_Application_User_Guide.pdf?v=1.0', description: 'كتيب إرشادي لعملية التقديم.'},
  { name: 'Malaysia Digital Arrival Card (MDAC)', url: 'https://imigresen-online.imi.gov.my/mdac/main', description: 'لتعبئة بطاقة الوصول الرقمية قبل السفر.' },
  { name: 'StudyMalaysia.com', url: 'https://studymalaysia.com/', description: 'منصة معلومات شاملة عن الدراسة في ماليزيا.' },
  { name: 'Ministry of Higher Education Malaysia (MOHE)', url: 'https://www.mohe.gov.my', description: 'وزارة التعليم العالي الماليزية للمستجدات الرسمية.'},
  { name: 'QS World University Rankings: Malaysia', url: 'https://www.topuniversities.com/qs-world-university-rankings/regions/asia/country/malaysia', description: 'لترتيب الجامعات الماليزية عالميًا.'},
];

const summaryPoints = [
    "ماليزيا تقدم تعليمًا عالميًا بتكلفة دراسية ومعيشية منخفضة نسبيًا.",
    "اختر الجامعة المناسبة لمستواك الأكاديمي وميزانيتك.",
    "ابدأ مبكرًا في إجراءات القبول والتأشيرة (6–8 أشهر قبل السفر).",
    "ضع ميزانية مرنة وقلل النفقات عبر السكن المشترك، الطبخ المنزلي، والنقل العام.",
    "استفد من الأنشطة الطلابية والخدمات المجانية التي تقدمها الجامعات.",
    "راجع دائمًا الروابط الرسمية للتحقق من أي تحديثات."
];


export default function VisaAndLivingCostsPage() {
  const renderTable = (data: Array<{ type: string; costRM: string; costUSD: string; notes: string }>, title: string, icon: React.ReactNode) => (
    <Card className="shadow-lg w-full">
      <CardHeader>
        <CardTitle className="flex items-center font-headline text-xl md:text-2xl text-primary">
          {icon}
          <span className="mr-3 rtl:ml-3 rtl:mr-0">{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-right">النوع/البند</TableHead>
              <TableHead className="text-right">التكلفة الشهرية (RM)</TableHead>
              <TableHead className="text-right">التكلفة الشهرية (USD تقريبًا)</TableHead>
              <TableHead className="text-right">ملاحظات ونصائح</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.type}</TableCell>
                <TableCell>{item.costRM}</TableCell>
                <TableCell>{item.costUSD}</TableCell>
                <TableCell>{item.notes}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {title === "السكن" && (
            <div className="mt-4 text-sm text-muted-foreground space-y-1">
                <p><b>نصيحة للتوفير (السكن):</b> انضم لمجموعات طلابية (فيسبوك/واتساب) للبحث عن غرف شاغرة أو مساكن مشتركة. اسأل مكتب شؤون الطلاب عن شراكات مع شركات عقارية لخصومات.</p>
            </div>
        )}
        {title === "الطعام" && (
             <div className="mt-4 text-sm text-muted-foreground space-y-1">
                <p><b>نصيحة للتوفير (الطعام):</b> حضّر أكلات جماعية مع الزملاء. اعتمد الوجبات الماليزية المحلية فهي صحية وأقل تكلفة.</p>
            </div>
        )}
        {title === "المواصلات" && (
             <div className="mt-4 text-sm text-muted-foreground space-y-1">
                <p><b>نصيحة للتوفير (المواصلات):</b> اعتمد على الباصات المجانية (Go KL). إذا كانت الجامعة قريبة، فكر في المشي أو الدراجة.</p>
            </div>
        )}
         {title === "الخدمات والفواتير" && (
             <div className="mt-4 text-sm text-muted-foreground space-y-1">
                <p><b>نصيحة للتوفير (الخدمات):</b> اشترِ شرائح مسبقة الدفع واستفد من عروض الشحن. ابحث عن باقات تجمع الإنترنت والصوت.</p>
            </div>
        )}
        {title === "النفقات الشخصية والترفيه" && (
             <div className="mt-4 text-sm text-muted-foreground space-y-1">
                <p><b>نصيحة للتوفير (الترفيه):</b> اشترك في صالة الألعاب الرياضية الجامعية. تابع الفعاليات الثقافية والمهرجانات المجانية.</p>
            </div>
        )}
      </CardContent>
    </Card>
  );


  return (
    <div className="container py-12 md:py-16">
      <header className="mb-12 text-center">
        <FileText className="mx-auto mb-6 h-16 w-16 text-accent animate-pulse" />
        <h1 
          className="font-headline text-4xl font-bold md:text-5xl"
          style={{ textShadow: '0 2px 6px rgba(0, 0, 0, 0.7)' }}
        >
          تكاليف المعيشة والتأشيرة في <span 
            className="text-accent"
            style={{ textShadow: '0 2px 5px rgba(0, 0, 0, 0.5)' }}
          >ماليزيا (2025)</span>
        </h1>
        <p 
          className="mt-4 text-lg text-foreground/95 md:text-xl"
          style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.6)' }}
        >
          دليلك الشامل لإجراءات تأشيرة الطالب واستراتيجيات إدارة المعيشة بمرونة.
        </p>
      </header>

      <div className="space-y-12">
        
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center font-headline text-2xl md:text-3xl text-primary">
              <Scroll className="mr-4 h-8 w-8 rtl:ml-4 rtl:mr-0" />
              🎓 كيفية الحصول على تأشيرة طالب للدراسة في ماليزيا
            </CardTitle>
            <CardDescription>خطوات مفصلة لضمان عملية تقديم سلسة لتأشيرة الطالب.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {visaSteps.map((step, index) => (
              <Card key={index} className="bg-card/50 border-border/50">
                <CardHeader className="flex flex-row items-start gap-4 p-4">
                  {step.icon}
                  <div>
                    <CardTitle className="text-xl text-accent">{step.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-4 pt-0 pl-16 rtl:pr-16 rtl:pl-4 text-foreground/90">
                   <div className="text-sm leading-relaxed">{step.description}</div>
                </CardContent>
              </Card>
            ))}
             <div className="mt-4 text-sm text-muted-foreground space-y-1 p-4 border-t border-border/30">
                <p className="font-semibold text-primary">ملاحظة هامة حول تمديد وتصريح العمل الجزئي:</p>
                <p>بعد تسجيلك ومباشرتك الدراسة رسميًا، يمكنك التقدُّم بطلب للعمل بدوام جزئي (Part-Time Work) لمدة لا تتجاوز 20 ساعة في الأسبوع خلال فترات الدراسة، وعمل كامل خلال العطل (حتى 40 ساعة أسبوعيًا). تجديد تصريح الطالب يتم تلقائيًا عبر الجامعة قبل انتهاء صلاحيته بشهر تقريبًا، بشرط إثبات استمرارية التسجيل الدراسي ودفع الرسوم.</p>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center font-headline text-2xl md:text-3xl text-primary">
              <StickyNote className="mr-4 h-8 w-8 rtl:ml-4 rtl:mr-0" />
              📄 المستندات المطلوبة لتأشيرة الطالب
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc space-y-3 pr-5 rtl:pl-5 rtl:pr-0 text-foreground/90 text-base md:text-lg">
              {requiredDocuments.map((doc, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-green-500 rtl:ml-2 rtl:mr-0" />
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center font-headline text-2xl md:text-3xl text-primary">
              <DollarSign className="mr-4 h-8 w-8 rtl:ml-4 rtl:mr-0" />
              💰 الرسوم المرتبطة بتأشيرة الطالب
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-right">البند</TableHead>
                  <TableHead className="text-right">التكلفة التقريبية (رينجت ماليزي)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {visaFees.map((fee, index) => (
                  <TableRow key={index}>
                    <TableCell>{fee.item}</TableCell>
                    <TableCell>{fee.costRM}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <p className="mt-4 text-sm text-muted-foreground">
              *ملاحظة: تختلف الرسوم حسب المؤسسة التعليمية والجنسية. الأسعار قابلة للتغيير، يرجى مراجعة المصادر الرسمية.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-xl">
            <CardHeader>
                <CardTitle className="flex items-center font-headline text-2xl md:text-3xl text-primary">
                <PiggyBank className="mr-4 h-8 w-8 rtl:ml-4 rtl:mr-0" />
                🏠 تكاليف المعيشة بالتفصيل واستراتيجيات التوفير
                </CardTitle>
                <CardDescription>خيارات مرنة لتقليل تكاليف المعيشة في ماليزيا.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
                {renderTable(accommodationData, "السكن", <Home className="h-6 w-6 text-primary"/>)}
                {renderTable(foodData, "الطعام", <Utensils className="h-6 w-6 text-primary"/>)}
                {renderTable(transportData, "المواصلات", <Bus className="h-6 w-6 text-primary"/>)}
                {renderTable(utilitiesData, "الخدمات والفواتير", <Wifi className="h-6 w-6 text-primary"/>)}
                {renderTable(personalExpensesData, "النفقات الشخصية والترفيه", <ShoppingBag className="h-6 w-6 text-primary"/>)}
            </CardContent>
        </Card>
        
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center font-headline text-2xl md:text-3xl text-primary">
              <Briefcase className="mr-4 h-8 w-8 rtl:ml-4 rtl:mr-0" />
              العمل بدوام جزئي للطلاب
            </CardTitle>
          </CardHeader>
          <CardContent className="text-foreground/90 text-base md:text-lg space-y-3">
            <p>يسمح للطلاب الدوليين في ماليزيا بالعمل بدوام جزئي لمدة تصل إلى 20 ساعة في الأسبوع خلال الفصول الدراسية، وعمل بدوام كامل خلال الإجازات الرسمية الطويلة (أكثر من 7 أيام).</p>
            <p>بعض الفرص المتاحة:</p>
            <ul className="list-disc space-y-1.5 pr-5 rtl:pl-5 rtl:pr-0">
                <li>مساعد أكاديمي (Teaching Assistant) في الجامعة (خاصة لطلاب الدراسات العليا).</li>
                <li>العمل في مكتبة الجامعة، المقاهي داخل الحرم، أو المتاجر الطلابية.</li>
                <li>فرص في قطاع الخدمات مثل المطاعم والفنادق (خارج الحرم الجامعي، بعد الحصول على موافقة).</li>
            </ul>
            <p className="text-sm text-muted-foreground">
                <Link href="https://sbguni.com/en/guide-obtaining-malaysian-student-visa-2025/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                    المصدر: SBGUni Guide
                </Link>
            </p>
          </CardContent>
        </Card>


        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center font-headline text-2xl md:text-3xl text-primary">
              <Lightbulb className="mr-4 h-8 w-8 rtl:ml-4 rtl:mr-0" />
              🚀 خطوات إضافية للبدء سريعًا
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc space-y-3 pr-5 rtl:pl-5 rtl:pr-0 text-foreground/90 text-base md:text-lg">
              {additionalTips.map((tip, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-green-500 rtl:ml-2 rtl:mr-0" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center font-headline text-2xl md:text-3xl text-primary">
              <BookOpen className="mr-4 h-8 w-8 rtl:ml-4 rtl:mr-0" />
              🔗 روابط مفيدة للبحث والمتابعة
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {importantLinks.map((link, index) => (
              <div key={index} className="p-3 border rounded-md bg-card/60 hover:bg-secondary/40 transition-colors">
                <Link href={link.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-accent hover:underline flex items-center">
                  {link.name} <ExternalLink className="ml-1.5 h-4 w-4 rtl:mr-1.5 rtl:ml-0" />
                </Link>
                {link.description && <p className="text-sm text-muted-foreground mt-1">{link.description}</p>}
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="shadow-xl bg-primary/10 border-primary/30">
          <CardHeader>
            <CardTitle className="flex items-center font-headline text-2xl md:text-3xl text-primary">
              <Info className="mr-4 h-8 w-8 rtl:ml-4 rtl:mr-0" />
              📝 خلاصة النقاط الأساسية
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc space-y-3 pr-5 rtl:pl-5 rtl:pr-0 text-primary/90 text-base md:text-lg">
              {summaryPoints.map((point, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-accent rtl:ml-2 rtl:mr-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        
      </div>
    </div>
  );
}
