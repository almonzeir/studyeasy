
import { Mail, Phone, MessageSquareHeart, BotMessageSquare, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="container py-12 md:py-16">
      <header className="mb-12 text-center">
        <MessageSquareHeart className="mx-auto mb-6 h-16 w-16 text-accent animate-pulse" />
        <h1 
          className="font-headline text-4xl font-bold md:text-5xl lg:text-6xl"
          style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.75)' }}
        >
          شاركنا <span className="text-accent" style={{ textShadow: '0 2px 6px rgba(0, 0, 0, 0.6)' }}>رأيك!</span>
        </h1>
        <p 
          className="mt-4 text-lg text-foreground/95 md:text-xl lg:text-2xl"
          style={{ textShadow: '0 2px 5px rgba(0, 0, 0, 0.65)' }}
        >
          سواء كان لديك اقتراح، أو استفسار، أو ترغب في الإبلاغ عن مشكلة، تواصل معي مباشرة.
        </p>
      </header>

      <div className="mx-auto max-w-2xl">
        <Card className="overflow-hidden shadow-2xl rounded-xl mb-12 bg-card/90 backdrop-blur-sm">
          <CardHeader className="bg-secondary/30 p-6">
            <CardTitle className="font-headline text-2xl md:text-3xl text-primary">يسعدني التواصل معك</CardTitle>
            <CardDescription className="text-base">يمكنك التواصل معي عبر الوسائل التالية:</CardDescription>
          </CardHeader>
          <CardContent className="p-6 md:p-8 space-y-8">
            <div className="flex items-center space-x-4 rtl:space-x-reverse group">
              <div className="flex-shrink-0 rounded-full bg-accent p-3.5 text-accent-foreground shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-accent/50">
                <Mail className="h-7 w-7 md:h-8 md:w-8" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">البريد الإلكتروني</h3>
                <p className="text-muted-foreground mt-1 text-sm md:text-base">
                  لأية استفسارات، اقتراحات، أو للإبلاغ عن مشكلة:
                  <Link href="mailto:monzeer2002@gmail.com" className="block text-accent hover:underline font-medium text-base md:text-lg break-all">
                    monzeer2002@gmail.com
                  </Link>
                </p>
              </div>
            </div>

            <Separator className="my-6 border-border/50" />

            <div className="flex items-center space-x-4 rtl:space-x-reverse group">
              <div className="flex-shrink-0 rounded-full bg-green-500 p-3.5 text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-green-500/50">
                <Phone className="h-7 w-7 md:h-8 md:w-8" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-green-400 transition-colors">واتساب (للتواصل السريع)</h3>
                <p className="text-muted-foreground mt-1 text-sm md:text-base">
                  للتواصل السريع أو لتقديم ملاحظاتك مباشرة:
                  <Link href="https://wa.me/601137967833" target="_blank" rel="noopener noreferrer" className="block text-green-400 hover:underline font-medium text-base md:text-lg">
                    +60 11-3796 7833
                  </Link>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center space-y-4">
          <p className="text-lg text-foreground/80">
            قبل التواصل، ربما تجد إجابة لاستفسارك لدى <span className="font-semibold text-accent">المستشار الذكي</span>!
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 transition-transform hover:scale-105 shadow-lg hover:shadow-primary/40">
            <Link href="/chatbot">
              <BotMessageSquare className="mr-2 h-5 w-5 rtl:ml-2 rtl:mr-0" />
              جرب المستشار الذكي الآن
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
