import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { UniversityCard } from '@/components/university/UniversityCard';
import { mockUniversities } from '@/data/universities';
import Image from 'next/image'; // Ensure Image is imported from next/image
import { ChevronLeft } from 'lucide-react';
// BotMessageSquare is used later, Wand2 is used in Hero
// import { BotMessageSquare } from 'lucide-react'; // This was a local SVG, keeping local for now.

export default function HomePage() {
  const featuredUniversities = mockUniversities.slice(0, 3); // Show first 3 as featured

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 text-primary-foreground">
        {/* Background Image and Overlay Container */}
        <div className="absolute inset-0">
          <Image
            src="https://rare-gallery.com/uploads/posts/733421-Malaysia-Skyscrapers-Night-Kuala-Lumpur.jpg"
            alt="Kuala Lumpur skyline at night, a beacon for your educational journey in Malaysia"
            layout="fill"
            objectFit="cover"
            data-ai-hint="malaysia skyline night"
            priority // Ensures LCP optimization
          />
          {/* Overlay for better text contrast and visual depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70"></div>
        </div>

        <div className="container relative z-10 text-center">
          <h1
            className="mb-6 font-headline text-5xl font-bold md:text-6xl lg:text-7xl animate-fade-in-down"
            style={{ textShadow: '0 2px 6px rgba(0, 0, 0, 0.7)' }}
          >
            أهلاً بك في <span className="text-accent" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.5)' }}>دليلك في ماليزيا</span>
          </h1>
          <p
            className="mb-8 text-lg md:text-xl lg:text-2xl text-primary-foreground/95 animate-fade-in-up"
            style={{ textShadow: '0 1px 4px rgba(0, 0, 0, 0.6)' }}
          >
            استكشف أفضل الجامعات الماليزية وابدأ رحلتك الأكاديمية معنا.
          </p>
          <div className="flex flex-col items-center sm:flex-row justify-center gap-4 animate-fade-in">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 transition-transform hover:scale-105 shadow-xl hover:shadow-accent/50 focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background">
              <Link href="/wizard">
                <Wand2 className="mr-2 h-5 w-5 rtl:ml-2 rtl:mr-0" />
                ابدأ بمساعد الاختيار
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:text-accent-foreground hover:bg-accent/90 transition-transform hover:scale-105 bg-black/40 hover:border-accent backdrop-blur-sm shadow-xl hover:shadow-accent/40 focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background">
              <Link href="/universities">
                تصفح الجامعات
                <ChevronLeft className="ml-2 h-5 w-5 rtl:mr-2 rtl:ml-0" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Universities Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <h2 className="mb-12 text-center font-headline text-3xl font-bold md:text-4xl">
            الجامعات <span className="text-accent">المميزة</span>
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredUniversities.map((uni) => (
              <UniversityCard key={uni.id} university={uni} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="link" className="text-accent text-lg">
              <Link href="/universities">
                عرض جميع الجامعات
                <ChevronLeft className="ml-2 h-4 w-4 rtl:mr-2 rtl:ml-0" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-24 bg-primary/10">
        <div className="container text-center">
          <h2 className="mb-6 font-headline text-3xl font-bold md:text-4xl">
            هل أنت مستعد لبدء رحلتك؟
          </h2>
          <p className="mb-8 text-lg text-foreground/80 md:text-xl">
            دعنا نساعدك في كل خطوة، من اختيار الجامعة المناسبة حتى القبول وبدء الدراسة.
          </p>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/chatbot">
              <BotMessageSquare className="mr-2 h-5 w-5 rtl:ml-2 rtl:mr-0" />
              تحدث مع المستشار الذكي
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

// Dummy icons for illustrative purposes until actual icons are integrated
const Wand2 = ({ className }: { className: string }) => <svg className={className} fill="currentColor" viewBox="0 0 20 20"><path d="M11.05 2.142a.75.75 0 01.09.626l-.48 2.046a.75.75 0 00.76.839l2.047-.48a.75.75 0 01.625.091l3.536 3.535a.75.75 0 01-.09.939l-2.047 2.046a.75.75 0 00.072 1.045l2.046 2.047a.75.75 0 01-.938.09l-3.536-3.535a.75.75 0 00-1.045-.072l-2.047 2.047a.75.75 0 01-.09.625l.48 2.047a.75.75 0 00.839.76l2.046-.48a.75.75 0 01.626.09l3.535 3.536a.75.75 0 01-.939.939l-2.046-.48a.75.75 0 00-.76.839l.48 2.046a.75.75 0 01-.09.626l-3.536 3.535a.75.75 0 01-.939-.09l-2.046-2.046a.75.75 0 00-1.045.072l-2.047-2.046a.75.75 0 01-.625-.09l-2.047.48a.75.75 0 00-.839-.76l-.48-2.046a.75.75 0 01.09-.626l3.535-3.535a.75.75 0 00.072-1.045L2.14 8.95a.75.75 0 01.939-.09l3.535 3.536a.75.75 0 001.045.072l2.047-2.047a.75.75 0 01.09-.625l-.48-2.047a.75.75 0 00-.839-.76L6.404 9.05a.75.75 0 01-.626-.09L2.243 5.424a.75.75 0 01.939-.939l2.046.48a.75.75 0 00.76-.839L5.424 2.08a.75.75 0 01.09-.626l3.536-3.535a.75.75 0 01.939.09l2.046 2.046a.75.75 0 001.045-.072l2.047 2.046zM10 12a2 2 0 100-4 2 2 0 000 4z" /></svg>;
const BotMessageSquare = ({ className }: { className: string }) => <svg className={className} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.5 2A2.5 2.5 0 002 4.5v6A2.5 2.5 0 004.5 13H5v2.5A2.5 2.5 0 007.5 18h6a2.5 2.5 0 002.5-2.5V13h.5A2.5 2.5 0 0018 10.5v-6A2.5 2.5 0 0015.5 2h-11zM10 6a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0V6zm3 .75A.75.75 0 0112.25 6v1.5a.75.75 0 01-1.5 0V6a.75.75 0 011.5-.75zm-6 0A.75.75 0 016.25 6v1.5a.75.75 0 01-1.5 0V6A.75.75 0 017 .75z" clipRule="evenodd" /></svg>;
