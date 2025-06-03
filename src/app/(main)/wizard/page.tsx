import { GuidedWizardForm } from '@/components/wizard/GuidedWizardForm';
import { Wand2 } from 'lucide-react';

export default function WizardPage() {
  return (
    <div className="container py-12 md:py-16">
      <header className="mb-12 text-center">
        <Wand2 className="mx-auto mb-4 h-16 w-16 text-accent" />
        <h1 className="font-headline text-4xl font-bold md:text-5xl">
          المساعد الذكي <span className="text-accent">لاختيار الجامعة</span>
        </h1>
        <p className="mt-4 text-lg text-foreground/80">
          أجب عن بعض الأسئلة وسنقترح عليك الجامعات الأنسب لك في ماليزيا.
        </p>
      </header>
      <div className="mx-auto max-w-2xl">
        <GuidedWizardForm />
      </div>
    </div>
  );
}
