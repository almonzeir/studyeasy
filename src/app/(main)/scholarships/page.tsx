import { Award, Info } from "lucide-react";

import { ScholarshipCard } from "@/components/scholarship/ScholarshipCard";
import { generalScholarshipNotes, scholarshipsData } from "@/data/scholarships";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";

export default function ScholarshipsPage() {
  return (
    <div className="container py-12 md:py-16">
      <header className="mb-12 text-center">
        <Award className="mx-auto mb-6 h-16 w-16 text-accent" />
        <h1 className="font-headline text-4xl font-bold md:text-5xl">
          Scholarships to fund your Malaysian study goals
        </h1>
        <p className="mt-4 text-lg text-foreground/90 md:text-xl">
          Explore competitive awards for undergraduate and postgraduate programmes. We highlight the key benefits,
          eligibility criteria, and application links so you know exactly how to apply.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {scholarshipsData.map((scholarship) => (
          <ScholarshipCard key={scholarship.id} scholarship={scholarship} />
        ))}
      </div>

      {generalScholarshipNotes.length > 0 && (
        <>
          <Separator className="my-12 md:my-16 border-border/50" />
          <Alert className="border-accent bg-accent/10 text-foreground shadow-lg">
            <Info className="h-5 w-5 text-accent" />
            <AlertTitle className="font-headline text-xl text-accent">Application tips</AlertTitle>
            <AlertDescription className="mt-2 space-y-1.5 text-foreground/90">
              {generalScholarshipNotes.map((note) => (
                <p key={note}>{note}</p>
              ))}
            </AlertDescription>
          </Alert>
        </>
      )}
    </div>
  );
}
