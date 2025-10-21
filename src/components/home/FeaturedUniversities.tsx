"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { useLanguage } from "@/components/layout/LanguageProvider";
import { Button } from "@/components/ui/button";
import UniversityCard from "@/components/university/UniversityCard";
import { universities } from "@/data/universities";
import { cn } from "@/lib/utils";

const copy = {
  en: {
    heading: "Featured universities",
    highlight: "in Malaysia",
    description:
      "Explore a curated shortlist spanning research powerhouses, industry-focused campuses, and boutique private universities that welcome international students.",
    viewAll: "View all universities",
  },
  ar: {
    heading: "\u062c\u0627\u0645\u0639\u0627\u062a \u0645\u062e\u062a\u0627\u0631\u0629",
    highlight: "\u0641\u064a \u0645\u0627\u0644\u064a\u0632\u064a\u0627",
    description: "\u0627\u0633\u062a\u0643\u0634\u0641 \u0642\u0627\u0626\u0645\u0629 \u0645\u0646\u062a\u0642\u0627\u0629 \u062a\u0634\u0645\u0644 \u0627\u0644\u062c\u0627\u0645\u0639\u0627\u062a \u0627\u0644\u0628\u062d\u062b\u064a\u0629 \u0627\u0644\u0642\u0648\u064a\u0629 \u0648\u0627\u0644\u062d\u0631\u0645 \u0627\u0644\u062c\u0627\u0645\u0639\u064a \u0627\u0644\u0645\u0631\u062a\u0628\u0637 \u0628\u0627\u0644\u0635\u0646\u0627\u0639\u0629 \u0648\u0627\u0644\u0645\u0624\u0633\u0633\u0627\u062a \u0627\u0644\u062e\u0627\u0635\u0629 \u0627\u0644\u0645\u0645\u064a\u0632\u0629 \u0627\u0644\u062a\u064a \u062a\u0631\u062d\u0628 \u0628\u0627\u0644\u0637\u0644\u0627\u0628 \u0627\u0644\u062f\u0648\u0644\u064a\u064a\u0646.",
    viewAll: "\u0639\u0631\u0636 \u062c\u0645\u064a\u0639 \u0627\u0644\u062c\u0627\u0645\u0639\u0627\u062a",
  },
} as const;

export function FeaturedUniversities() {
  const { language } = useLanguage();
  const content = copy[language];
  const isArabic = language === "ar";
  const featuredUniversities = universities.slice(0, 3);

  return (
    <section className="bg-transparent py-16 md:py-24">
      <div className="container">
        <div className={cn("mx-auto mb-14 max-w-2xl text-center", isArabic && "text-right md:text-center")}>
          <h2 className="font-headline text-4xl font-bold md:text-5xl">
            {content.heading} <span className="text-accent">{content.highlight}</span>
          </h2>
          <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-accent" />
          <p className="mt-6 text-lg text-muted-foreground">{content.description}</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredUniversities.map((uni) => (
            <UniversityCard key={uni.id} uni={uni} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="link" className="text-lg text-accent hover:text-accent/80">
            <Link href="/universities">
              {content.viewAll}
              <ArrowRight className="ms-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
