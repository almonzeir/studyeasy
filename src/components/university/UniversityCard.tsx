"use client";

import Link from "next/link";
import { ArrowUpRight, DollarSign, Globe2, GraduationCap, Home, MapPin } from "lucide-react";

import { useLanguage } from "@/components/layout/LanguageProvider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import SmartImage from "../SmartImage";
import type { University } from "@/types/university";

type Props = { uni: University };

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const copy = {
  en: {
    tuitionLabel: "Estimated annual tuition:",
    livingLabel: "Typical living costs:",
    coursesTitle: "Popular study areas",
    officeLabel: "International office:",
    officeFallback: "See university site",
    apply: "Apply",
    visit: "Visit site",
    contactUniversity: "Contact university",
    badgePlaceholder: "Programme information coming soon",
  },
  ar: {
    tuitionLabel: "\u0627\u0644\u0631\u0633\u0648\u0645 \u0627\u0644\u062a\u0642\u062f\u064a\u0631\u064a\u0629 \u0633\u0646\u0648\u064a\u064b\u0627:",
    livingLabel: "\u0645\u062a\u0648\u0633\u0637 \u062a\u0643\u0627\u0644\u064a\u0641 \u0627\u0644\u0645\u0639\u064a\u0634\u0629:",
    coursesTitle: "\u0623\u0628\u0631\u0632 \u0627\u0644\u062a\u062e\u0635\u0635\u0627\u062a \u0627\u0644\u062f\u0631\u0627\u0633\u064a\u0629",
    officeLabel: "\u0645\u0643\u062a\u0628 \u0634\u0624\u0648\u0646 \u0627\u0644\u0637\u0644\u0627\u0628 \u0627\u0644\u062f\u0648\u0644\u064a\u064a\u0646:",
    officeFallback: "\u0631\u0627\u062c\u0639 \u0645\u0648\u0642\u0639 \u0627\u0644\u062c\u0627\u0645\u0639\u0629",
    apply: "\u0642\u062f\u0651\u0645 \u0627\u0644\u0622\u0646",
    visit: "\u0632\u064a\u0627\u0631\u0629 \u0627\u0644\u0645\u0648\u0642\u0639",
    contactUniversity: "\u062a\u0648\u0627\u0635\u0644 \u0645\u0639 \u0627\u0644\u062c\u0627\u0645\u0639\u0629",
    badgePlaceholder: "\u062a\u0641\u0627\u0635\u064a\u0644 \u0627\u0644\u0628\u0631\u0627\u0645\u062c \u0633\u062a\u062a\u0648\u0641\u0631 \u0642\u0631\u064a\u0628\u064b\u0627",
  },
} as const;

const formatFees = (fees: University["annualFees"], language: "en" | "ar", localized?: string) => {
  if (language === "ar" && localized) {
    return localized;
  }

  if (typeof fees === "number") {
    return currencyFormatter.format(fees);
  }

  if (fees) {
    return fees;
  }

  return language === "ar" ? copy.ar.contactUniversity : copy.en.contactUniversity;
};

export default function UniversityCard({ uni }: Props) {
  const { language } = useLanguage();
  const localized = language === "ar" ? uni.translations?.ar : undefined;
  const content = copy[language];
  const featuredCourses = uni.availableCourses.slice(0, 3);
  const isArabic = language === "ar";

  return (
    <Card className="group flex h-full flex-col overflow-hidden border-border/40 bg-card/90 shadow-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-accent/60 hover:shadow-2xl">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-secondary/40 via-secondary/20 to-transparent">
        <SmartImage
          src={uni.imageUrl}
          alt={localized?.name ?? uni.name}
          width={1200}
          height={900}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/60 to-transparent" />
        <div
          className={cn(
            "absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3 text-sm text-white",
            isArabic && "flex-row-reverse text-right",
          )}
        >
          <div className="flex items-center gap-2 rounded-full bg-background/70 px-3 py-1 text-foreground shadow-sm">
            <MapPin className="h-4 w-4 text-accent" />
            <span className="font-medium">{localized?.city ?? uni.city}</span>
          </div>
          {uni.ranking?.global && (
            <div className="flex items-center gap-2 rounded-full bg-background/70 px-3 py-1 text-foreground shadow-sm">
              <Globe2 className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium">
                {language === "ar"
                  ? "\u062a\u0635\u0646\u064a\u0641 QS \u0627\u0644\u0639\u0627\u0644\u0645\u064a #" + uni.ranking.global
                  : "QS global #" + uni.ranking.global}
              </span>
            </div>
          )}
        </div>
      </div>

      <CardContent className={cn("flex flex-1 flex-col gap-6 p-6", isArabic && "text-right")}>
        <div className="space-y-3">
          <h2 className="font-headline text-2xl font-bold text-foreground">{localized?.name ?? uni.name}</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">{localized?.description ?? uni.description}</p>
        </div>

        <div className={cn("space-y-4 text-sm text-muted-foreground", isArabic && "text-right")}>
          <div className={cn("flex items-center gap-2 text-foreground", isArabic && "flex-row-reverse")}>
            <DollarSign className="h-4 w-4 text-accent" />
            <span className="font-medium">{content.tuitionLabel}</span>
            <span>{formatFees(uni.annualFees, language, localized?.annualFees)}</span>
          </div>
          {(localized?.livingCosts || uni.livingCosts) && (
            <div className={cn("flex items-center gap-2", isArabic && "flex-row-reverse")}>
              <Home className="h-4 w-4 text-accent" />
              <span className="font-medium text-foreground">{content.livingLabel}</span>
              <span>{localized?.livingCosts ?? uni.livingCosts}</span>
            </div>
          )}
        </div>

        {featuredCourses.length > 0 && (
          <div className="space-y-3">
            <div className={cn("flex items-center gap-2 text-sm font-medium text-foreground", isArabic && "flex-row-reverse")}>
              <GraduationCap className="h-4 w-4 text-accent" />
              {content.coursesTitle}
            </div>
            <div className={cn("flex flex-wrap gap-2", isArabic && "justify-end")}>
              {featuredCourses.map((course) => (
                <Badge key={course} variant="secondary" className="bg-secondary/80 text-secondary-foreground">
                  {language === "ar" && course === copy.en.badgePlaceholder ? content.badgePlaceholder : course}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </CardContent>

      <Separator className="opacity-60" />

      <CardFooter className={cn("flex flex-wrap items-center justify-between gap-3 p-6", isArabic && "flex-row-reverse text-right")}>
        <div className="text-sm text-muted-foreground">
          <span className="font-medium text-foreground">{content.officeLabel}</span>{" "}
          {uni.officialWebsiteUrl?.replace(/^https?:\/\//, "") ?? content.officeFallback}
        </div>

        <div className={cn("flex gap-2", isArabic && "flex-row-reverse")}>
          {uni.applicationLink && (
            <Button asChild size="sm" variant="outline" className="text-accent hover:text-accent-foreground">
              <Link href={uni.applicationLink} target="_blank" rel="noopener noreferrer">
                {content.apply}
                <ArrowUpRight className="ms-1 h-4 w-4" />
              </Link>
            </Button>
          )}
          {uni.officialWebsiteUrl && (
            <Button asChild size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href={uni.officialWebsiteUrl} target="_blank" rel="noopener noreferrer">
                {content.visit}
                <ArrowUpRight className="ms-1 h-4 w-4" />
              </Link>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
