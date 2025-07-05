
import type { Scholarship, ScholarshipLink } from '@/data/scholarships';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { ExternalLink, CheckCircle2, Users, ListChecks, Info } from 'lucide-react';
import { cn } from "@/lib/utils"; // Added this import

interface ScholarshipCardProps {
  scholarship: Scholarship;
}

const SectionTitle = ({ icon: Icon, title, className }: { icon: React.ElementType, title: string, className?: string }) => (
  <div className={cn("mb-3 flex items-center border-b border-border/30 pb-2", className)}> {/* Added border, pb-2, and updated mb-3 */}
    <Icon className="mr-2 h-5 w-5 text-accent rtl:ml-2 rtl:mr-0" />
    <h4 className="font-semibold text-primary">{title}</h4>
  </div>
);

export function ScholarshipCard({ scholarship }: ScholarshipCardProps) {
  return (
    <Card className="flex h-full flex-col overflow-hidden rounded-xl border-border/30 bg-card shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:border-accent">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center font-headline text-xl md:text-2xl">
          {scholarship.flag && <span className="ml-2 text-2xl rtl:mr-2 rtl:ml-0">{scholarship.flag}</span>}
          {scholarship.name}
        </CardTitle>
        <Badge variant="secondary" className="mt-1 w-fit bg-accent/10 text-accent shadow-sm">{scholarship.level}</Badge>
      </CardHeader>

      <CardContent className="flex-grow space-y-4 pt-0">
        {scholarship.benefits && scholarship.benefits.length > 0 && (
          <section>
            <SectionTitle icon={CheckCircle2} title="المزايا" />
            <ul className="space-y-1.5 pr-4 text-sm text-foreground/90 rtl:pl-4 rtl:pr-0">
              {scholarship.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-green-500 rtl:ml-2 rtl:mr-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {scholarship.admissionConditions && scholarship.admissionConditions.length > 0 && (
          <section>
            <SectionTitle icon={ListChecks} title="شروط القبول" />
            <ul className="space-y-1.5 pr-4 text-sm text-foreground/90 rtl:pl-4 rtl:pr-0">
              {scholarship.admissionConditions.map((condition, index) => (
                <li key={index} className="flex items-start">
                  <ListChecks className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-primary rtl:ml-2 rtl:mr-0" />
                  <span>{condition}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {scholarship.targetAudience && (
          <section>
            <SectionTitle icon={Users} title="الفئة المستهدفة" />
            <p className="text-sm text-foreground/90">{scholarship.targetAudience}</p>
          </section>
        )}
        
        {scholarship.secondaryLinks && scholarship.secondaryLinks.length > 0 && (
          <section>
             <SectionTitle icon={Info} title="روابط إضافية" />
            <div className="flex flex-wrap gap-2">
              {scholarship.secondaryLinks.map((link) => (
                <Button key={link.url} size="sm" variant="outline" asChild className="border-primary/50 text-primary/90 hover:bg-primary/10 hover:text-primary">
                  <Link href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.name}
                    <ExternalLink className="ml-1.5 h-3.5 w-3.5 rtl:mr-1.5 rtl:ml-0" />
                  </Link>
                </Button>
              ))}
            </div>
          </section>
        )}

      </CardContent>

      <CardFooter className="mt-auto border-t border-border/20 bg-secondary/20 p-4">
        <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
          <Link href={scholarship.applicationLink} target="_blank" rel="noopener noreferrer">
            التقديم الآن
            <ExternalLink className="mr-2 h-4 w-4 rtl:ml-2 rtl:mr-0" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
