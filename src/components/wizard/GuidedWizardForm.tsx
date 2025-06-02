'use client';

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { UniversityCard } from '@/components/university/UniversityCard';
import { guidedUniversitySelection } from '@/ai/flows/guided-university-selection';
import type { GuidedUniversitySelectionInput, GuidedUniversitySelectionOutput } from '@/ai/flows/guided-university-selection';
import { Loader2, Search } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";


const FormSchema = z.object({
  specialization: z.string().min(3, 'التخصص مطلوب (3 أحرف على الأقل)'),
  budget: z.coerce.number().min(0, 'الميزانية يجب أن تكون رقمًا موجبًا'),
  city: z.string().min(3, 'المدينة المفضلة مطلوبة (3 أحرف على الأقل)'),
});

type FormData = z.infer<typeof FormSchema>;

export function GuidedWizardForm() {
  const [results, setResults] = useState<GuidedUniversitySelectionOutput>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsLoading(true);
    setResults([]);
    try {
      const aiInput: GuidedUniversitySelectionInput = {
        specialization: data.specialization,
        budget: data.budget,
        city: data.city,
      };
      const response = await guidedUniversitySelection(aiInput);
      setResults(response);
      if (response.length === 0) {
        toast({
          title: "لا توجد نتائج",
          description: "لم نتمكن من العثور على جامعات تطابق معاييرك. حاول تعديل بحثك.",
          variant: "default",
        });
      }
    } catch (error) {
      console.error('Error fetching university suggestions:', error);
      toast({
        title: "حدث خطأ",
        description: "حدث خطأ أثناء محاولة جلب اقتراحات الجامعات. يرجى المحاولة مرة أخرى.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="shadow-xl">
      <CardHeader>
        <CardTitle className="text-center font-headline text-2xl">أخبرنا عن تفضيلاتك</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <Label htmlFor="specialization">التخصص المطلوب</Label>
            <Input
              id="specialization"
              {...register('specialization')}
              placeholder="مثال: هندسة البرمجيات، إدارة الأعمال"
              className="mt-1"
            />
            {errors.specialization && <p className="mt-1 text-sm text-destructive">{errors.specialization.message}</p>}
          </div>

          <div>
            <Label htmlFor="budget">الميزانية السنوية (بالدولار الأمريكي)</Label>
            <Input
              id="budget"
              type="number"
              {...register('budget')}
              placeholder="مثال: 5000"
              className="mt-1"
            />
            {errors.budget && <p className="mt-1 text-sm text-destructive">{errors.budget.message}</p>}
          </div>

          <div>
            <Label htmlFor="city">المدينة المفضلة</Label>
            <Input
              id="city"
              {...register('city')}
              placeholder="مثال: كوالالمبور، بينانج"
              className="mt-1"
            />
            {errors.city && <p className="mt-1 text-sm text-destructive">{errors.city.message}</p>}
          </div>

          <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" disabled={isLoading}>
            {isLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin rtl:ml-2 rtl:mr-0" />
            ) : (
              <Search className="mr-2 h-4 w-4 rtl:ml-2 rtl:mr-0" />
            )}
            {isLoading ? 'جاري البحث...' : 'ابحث عن الجامعات'}
          </Button>
        </form>

        {results.length > 0 && (
          <div className="mt-10">
            <h3 className="mb-6 text-center font-headline text-2xl">الجامعات المقترحة لك:</h3>
            <div className="grid grid-cols-1 gap-6">
              {results.map((uni, index) => (
                <UniversityCard 
                  key={index} 
                  university={{
                    id: String(index + 1), // Create a temporary ID
                    name: uni.name,
                    city: uni.city,
                    annualFees: uni.annualFees,
                    availableCourses: uni.availableCourses,
                    imageUrl: 'https://placehold.co/600x400.png', // Placeholder image
                    dataAiHint: 'university building'
                  }}
                />
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
