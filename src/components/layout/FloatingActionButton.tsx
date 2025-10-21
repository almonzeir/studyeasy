
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import Link from "next/link";

export function FloatingActionButton() {
  return (
    <Button
      asChild
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 h-14 w-14 md:h-16 md:w-16 rounded-full bg-accent p-3 md:p-4 text-accent-foreground shadow-lg hover:bg-accent/90"
      aria-label="قدم الآن أو تواصل معنا"
    >
      <Link href="/contact">
        <Send className="h-6 w-6 md:h-7 md:w-7" />
      </Link>
    </Button>
  );
}
