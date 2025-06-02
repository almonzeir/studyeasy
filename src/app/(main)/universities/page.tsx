import { UniversityCard } from '@/components/university/UniversityCard';
import { mockUniversities } from '@/data/universities';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Filter, Search } from 'lucide-react';

export default function UniversitiesPage() {
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

      {/* Filters Placeholder */}
      <div className="mb-10 rounded-lg border bg-card p-6 shadow-sm">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 items-end">
          <div>
            <label htmlFor="searchUniversity" className="mb-2 block text-sm font-medium text-foreground/80">
              ابحث بالاسم أو التخصص
            </label>
            <div className="relative">
              <Input id="searchUniversity" type="text" placeholder="مثال: هندسة، جامعة ملايا..." className="pl-10 rtl:pr-10" />
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground rtl:right-3 rtl:left-auto" />
            </div>
          </div>
          <div>
            <label htmlFor="cityFilter" className="mb-2 block text-sm font-medium text-foreground/80">
              المدينة
            </label>
            <Input id="cityFilter" type="text" placeholder="مثال: كوالالمبور" />
          </div>
          <div>
            <label htmlFor="budgetFilter" className="mb-2 block text-sm font-medium text-foreground/80">
              الميزانية السنوية (USD)
            </label>
            <Input id="budgetFilter" type="number" placeholder="مثال: 5000" />
          </div>
          <Button className="w-full md:w-auto bg-primary hover:bg-primary/90">
            <Filter className="mr-2 h-4 w-4 rtl:ml-2 rtl:mr-0" />
            تطبيق الفلاتر
          </Button>
        </div>
      </div>

      {/* University Grid */}
      {mockUniversities.length > 0 ? (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {mockUniversities.map((uni) => (
            <UniversityCard key={uni.id} university={uni} />
          ))}
        </div>
      ) : (
        <div className="py-12 text-center">
          <p className="text-xl text-muted-foreground">لم يتم العثور على جامعات تطابق بحثك.</p>
        </div>
      )}
    </div>
  );
}
