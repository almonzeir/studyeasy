'use client';

import { useState, useEffect, useMemo } from 'react';
import UniversityCard from '@/components/university/UniversityCard';
import { universities } from '@/data/universities';
import type { University } from '@/types/university';
import { Input } from '@/components/ui/input';
import { MapPin, DollarSign, Frown, ListFilter, FilterIcon } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from '@/components/ui/separator';

export default function UniversitiesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [cityFilter, setCityFilter] = useState('');
  const [budgetFilter, setBudgetFilter] = useState<number | ''>('');
  const [filteredUniversities, setFilteredUniversities] = useState<University[]>(universities);

  const uniqueCities = useMemo(() => {
    const cities = new Set<string>();
    universities.forEach(uni => {
      if (uni.city) {
        cities.add(uni.city);
      }
    });
    return Array.from(cities).sort((a, b) => a.localeCompare(b));
  }, []);

  useEffect(() => {
    let filtered = universities;

    if (searchTerm) {
      filtered = filtered.filter(uni =>
        uni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (uni.availableCourses && uni.availableCourses.some(course => course.toLowerCase().includes(searchTerm.toLowerCase())))
      );
    }

    if (cityFilter) {
      filtered = filtered.filter(uni =>
        uni.city && uni.city.toLowerCase() === cityFilter.toLowerCase()
      );
    }

    if (budgetFilter !== '') {
      filtered = filtered.filter(uni => typeof uni.annualFees === 'number' && uni.annualFees <= budgetFilter);
    }

    setFilteredUniversities(filtered);
  }, [searchTerm, cityFilter, budgetFilter]);

  const handleBudgetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setBudgetFilter(value === '' ? '' : Number(value));
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-background via-background to-muted/30 py-12 md:py-16">
      <div className="container space-y-12">
        <header className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1 text-sm font-semibold text-accent">
            اكتشف خياراتك الأكاديمية
          </span>
          <h1 className="mt-6 font-headline text-4xl font-bold md:text-5xl">
            استكشف <span className="text-accent">الجامعات</span> الماليزية
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            ابحث عن الجامعة والتخصص الذي يناسب طموحاتك بسهولة من خلال أدوات التصفية الذكية.
          </p>
        </header>

        <Card className="rounded-2xl border border-border/40 bg-card/80 p-6 shadow-2xl backdrop-blur-sm">
          <CardHeader className="p-0 pb-6">
            <CardTitle className="flex items-center justify-center gap-2 font-headline text-2xl text-foreground md:justify-start">
              <FilterIcon className="h-6 w-6 text-accent" />
              تصفية النتائج
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div>
                <Label htmlFor="selectUniversity" className="mb-2 block text-sm font-medium text-foreground/80">
                  <ListFilter className="mr-1 inline h-4 w-4 text-accent rtl:ml-1 rtl:mr-0" />
                  اختر جامعة
                </Label>
                <Select
                  value={searchTerm || 'all'}
                  onValueChange={(value) => setSearchTerm(value === 'all' ? '' : value)}
                >
                  <SelectTrigger id="selectUniversity" className="w-full border-border/50 bg-background/80 backdrop-blur">
                    <SelectValue placeholder="اختر جامعة..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">جميع الجامعات</SelectItem>
                    {universities
                      .slice()
                      .sort((a, b) => a.name.localeCompare(b.name))
                      .map((uni) => (
                        <SelectItem key={uni.id} value={uni.name}>
                          {uni.name}
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="cityFilter" className="mb-2 block text-sm font-medium text-foreground/80">
                  <MapPin className="mr-1 inline h-4 w-4 text-accent rtl:ml-1 rtl:mr-0" />
                  المدينة
                </Label>
                <Select
                  value={cityFilter || 'all'}
                  onValueChange={(value) => setCityFilter(value === 'all' ? '' : value)}
                >
                  <SelectTrigger id="cityFilter" className="w-full border-border/50 bg-background/80 backdrop-blur">
                    <SelectValue placeholder="اختر مدينة..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">جميع المدن</SelectItem>
                    {uniqueCities.map((city) => (
                      <SelectItem key={city} value={city}>
                        {city}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="budgetFilter" className="mb-2 block text-sm font-medium text-foreground/80">
                  <DollarSign className="mr-1 inline h-4 w-4 text-accent rtl:ml-1 rtl:mr-0" />
                  أقصى ميزانية سنوية (USD)
                </Label>
                <Input
                  id="budgetFilter"
                  type="number"
                  placeholder="مثال: 5000"
                  value={budgetFilter}
                  onChange={handleBudgetChange}
                  min="0"
                  className="border-border/50 bg-background/80 backdrop-blur"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {filteredUniversities.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {filteredUniversities.map((uni) => (
              <UniversityCard key={uni.id} uni={uni} />
            ))}
          </div>
        ) : (
          <Card className="border-dashed border-border/60 bg-card/70 shadow-xl backdrop-blur-sm">
            <CardContent className="py-16 text-center">
              <Frown className="mx-auto mb-6 h-24 w-24 text-muted-foreground/70" />
              <p className="mb-3 text-3xl font-semibold text-foreground">لم يتم العثور على جامعات</p>
              <p className="text-lg text-muted-foreground">
                حاول تعديل معايير البحث الخاصة بك أو توسيع نطاق بحثك للحصول على نتائج أفضل.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
