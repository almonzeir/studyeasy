import Link from "next/link";
import { CheckCircle2, ExternalLink, Info, ListChecks, Users } from "lucide-react";

import type { Scholarship, ScholarshipLink } from "@/data/scholarships";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ScholarshipCardProps {
  scholarship: Scholarship;
}

const SectionTitle = ({
  icon: Icon,
  title,
  className,
}: {
  icon: React.ElementType;
  title: string;
  className?: string;
}) => (
  <div className={cn("mb-3 flex items-center border-b border-border/30 pb-2", className)}>
    <Icon className="mr-2 h-5 w-5 text-accent" />
    <h4 className="font-semibold text-primary">{title}</h4>
  </div>
);

const renderLinks = (links: ScholarshipLink[]) => (
  <div className="flex flex-wrap gap-2">
    {links.map((link) => (
      <Button
        key={link.url}
        size="sm"
        variant="outline"
        asChild
        className="border-primary/50 text-primary/90 hover:bg-primary/10 hover:text-primary"
      >
        <Link href={link.url} target="_blank" rel="noopener noreferrer">
          {link.name}
          <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
        </Link>
      </Button>
    ))}
  </div>
);

export function ScholarshipCard({ scholarship }: ScholarshipCardProps) {
  return (
    <Card className="flex h-full flex-col overflow-hidden rounded-xl border-border/30 bg-card shadow-lg transition-all duration-300 ease-in-out hover:border-accent hover:shadow-2xl">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 font-headline text-xl md:text-2xl">
          {scholarship.flag && <span className="text-2xl">{scholarship.flag}</span>}
          {scholarship.name}
        </CardTitle>
        <Badge variant="secondary" className="mt-1 w-fit bg-accent/10 text-accent shadow-sm">
          {scholarship.level}
        </Badge>
      </CardHeader>

      <CardContent className="flex-grow space-y-4 pt-0">
        {scholarship.benefits?.length ? (
          <section>
            <SectionTitle icon={CheckCircle2} title="What you receive" />
            <ul className="space-y-1.5 pr-4 text-sm text-foreground/90">
              {scholarship.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start">
                  <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {scholarship.admissionConditions?.length ? (
          <section>
            <SectionTitle icon={ListChecks} title="Eligibility checklist" />
            <ul className="space-y-1.5 pr-4 text-sm text-foreground/90">
              {scholarship.admissionConditions.map((condition) => (
                <li key={condition} className="flex items-start">
                  <ListChecks className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                  <span>{condition}</span>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {scholarship.targetAudience ? (
          <section>
            <SectionTitle icon={Users} title="Who should apply" />
            <p className="text-sm text-foreground/90">{scholarship.targetAudience}</p>
          </section>
        ) : null}

        {scholarship.secondaryLinks?.length ? (
          <section>
            <SectionTitle icon={Info} title="Helpful resources" />
            {renderLinks(scholarship.secondaryLinks)}
          </section>
        ) : null}

        {scholarship.notes?.length ? (
          <section>
            <SectionTitle icon={Info} title="Good to know" />
            <ul className="space-y-1.5 text-sm text-foreground/90">
              {scholarship.notes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </section>
        ) : null}
      </CardContent>

      <CardFooter className="mt-auto border-t border-border/20 bg-secondary/20 p-4">
        <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
          <Link href={scholarship.applicationLink} target="_blank" rel="noopener noreferrer">
            Start your application
            <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
