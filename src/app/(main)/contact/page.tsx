
import { Mail, Phone, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="container py-12 md:py-16">
      <header className="mb-12 text-center">
        <Mail className="mx-auto mb-6 h-16 w-16 text-accent animate-bounce" />
        <h1 
          className="font-headline text-4xl font-bold md:text-5xl"
          style={{ textShadow: '0 2px 6px rgba(0, 0, 0, 0.7)' }}
        >
          تواصل <span className="text-accent" style={{ textShadow: '0 2px 5px rgba(0, 0, 0, 0.5)' }}>معنا</span>
        </h1>
        <p 
          className="mt-4 text-lg text-foreground/95 md:text-xl"
          style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.6)' }}
        >
          نحن هنا لمساعدتك في رحلتك التعليمية في ماليزيا. لا تتردد في الاتصال بنا!
        </p>
      </header>

      <div className="mx-auto max-w-3xl">
        <Card className="overflow-hidden shadow-2xl rounded-xl mb-12">
          <CardHeader className="bg-secondary/20">
            <CardTitle className="font-headline text-2xl text-primary">معلومات الاتصال</CardTitle>
            <CardDescription>يمكنك التواصل معنا عبر القنوات التالية:</CardDescription>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="flex items-start space-x-4 rtl:space-x-reverse">
              <div className="flex-shrink-0 rounded-full bg-accent p-3 text-accent-foreground shadow-md">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">البريد الإلكتروني</h3>
                <p className="text-muted-foreground">
                  للاستفسارات العامة والدعم:
                  <Link href="mailto:info@daleelmalaysia.com" className="block text-accent hover:underline">
                    info@daleelmalaysia.com
                  </Link>
                </p>
                <p className="text-muted-foreground mt-1">
                  للاستفسارات المتعلقة بالقبول والجامعات:
                  <Link href="mailto:admissions@daleelmalaysia.com" className="block text-accent hover:underline">
                    admissions@daleelmalaysia.com
                  </Link>
                </p>
              </div>
            </div>

            <Separator />

            <div className="flex items-start space-x-4 rtl:space-x-reverse">
              <div className="flex-shrink-0 rounded-full bg-accent p-3 text-accent-foreground shadow-md">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">الهاتف (واتساب)</h3>
                <p className="text-muted-foreground">
                  تواصل معنا عبر واتساب للحصول على ردود سريعة:
                  <Link href="https://wa.me/601137967833" target="_blank" rel="noopener noreferrer" className="block text-accent hover:underline">
                    +60 11-3796 7833
                  </Link>
                </p>
              </div>
            </div>
            
            <Separator />

            <div className="flex items-start space-x-4 rtl:space-x-reverse">
              <div className="flex-shrink-0 rounded-full bg-accent p-3 text-accent-foreground shadow-md">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">ساعات العمل</h3>
                <p className="text-muted-foreground">
                  من الإثنين إلى الجمعة: 9:00 صباحًا - 6:00 مساءً (توقيت ماليزيا GMT+8)
                </p>
                <p className="text-muted-foreground">
                  نحاول الرد على جميع الاستفسارات في غضون 24-48 ساعة عمل.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <p className="text-lg text-foreground/80 mb-4">
            هل لديك سؤال سريع؟ جرب <span className="font-semibold text-accent">مستشارنا الذكي</span>!
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/chatbot">
              تحدث مع المستشار الآن
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
