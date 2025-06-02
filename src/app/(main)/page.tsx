
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
      <section className="relative py-20 text-primary-foreground md:py-32">
        <div className="absolute inset-0">
          <Image
            src="https://rare-gallery.com/uploads/posts/733421-Malaysia-Skyscrapers-Night-Kuala-Lumpur.jpg"
            alt="Kuala Lumpur skyline at night"
            layout="fill"
            objectFit="cover"
            priority
            quality={85}
            data-ai-hint="city skyline night"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-background/80" />
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
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in">
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
      <section className="py-16 bg-transparent md:py-24">
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
            <Button asChild variant="link" className="text-lg text-accent">
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
