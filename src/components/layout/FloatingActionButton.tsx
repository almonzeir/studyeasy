import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function FloatingActionButton() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            asChild
            className="fixed bottom-6 right-6 z-50 h-16 w-16 rounded-full bg-accent p-4 text-accent-foreground shadow-lg hover:bg-accent/90"
            aria-label="قدم الآن أو تواصل معنا"
          >
            <Link href="/contact"> {/* Replace with actual contact/application page later */}
              <Send className="h-7 w-7" />
            </Link>
          </Button>
        </TooltipTrigger>
        <TooltipContent side="left" className="bg-accent text-accent-foreground">
          <p>قدم الآن / تواصل معنا</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
