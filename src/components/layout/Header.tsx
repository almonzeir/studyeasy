
"use client"; // Required for useTheme hook
import React from 'react'; // Import React
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, School, Home, LayoutGrid, Wand2, BotMessageSquare, Award, DollarSign, FileText, Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider'; // Import useTheme

const navItems = [
  { href: '/', label: 'الرئيسية', icon: <Home className="h-5 w-5" /> },
  { href: '/universities', label: 'الجامعات', icon: <LayoutGrid className="h-5 w-5" /> },
  { href: '/scholarships', label: 'المنح الدراسية', icon: <Award className="h-5 w-5" /> },
  { href: '/study-costs', label: 'تكاليف المعيشة والتاشيرة', icon: <DollarSign className="h-5 w-5" /> },
  { href: '/wizard', label: 'مساعد الاختيار', icon: <Wand2 className="h-5 w-5" /> },
  { href: '/chatbot', label: 'اسال الذكاء الاصناعي', icon: <BotMessageSquare className="h-5 w-5" /> },
];

export function Header() {
  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 max-w-screen-2xl items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2 rtl:ml-6 rtl:mr-0">
            <School className="h-7 w-7 text-primary" />
          <span className="font-bold text-lg font-headline">دليلك في ماليزيا</span>
        </Link>

        <nav className="hidden flex-1 items-center space-x-4 rtl:space-x-reverse md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm" // Added focus ring and rounded-sm for better ring shape
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end space-x-2 rtl:space-x-reverse">
          <ThemeToggleButton />
          {/* Mobile Menu Button - hidden on md and larger screens */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">فتح القائمة</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-background">
              <div className="p-6">
                <Link href="/" className="mb-8 flex items-center space-x-2 rtl:space-x-reverse">
                  <School className="h-7 w-7 text-primary" />
                  <span className="font-bold text-lg font-headline">دليلك في ماليزيا</span>
                </Link>
                <nav className="flex flex-col space-y-3">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center space-x-3 rtl:space-x-reverse rounded-md p-3 text-foreground/80 transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background" // Added focus ring
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
    </>
  );
}

// Theme Toggle Button Component
function ThemeToggleButton() {
  const { theme, setTheme } = useTheme();
  // Prevent rendering on server to avoid hydration mismatch for theme icon
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  if (!mounted) {
    // Render a placeholder or null on the server and initial client render
    // You could also return a skeleton or a disabled button
    return <Button variant="ghost" size="icon" aria-label="Toggle theme" disabled><Sun className="h-5 w-5" /></Button>;
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      aria-label={theme === 'light' ? 'التحويل للوضع الداكن' : 'التحويل للوضع الفاتح'}
    >
      {theme === 'light' ? <Moon className="h-5 w-5 text-foreground/80" /> : <Sun className="h-5 w-5 text-foreground/80" />}
    </Button>
  );
}
