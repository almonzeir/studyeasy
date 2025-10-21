"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

type Language = "en" | "ar";

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
}

const DEFAULT_LANGUAGE: Language = "en";
const STORAGE_KEY = "studyeasy-language";

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === "undefined") {
      return DEFAULT_LANGUAGE;
    }
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === "ar" ? "ar" : DEFAULT_LANGUAGE;
  });

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    const root = window.document.documentElement;
    root.lang = language;
    root.dir = language === "ar" ? "rtl" : "ltr";
    window.localStorage.setItem(STORAGE_KEY, language);
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
    }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
