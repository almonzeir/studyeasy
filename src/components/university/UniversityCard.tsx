import Image from 'next/image';
import Link from 'next/link';
import type { University } from '@/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, BookOpen, DollarSign, ChevronLeft } from 'lucide-react';

interface UniversityCardProps {
  university: University;
}

export function UniversityCard({ university }: UniversityCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl hover:scale-[1.02] duration-300 ease-in-out">
      <CardHeader className="p-0">
        {university.imageUrl && (
          <div className="relative h-48 w-full">
            <Image
              src={university.imageUrl}
              alt={`Campus of ${university.name}`}
              layout="fill"
              objectFit="cover"
              data-ai-hint={university.dataAiHint || "university campus"}
            />
          </div>
        )}
        <div className="p-6">
          <CardTitle className="font-headline text-2xl mb-2">{university.name}</CardTitle>
          <div className="flex items-center text-sm text-muted-foreground mb-2">
            <MapPin className="mr-2 h-4 w-4 rtl:ml-2 rtl:mr-0 text-accent" />
            <span>{university.city}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-6 pt-0">
        <div className="mb-4">
          <div className="flex items-center text-sm text-muted-foreground mb-1">
            <DollarSign className="mr-2 h-4 w-4 rtl:ml-2 rtl:mr-0 text-accent" />
            <span>الرسوم السنوية: ${university.annualFees.toLocaleString()}</span>
          </div>
          <div className="flex items-start text-sm text-muted-foreground">
            <BookOpen className="mr-2 mt-1 h-4 w-4 flex-shrink-0 rtl:ml-2 rtl:mr-0 text-accent" />
            <div>
              <span className="font-medium text-foreground/90">التخصصات المتاحة:</span>
              <div className="mt-1 flex flex-wrap gap-2">
                {university.availableCourses.slice(0, 3).map((course) => (
                  <Badge key={course} variant="secondary" className="text-xs">{course}</Badge>
                ))}
                {university.availableCourses.length > 3 && (
                  <Badge variant="outline" className="text-xs">+{university.availableCourses.length - 3} أخرى</Badge>
                )}
              </div>
            </div>
          </div>
        </div>
        {university.description && <CardDescription className="text-sm leading-relaxed text-muted-foreground line-clamp-3">{university.description}</CardDescription>}
      </CardContent>
      <CardFooter className="p-6 bg-secondary/30">
        <Button asChild className="w-full bg-primary hover:bg-primary/90">
          {/* The link will eventually go to /universities/[id] */}
          <Link href={`/universities/${university.id}`}> 
            عرض التفاصيل
            <ChevronLeft className="ml-2 h-4 w-4 rtl:mr-2 rtl:ml-0" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
