import Link from "next/link";
import { BotMessageSquare, Mail, MessageSquareHeart, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function ContactPage() {
  return (
    <div className="container py-12 md:py-16">
      <header className="mb-12 text-center">
        <MessageSquareHeart className="mx-auto mb-6 h-16 w-16 text-accent" />
        <h1 className="font-headline text-4xl font-bold md:text-5xl lg:text-6xl">Let&apos;s collaborate</h1>
        <p className="mt-4 text-lg text-foreground/90 md:text-xl lg:text-2xl">
          We love hearing from students, parents, and partners. Reach out for personalised guidance, collaboration
          opportunities, or feedback on how we can make StudyEasy even better.
        </p>
      </header>

      <div className="mx-auto max-w-2xl">
        <Card className="mb-12 overflow-hidden rounded-xl bg-card/90 shadow-2xl backdrop-blur-sm">
          <CardHeader className="bg-secondary/30 p-6">
            <CardTitle className="font-headline text-2xl text-primary md:text-3xl">
              Pick the channel that suits you
            </CardTitle>
            <CardDescription className="text-base">
              We respond within two business days. Include your study interests so we can connect you to the right team
              member.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8 p-6 md:p-8">
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 rounded-full bg-accent p-3.5 text-accent-foreground shadow-lg transition-transform duration-300 group-hover:scale-110">
                <Mail className="h-7 w-7 md:h-8 md:w-8" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground">Email the StudyEasy team</h3>
                <p className="mt-1 text-sm text-muted-foreground md:text-base">
                  For detailed questions about applications, partnerships, or media enquiries, drop us a message at:
                  <Link
                    href="mailto:monzeer2002@gmail.com"
                    className="block break-all text-accent transition-colors hover:underline"
                  >
                    monzeer2002@gmail.com
                  </Link>
                </p>
              </div>
            </div>

            <Separator className="my-6 border-border/50" />

            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 rounded-full bg-green-500 p-3.5 text-white shadow-lg transition-transform duration-300">
                <Phone className="h-7 w-7 md:h-8 md:w-8" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground">WhatsApp for quick questions</h3>
                <p className="mt-1 text-sm text-muted-foreground md:text-base">
                  Need a fast answer about scholarships or timelines? Message us on WhatsApp and we will reply during
                  working hours:
                  <Link
                    href="https://wa.me/601137967833"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-green-500 transition-colors hover:underline"
                  >
                    +60 11-3796 7833
                  </Link>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4 text-center">
          <p className="text-lg text-foreground/80">
            Prefer instant answers? Try our AI Study Coach—it is trained on the same data powering StudyEasy.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-[1.02] hover:bg-primary/90 hover:shadow-primary/40"
          >
            <Link href="/chatbot">
              <BotMessageSquare className="me-2 h-5 w-5" />
              Chat with the AI Study Coach
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
