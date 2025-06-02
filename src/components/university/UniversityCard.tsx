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
    <Card className="group flex flex-col overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl hover:scale-[1.02] duration-300 ease-in-out border-transparent hover:border-accent"> {/* Added group and hover:border-accent */}
      <CardHeader className="p-0">
        {university.imageUrl && (
          <div className="relative h-48 w-full overflow-hidden"> {/* Added overflow-hidden for image zoom effect if desired */}
            <Image
              src={university.imageUrl}
              alt={`Campus of ${university.name}`}
              layout="fill"
              objectFit="cover"
              data-ai-hint={university.dataAiHint || "university campus"}
              className="transition-transform duration-300 group-hover:scale-105" /* Image zoom on hover */
            />
          </div>
        )}
        <div className="p-6">
          <CardTitle className="mb-2 text-center font-headline text-2xl group-hover:text-accent transition-colors duration-300">{university.name}</CardTitle> {/* Title color change on hover */}
          {university.city && (
            <div className="mb-2 flex items-center justify-center text-sm text-muted-foreground"> {/* Centered city */}
              <MapPin className="mr-2 h-4 w-4 text-accent rtl:ml-2 rtl:mr-0" />
              <span>{university.city}</span>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-6 pt-0">
        <div className="mb-4 space-y-2"> {/* Added space-y for better separation */}
          {university.annualFees !== undefined && (
            <div className="flex items-center text-sm text-muted-foreground">
              <DollarSign className="mr-2 h-4 w-4 text-accent rtl:ml-2 rtl:mr-0 flex-shrink-0" />
              <span>الرسوم السنوية: ${university.annualFees.toLocaleString()}</span>
            </div>
          )}
          {university.availableCourses && university.availableCourses.length > 0 && (
            <div className="flex items-start text-sm text-muted-foreground">
              <BookOpen className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-accent rtl:ml-2 rtl:mr-0" />
              <div>
                <span className="font-medium text-foreground/90">التخصصات المتاحة:</span>
                <div className="mt-1 flex flex-wrap gap-2">
                  {university.availableCourses.slice(0, 3).map((course) => (
                    <Badge key={course} variant="secondary" className="text-xs px-2.5 py-1"> {/* Adjusted padding */}
                      {course}
                    </Badge>
                  ))}
                  {university.availableCourses.length > 3 && (
                    <Badge variant="outline" className="text-xs px-2.5 py-1 border-accent/50 text-accent/90"> {/* Adjusted padding and styling */}
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
      <CardFooter className="bg-secondary/30 p-4 mt-auto"> {/* Added mt-auto to push footer down, adjusted padding */}
        <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
          <Link href={`/universities/${university.id}`}> 
            عرض التفاصيل
            <ChevronLeft className="ml-2 h-4 w-4 rtl:mr-2 rtl:ml-0" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
