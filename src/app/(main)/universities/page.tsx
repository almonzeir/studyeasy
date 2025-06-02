
'use client';

import { useState, useEffect, ChangeEvent } from 'react';
import { UniversityCard } from '@/components/university/UniversityCard';
import { mockUniversities } from '@/data/universities';
import type { University } from '@/types';
import { Input } from '@/components/ui/input';
import { Search, MapPin, DollarSign, Frown, ListFilter } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function UniversitiesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [cityFilter, setCityFilter] = useState('');
  const [budgetFilter, setBudgetFilter] = useState<number | ''>('');
  const [filteredUniversities, setFilteredUniversities] = useState<University[]>(mockUniversities);

  useEffect(() => {
    let universities = mockUniversities;

    if (searchTerm) {
      universities = universities.filter(uni =>
        uni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (uni.availableCourses && uni.availableCourses.some(course => course.toLowerCase().includes(searchTerm.toLowerCase())))
      );
    }

    if (cityFilter) {
      universities = universities.filter(uni =>
        uni.city && uni.city.toLowerCase().includes(cityFilter.toLowerCase())
      );
    }

    if (budgetFilter !== '') {
      universities = universities.filter(uni => uni.annualFees !== undefined && uni.annualFees <= budgetFilter);
    }

    setFilteredUniversities(universities);
  }, [searchTerm, cityFilter, budgetFilter]);

  const handleCityChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCityFilter(e.target.value);
  };

  const handleBudgetChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setBudgetFilter(value === '' ? '' : Number(value));
  };

  return (
    <div className="container py-12 md:py-16">
      <header className="mb-12 text-center">
        <h1 className="font-headline text-4xl font-bold md:text-5xl">
          استكشف <span className="text-accent">الجامعات</span> الماليزية
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          ابحث عن الجامعة والتخصص الذي يناسب طموحاتك.
        </p>
      </header>

      <div className="mb-10 rounded-lg border bg-card p-6 shadow-xl">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div>
            <Label htmlFor="selectUniversity" className="mb-2 block text-sm font-medium text-foreground/80">
              <ListFilter className="mr-1 inline h-4 w-4 rtl:ml-1 rtl:mr-0" />
              اختر جامعة
            </Label>
            <Select
              value={searchTerm || "all"}
              onValueChange={(value) => setSearchTerm(value === "all" ? "" : value)}
            >
              <SelectTrigger id="selectUniversity" className="w-full">
                <SelectValue placeholder="اختر جامعة..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">جميع الجامعات</SelectItem>
                {mockUniversities.sort((a, b) => a.name.localeCompare(b.name)).map((uni) => (
                  <SelectItem key={uni.id} value={uni.name}>
                    {uni.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="cityFilter" className="mb-2 block text-sm font-medium text-foreground/80">
              <MapPin className="mr-1 inline h-4 w-4 rtl:ml-1 rtl:mr-0" />
              المدينة
            </Label>
            <Input
              id="cityFilter"
              type="text"
              placeholder="مثال: كوالالمبور"
              value={cityFilter}
              onChange={handleCityChange}
            />
          </div>
          <div>
            <Label htmlFor="budgetFilter" className="mb-2 block text-sm font-medium text-foreground/80">
              <DollarSign className="mr-1 inline h-4 w-4 rtl:ml-1 rtl:mr-0" />
              أقصى ميزانية سنوية (USD)
            </Label>
            <Input
              id="budgetFilter"
              type="number"
              placeholder="مثال: 5000"
              value={budgetFilter}
              onChange={handleBudgetChange}
              min="0"
            />
          </div>
        </div>
      </div>

      {filteredUniversities.length > 0 ? (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredUniversities.map((uni) => (
            <UniversityCard key={uni.id} university={uni} />
          ))}
        </div>
      ) : (
        <Card className="shadow-lg">
          <CardContent className="py-12 text-center">
            <Frown className="mx-auto mb-6 h-20 w-20 text-muted-foreground" />
            <p className="mb-2 text-2xl font-semibold text-foreground">لم يتم العثور على جامعات</p>
            <p className="text-muted-foreground">
              حاول تعديل معايير البحث الخاصة بك أو توسيع نطاق بحثك.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
