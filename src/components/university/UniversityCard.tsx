'use client';

import Link from 'next/link';
import { MapPin, DollarSign, Globe2, GraduationCap, ExternalLink, Home } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import SmartImage from '../SmartImage';
import type { University } from '@/types/university';

type Props = { uni: University };

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
});

const formatFees = (fees: University['annualFees']) => {
  if (typeof fees === 'number') {
    return currencyFormatter.format(fees);
  }

  return fees || 'غير متاح';
};

export default function UniversityCard({ uni }: Props) {
  const featuredCourses = uni.availableCourses.slice(0, 3);

  return (
    <Card className="group flex h-full flex-col overflow-hidden border-border/30 bg-card/80 shadow-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-accent/60 hover:shadow-2xl">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-secondary/40 via-secondary/20 to-transparent">
        <SmartImage
          src={uni.imageUrl}
          alt={uni.name}
          width={1200}
          height={900}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3 text-sm text-white">
          <div className="flex items-center gap-2 rounded-full bg-background/60 px-3 py-1 text-foreground shadow-sm">
            <MapPin className="h-4 w-4 text-accent" />
            <span className="font-medium">{uni.city}</span>
          </div>
          {uni.ranking?.global && (
            <div className="flex items-center gap-2 rounded-full bg-background/60 px-3 py-1 text-foreground shadow-sm">
              <Globe2 className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium">تصنيف عالمي #{uni.ranking.global}</span>
            </div>
          )}
        </div>
      </div>

      <CardContent className="flex flex-1 flex-col gap-5 p-6">
        <div className="space-y-3">
          <h2 className="font-headline text-2xl font-bold text-foreground">
            {uni.name}
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {uni.description}
          </p>
        </div>

        <div className="space-y-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <DollarSign className="h-4 w-4 text-accent" />
            <span className="font-medium text-foreground">الرسوم السنوية:</span>
            <span>{formatFees(uni.annualFees)}</span>
          </div>
          {uni.livingCosts && (
            <div className="flex items-center gap-2">
              <Home className="h-4 w-4 text-accent" />
              <span className="font-medium text-foreground">تكاليف المعيشة:</span>
              <span>{uni.livingCosts}</span>
            </div>
          )}
        </div>

        {featuredCourses.length > 0 && (
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <GraduationCap className="h-4 w-4 text-accent" />
              <span>أبرز التخصصات</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {featuredCourses.map((course) => (
                <Badge key={course} variant="secondary" className="bg-secondary/60 text-secondary-foreground">
                  {course}
                </Badge>
              ))}
              {uni.availableCourses.length > featuredCourses.length && (
                <Badge variant="outline" className="border-dashed">
                  +{uni.availableCourses.length - featuredCourses.length} تخصصات أخرى
                </Badge>
              )}
            </div>
          </div>
        )}
      </CardContent>

      <Separator className="mx-6" />

      <CardFooter className="flex flex-col gap-3 p-6 pt-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
          {uni.ranking?.source && (
            <span className="rounded-full bg-muted px-3 py-1">
              {uni.ranking.source}
            </span>
          )}
        </div>

        <div className="flex flex-wrap gap-3">
          {uni.officialWebsiteUrl && (
            <Button asChild variant="secondary" size="sm" className="gap-2">
              <Link href={uni.officialWebsiteUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                الموقع الرسمي
              </Link>
            </Button>
          )}
          {uni.applicationLink && (
            <Button
              asChild
              variant="default"
              size="sm"
              className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Link href={uni.applicationLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                التقديم الآن
              </Link>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
