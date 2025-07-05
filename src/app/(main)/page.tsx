
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { UniversityCard } from '@/components/university/UniversityCard';
import { mockUniversities } from '@/data/universities';
import Image from 'next/image'; 
import { ChevronLeft, Wand2, BotMessageSquare } from 'lucide-react';

export default function HomePage() {
  const featuredUniversities = mockUniversities.slice(0, 3); 

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-24 text-primary-foreground md:py-40"> {/* Increased padding */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-skyline.jpg" // Updated to local path
            alt="Kuala Lumpur skyline at night"
            layout="fill"
            objectFit="cover"
            priority
            quality={85}
            data-ai-hint="city skyline night"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/85" /> {/* Darker, theme-independent overlay */}
        </div>
        <div className="container relative z-10 text-center">
          <h1
            className="mb-6 font-headline text-5xl font-bold sm:text-6xl md:text-7xl lg:text-8xl animate-fade-in-down" /* Increased font size */
            style={{ textShadow: '0 3px 8px rgba(0, 0, 0, 0.8)' }} /* Enhanced shadow */
          >
            أهلاً بك في <span className="text-accent" style={{ textShadow: '0 3px 8px rgba(0,0,0,0.6)' }}>دليلك في ماليزيا</span>
          </h1>
          <p
            className="mb-10 text-lg md:text-xl lg:text-2xl text-primary-foreground/95 animate-fade-in-up" /* Increased margin-bottom */
            style={{ textShadow: '0 2px 5px rgba(0, 0, 0, 0.7)' }} /* Enhanced shadow */
          >
            استكشف أفضل الجامعات الماليزية وابدأ رحلتك الأكاديمية معنا.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 transition-transform hover:scale-105 shadow-xl hover:shadow-accent/50 focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background">
              <Link href="/wizard">
                <Wand2 className="mr-2 h-5 w-5 rtl:ml-2 rtl:mr-0" />
                ابدأ بمساعد الاختيار
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-accent text-accent hover:text-accent-foreground hover:bg-accent/80 transition-transform hover:scale-105 hover:border-accent/80 shadow-xl hover:shadow-accent/40 focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background">
              <Link href="/universities">
                تصفح الجامعات
                <ChevronLeft className="ml-2 h-5 w-5 rtl:mr-2 rtl:ml-0" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Universities Section */}
      <section className="py-16 bg-transparent md:py-24">
        <div className="container">
          <div className="mb-14 text-center"> {/* Increased margin-bottom */}
            <h2 className="font-headline text-4xl font-bold md:text-5xl"> {/* Increased font size */}
              الجامعات <span className="text-accent">المميزة</span>
            </h2>
            <div className="mt-2 h-1 w-24 mx-auto bg-accent rounded-full"></div> {/* Accent underline */}
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredUniversities.map((uni) => (
              <UniversityCard key={uni.id} university={uni} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="link" className="text-lg text-accent hover:text-accent/80">
              <Link href="/universities">
                عرض جميع الجامعات
                <ChevronLeft className="ml-2 h-4 w-4 rtl:mr-2 rtl:ml-0" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-primary/10 md:py-24">
        <div className="container text-center">
           <div className="mb-10 text-center"> {/* Increased margin-bottom */}
            <h2 className="font-headline text-4xl font-bold md:text-5xl"> {/* Increased font size */}
              هل أنت مستعد لبدء رحلتك؟
            </h2>
            <div className="mt-2 h-1 w-32 mx-auto bg-accent rounded-full"></div> {/* Accent underline */}
          </div>
          <p className="mb-8 text-lg text-foreground/80 md:text-xl">
            دعنا نساعدك في كل خطوة، من اختيار الجامعة المناسبة حتى القبول وبدء الدراسة.
          </p>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 transition-transform hover:scale-105 shadow-lg hover:shadow-accent/50">
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
