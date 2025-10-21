"use client";

import { Languages } from "lucide-react";

import { Button } from "@/components/ui/button";

import { useLanguage } from "./LanguageProvider";

const LABELS: Record<"en" | "ar", { button: string; active: string }> = {
  en: { button: "English", active: "EN" },
  ar: { button: "العربية", active: "AR" },
};

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const handleToggle = () => {
    setLanguage(language === "en" ? "ar" : "en");
  };

  const nextLanguage = language === "en" ? "ar" : "en";

  return (
    <Button
      type="button"
      variant="ghost"
      size="sm"
      onClick={handleToggle}
      className="inline-flex items-center gap-2 text-xs uppercase"
      aria-label={LABELS[nextLanguage].button}
      title={LABELS[nextLanguage].button}
    >
      <Languages className="h-4 w-4" />
      <span>{LABELS[nextLanguage].active}</span>
    </Button>
  );
}
