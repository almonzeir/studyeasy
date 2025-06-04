
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { DollarSign, TrendingUp, ThumbsUp, Info, BookOpen, Home, Lightbulb } from 'lucide-react';

const preUniversityProgrammes = [
  { programme: 'Cambridge GCE A-Levels', duration: '15–18 months', feeRM: 'RM20,000–RM40,000', feeUSD: 'US$4,300–US$8,600' },
  { programme: 'SACE International (Australia)', duration: '11 months', feeRM: 'RM22,000–RM30,000', feeUSD: 'US$4,700–US$6,400' },
  { programme: 'AUSMAT (Australia)', duration: '10 months', feeRM: 'RM18,000–RM26,000', feeUSD: 'US$3,900–US$5,600' },
  { programme: 'International Baccalaureate (IB)', duration: '24 months', feeRM: 'RM120,000–RM130,000', feeUSD: 'US$25,800–US$28,000' },
  { programme: 'Monash University Foundation Year (MUFY)', duration: '12 months', feeRM: 'RM26,000–RM30,000', feeUSD: 'US$5,600–US$6,400' },
];

const bachelorsDegreeProgrammes = [
  { field: 'Business', duration: '3 years', feeRM: 'RM35,000–RM60,000', feeUSD: 'US$7,500–US$12,900' },
  { field: 'Engineering', duration: '4 years', feeRM: 'RM40,000–RM80,000', feeUSD: 'US$8,600–US$17,200' },
  { field: 'Information Technology', duration: '3 years', feeRM: 'RM35,000–RM60,000', feeUSD: 'US$7,500–US$12,900' },
  { field: 'Medicine', duration: '5 years', feeRM: 'RM300,000–RM450,000', feeUSD: 'US$64,500–US$96,800' },
  { field: 'Pharmacy', duration: '4 years', feeRM: 'RM120,000–RM200,000', feeUSD: 'US$25,800–US$43,000' },
];

const postgraduateProgrammes = [
  { programme: 'Master of Business Administration (MBA)', duration: '1–1.5 years', feeRM: 'RM30,000–RM50,000', feeUSD: 'US$6,450–US$10,750' },
  { programme: 'Master of Engineering', duration: '1–2 years', feeRM: 'RM25,000–RM40,000', feeUSD: 'US$5,400–US$8,600' },
  { programme: 'Master of IT', duration: '1–2 years', feeRM: 'RM30,000–RM45,000', feeUSD: 'US$6,450–US$9,700' },
];

const livingExpenses = [
  { expense: 'Accommodation', costRM: 'RM400–RM800', costUSD: 'US$85–US$170' },
  { expense: 'Food', costRM: 'RM600–RM900', costUSD: 'US$130–US$190' },
  { expense: 'Transportation', costRM: 'RM100–RM200', costUSD: 'US$20–US$40' },
  { expense: 'Utilities (electricity, water, internet)', costRM: 'RM100–RM200', costUSD: 'US$20–US$40' },
  { expense: 'Personal Expenses', costRM: 'RM200–RM400', costUSD: 'US$40–US$85' },
  { expense: 'Total', costRM: 'RM1,500–RM2,500', costUSD: 'US$320–US$540' },
];

const whyMalaysiaStandsOut = [
  'Affordable Tuition Fees: Save up to 50–70% compared to studying in the UK, US, or Australia.',
  'Low Cost of Living: Enjoy a comfortable lifestyle without breaking the bank.',
  'Global Recognition: Degrees from Malaysian institutions are recognized worldwide.',
  'Cultural Diversity: Experience a multicultural environment that feels like home.',
  'Strategic Location: Easy travel to and from Southeast Asia, including Indonesia.',
];

const references = [
    { name: 'Image by Ulrich Dregler from Pixabay', url: 'https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=507295' },
    { name: 'Ministry of Higher Education Malaysia (MOHE)', url: 'https://www.mohe.gov.my' },
    { name: 'QS Best Student Cities 2025', url: 'https://www.topuniversities.com/world-university-rankings' },
    { name: 'StudyMalaysia.com Research Team', url: '#' }
];


export default function StudyCostsPage() {
  return (
    <div className="container py-12 md:py-16">
      <header className="mb-12 text-center">
        <DollarSign className="mx-auto mb-6 h-16 w-16 text-accent animate-pulse" />
        <h1 
          className="font-headline text-4xl font-bold md:text-5xl"
          style={{ textShadow: '0 2px 6px rgba(0, 0, 0, 0.7)' }}
        >
          تكاليف الدراسة والمعيشة في <span 
            className="text-accent"
            style={{ textShadow: '0 2px 5px rgba(0, 0, 0, 0.5)' }}
          >ماليزيا</span> (لعام 2025)
        </h1>
        <p 
          className="mt-4 text-lg text-foreground/95 md:text-xl"
          style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.6)' }}
        >
          دليلك الشامل لفهم التكاليف المحدثة للطلاب الدوليين.
        </p>
      </header>

      <div className="space-y-12">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center font-headline text-2xl text-primary">
              <TrendingUp className="mr-3 h-7 w-7 rtl:ml-3 rtl:mr-0" />
              لماذا ماليزيا؟ تعليم ميسور التكلفة بجودة عالية
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-foreground/90 text-base md:text-lg">
            <p>
              One of the biggest reasons international students choose Malaysia is its cost-effective education system. For example:
            </p>
            <ul className="list-disc space-y-2 pr-5 rtl:pl-5 rtl:pr-0">
              <li>
                A 3+0 UK engineering degree (3 years) in Malaysia costs approximately RM80,000–RM100,000 (US$17,000–US$21,000), while the same degree in the UK would cost £36,000–£45,000 (RM200,000–RM250,000 or US$43,000–US$54,000).
              </li>
              <li>
                By studying in Malaysia, students can save up to RM120,000–RM150,000 (US$25,000–US$32,000) in tuition fees alone.
              </li>
            </ul>
            <p>
              When you factor in the lower cost of living, the savings are even more significant. According to the QS Best Student Cities 2025, Kuala Lumpur remains one of the most affordable cities for students, offering a perfect blend of low living costs and high-quality education.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center font-headline text-2xl text-primary">
              <BookOpen className="mr-3 h-7 w-7 rtl:ml-3 rtl:mr-0" />
              مما تتكون تكلفة الدراسة في ماليزيا؟
            </CardTitle>
            <CardDescription>The cost of studying in Malaysia includes two main components: Course Fees and Living Expenses.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            
            <section>
              <h3 className="mb-4 font-headline text-xl font-semibold text-accent">1. رسوم الدورات الدراسية (Course Fees)</h3>
              <p className="mb-4 text-foreground/90">
                Course fees vary depending on the level of study, the institution, and the programme. Below is an updated breakdown of estimated costs for 2025:
              </p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="mb-3 text-lg font-semibold text-foreground">A. برامج ما قبل الجامعة (Pre-University Programmes)</h4>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="text-right">Programme</TableHead>
                        <TableHead className="text-right">Duration</TableHead>
                        <TableHead className="text-right">Estimated Tuition Fee (RM)</TableHead>
                        <TableHead className="text-right">Estimated Tuition Fee (USD)</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {preUniversityProgrammes.map((p) => (
                        <TableRow key={p.programme}>
                          <TableCell>{p.programme}</TableCell>
                          <TableCell>{p.duration}</TableCell>
                          <TableCell>{p.feeRM}</TableCell>
                          <TableCell>{p.feeUSD}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                <div>
                  <h4 className="mb-3 text-lg font-semibold text-foreground">B. برامج درجة البكالوريوس (Bachelor’s Degree Programmes)</h4>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="text-right">Field of Study</TableHead>
                        <TableHead className="text-right">Duration</TableHead>
                        <TableHead className="text-right">Estimated Tuition Fee (RM)</TableHead>
                        <TableHead className="text-right">Estimated Tuition Fee (USD)</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {bachelorsDegreeProgrammes.map((p) => (
                        <TableRow key={p.field}>
                          <TableCell>{p.field}</TableCell>
                          <TableCell>{p.duration}</TableCell>
                          <TableCell>{p.feeRM}</TableCell>
                          <TableCell>{p.feeUSD}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                <div>
                  <h4 className="mb-3 text-lg font-semibold text-foreground">C. برامج الدراسات العليا (Postgraduate Programmes)</h4>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="text-right">Programme</TableHead>
                        <TableHead className="text-right">Duration</TableHead>
                        <TableHead className="text-right">Estimated Tuition Fee (RM)</TableHead>
                        <TableHead className="text-right">Estimated Tuition Fee (USD)</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {postgraduateProgrammes.map((p) => (
                        <TableRow key={p.programme}>
                          <TableCell>{p.programme}</TableCell>
                          <TableCell>{p.duration}</TableCell>
                          <TableCell>{p.feeRM}</TableCell>
                          <TableCell>{p.feeUSD}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
               <p className="mt-4 text-sm text-muted-foreground">
                Note: Exchange rate used is US$1 = RM4.65 (as of October 2025).
              </p>
            </section>

            <section>
              <h3 className="mb-4 font-headline text-xl font-semibold text-accent">2. تكاليف المعيشة في ماليزيا (Cost of Living)</h3>
              <p className="mb-4 text-foreground/90">
                The cost of living in Malaysia is one of the most affordable in the region. On average, an international student should budget RM1,500–RM2,500 (US$320–US$540) per month, depending on location and lifestyle. Here’s a breakdown:
              </p>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-right">Expense</TableHead>
                    <TableHead className="text-right">Estimated Monthly Cost (RM)</TableHead>
                    <TableHead className="text-right">Estimated Monthly Cost (USD)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {livingExpenses.map((e) => (
                    <TableRow key={e.expense}>
                      <TableCell>{e.expense}</TableCell>
                      <TableCell>{e.costRM}</TableCell>
                      <TableCell>{e.costUSD}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <p className="mt-4 text-sm text-muted-foreground flex items-center">
                <Lightbulb className="mr-2 h-4 w-4 text-accent rtl:ml-2 rtl:mr-0" />
                Tip: Cooking at home or sharing accommodation with friends can help reduce costs significantly.
              </p>
            </section>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center font-headline text-2xl text-primary">
              <ThumbsUp className="mr-3 h-7 w-7 rtl:ml-3 rtl:mr-0" />
              لماذا تتميز ماليزيا؟
            </CardTitle>
          </CardHeader>
          <CardContent className="text-foreground/90 text-base md:text-lg">
            <ul className="list-disc space-y-2 pr-5 rtl:pl-5 rtl:pr-0">
              {whyMalaysiaStandsOut.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
        
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center font-headline text-2xl text-primary">
              <Info className="mr-3 h-7 w-7 rtl:ml-3 rtl:mr-0" />
             كلمة أخيرة
            </CardTitle>
          </CardHeader>
          <CardContent className="text-foreground/90 text-base md:text-lg">
             <p>
              Studying in Malaysia is not just about affordability—it’s about gaining a world-class education in a vibrant, welcoming environment. With updated costs for 2025, it’s clear that Malaysia remains one of the most cost-effective study destinations for international students.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center font-headline text-2xl text-primary">
               <BookOpen className="mr-3 h-7 w-7 rtl:ml-3 rtl:mr-0" />
              المصادر
            </CardTitle>
          </CardHeader>
          <CardContent className="text-foreground/90 text-sm">
            <ul className="list-disc space-y-1 pr-5 rtl:pl-5 rtl:pr-0">
              {references.map((ref, index) => (
                <li key={index}>
                  {ref.url && ref.url !== '#' ? (
                    <a href={ref.url} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                      {ref.name}
                    </a>
                  ) : (
                    <span>{ref.name}</span>
                  )}
                </li>
              ))}
            </ul>
             <p className="mt-2 text-xs text-muted-foreground">
                Source for main article content: StudyMalaysia.com (January 9, 2025)
            </p>
          </CardContent>
        </Card>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          ملاحظة: المحتوى التفصيلي في هذه الصفحة مقدم باللغة الإنجليزية حاليًا. سيتم توفير الترجمة العربية قريباً.
        </p>
      </div>
    </div>
  );
}
