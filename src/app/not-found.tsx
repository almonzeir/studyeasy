
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { HomeIcon, AlertTriangleIcon } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center bg-background/85 px-4 py-12 text-center">
      <AlertTriangleIcon className="mb-6 h-20 w-20 text-destructive animate-pulse" />
      <h1 className="mb-4 font-headline text-5xl font-bold text-primary md:text-6xl">
        خطأ 404
      </h1>
      <h2
        className="text-sm font-normal leading-[49px] m-0 text-foreground/90 mb-6"
      >
        why is this
      </h2>
      <p className="mb-8 max-w-md text-lg text-muted-foreground">
        عفواً، الصفحة التي تحاول الوصول إليها غير موجودة أو ربما تم نقلها إلى عنوان آخر.
      </p>
      <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 transition-transform hover:scale-105 shadow-lg">
        <Link href="/">
          <HomeIcon className="mr-2 h-5 w-5 rtl:ml-2 rtl:mr-0" />
          العودة إلى الصفحة الرئيسية
        </Link>
      </Button>
    </div>
  );
}
