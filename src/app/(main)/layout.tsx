import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingActionButton } from "@/components/layout/FloatingActionButton";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-background/10 via-background/40 to-background/70"> {/* Updated overlay */}
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingActionButton />
    </div>
  );
}
