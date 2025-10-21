"use client";

import Link from "next/link";
import {
  BookOpen,
  Bus,
  ClipboardCheck,
  DollarSign,
  Home,
  PiggyBank,
} from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const visaChecklist = [
  "Accept an unconditional offer from your university.",
  "Submit the eVAL application through EMGS.",
  "Apply for the Single Entry Visa at your local embassy.",
  "Complete the Malaysia Digital Arrival Card (MDAC).",
  "Attend the post-arrival medical screening within seven days.",
  "Activate your student pass with the university international office.",
];

const fees = [
  { item: "EMGS application and eVAL", cost: "RM 1,100 – 1,350" },
  { item: "Single Entry Visa", cost: "RM 200 – 300" },
  { item: "Student pass processing", cost: "RM 60 – 110" },
  { item: "Medical screening", cost: "RM 250 – 350" },
  { item: "Personal bond (refundable)", cost: "RM 300 – 2,000" },
];

const livingCosts = [
  { type: "On-campus shared room", cost: "RM 300 – 600", notes: "Utilities usually included; reserve early." },
  { type: "Managed student residence", cost: "RM 700 – 1,100", notes: "Modern facilities with security and events." },
  { type: "Private apartment (shared)", cost: "RM 1,200 – 1,800", notes: "Budget RM 150 – 250 monthly for utilities." },
];

export default function StudyCostsPage() {
  return (
    <div className="bg-gradient-to-b from-background via-secondary/10 to-background py-12 md:py-16">
      <div className="container space-y-12">
        <header className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1 text-sm font-semibold text-accent">
            <ClipboardCheck className="h-4 w-4" />
            Visa and budgeting primer
          </span>
          <h1 className="mt-4 font-headline text-4xl font-bold md:text-5xl">
            Understand the core costs of studying in Malaysia
          </h1>
          <p className="mt-4 text-lg text-muted-foreground md:text-xl">
            Use this quick guide to set your budget, plan your visa steps, and estimate the funds you need for your first year.
          </p>
        </header>

        <Card className="border-border/40 bg-card/85 shadow-xl backdrop-blur">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl font-bold">
              <ClipboardCheck className="h-6 w-6 text-accent" />
              Student visa checklist
            </CardTitle>
            <CardDescription>Track each milestone to avoid delays when you arrive in Malaysia.</CardDescription>
          </CardHeader>
          <CardContent>
            <ol className="space-y-2 text-sm text-muted-foreground">
              {visaChecklist.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>

        <Card className="border-border/40 bg-card/85 shadow-xl backdrop-blur">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl font-bold">
              <DollarSign className="h-6 w-6 text-accent" />
              Visa and processing fees (guide)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Item</TableHead>
                  <TableHead className="text-right">Estimated cost</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {fees.map(({ item, cost }) => (
                  <TableRow key={item}>
                    <TableCell className="text-sm text-muted-foreground">{item}</TableCell>
                    <TableCell className="text-right text-sm font-semibold text-foreground">{cost}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card className="border-border/40 bg-card/85 shadow-xl backdrop-blur">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl font-bold">
              <Home className="h-6 w-6 text-accent" />
              Monthly housing snapshot
            </CardTitle>
            <CardDescription>Budget in RM; add RM 150 – 250 for utilities if not included in rent.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Housing type</TableHead>
                  <TableHead>Typical cost</TableHead>
                  <TableHead>Notes</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {livingCosts.map(({ type, cost, notes }) => (
                  <TableRow key={type}>
                    <TableCell className="font-medium text-foreground">{type}</TableCell>
                    <TableCell className="text-sm text-muted-foreground">{cost}</TableCell>
                    <TableCell className="text-sm text-muted-foreground">{notes}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card className="border-border/40 bg-card/85 shadow-xl backdrop-blur">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl font-bold">
              <PiggyBank className="h-6 w-6 text-accent" />
              Smart budgeting tips
            </CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2 rounded-lg border border-border/30 bg-background/60 p-4">
              <h3 className="text-base font-semibold text-foreground">Plan for RM 24,000 – 32,000 per year</h3>
              <p className="text-sm text-muted-foreground">
                This covers tuition, student pass renewals, rent, food, and transport. Keep a buffer for emergency travel or
                laptop repairs.
              </p>
            </div>
            <div className="space-y-2 rounded-lg border border-border/30 bg-background/60 p-4">
              <h3 className="text-base font-semibold text-foreground">Mix cooking with hawker food</h3>
              <p className="text-sm text-muted-foreground">
                Cook in batches on weekdays and explore food courts on weekends so you enjoy Malaysian flavours without
                overspending.
              </p>
            </div>
            <div className="space-y-2 rounded-lg border border-border/30 bg-background/60 p-4">
              <h3 className="text-base font-semibold text-foreground">Use student transport passes</h3>
              <p className="text-sm text-muted-foreground">
                MyRapid and KTM student cards cut daily commuting costs by up to 50%. Share ride-hailing trips after hours.
              </p>
            </div>
            <div className="space-y-2 rounded-lg border border-border/30 bg-background/60 p-4">
              <h3 className="text-base font-semibold text-foreground">Combine scholarships and campus jobs</h3>
              <p className="text-sm text-muted-foreground">
                Apply for scholarships early and look for library or tutoring roles for an extra RM 8 – 15 per hour during breaks.
              </p>
            </div>
          </CardContent>
        </Card>

        <Separator className="border-border/40" />

        <footer className="mx-auto max-w-3xl space-y-3 text-center text-sm text-muted-foreground">
          <p>
            Figures last updated in September 2025 using an exchange rate of 1 USD = RM 4.75. Confirm amounts with your
            university before making payments.
          </p>
          <p className="flex items-center justify-center gap-2 text-accent">
            <BookOpen className="h-4 w-4" />
            Helpful references:
            <Link href="https://educationmalaysia.gov.my" target="_blank" rel="noopener noreferrer" className="underline">
              EMGS official site
            </Link>
            <span>•</span>
            <Link href="https://www.imi.gov.my" target="_blank" rel="noopener noreferrer" className="underline">
              Immigration Department of Malaysia
            </Link>
          </p>
        </footer>
      </div>
    </div>
  );
}
