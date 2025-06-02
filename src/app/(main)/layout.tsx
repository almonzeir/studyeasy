import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingActionButton } from "@/components/layout/FloatingActionButton";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-background/50"> {/* Overlay for readability, opacity reduced */}
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingActionButton />
    </div>
  );
}
