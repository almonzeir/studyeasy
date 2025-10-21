"use client";

import Link from "next/link";
import { useState } from "react";
import { Bot, BookOpen, GraduationCap, Mail, Menu, Moon, Sun, University } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

import { LanguageToggle } from "./LanguageToggle";
import { useLanguage } from "./LanguageProvider";
import { useTheme } from "./ThemeProvider";

const copy = {
  en: {
    siteName: "StudyEasy Malaysia",
    nav: [
      { href: "/universities", label: "Universities", icon: University },
      { href: "/scholarships", label: "Scholarships", icon: GraduationCap },
      { href: "/contact", label: "Contact", icon: Mail },
      { href: "/chatbot", label: "AI Study Coach", icon: Bot, className: "text-accent font-semibold" },
    ],
    menuLabel: "Open menu",
  },
  ar: {
    siteName: "\u0633\u062a\u062f\u064a \u0625\u064a\u0632\u064a \u0645\u0627\u0644\u064a\u0632\u064a\u0627",
    nav: [
      { href: "/universities", label: "\u0627\u0644\u062c\u0627\u0645\u0639\u0627\u062a", icon: University },
      { href: "/scholarships", label: "\u0627\u0644\u0645\u0646\u062d \u0627\u0644\u062f\u0631\u0627\u0633\u064a\u0629", icon: GraduationCap },
      { href: "/contact", label: "\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627", icon: Mail },
      {
        href: "/chatbot",
        label: "\u0645\u0633\u0627\u0639\u062f \u0627\u0644\u062f\u0631\u0627\u0633\u0629 \u0628\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a",
        icon: Bot,
        className: "text-accent font-semibold",
      },
    ],
    menuLabel: "\u0641\u062a\u062d \u0627\u0644\u0642\u0627\u0626\u0645\u0629",
  },
} as const;

export function Header() {
  const { language } = useLanguage();
  const { theme, setTheme } = useTheme();
  const [isSheetOpen, setSheetOpen] = useState(false);

  const content = copy[language];
  const isArabic = language === "ar";

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const closeSheet = () => setSheetOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className={cn(
            "flex items-center gap-2 text-lg font-bold text-primary transition-colors hover:text-primary/80",
            isArabic && "flex-row-reverse text-right",
          )}
        >
          <BookOpen className="h-6 w-6 text-accent" />
          <span className="font-headline tracking-tight">{content.siteName}</span>
        </Link>

        <nav
          className={cn(
            "hidden items-center gap-6 md:flex",
            isArabic && "flex-row-reverse text-right",
          )}
        >
          {content.nav.map(({ href, label, className }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "text-sm font-medium text-muted-foreground transition-colors hover:text-primary",
                className,
              )}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageToggle />
          <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>

          <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">{content.menuLabel}</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side={isArabic ? "left" : "right"}
              className={cn("w-full max-w-xs sm:max-w-sm", isArabic && "text-right")}
            >
              <div className="p-4">
                <nav className="flex flex-col gap-6">
                  {content.nav.map(({ href, label, icon: Icon, className }) => (
                    <Link
                      key={href}
                      href={href}
                      onClick={closeSheet}
                      className={cn(
                        "flex items-center gap-3 rounded-md p-3 text-lg font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground",
                        className,
                        isArabic && "flex-row-reverse text-right",
                      )}
                    >
                      <Icon className="h-5 w-5" />
                      {label}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
