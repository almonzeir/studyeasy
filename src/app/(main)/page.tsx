import { HeroSection } from '@/components/home/HeroSection';
import { FeaturedUniversities } from '@/components/home/FeaturedUniversities';
import { CtaSection } from '@/components/home/CtaSection';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <FeaturedUniversities />
      <CtaSection />
    </div>
  );
}
