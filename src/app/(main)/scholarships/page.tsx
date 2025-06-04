
import { ScholarshipCard } from '@/components/scholarship/ScholarshipCard';
import { scholarshipsData, generalScholarshipNotes } from '@/data/scholarships';
import { Award, Info } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';

export default function ScholarshipsPage() {
  return (
    <div className="container py-12 md:py-16">
      <header className="mb-12 text-center">
        <Award className="mx-auto mb-6 h-16 w-16 text-accent animate-pulse" />
        <h1 
          className="font-headline text-4xl font-bold md:text-5xl"
          style={{ textShadow: '0 2px 6px rgba(0, 0, 0, 0.7)' }}
        >
          المنح الدراسية في <span 
            className="text-accent"
            style={{ textShadow: '0 2px 5px rgba(0, 0, 0, 0.5)' }}
          >ماليزيا</span>
        </h1>
        <p 
          className="mt-4 text-lg text-foreground/95 md:text-xl" // Increased opacity
          style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.6)' }}
        >
          اكتشف أبرز المنح الدراسية المتاحة للطلاب الدوليين لعام 2025.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {scholarshipsData.map((scholarship) => (
          <ScholarshipCard key={scholarship.id} scholarship={scholarship} />
        ))}
      </div>

      {generalScholarshipNotes && generalScholarshipNotes.length > 0 && (
        <>
          <Separator className="my-12 md:my-16 border-border/50" />
          <Alert className="border-accent bg-accent/10 text-foreground shadow-lg">
            <Info className="h-5 w-5 !text-accent" /> {/* Overriding default icon color */}
            <AlertTitle className="font-headline text-xl text-accent">ملاحظات هامة</AlertTitle>
            <AlertDescription className="mt-2 space-y-1.5 text-foreground/90">
              {generalScholarshipNotes.map((note, index) => (
                <p key={index}>{note}</p>
              ))}
            </AlertDescription>
          </Alert>
        </>
      )}
    </div>
  );
}
