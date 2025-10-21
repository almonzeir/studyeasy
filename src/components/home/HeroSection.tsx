"use client";

import Image from "next/image";
import Link from "next/link";
import { GraduationCap, MapPin, ShieldCheck, Wand2 } from "lucide-react";

import { useLanguage } from "@/components/layout/LanguageProvider";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const copy = {
  en: {
    badge: "Study in Malaysia, made simple",
    heading: "Build your Malaysian study plan with confidence",
    description:
      "Compare universities, map out your budget, and stay on top of visa requirements. StudyEasy gives you the clarity and structure to take the next step.",
    highlights: [
      { icon: GraduationCap, label: "Compare top Malaysian universities in one place." },
      { icon: MapPin, label: "Understand city life, living costs, and student neighborhoods." },
      { icon: ShieldCheck, label: "Follow a visa checklist built for international applicants." },
    ],
    primaryCta: "Launch the study wizard",
    secondaryCta: "Browse universities",
  },
  ar: {
    badge: "\u0627\u0644\u062f\u0631\u0627\u0633\u0629 \u0641\u064a \u0645\u0627\u0644\u064a\u0632\u064a\u0627 \u0623\u0635\u0628\u062d\u062a \u0623\u0633\u0647\u0644",
    heading: "\u0627\u0628\u0646\u0650 \u062e\u0637\u062a\u0643 \u0627\u0644\u062f\u0631\u0627\u0633\u064a\u0629 \u0641\u064a \u0645\u0627\u0644\u064a\u0632\u064a\u0627 \u0628\u062b\u0642\u0629",
    description: "\u0642\u0627\u0631\u0646 \u0628\u064a\u0646 \u0627\u0644\u062c\u0627\u0645\u0639\u0627\u062a\u060c \u0648\u0636\u0639 \u0645\u064a\u0632\u0627\u0646\u064a\u062a\u0643\u060c \u0648\u062a\u0627\u0628\u0639 \u0645\u062a\u0637\u0644\u0628\u0627\u062a \u0627\u0644\u062a\u0623\u0634\u064a\u0631\u0629. \u064a\u0645\u0646\u062d\u0643 StudyEasy \u0627\u0644\u0648\u0636\u0648\u062d \u0648\u0627\u0644\u062e\u0637\u0648\u0627\u062a \u0627\u0644\u0644\u0627\u0632\u0645\u0629 \u0644\u0644\u0627\u0646\u062a\u0642\u0627\u0644 \u0625\u0644\u0649 \u0627\u0644\u0645\u0631\u062d\u0644\u0629 \u0627\u0644\u062a\u0627\u0644\u064a\u0629.",
    highlights: [
      { icon: GraduationCap, label: "\u0642\u0627\u0631\u0646 \u0628\u064a\u0646 \u0623\u0628\u0631\u0632 \u0627\u0644\u062c\u0627\u0645\u0639\u0627\u062a \u0627\u0644\u0645\u0627\u0644\u064a\u0632\u064a\u0629 \u0641\u064a \u0645\u0643\u0627\u0646 \u0648\u0627\u062d\u062f." },
      { icon: MapPin, label: "\u062a\u0639\u0631\u0651\u0641 \u0639\u0644\u0649 \u0646\u0645\u0637 \u0627\u0644\u062d\u064a\u0627\u0629 \u0641\u064a \u0627\u0644\u0645\u062f\u0646 \u0648\u062a\u0643\u0627\u0644\u064a\u0641 \u0627\u0644\u0645\u0639\u064a\u0634\u0629 \u0648\u0627\u0644\u0623\u062d\u064a\u0627\u0621 \u0627\u0644\u0637\u0644\u0627\u0628\u064a\u0629." },
      { icon: ShieldCheck, label: "\u0627\u062a\u0628\u0639 \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u062a\u062d\u0642\u0642 \u0645\u0646 \u0627\u0644\u062a\u0623\u0634\u064a\u0631\u0629 \u0627\u0644\u0645\u0635\u0645\u0645\u0629 \u0644\u0644\u0637\u0644\u0627\u0628 \u0627\u0644\u062f\u0648\u0644\u064a\u064a\u0646." },
    ],
    primaryCta: "\u0627\u0628\u062f\u0623 \u0627\u0644\u0645\u0631\u0634\u062f \u0627\u0644\u062f\u0631\u0627\u0633\u064a",
    secondaryCta: "\u0627\u0633\u062a\u0639\u0631\u0636 \u0627\u0644\u062c\u0627\u0645\u0639\u0627\u062a",
  },
} as const;

export function HeroSection() {
  const { language } = useLanguage();
  const content = copy[language];
  const isArabic = language === "ar";

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-kuala-lumpur.png"
          alt="Kuala Lumpur skyline at dusk"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-slate-900/35 sm:bg-gradient-to-br" />
      </div>

      <div className="relative z-10">
        <div className="container flex flex-col gap-10 py-28 text-primary-foreground md:flex-row md:items-center md:justify-between md:py-36 lg:py-44">
          <div className={cn("max-w-2xl space-y-8", isArabic && "text-right")}
          >
            <span className="inline-flex items-center rounded-full bg-accent/20 px-4 py-1 text-sm font-semibold text-accent shadow-sm ring-1 ring-accent/40">
              {content.badge}
            </span>

            <h1 className="font-headline text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              {content.heading}
            </h1>

            <p className="text-lg text-slate-200/90 sm:text-xl">
              {content.description}
            </p>

            <div className={cn("flex flex-col gap-4 sm:flex-row sm:items-center", isArabic && "sm:flex-row-reverse")}
            >
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground shadow-xl shadow-accent/40 hover:bg-accent/90"
              >
                <Link href="/wizard">
                  <Wand2 className="me-2 h-5 w-5" />
                  {content.primaryCta}
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-accent/60 bg-white/5 text-white hover:bg-white/10 hover:text-white"
              >
                <Link href="/universities">{content.secondaryCta}</Link>
              </Button>
            </div>
          </div>

          <ul className="grid gap-4 md:max-w-sm">
            {content.highlights.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className={cn(
                  "flex items-start gap-4 rounded-xl border border-white/15 bg-white/10 p-5 backdrop-blur",
                  isArabic && "flex-row-reverse text-right",
                )}
              >
                <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent/20 text-accent">
                  <Icon className="h-5 w-5" />
                </span>
                <p className="text-base text-slate-100/90">{label}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
