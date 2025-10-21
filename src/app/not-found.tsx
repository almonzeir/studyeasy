
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { HomeIcon, AlertTriangleIcon, Frown } from 'lucide-react'; // Added Frown

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center bg-background/90 px-4 py-12 text-center backdrop-blur-sm"> {/* Slightly more opaque background */}
      <Frown className="mb-6 h-24 w-24 text-accent animate-bounce" /> {/* Changed icon and animation */}
      <h1 className="mb-4 font-headline text-5xl font-bold text-primary md:text-7xl"> {/* Increased size */}
        خطأ 404
      </h1>
      <h2
        className="text-xl font-medium m-0 text-foreground/80 mb-8" /* Adjusted styling */
      >
        الصفحة غير موجودة
      </h2>
      <p className="mb-10 max-w-md text-lg text-muted-foreground">
        عفواً، الصفحة التي تبحث عنها غير متوفرة. ربما تم نقلها أو حذفها.
      </p>
      <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 transition-transform hover:scale-105 shadow-lg hover:shadow-accent/50">
        <Link href="/">
          <HomeIcon className="mr-2 h-5 w-5 rtl:ml-2 rtl:mr-0" />
          العودة إلى الصفحة الرئيسية
        </Link>
      </Button>
    </div>
  );
}
