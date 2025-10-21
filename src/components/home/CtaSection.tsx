"use client";

import Link from "next/link";
import { BotMessageSquare } from "lucide-react";

import { useLanguage } from "@/components/layout/LanguageProvider";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const copy = {
  en: {
    heading: "Need a personalised walkthrough?",
    description:
      "Chat with our AI Study Coach to get answers tailored to your goals, programme, and budget. It pulls from the same data powering StudyEasy, so you can move forward with clarity.",
    button: "Talk to the AI Study Coach",
  },
  ar: {
    heading: "\u0647\u0644 \u062a\u062d\u062a\u0627\u062c \u0625\u0644\u0649 \u0625\u0631\u0634\u0627\u062f \u0645\u062e\u0635\u0635\u061f",
    description: "\u062a\u062d\u062f\u062b \u0645\u0639 \u0645\u0633\u0627\u0639\u062f \u0627\u0644\u062f\u0631\u0627\u0633\u0629 \u0628\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a \u0644\u062a\u062d\u0635\u0644 \u0639\u0644\u0649 \u0625\u062c\u0627\u0628\u0627\u062a \u0645\u062a\u0648\u0627\u0641\u0642\u0629 \u0645\u0639 \u0623\u0647\u062f\u0627\u0641\u0643 \u0648\u0628\u0631\u0627\u0645\u062c\u0643 \u0648\u0645\u064a\u0632\u0627\u0646\u064a\u062a\u0643. \u064a\u0639\u062a\u0645\u062f \u0639\u0644\u0649 \u0646\u0641\u0633 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u062a\u064a \u062a\u063a\u0630\u064a StudyEasy \u0644\u062a\u0648\u0627\u0635\u0644 \u0627\u0644\u062a\u0642\u062f\u0645 \u0628\u062b\u0642\u0629.",
    button: "\u062a\u062d\u062f\u062b \u0645\u0639 \u0645\u0633\u0627\u0639\u062f \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a",
  },
} as const;

export function CtaSection() {
  const { language } = useLanguage();
  const content = copy[language];
  const isArabic = language === "ar";

  return (
    <section className="bg-primary/5 py-16 md:py-24">
      <div className={cn("container text-center", isArabic && "text-right md:text-center")}>
        <div className="mx-auto mb-10 max-w-2xl">
          <h2 className="font-headline text-4xl font-bold md:text-5xl">{content.heading}</h2>
          <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-accent" />
        </div>
        <p className="mx-auto mb-10 max-w-3xl text-lg text-foreground/80 md:text-xl">{content.description}</p>
        <Button
          asChild
          size="lg"
          className="bg-accent text-accent-foreground shadow-lg shadow-accent/40 transition-transform hover:scale-[1.02] hover:bg-accent/90 hover:shadow-accent/60"
        >
          <Link href="/chatbot">
            <BotMessageSquare className="me-2 h-5 w-5" />
            {content.button}
          </Link>
        </Button>
      </div>
    </section>
  );
}
