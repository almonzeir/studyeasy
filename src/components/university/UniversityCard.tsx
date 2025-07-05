
import Image from 'next/image';
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
    <Card className="group flex flex-col overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl hover:scale-[1.02] duration-300 ease-in-out border-transparent hover:border-accent"> {/* Added group and hover:border-accent */}
      <CardHeader className="p-0">
        {university.imageUrl && (
          <div className="relative h-48 w-full overflow-hidden"> {/* Added overflow-hidden for image zoom effect if desired */}
            <Image
              src={university.imageUrl}
              alt={`Campus of ${university.name}`}
              layout="fill"
              objectFit="cover"
              placeholder="blur" // Added placeholder
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48rectIHdpZHRoPSIyMDAiIGhlaWdodD0iMTIwIiBmaWxsPSIjZTZlNmVlIi8+PHRleHQgeD0iNTAiIHk9IjcwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiIgc3R5bGU9ImZpbGw6I2FhYTtmb250LXdlaWdodDpib2xkIj5NoImageAvail</text></svg>" // Generic light gray placeholder with text
              data-ai-hint={university.dataAiHint || "university campus"}
              className="transition-transform duration-300 group-hover:scale-105" /* Image zoom on hover */
            />
          </div>
        )}
        {/* Fallback for when imageUrl is empty or fails to load - this is more complex to do purely with next/image if src is empty string */}
        {!university.imageUrl && (
          <div className="relative h-48 w-full overflow-hidden bg-muted flex items-center justify-center">
            {/* You could put an icon or text here */}
            <BookOpen className="h-16 w-16 text-muted-foreground/50" />
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
          {university.ranking?.global && (
            <div className="mb-3 flex justify-center">
              <Badge
                variant="outline"
                className="border-primary/70 text-primary text-xs"
                title={university.ranking.source ? `Source: ${university.ranking.source}` : 'Global Ranking'}
              >
                <Award className="mr-1.5 h-3.5 w-3.5 rtl:ml-1.5 rtl:mr-0" />
                Global Rank: {university.ranking.global}
                {university.ranking.source && ` (${university.ranking.source.split(" ")[0]})`}
              </Badge>
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
                    <Badge
                      variant="outline"
                      className="text-xs px-2.5 py-1 border-accent/50 text-accent/90" // Adjusted padding and styling
                      title={`والعديد من التخصصات الأخرى مثل: ${university.availableCourses.slice(3, 7).join('، ')}${university.availableCourses.length > 7 ? '، وغيرها...' : ''}`} // Added title attribute
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
      <CardFooter className="bg-secondary/30 p-4 mt-auto"> {/* Added mt-auto to push footer down, adjusted padding */}
        <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
          <Link href={`/universities/${encodeURIComponent(university.id)}`}> 
            عرض التفاصيل
            <ChevronLeft className="ml-2 h-4 w-4 rtl:mr-2 rtl:ml-0" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
