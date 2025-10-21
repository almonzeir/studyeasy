"use client";

import { BotMessageSquare } from "lucide-react";

import { useLanguage } from "@/components/layout/LanguageProvider";
import { ChatbotInterface } from "@/components/chatbot/ChatbotInterface";
import { cn } from "@/lib/utils";

const copy = {
  en: {
    heading: "Meet your AI Study Coach",
    description:
      "Ask anything about studying in Malaysia. The chatbot is trained on our university profiles, visa checklists, and scholarship guides so you get context-aware answers at any time.",
  },
  ar: {
    heading: "تعرّف على مساعدك الدراسي بالذكاء الاصطناعي",
    description:
      "اسأل عن أي شيء يتعلق بالدراسة في ماليزيا. تم تدريب المساعد على ملفات الجامعات وقوائم التأشيرات وأدلة المنح ليمنحك إجابات دقيقة في أي وقت.",
  },
} as const;

export default function ChatbotPage() {
  const { language } = useLanguage();
  const content = copy[language];
  const isArabic = language === "ar";

  return (
    <div className="flex flex-1 flex-col items-center bg-gradient-to-br from-background via-secondary/10 to-background px-4 pt-2 pb-2 sm:px-6 lg:px-8">
      <header className={cn("mb-2 w-full max-w-4xl text-center", isArabic && "text-right md:text-center")}>
        <BotMessageSquare className="mx-auto mb-3 h-12 w-12 text-accent" />
        <h1 className="font-headline text-4xl font-bold text-primary md:text-5xl">{content.heading}</h1>
        <p className="mt-3 text-base text-muted-foreground md:text-lg">{content.description}</p>
      </header>
      <div className="flex w-full max-w-4xl flex-grow flex-col overflow-hidden rounded-2xl border border-border/30 bg-card/80 shadow-2xl backdrop-blur-sm">
        <ChatbotInterface />
      </div>
    </div>
  );
}
