
import { mockUniversities } from '@/data/universities';
import type { University } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, MapPin, BookOpen, DollarSign, ShieldCheck, Info, ExternalLink, Globe, BookCopy } from 'lucide-react';

async function getUniversityById(id: string): Promise<University | undefined> {
  return mockUniversities.find((uni) => uni.id === id);
}

export default async function UniversityDetailPage({ params }: { params: { id: string } }) {
  const university = await getUniversityById(params.id);

  if (!university) {
    notFound();
  }

  const SectionTitle = ({ icon: Icon, title }: { icon: React.ElementType, title: string }) => (
    <div className="mb-4 flex items-center border-b-2 border-accent pb-2">
      <Icon className="mr-3 h-7 w-7 text-accent rtl:ml-3 rtl:mr-0" />
      <h2 className="font-headline text-2xl font-semibold text-primary">
        {title}
      </h2>
    </div>
  );


  return (
    <div className="container py-12 md:py-16">
      <Button asChild variant="outline" className="mb-8 group hover:border-accent hover:text-accent transition-colors">
        <Link href="/universities">
          <ArrowLeft className="mr-2 h-4 w-4 rtl:ml-2 rtl:mr-0 transition-transform group-hover:-translate-x-1 rtl:group-hover:translate-x-1" />
          العودة إلى قائمة الجامعات
        </Link>
      </Button>

      <Card className="overflow-hidden shadow-2xl rounded-xl"> {/* Enhanced shadow and rounding */}
        <CardHeader className="relative p-0">
          {university.imageUrl && (
            <div className="relative h-72 w-full md:h-[500px]"> {/* Increased height */}
              <Image
                src={university.imageUrl}
                alt={`Campus of ${university.name}`}
                layout="fill"
                objectFit="cover"
                priority
                data-ai-hint={university.dataAiHint || "university campus"}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" /> {/* Darker gradient */}
            </div>
          )}
          <div className="absolute bottom-0 w-full p-6 md:p-10 bg-gradient-to-t from-black/90 to-transparent"> {/* Darker gradient, more padding */}
            <div className="flex items-center mb-2">
                {university.logoUrl && (
                    <div className="relative mr-4 h-20 w-20 shrink-0 overflow-hidden rounded-lg border-2 border-accent bg-card p-1.5 rtl:ml-4 rtl:mr-0 shadow-md"> {/* Increased size, shadow */}
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
                    <CardTitle className="font-headline text-4xl font-bold text-primary-foreground md:text-5xl" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.8)' }}> {/* Increased size, stronger shadow */}
                    {university.name}
                    </CardTitle>
                    {university.city && (
                    <div className="mt-2 flex items-center text-base text-accent"> {/* Increased size */}
                        <MapPin className="mr-2 h-5 w-5 rtl:ml-2 rtl:mr-0" />
                        <span>{university.city}</span>
                    </div>
                    )}
                </div>
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-6 md:p-10 space-y-10"> {/* Increased padding and spacing */}
          {university.description && (
            <section>
              <SectionTitle icon={Info} title="عن الجامعة" />
              <CardDescription className="text-base leading-relaxed text-foreground/90 md:text-lg"> {/* Increased font size */}
                {university.description}
              </CardDescription>
            </section>
          )}

          <div className="grid gap-10 md:grid-cols-2"> {/* Increased gap */}
            <section>
              <SectionTitle icon={BookOpen} title="التخصصات المتاحة" />
              {university.availableCourses && university.availableCourses.length > 0 ? (
                <div className="flex flex-wrap gap-3"> {/* Increased gap */}
                  {university.availableCourses.map((course) => (
                    <Badge key={course} variant="secondary" className="px-4 py-2 text-sm shadow-sm hover:bg-accent/20 transition-colors"> {/* Larger badges, hover effect */}
                      {course}
                    </Badge>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground">لا توجد معلومات عن التخصصات حاليًا.</p>
              )}
            </section>

            <section>
              <SectionTitle icon={DollarSign} title="الرسوم والتكاليف" />
              <ul className="space-y-3 text-foreground/90 text-base md:text-lg"> {/* Increased spacing and font size */}
                <li>
                  <strong>الرسوم السنوية:</strong> ${university.annualFees?.toLocaleString() ?? 'غير متوفر'}
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
            <section>
              <SectionTitle icon={ShieldCheck} title="شروط القبول" />
              <ul className="list-disc space-y-2 pr-5 text-foreground/90 rtl:pl-5 rtl:pr-0 text-base md:text-lg"> {/* Increased spacing and font size */}
                {university.acceptanceCriteria.map((criterion, index) => (
                  <li key={index}>{criterion}</li>
                ))}
              </ul>
            </section>
          )}
        </CardContent>

        {(university.officialWebsiteUrl || (university.applicationLink && university.applicationLink !== '#') || university.studentHandbookUrl) && (
          <CardFooter className="bg-secondary/20 p-6 md:p-8 flex flex-col sm:flex-row gap-4 items-stretch"> {/* items-stretch for equal height buttons */}
            {university.officialWebsiteUrl && (
              <Button asChild size="lg" variant="outline" className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105">
                <Link href={university.officialWebsiteUrl} target="_blank" rel="noopener noreferrer">
                  <Globe className="mr-2 h-5 w-5 rtl:ml-2 rtl:mr-0" />
                  الموقع الرسمي
                </Link>
              </Button>
            )}
            {university.applicationLink && university.applicationLink !== '#' && (
              <Button asChild size="lg" className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 transform hover:scale-105">
                <Link href={university.applicationLink} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-5 w-5 rtl:ml-2 rtl:mr-0" />
                  التقديم الآن
                </Link>
              </Button>
            )}
            {university.studentHandbookUrl && (
              <Button asChild size="lg" variant="outline" className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105">
                <Link href={university.studentHandbookUrl} target="_blank" rel="noopener noreferrer">
                  <BookCopy className="mr-2 h-5 w-5 rtl:ml-2 rtl:mr-0" />
                  دليل الطالب
                </Link>
              </Button>
            )}
          </CardFooter>
        )}
      </Card>
    </div>
  );
}
