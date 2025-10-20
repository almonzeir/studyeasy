'use client';

import { useMemo, useState } from 'react';
import UniversityCard from '@/components/university/UniversityCard';
import { universities } from '@/data/universities';
import { Input } from '@/components/ui/input';
import {
  MapPin,
  DollarSign,
  Frown,
  ListFilter,
  FilterIcon,
  Search,
  RefreshCw,
  Sparkles,
  ArrowDownWideNarrow,
} from 'lucide-react';
import { Label } from '@/components/ui/label';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

type SortOption = 'name' | 'feesAsc' | 'feesDesc' | 'ranking';

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
});

export default function UniversitiesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUniversity, setSelectedUniversity] = useState('');
  const [cityFilter, setCityFilter] = useState('');
  const [budgetFilter, setBudgetFilter] = useState<number | ''>('');
  const [sortOption, setSortOption] = useState<SortOption | ''>('');

  const uniqueCities = useMemo(() => {
    const cities = new Set<string>();
    universities.forEach((uni) => {
      if (uni.city) {
        cities.add(uni.city);
      }
    });
    return Array.from(cities).sort((a, b) => a.localeCompare(b));
  }, []);

  const summaryStats = useMemo(() => {
    const numericFees = universities
      .map((uni) => (typeof uni.annualFees === 'number' ? uni.annualFees : null))
      .filter((fee): fee is number => fee !== null);

    const totalUniversities = universities.length;
    const averageFees = numericFees.length
      ? Math.round(numericFees.reduce((sum, fee) => sum + fee, 0) / numericFees.length)
      : 0;

    const affordableCount = universities.filter(
      (uni) => typeof uni.annualFees === 'number' && uni.annualFees <= 4000,
    ).length;

    const uniqueCourses = universities.reduce((courses, uni) => {
      uni.availableCourses.forEach((course) => courses.add(course));
      return courses;
    }, new Set<string>()).size;

    return {
      totalUniversities,
      averageFees,
      affordableCount,
      uniqueCourses,
    };
  }, []);

  const filteredUniversities = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    const filtered = universities.filter((uni) => {
      const matchesSelectedUniversity =
        !selectedUniversity || uni.id === selectedUniversity || uni.name === selectedUniversity;

      if (!matchesSelectedUniversity) {
        return false;
      }

      const matchesSearch =
        !normalizedSearch ||
        uni.name.toLowerCase().includes(normalizedSearch) ||
        (uni.city && uni.city.toLowerCase().includes(normalizedSearch)) ||
        uni.availableCourses.some((course) => course.toLowerCase().includes(normalizedSearch));

      if (!matchesSearch) {
        return false;
      }

      const matchesCity =
        !cityFilter || (uni.city && uni.city.toLowerCase() === cityFilter.toLowerCase());

      if (!matchesCity) {
        return false;
      }

      const matchesBudget =
        budgetFilter === '' ||
        (typeof uni.annualFees === 'number' && uni.annualFees <= Number(budgetFilter));

      return matchesBudget;
    });

    const sorted = [...filtered];

    switch (sortOption) {
      case 'name':
        sorted.sort((a, b) => a.name.localeCompare(b.name, 'ar'));
        break;
      case 'feesAsc':
        sorted.sort((a, b) => {
          const feeA = typeof a.annualFees === 'number' ? a.annualFees : Number.MAX_SAFE_INTEGER;
          const feeB = typeof b.annualFees === 'number' ? b.annualFees : Number.MAX_SAFE_INTEGER;
          return feeA - feeB;
        });
        break;
      case 'feesDesc':
        sorted.sort((a, b) => {
          const feeA = typeof a.annualFees === 'number' ? a.annualFees : Number.MIN_SAFE_INTEGER;
          const feeB = typeof b.annualFees === 'number' ? b.annualFees : Number.MIN_SAFE_INTEGER;
          return feeB - feeA;
        });
        break;
      case 'ranking':
        sorted.sort((a, b) => {
          const rankA = Number.parseInt(String(a.ranking?.global ?? ''), 10);
          const rankB = Number.parseInt(String(b.ranking?.global ?? ''), 10);

          if (Number.isNaN(rankA) && Number.isNaN(rankB)) return 0;
          if (Number.isNaN(rankA)) return 1;
          if (Number.isNaN(rankB)) return -1;

          return rankA - rankB;
        });
        break;
      default:
        break;
    }

    return sorted;
  }, [searchTerm, selectedUniversity, cityFilter, budgetFilter, sortOption]);

  const handleBudgetChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setBudgetFilter(value === '' ? '' : Number(value));
  };

  const handleResetFilters = () => {
    setSearchTerm('');
    setSelectedUniversity('');
    setCityFilter('');
    setBudgetFilter('');
    setSortOption('');
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#05060f] via-[#0a0b1a] to-[#05060f] py-12 md:py-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black/40 to-transparent" />
      </div>

      <div className="container relative z-10 space-y-12">
        <header className="mx-auto max-w-4xl space-y-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1 text-sm font-semibold text-accent">
            <Sparkles className="h-4 w-4" />
            اكتشف خياراتك الأكاديمية
          </span>
          <h1 className="font-headline text-4xl font-bold text-foreground md:text-5xl">
            استكشف <span className="text-accent">الجامعات الماليزية</span> في وضع ليلي مذهل
          </h1>
          <p className="text-lg text-muted-foreground">
            ابحث، صنّف، واكتشف أفضل الخيارات الدراسية في ماليزيا مع تصميم متكامل يدعم الوضع الداكن ويعرض جميع الجامعات المتاحة لك.
          </p>
        </header>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <Card className="border-border/30 bg-card/70 backdrop-blur">
            <CardContent className="flex flex-col gap-1 p-6">
              <span className="text-xs uppercase tracking-wide text-muted-foreground">إجمالي الجامعات</span>
              <p className="text-3xl font-bold text-foreground">{summaryStats.totalUniversities}</p>
              <span className="text-xs text-muted-foreground">مجموعة محدثة بالكامل</span>
            </CardContent>
          </Card>
          <Card className="border-border/30 bg-card/70 backdrop-blur">
            <CardContent className="flex flex-col gap-1 p-6">
              <span className="text-xs uppercase tracking-wide text-muted-foreground">متوسط الرسوم</span>
              <p className="text-3xl font-bold text-foreground">
                {summaryStats.averageFees ? currencyFormatter.format(summaryStats.averageFees) : 'غير متاح'}
              </p>
              <span className="text-xs text-muted-foreground">للبرامج الجامعية سنويًا</span>
            </CardContent>
          </Card>
          <Card className="border-border/30 bg-card/70 backdrop-blur">
            <CardContent className="flex flex-col gap-1 p-6">
              <span className="text-xs uppercase tracking-wide text-muted-foreground">خيارات ميسورة</span>
              <p className="text-3xl font-bold text-foreground">{summaryStats.affordableCount}</p>
              <span className="text-xs text-muted-foreground">رسومها السنوية ≤ 4000 دولار</span>
            </CardContent>
          </Card>
          <Card className="border-border/30 bg-card/70 backdrop-blur">
            <CardContent className="flex flex-col gap-1 p-6">
              <span className="text-xs uppercase tracking-wide text-muted-foreground">تخصصات فريدة</span>
              <p className="text-3xl font-bold text-foreground">{summaryStats.uniqueCourses}</p>
              <span className="text-xs text-muted-foreground">مسارات أكاديمية لاستكشافها</span>
            </CardContent>
          </Card>
        </div>

        <Card className="rounded-2xl border border-border/40 bg-card/80 shadow-2xl backdrop-blur">
          <CardHeader className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div className="space-y-2">
              <CardTitle className="flex items-center gap-2 text-2xl font-bold text-foreground">
                <FilterIcon className="h-6 w-6 text-accent" />
                صقل نتائجك بسهولة
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                استخدم أدوات التصفية الذكية للعثور على الجامعة المثالية حسب المدينة، الميزانية، أو التخصص.
              </CardDescription>
            </div>
            <Button
              type="button"
              variant="ghost"
              className="inline-flex items-center gap-2 border border-border/30 bg-background/60 hover:border-accent/40 hover:bg-background/80"
              onClick={handleResetFilters}
            >
              <RefreshCw className="h-4 w-4" />
              إعادة تعيين التصفية
            </Button>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-5">
              <div className="lg:col-span-2 space-y-3">
                <Label htmlFor="search" className="text-sm font-medium text-foreground/80">
                  البحث الذكي عن الجامعات أو التخصصات
                </Label>
                <div className="relative">
                  <Search className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="search"
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                    placeholder="ابحث بالاسم، المدينة أو التخصص..."
                    className="border-border/50 bg-background/80 pr-10 text-foreground placeholder:text-muted-foreground"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <Label htmlFor="selectUniversity" className="text-sm font-medium text-foreground/80">
                  <ListFilter className="ml-2 inline h-4 w-4 text-accent" /> اختر جامعة محددة
                </Label>
                <Select
                  value={selectedUniversity || 'all'}
                  onValueChange={(value) => setSelectedUniversity(value === 'all' ? '' : value)}
                >
                  <SelectTrigger id="selectUniversity" className="w-full border-border/50 bg-background/80 backdrop-blur">
                    <SelectValue placeholder="جميع الجامعات" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">جميع الجامعات</SelectItem>
                    {universities
                      .slice()
                      .sort((a, b) => a.name.localeCompare(b.name, 'ar'))
                      .map((uni) => (
                        <SelectItem key={uni.id} value={uni.id}>
                          {uni.name}
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-3">
                <Label htmlFor="cityFilter" className="text-sm font-medium text-foreground/80">
                  <MapPin className="ml-2 inline h-4 w-4 text-accent" /> المدينة
                </Label>
                <Select value={cityFilter || 'all'} onValueChange={(value) => setCityFilter(value === 'all' ? '' : value)}>
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
              <div className="space-y-3">
                <Label htmlFor="budgetFilter" className="text-sm font-medium text-foreground/80">
                  <DollarSign className="ml-2 inline h-4 w-4 text-accent" /> أقصى ميزانية سنوية (دولار)
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
              <div className="space-y-3">
                <Label htmlFor="sortOption" className="text-sm font-medium text-foreground/80">
                  <ArrowDownWideNarrow className="ml-2 inline h-4 w-4 text-accent" /> ترتيب النتائج
                </Label>
                <Select value={sortOption || 'none'} onValueChange={(value) => setSortOption(value === 'none' ? '' : (value as SortOption))}>
                  <SelectTrigger id="sortOption" className="w-full border-border/50 bg-background/80 backdrop-blur">
                    <SelectValue placeholder="بدون ترتيب" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">بدون ترتيب</SelectItem>
                    <SelectItem value="name">الاسم من أ - ي</SelectItem>
                    <SelectItem value="ranking">الأفضل تصنيفًا</SelectItem>
                    <SelectItem value="feesAsc">الرسوم الأقل أولًا</SelectItem>
                    <SelectItem value="feesDesc">الرسوم الأعلى أولًا</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-wrap items-center justify-between gap-3 border-t border-border/40 px-6 py-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Sparkles className="h-4 w-4 text-accent" />
              <span>تم العثور على {filteredUniversities.length} جامعة مطابقة لمعاييرك</span>
            </div>
            <Badge variant="outline" className="border-accent/40 bg-accent/10 text-accent">
              تجربة تصفح محسّنة للوضع الداكن
            </Badge>
          </CardFooter>
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
