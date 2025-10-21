"use client";

import { useLanguage } from "@/components/layout/LanguageProvider";
import { cn } from "@/lib/utils";

const copy = {
  en: {
    line1: "Built to help international students feel confident about studying in Malaysia.",
    line2: "Feedback or partnership ideas? Drop us a note through the contact page and we will get back to you within two business days.",
  },
  ar: {
    line1: "\u0645\u0646\u0635\u0629 \u0635\u0645\u0645\u0646\u0627\u0647\u0627 \u0644\u0645\u0633\u0627\u0639\u062f\u0629 \u0627\u0644\u0637\u0644\u0627\u0628 \u0627\u0644\u062f\u0648\u0644\u064a\u064a\u0646 \u0639\u0644\u0649 \u0627\u0644\u062f\u0631\u0627\u0633\u0629 \u0641\u064a \u0645\u0627\u0644\u064a\u0632\u064a\u0627 \u0628\u062b\u0642\u0629.",
    line2: "\u0647\u0644 \u0644\u062f\u064a\u0643 \u0645\u0644\u0627\u062d\u0638\u0627\u062a \u0623\u0648 \u0623\u0641\u0643\u0627\u0631 \u0644\u0644\u062a\u0639\u0627\u0648\u0646\u061f \u0631\u0627\u0633\u0644\u0646\u0627 \u0639\u0628\u0631 \u0635\u0641\u062d\u0629 \u0627\u0644\u062a\u0648\u0627\u0635\u0644 \u0648\u0633\u0646\u0639\u0648\u062f \u0625\u0644\u064a\u0643 \u062e\u0644\u0627\u0644 \u064a\u0648\u0645\u064a \u0639\u0645\u0644.",
  },
} as const;

export function Footer() {
  const { language } = useLanguage();
  const content = copy[language];
  const isArabic = language === "ar";

  return (
    <footer className="border-t border-border/40 py-8 text-center text-sm text-muted-foreground">
      <div className={cn("container space-y-1", isArabic && "text-right md:text-center")}>
        <p>
          &copy; {new Date().getFullYear()} StudyEasy Malaysia. {content.line1}
        </p>
        <p>{content.line2}</p>
      </div>
    </footer>
  );
}
