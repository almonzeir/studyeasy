
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
import type { GuidedUniversitySelectionInput, GuidedUniversitySelectionOutput as AISuggestionSchemaArray } from '@/ai/flows/guided-university-selection';
import { getUniversityDetailsByName } from '@/ai/flows/get-university-details-flow';
import type { UniversityDetailsOutput } from '@/types';
import { Loader2, Search, Frown } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { mockUniversities } from '@/data/universities';
import type { University } from '@/types';

const FormSchema = z.object({
  specialization: z.string().min(3, 'التخصص مطلوب (3 أحرف على الأقل)'),
  budget: z.coerce.number().min(0, 'الميزانية يجب أن تكون رقمًا موجبًا'),
  city: z.string().min(3, 'المدينة المفضلة مطلوبة (3 أحرف على الأقل)'),
});

type FormData = z.infer<typeof FormSchema>;

export function GuidedWizardForm() {
  const [results, setResults] = useState<University[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isFetchingDetails, setIsFetchingDetails] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsLoading(true);
    setIsFetchingDetails(false); // Reset fetching details state
    setResults([]);
    try {
      const aiInput: GuidedUniversitySelectionInput = {
        specialization: data.specialization,
        budget: data.budget,
        city: data.city,
      };
      const aiSuggestions: AISuggestionSchemaArray = await guidedUniversitySelection(aiInput);
      
      setIsLoading(false); // Initial suggestions received

      if (aiSuggestions && aiSuggestions.length > 0) {
        setIsFetchingDetails(true); // Now indicate we are fetching further details

        const enrichedResultsPromises = aiSuggestions.map(async (suggestedUni, index) => {
          const lowerCaseSuggestedName = suggestedUni.name.toLowerCase();
          const matchedMockUni = mockUniversities.find(
            (mockUni) => mockUni.name.toLowerCase() === lowerCaseSuggestedName ||
                         mockUni.name.toLowerCase().includes(lowerCaseSuggestedName) ||
                         lowerCaseSuggestedName.includes(mockUni.name.toLowerCase())
          );

          if (matchedMockUni) {
            return matchedMockUni;
          } else {
            // Not found in mock data, try to fetch details using the new AI flow
            try {
              const fetchedDetails: UniversityDetailsOutput = await getUniversityDetailsByName({ universityName: suggestedUni.name });
              return {
                ...suggestedUni, // Start with basic info from initial suggestion
                ...fetchedDetails, // Override/add with more detailed info
                id: `ai-detailed-${encodeURIComponent(fetchedDetails.name || suggestedUni.name)}-${Date.now()}`,
                // Ensure required fields for UniversityCard are present, even if from initial suggestion
                name: fetchedDetails.name || suggestedUni.name,
                city: fetchedDetails.city || suggestedUni.city,
                annualFees: fetchedDetails.annualFees || suggestedUni.annualFees,
                availableCourses: fetchedDetails.availableCourses || suggestedUni.availableCourses,
                imageUrl: fetchedDetails.imageUrl || 'https://placehold.co/600x400.png?text=University',
                dataAiHint: fetchedDetails.dataAiHint || 'university campus',
              };
            } catch (detailError) {
              console.error(`Error fetching details for ${suggestedUni.name}:`, detailError);
              // Fallback to basic info if detail fetching fails
              return {
                ...suggestedUni,
                id: `ai-fallback-${encodeURIComponent(suggestedUni.name)}-${Date.now()}`,
                imageUrl: 'https://placehold.co/600x400.png?text=University+Info+Unavailable',
                dataAiHint: 'university campus',
                description: `AI suggested university. Detailed information could not be fetched. Original suggestion: ${suggestedUni.name}, City: ${suggestedUni.city}, Fees: $${suggestedUni.annualFees}, Courses: ${suggestedUni.availableCourses.join(', ')}`,
              };
            }
          }
        });

        const settledResults = await Promise.allSettled(enrichedResultsPromises);
        const finalResults = settledResults
          .filter(result => result.status === 'fulfilled')
          .map(result => (result as PromiseFulfilledResult<University>).value);
        
        setResults(finalResults);
        setIsFetchingDetails(false);

        if (finalResults.length === 0 && aiSuggestions.length > 0) {
             toast({
                title: "جاري جلب التفاصيل",
                description: "لم نتمكن من جلب تفاصيل إضافية لبعض الاقتراحات.",
                variant: "default",
            });
        } else if (finalResults.length === 0) {
             toast({
                title: "لا توجد نتائج",
                description: "لم نتمكن من العثور على جامعات تطابق معاييرك. حاول تعديل بحثك.",
                variant: "default",
            });
        }

      } else {
        toast({
          title: "لا توجد نتائج",
          description: "لم نتمكن من العثور على جامعات تطابق معاييرك. حاول تعديل بحثك.",
          variant: "default",
        });
      }

    } catch (error) {
      console.error('Error in wizard submission process:', error);
      toast({
        title: "حدث خطأ",
        description: "حدث خطأ أثناء محاولة جلب اقتراحات الجامعات. يرجى المحاولة مرة أخرى.",
        variant: "destructive",
      });
      setIsLoading(false);
      setIsFetchingDetails(false);
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

          <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" disabled={isLoading || isFetchingDetails}>
            {(isLoading || isFetchingDetails) ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin rtl:ml-2 rtl:mr-0" />
            ) : (
              <Search className="mr-2 h-4 w-4 rtl:ml-2 rtl:mr-0" />
            )}
            {isLoading ? 'جاري البحث عن اقتراحات...' : isFetchingDetails ? 'جاري جلب التفاصيل...' : 'ابحث عن الجامعات'}
          </Button>
        </form>

        {results.length > 0 && !isLoading && !isFetchingDetails && (
          <div className="mt-10">
            <h3 className="mb-6 text-center font-headline text-2xl">الجامعات المقترحة لك:</h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {results.map((uni) => (
                <UniversityCard
                  key={uni.id}
                  university={uni}
                />
              ))}
            </div>
          </div>
        )}
        {results.length === 0 && !isLoading && !isFetchingDetails && !Object.keys(errors).length && (
          // This condition should be met if form submitted, no errors, and no results after all fetching.
          // We need to ensure this message doesn't show while loading or before first submission.
          // A check if form has been submitted might be needed if this shows prematurely.
          <div className="mt-10 text-center">
             <Frown className="mx-auto mb-4 h-16 w-16 text-muted-foreground" />
            <p className="text-lg text-muted-foreground">لم يتم العثور على جامعات تطابق بحثك. يرجى تجربة معايير مختلفة.</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
