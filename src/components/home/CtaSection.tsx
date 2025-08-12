"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { BotMessageSquare } from 'lucide-react';

export function CtaSection() {
  return (
    <section className="py-16 bg-primary/10 md:py-24">
      <div className="container text-center">
         <div className="mb-10 text-center">
          <h2 className="font-headline text-4xl font-bold md:text-5xl">
            هل أنت مستعد لبدء رحلتك؟
          </h2>
          <div className="mt-2 h-1 w-32 mx-auto bg-accent rounded-full"></div>
        </div>
        <p className="mb-8 text-lg text-foreground/80 md:text-xl">
          دعنا نساعدك في كل خطوة، من اختيار الجامعة المناسبة حتى القبول وبدء الدراسة.
        </p>
        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 transition-transform hover:scale-105 shadow-lg hover:shadow-accent/50">
          <Link href="/chatbot">
            <BotMessageSquare className="me-2 h-5 w-5" />
            تحدث مع المستشار الذكي
          </Link>
        </Button>
      </div>
    </section>
  );
}
