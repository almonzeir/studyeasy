import { universities } from '@/data/universities';
import type { University } from '@/types/university';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, MapPin, BookOpen, DollarSign, ShieldCheck, Info, ExternalLink, Globe, BookCopy, Award } from 'lucide-react';
import { getUniversityDetailsByName } from '@/ai/flows/get-university-details-flow';

async function getUniversityData(idOrNameFromUrl: string): Promise<University | undefined> {
  let decodedIdOrName: string;
  try {
    decodedIdOrName = decodeURIComponent(idOrNameFromUrl);
  } catch (e) {
    console.warn("Failed to decode university ID/Name from URL:", idOrNameFromUrl, e);
    decodedIdOrName = idOrNameFromUrl; // Use as is if decoding fails
  }

  // 1. Try to find in universities by ID or name.
  const mockUni = universities.find((uni) => uni.id === decodedIdOrName || uni.name === decodedIdOrName);
  if (mockUni) {
    // If found in mock, use its data, potentially enriching with AI details if some are missing (optional).
    // For now, we'll just return the mock data if found.
    return mockUni;
  }

  // 2. If not found in mock data, assume it's a university name and fetch from AI.
  console.log(`University name "${decodedIdOrName}" not in mock. Attempting AI fetch.`);
  try {
    const aiDetails = await getUniversityDetailsByName({ universityName: decodedIdOrName });

    if (aiDetails && aiDetails.name) {
      // Construct a University object using AI details.
      // The ID for this AI-fetched university will be its name.
      return {
        ...aiDetails, // Spread AI's output first
        id: aiDetails.name, // Use the AI-provided name as the ID
        name: aiDetails.name,
        // Ensure other fields have fallbacks if not provided by AI
        city: aiDetails.city,
        annualFees: aiDetails.annualFees === undefined ? 'N/A' : Number(aiDetails.annualFees),
        availableCourses: aiDetails.availableCourses || [],
        description: aiDetails.description || 'No description available.',
        logoUrl: aiDetails.logoUrl || `https://placehold.co/100x100.png`,
        imageUrl: aiDetails.imageUrl || `https://placehold.co/600x400.png`,
        dataAiHint: aiDetails.dataAiHint || 'university campus',
        livingCosts: aiDetails.livingCosts,
        acceptanceCriteria: aiDetails.acceptanceCriteria || [],
        officialWebsiteUrl: aiDetails.officialWebsiteUrl,
        applicationLink: aiDetails.applicationLink,
        studentHandbookUrl: aiDetails.studentHandbookUrl,
        ranking: aiDetails.ranking, // Add ranking from AI
      };
    }
    console.warn(`AI fetch for "${decodedIdOrName}" did not return sufficient details (name missing).`);
    return undefined;
  } catch (error) {
    console.error(`Error fetching university details from AI for name "${decodedIdOrName}":`, error);
    return undefined;
  }
}

export default async function UniversityDetailPage({ params }: { params: { id: string } }) {
  const university = await getUniversityData(params.id);

  if (!university) {
    notFound();
  }

  const SectionTitle = ({ icon: Icon, title }: { icon: React.ElementType, title: string }) => (
    <div className="mb-4 flex items-center border-b-2 border-accent pb-2">
      <Icon className="mr-3 h-6 w-6 md:h-7 md:w-7 text-accent rtl:ml-3 rtl:mr-0" />
      <h2 className="font-headline text-xl font-semibold text-primary md:text-2xl">
        {title}
      </h2>
    </div>
  );


  return (
    <div className="container py-8 md:py-12 lg:py-16">
      <Button asChild variant="outline" className="mb-6 md:mb-8 group hover:border-accent hover:text-accent transition-colors">
        <Link href="/universities">
          <ArrowLeft className="mr-2 h-4 w-4 rtl:ml-2 rtl:mr-0 transition-transform group-hover:-translate-x-1 rtl:group-hover:translate-x-1" />
          العودة إلى قائمة الجامعات
        </Link>
      </Button>

      <Card className="overflow-hidden shadow-2xl rounded-xl">
        <CardHeader className="relative p-0">
          {university.imageUrl && (
            <div className="relative h-60 w-full sm:h-72 md:h-96 lg:h-[500px]">
              <Image
                src={university.imageUrl}
                alt={`Campus of ${university.name}`}
                layout="fill"
                objectFit="cover"
                priority
                data-ai-hint={university.dataAiHint || "university campus"}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            </div>
          )}
          <div className="absolute bottom-0 w-full p-4 md:p-6 lg:p-10 bg-gradient-to-t from-black/90 to-transparent">
            <div className="flex flex-col sm:flex-row items-center sm:items-end mb-2">
                {university.logoUrl && (
                    <div className="relative mr-0 sm:mr-4 mb-3 sm:mb-0 h-16 w-16 sm:h-20 sm:w-20 shrink-0 overflow-hidden rounded-lg border-2 border-accent bg-card p-1 sm:p-1.5 rtl:ml-0 sm:ml-4 rtl:mr-0 shadow-md">
                    <Image
                        src={university.logoUrl}
                        alt={`${university.name} logo`}
                        layout="fill"
                        objectFit="contain"
                        data-ai-hint="university logo"
                    />
                    </div>
                )}
                <div className="text-center sm:text-left">
                    <CardTitle className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.8)' }}>
                    {university.name}
                    </CardTitle>
                    {university.city && (
                    <div className="mt-1 sm:mt-2 flex items-center justify-center sm:justify-start text-sm sm:text-base text-accent">
                        <MapPin className="mr-2 h-4 w-4 sm:h-5 sm:w-5 rtl:ml-2 rtl:mr-0" />
                        <span>{university.city}</span>
                    </div>
                    )}
                </div>
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-4 md:p-6 lg:p-10 space-y-8 md:space-y-10">
          {university.description && (
            <section>
              <SectionTitle icon={Info} title="عن الجامعة" />
              <CardDescription className="text-sm leading-relaxed text-foreground/90 md:text-base lg:text-lg">
                {university.description}
              </CardDescription>
            </section>
          )}

          {university.ranking && (university.ranking.global || university.ranking.national) && (
            <section>
              <SectionTitle icon={Award} title="التصنيف الجامعي" />
              <ul className="space-y-2 text-sm text-foreground/90 md:text-base md:space-y-3">
                {university.ranking.global && (
                  <li>
                    <strong>التصنيف العالمي:</strong> {university.ranking.global}
                  </li>
                )}
                {university.ranking.national && (
                  <li>
                    <strong>التصنيف الوطني:</strong> {university.ranking.national}
                  </li>
                )}
                {university.ranking.source && (
                  <li>
                    <strong>مصدر التصنيف:</strong> {university.ranking.source}
                  </li>
                )}
              </ul>
              {!university.ranking.global && !university.ranking.national && (
                 <p className="text-muted-foreground text-sm md:text-base">لا تتوفر معلومات تصنيف حاليًا.</p>
              )}
            </section>
          )}

          <div className="grid gap-8 md:grid-cols-2 md:gap-10">
            <section>
              <SectionTitle icon={BookOpen} title="التخصصات المتاحة" />
              {university.availableCourses && university.availableCourses.length > 0 ? (
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {university.availableCourses.map((course) => (
                    <Badge key={course} variant="secondary" className="px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm shadow-sm hover:bg-accent/20 transition-colors">
                      {course}
                    </Badge>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground text-sm md:text-base">لا توجد معلومات عن التخصصات حاليًا.</p>
              )}
            </section>

            <section>
              <SectionTitle icon={DollarSign} title="الرسوم والتكاليف" />
              <ul className="space-y-2 text-sm text-foreground/90 md:text-base md:space-y-3">
                <li>
                  <strong>الرسوم السنوية:</strong> ${typeof university.annualFees === 'number' ? university.annualFees.toLocaleString() : university.annualFees ?? 'غير متوفر'}
                </li>
                {university.livingCosts && (
                  <li>
                    <strong>تكاليف المعيشة الشهرية التقديرية:</strong> {university.livingCosts}
                  </li>
                )}
              </ul>
            </section>
          </div>

          {university.acceptanceCriteria && university.acceptanceCriteria.length > 0 && (
            <section>
              <SectionTitle icon={ShieldCheck} title="شروط القبول" />
              <ul className="list-disc space-y-1.5 pr-4 text-sm text-foreground/90 rtl:pl-4 rtl:pr-0 md:text-base md:space-y-2 md:pr-5 rtl:md:pl-5">
                {university.acceptanceCriteria.map((criterion, index) => (
                  <li key={index}>{criterion}</li>
                ))}
              </ul>
            </section>
          )}
        </CardContent>

        {(university.officialWebsiteUrl || (university.applicationLink && university.applicationLink !== '#') || university.studentHandbookUrl) && (
          <CardFooter className="bg-secondary/20 p-4 md:p-6 lg:p-8 flex flex-col sm:flex-row gap-3 md:gap-4 items-stretch">
            {university.officialWebsiteUrl && (
              <Button asChild size="lg" variant="outline" className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105 text-sm md:text-base">
                <Link href={university.officialWebsiteUrl} target="_blank" rel="noopener noreferrer">
                  <Globe className="mr-2 h-4 w-4 md:h-5 md:w-5 rtl:ml-2 rtl:mr-0" />
                  الموقع الرسمي
                </Link>
              </Button>
            )}
            {university.applicationLink && university.applicationLink !== '#' && (
              <Button asChild size="lg" className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 transform hover:scale-105 text-sm md:text-base">
                <Link href={university.applicationLink} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4 md:h-5 md:w-5 rtl:ml-2 rtl:mr-0" />
                  التقديم الآن
                </Link>
              </Button>
            )}
            {university.studentHandbookUrl && (
              <Button asChild size="lg" variant="outline" className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105 text-sm md:text-base">
                <Link href={university.studentHandbookUrl} target="_blank" rel="noopener noreferrer">
                  <BookCopy className="mr-2 h-4 w-4 md:h-5 md:w-5 rtl:ml-2 rtl:mr-0" />
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
