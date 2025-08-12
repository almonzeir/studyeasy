import Link from 'next/link';
import type { University } from '@/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, BookOpen, DollarSign, ChevronLeft, Award } from 'lucide-react';

interface UniversityCardProps {
  university: University;
}

export function UniversityCard({ university }: UniversityCardProps) {
  return (
    <Card className="group flex flex-col overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl hover:scale-[1.02] duration-300 ease-in-out border-transparent hover:border-accent">
      <CardHeader className="p-0">
        {university.imageUrl && (
          <div className="relative h-48 w-full overflow-hidden">
            <img
              src={university.imageUrl}
              alt={`Campus of ${university.name}`}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}
        {!university.imageUrl && (
          <div className="relative h-48 w-full overflow-hidden bg-muted flex items-center justify-center">
            <BookOpen className="h-16 w-16 text-muted-foreground/50" />
          </div>
        )}
        <div className="p-6">
          <CardTitle className="mb-2 text-center font-headline text-2xl group-hover:text-accent transition-colors duration-300">{university.name}</CardTitle>
          {university.city && (
            <div className="mb-2 flex items-center justify-center text-sm text-muted-foreground">
              <MapPin className="me-2 h-4 w-4 text-accent" />
              <span>{university.city}</span>
            </div>
          )}
          {university.ranking?.global && (
            <div className="mb-3 flex justify-center">
              <Badge
                variant="outline"
                className="border-primary/70 text-primary text-xs"
                title={university.ranking.source ? `Source: ${university.ranking.source}` : 'Global Ranking'}
              >
                <Award className="me-1.5 h-3.5 w-3.5" />
                Global Rank: {university.ranking.global}
                {university.ranking.source && ` (${university.ranking.source.split(" ")[0]})`}
              </Badge>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-6 pt-0">
        <div className="mb-4 space-y-2">
          {university.annualFees !== undefined && (
            <div className="flex items-center text-sm text-muted-foreground">
              <DollarSign className="me-2 h-4 w-4 text-accent flex-shrink-0" />
              <span>الرسوم السنوية: ${university.annualFees.toLocaleString()}</span>
            </div>
          )}
          {university.availableCourses && university.availableCourses.length > 0 && (
            <div className="flex items-start text-sm text-muted-foreground">
              <BookOpen className="me-2 mt-1 h-4 w-4 flex-shrink-0 text-accent" />
              <div>
                <span className="font-medium text-foreground/90">التخصصات المتاحة:</span>
                <div className="mt-1 flex flex-wrap gap-2">
                  {university.availableCourses.slice(0, 3).map((course) => (
                    <Badge key={course} variant="secondary" className="text-xs px-2.5 py-1">
                      {course}
                    </Badge>
                  ))}
                  {university.availableCourses.length > 3 && (
                    <Badge
                      variant="outline"
                      className="text-xs px-2.5 py-1 border-accent/50 text-accent/90 transition-colors hover:bg-accent/10"
                      title={`والعديد من التخصصات الأخرى مثل: ${university.availableCourses.slice(3, 7).join('، ')}${university.availableCourses.length > 7 ? '، وغيرها...' : ''}`}
                    >
                      +{university.availableCourses.length - 3} أخرى
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
        {university.description && <CardDescription className="text-sm leading-relaxed text-muted-foreground line-clamp-3">{university.description}</CardDescription>}
      </CardContent>
      <CardFooter className="bg-secondary/30 p-6 mt-auto">
        <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
          <Link href={`/universities/${encodeURIComponent(university.id)}`}> 
            عرض التفاصيل
            <ChevronLeft className="ms-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
