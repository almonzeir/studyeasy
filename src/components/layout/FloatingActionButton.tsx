
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import Link from "next/link";

export function FloatingActionButton() {
  return (
    <Button
      asChild
      className="fixed bottom-6 right-6 z-50 h-16 w-16 rounded-full bg-accent p-4 text-accent-foreground shadow-lg hover:bg-accent/90"
      aria-label="قدم الآن أو تواصل معنا"
    >
      <Link href="/contact"> {/* Replace with actual contact/application page later */}
        <Send className="h-7 w-7" />
      </Link>
    </Button>
  );
}
