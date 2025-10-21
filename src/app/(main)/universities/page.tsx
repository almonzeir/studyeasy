'use client';

import { useMemo, useState } from 'react';
import {
  ArrowDownWideNarrow,
  DollarSign,
  Frown,
  MapPin,
  RefreshCw,
  Search,
  Sparkles,
} from 'lucide-react';

import { useLanguage } from '@/components/layout/LanguageProvider';
import UniversityCard from '@/components/university/UniversityCard';
import { universities } from '@/data/universities';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';

type SortOption = 'name' | 'feesAsc' | 'feesDesc' | 'ranking';

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
});

const normalizeText = (value: string) =>
  value
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, ' ')
    .trim();

const copy = {
  en: {
    hero: {
      badge: 'Plan your Malaysian university shortlist',
      heading: 'Compare campuses, tuition, and student life insights in one dashboard',
      description:
        'Search by course or city, filter by your budget, and sort by rankings. Every profile is curated so you can make confident decisions about where to study.',
    },
    stats: {
      total: { label: 'Universities listed', caption: 'Curated for international students in Malaysia' },
      average: { label: 'Average annual tuition', caption: 'Across public and private institutions' },
      budget: { label: 'Budget friendly picks', caption: 'Tuition below USD 4,000 per year' },
      courses: { label: 'Popular study areas', caption: 'From AI and business to hospitality and law' },
      noData: 'Data coming soon',
    },
    filters: {
      title: 'Filter your shortlist',
      description:
        'Combine search, city, budget, and sorting to surface the universities that match your academic goals and lifestyle preferences.',
      reset: 'Reset filters',
      searchLabel: 'Search by name, course, or keyword',
      searchPlaceholder: 'Try engineering, Monash, or Kuala Lumpur',
      cityLabel: 'City',
      cityPlaceholder: 'Select a city',
      cityAll: 'All cities',
      budgetLabel: 'Max tuition per year (USD)',
      budgetPlaceholder: 'e.g. 6000',
      sortLabel: 'Sort results',
      sortPlaceholder: 'Sort by',
      sortOptions: {
        none: 'Default order',
        name: 'Name (A to Z)',
        ranking: 'QS ranking',
        feesAsc: 'Lowest tuition first',
        feesDesc: 'Highest tuition first',
      },
    },
    summary: {
      showing: (count: number) => `Showing ${count} universities that match your filters.`,
      tip: 'Tip: combine search and city filters for the best matches',
    },
    empty: {
      title: 'No universities found',
      description:
        'Try broadening your search terms, increasing the maximum budget, or clearing the filters to explore all institutions again.',
    },
  },
  ar: {
    hero: {
      badge: 'خطط لقائمة الجامعات الماليزية الخاصة بك',
      heading: 'قارن الحرم الجامعي والرسوم وحياة الطالب في لوحة واحدة',
      description:
        'ابحث حسب التخصص أو المدينة، وفلتر النتائج حسب الميزانية، ورتبها وفق التصنيف. جميع الملفات مُختارة لتتخذ قرارك بثقة حول مكان الدراسة.',
    },
    stats: {
      total: { label: 'الجامعات المدرجة', caption: 'مختارة للطلاب الدوليين في ماليزيا' },
      average: { label: 'متوسط الرسوم السنوية', caption: 'يشمل الجامعات الحكومية والخاصة' },
      budget: { label: 'خيارات مناسبة للميزانية', caption: 'رسوم أقل من 4,000 دولار سنويًا' },
      courses: { label: 'مجالات الدراسة المتاحة', caption: 'من الذكاء الاصطناعي إلى الضيافة والقانون' },
      noData: 'سيتم تحديث البيانات قريبًا',
    },
    filters: {
      title: 'صفِّ قائمتك المختصرة',
      description:
        'ادمج البحث والمدينة والميزانية وطرق الترتيب لتظهر الجامعات التي توافق أهدافك الأكاديمية وأسلوب حياتك.',
      reset: 'إعادة تعيين عوامل التصفية',
      searchLabel: 'البحث بالاسم أو التخصص أو الكلمة المفتاحية',
      searchPlaceholder: 'جرّب الهندسة أو موناش أو كوالالمبور',
      cityLabel: 'المدينة',
      cityPlaceholder: 'اختر مدينة',
      cityAll: 'كل المدن',
      budgetLabel: 'الحد الأقصى للرسوم سنويًا (دولار)',
      budgetPlaceholder: 'مثال: 6000',
      sortLabel: 'ترتيب النتائج',
      sortPlaceholder: 'اختر طريقة الترتيب',
      sortOptions: {
        none: 'الترتيب الافتراضي',
        name: 'الاسم (أ-ي)',
        ranking: 'تصنيف QS',
        feesAsc: 'أقل الرسوم أولاً',
        feesDesc: 'أعلى الرسوم أولاً',
      },
    },
    summary: {
      showing: (count: number) => `تم عرض ${count} جامعة متوافقة مع معاييرك.`,
      tip: 'نصيحة: اجمع بين البحث والمدينة للحصول على نتائج أدق',
    },
    empty: {
      title: 'لم يتم العثور على جامعات',
      description:
        'حاول توسيع نطاق البحث، أو زيادة الميزانية القصوى، أو مسح عوامل التصفية لاستكشاف جميع المؤسسات من جديد.',
    },
  },
} as const;

export default function UniversitiesPage() {
  const { language } = useLanguage();
  const t = copy[language];
  const isArabic = language === 'ar';

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
    const normalizedSearch = normalizeText(searchTerm);

    const filtered = universities.filter((uni) => {
      const matchesSelectedUniversity =
        !selectedUniversity || uni.id === selectedUniversity || uni.name === selectedUniversity;

      if (!matchesSelectedUniversity) {
        return false;
      }

      const textCandidates: Array<string | undefined> = [
        uni.name,
        uni.englishName,
        uni.city,
        uni.slug,
        ...uni.availableCourses,
        ...(uni.aliases ?? []),
      ];

      const matchesSearch =
        !normalizedSearch ||
        textCandidates.some((candidate) => {
          if (!candidate) {
            return false;
          }
          return normalizeText(String(candidate)).includes(normalizedSearch);
        });

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
        sorted.sort((a, b) => a.name.localeCompare(b.name));
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
        <header className={cn("mx-auto max-w-4xl space-y-6 text-center text-primary-foreground", isArabic && "text-right md:text-center")}>
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1 text-sm font-semibold text-accent">
            <Sparkles className="h-4 w-4" />
            {t.hero.badge}
          </span>
          <h1 className="font-headline text-4xl font-bold md:text-5xl">{t.hero.heading}</h1>
          <p className="text-lg text-muted-foreground">{t.hero.description}</p>
        </header>

        <div className={cn("grid gap-4 sm:grid-cols-2 xl:grid-cols-4", isArabic && "text-right")}>
          <Card className="border-border/30 bg-card/70 backdrop-blur">
            <CardContent className="flex flex-col gap-1 p-6">
              <span className="text-xs uppercase tracking-wide text-muted-foreground">{t.stats.total.label}</span>
              <p className="text-3xl font-bold text-foreground">{summaryStats.totalUniversities}</p>
              <span className="text-xs text-muted-foreground">{t.stats.total.caption}</span>
            </CardContent>
          </Card>
          <Card className="border-border/30 bg-card/70 backdrop-blur">
            <CardContent className="flex flex-col gap-1 p-6">
              <span className="text-xs uppercase tracking-wide text-muted-foreground">{t.stats.average.label}</span>
              <p className="text-3xl font-bold text-foreground">
                {summaryStats.averageFees ? currencyFormatter.format(summaryStats.averageFees) : t.stats.noData}
              </p>
              <span className="text-xs text-muted-foreground">{t.stats.average.caption}</span>
            </CardContent>
          </Card>
          <Card className="border-border/30 bg-card/70 backdrop-blur">
            <CardContent className="flex flex-col gap-1 p-6">
              <span className="text-xs uppercase tracking-wide text-muted-foreground">{t.stats.budget.label}</span>
              <p className="text-3xl font-bold text-foreground">{summaryStats.affordableCount}</p>
              <span className="text-xs text-muted-foreground">{t.stats.budget.caption}</span>
            </CardContent>
          </Card>
          <Card className="border-border/30 bg-card/70 backdrop-blur">
            <CardContent className="flex flex-col gap-1 p-6">
              <span className="text-xs uppercase tracking-wide text-muted-foreground">{t.stats.courses.label}</span>
              <p className="text-3xl font-bold text-foreground">{summaryStats.uniqueCourses}</p>
              <span className="text-xs text-muted-foreground">{t.stats.courses.caption}</span>
            </CardContent>
          </Card>
        </div>

        <Card className={cn("rounded-2xl border border-border/40 bg-card/80 shadow-2xl backdrop-blur", isArabic && "text-right")}>
          <CardHeader className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div className="space-y-2">
              <CardTitle className={cn("flex items-center gap-2 text-2xl font-bold text-foreground", isArabic && "flex-row-reverse")}>
                <MapPin className="h-6 w-6 text-accent" />
                {t.filters.title}
              </CardTitle>
              <CardDescription className="text-muted-foreground">{t.filters.description}</CardDescription>
            </div>
            <Button
              type="button"
              variant="ghost"
              className="inline-flex items-center gap-2 border border-border/30 bg-background/60 hover:border-accent/40 hover:bg-background/80"
              onClick={handleResetFilters}
            >
              <RefreshCw className="h-4 w-4" />
              {t.filters.reset}
            </Button>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-5">
              <div className="lg:col-span-2 space-y-3">
                <Label className={cn("flex items-center gap-2 text-sm font-medium text-foreground/80", isArabic && "flex-row-reverse")}>
                  <Search className="h-4 w-4 text-accent" />
                  <span>{t.filters.searchLabel}</span>
                </Label>
                <Input
                  id="searchTerm"
                  type="text"
                  placeholder={t.filters.searchPlaceholder}
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  className="border-border/50 bg-background/80 backdrop-blur"
                />
              </div>
              <div className="space-y-3">
                <Label className="text-sm font-medium text-foreground/80">{t.filters.cityLabel}</Label>
                <Select
                  value={cityFilter || 'none'}
                  onValueChange={(value) => setCityFilter(value === 'none' ? '' : value)}
                >
                  <SelectTrigger className="w-full border-border/50 bg-background/80 backdrop-blur">
                    <SelectValue placeholder={t.filters.cityPlaceholder} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">{t.filters.cityAll}</SelectItem>
                    {uniqueCities.map((city) => (
                      <SelectItem key={city} value={city}>
                        {city}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-3">
                <Label className={cn("flex items-center gap-2 text-sm font-medium text-foreground/80", isArabic && "flex-row-reverse")}>
                  <DollarSign className="h-4 w-4 text-accent" />
                  <span>{t.filters.budgetLabel}</span>
                </Label>
                <Input
                  id="budgetFilter"
                  type="number"
                  placeholder={t.filters.budgetPlaceholder}
                  value={budgetFilter}
                  onChange={handleBudgetChange}
                  min="0"
                  className="border-border/50 bg-background/80 backdrop-blur"
                />
              </div>
              <div className="space-y-3">
                <Label className={cn("flex items-center gap-2 text-sm font-medium text-foreground/80", isArabic && "flex-row-reverse")}>
                  <ArrowDownWideNarrow className="h-4 w-4 text-accent" />
                  <span>{t.filters.sortLabel}</span>
                </Label>
                <Select
                  value={sortOption || 'none'}
                  onValueChange={(value) => setSortOption(value === 'none' ? '' : (value as SortOption))}
                >
                  <SelectTrigger id="sortOption" className="w-full border-border/50 bg-background/80 backdrop-blur">
                    <SelectValue placeholder={t.filters.sortPlaceholder} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">{t.filters.sortOptions.none}</SelectItem>
                    <SelectItem value="name">{t.filters.sortOptions.name}</SelectItem>
                    <SelectItem value="ranking">{t.filters.sortOptions.ranking}</SelectItem>
                    <SelectItem value="feesAsc">{t.filters.sortOptions.feesAsc}</SelectItem>
                    <SelectItem value="feesDesc">{t.filters.sortOptions.feesDesc}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-wrap items-center justify-between gap-3 border-t border-border/40 px-6 py-4">
            <div className={cn("flex items-center gap-2 text-sm text-muted-foreground", isArabic && "flex-row-reverse text-right")}>
              <Sparkles className="h-4 w-4 text-accent" />
              <span>{t.summary.showing(filteredUniversities.length)}</span>
            </div>
            <Badge variant="outline" className="border-accent/40 bg-accent/10 text-accent">
              {t.summary.tip}
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
              <p className="mb-3 text-3xl font-semibold text-foreground">{t.empty.title}</p>
              <p className="text-lg text-muted-foreground">{t.empty.description}</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
