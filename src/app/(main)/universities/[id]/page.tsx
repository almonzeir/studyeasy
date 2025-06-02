
import { mockUniversities } from '@/data/universities';
import type { University } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, MapPin, BookOpen, DollarSign, ShieldCheck, Info, ExternalLink, Globe } from 'lucide-react';

async function getUniversityById(id: string): Promise<University | undefined> {
  return mockUniversities.find((uni) => uni.id === id);
}

export default async function UniversityDetailPage({ params }: { params: { id: string } }) {
  const university = await getUniversityById(params.id);

  if (!university) {
    notFound();
  }

  return (
    <div className="container py-12 md:py-16">
      <Button asChild variant="outline" className="mb-8">
        <Link href="/universities">
          <ArrowLeft className="mr-2 h-4 w-4 rtl:ml-2 rtl:mr-0" />
          العودة إلى قائمة الجامعات
        </Link>
      </Button>

      <Card className="overflow-hidden shadow-xl">
        <CardHeader className="relative p-0">
          {university.imageUrl && (
            <div className="relative h-64 w-full md:h-96">
              <Image
                src={university.imageUrl}
                alt={`Campus of ${university.name}`}
                layout="fill"
                objectFit="cover"
                priority
                data-ai-hint={university.dataAiHint || "university campus"}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            </div>
          )}
          <div className="absolute bottom-0 w-full p-6 md:p-8 bg-gradient-to-t from-black/80 to-transparent">
            <div className="flex items-center mb-2">
                {university.logoUrl && (
                    <div className="relative mr-4 h-16 w-16 shrink-0 overflow-hidden rounded-md border-2 border-accent bg-card p-1 rtl:ml-4 rtl:mr-0">
                    <Image
                        src={university.logoUrl}
                        alt={`${university.name} logo`}
                        layout="fill"
                        objectFit="contain"
                        data-ai-hint="university logo"
                    />
                    </div>
                )}
                <div>
                    <CardTitle className="font-headline text-3xl font-bold text-primary-foreground md:text-4xl" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.7)' }}>
                    {university.name}
                    </CardTitle>
                    {university.city && (
                    <div className="mt-1 flex items-center text-sm text-accent">
                        <MapPin className="mr-2 h-4 w-4 rtl:ml-2 rtl:mr-0" />
                        <span>{university.city}</span>
                    </div>
                    )}
                </div>
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-6 md:p-8">
          {university.description && (
            <section className="mb-8">
              <h2 className="mb-3 font-headline text-2xl font-semibold text-primary">
                <Info className="mr-2 inline-block h-6 w-6 rtl:ml-2 rtl:mr-0" />
                عن الجامعة
              </h2>
              <CardDescription className="text-base leading-relaxed text-foreground/90">
                {university.description}
              </CardDescription>
            </section>
          )}

          <div className="grid gap-8 md:grid-cols-2">
            <section>
              <h2 className="mb-3 font-headline text-2xl font-semibold text-primary">
                <BookOpen className="mr-2 inline-block h-6 w-6 rtl:ml-2 rtl:mr-0" />
                التخصصات المتاحة
              </h2>
              {university.availableCourses && university.availableCourses.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {university.availableCourses.map((course) => (
                    <Badge key={course} variant="secondary" className="px-3 py-1 text-sm">
                      {course}
                    </Badge>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground">لا توجد معلومات عن التخصصات حاليًا.</p>
              )}
            </section>

            <section>
              <h2 className="mb-3 font-headline text-2xl font-semibold text-primary">
                <DollarSign className="mr-2 inline-block h-6 w-6 rtl:ml-2 rtl:mr-0" />
                الرسوم والتكاليف
              </h2>
              <ul className="space-y-2 text-foreground/90">
                <li>
                  <strong>الرسوم السنوية:</strong> ${university.annualFees.toLocaleString()}
                </li>
                {university.livingCosts && (
                  <li>
                    <strong>تكاليف المعيشة التقديرية:</strong> {university.livingCosts}
                  </li>
                )}
              </ul>
            </section>
          </div>

          {university.acceptanceCriteria && university.acceptanceCriteria.length > 0 && (
            <section className="mt-8">
              <h2 className="mb-3 font-headline text-2xl font-semibold text-primary">
                <ShieldCheck className="mr-2 inline-block h-6 w-6 rtl:ml-2 rtl:mr-0" />
                شروط القبول
              </h2>
              <ul className="list-disc space-y-1 pr-5 text-foreground/90 rtl:pl-5 rtl:pr-0">
                {university.acceptanceCriteria.map((criterion, index) => (
                  <li key={index}>{criterion}</li>
                ))}
              </ul>
            </section>
          )}
        </CardContent>

        {(university.officialWebsiteUrl || (university.applicationLink && university.applicationLink !== '#')) && (
          <CardFooter className="bg-secondary/20 p-6 md:p-8 flex flex-col sm:flex-row gap-4">
            {university.officialWebsiteUrl && (
              <Button asChild size="lg" variant="outline" className="flex-1 border-primary text-primary hover:bg-primary/10">
                <Link href={university.officialWebsiteUrl} target="_blank" rel="noopener noreferrer">
                  <Globe className="mr-2 h-5 w-5 rtl:ml-2 rtl:mr-0" />
                  الموقع الرسمي
                </Link>
              </Button>
            )}
            {university.applicationLink && university.applicationLink !== '#' && (
              <Button asChild size="lg" className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href={university.applicationLink} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-5 w-5 rtl:ml-2 rtl:mr-0" />
                  التقديم الآن
                </Link>
              </Button>
            )}
          </CardFooter>
        )}
      </Card>
    </div>
  );
}
