
'use client';

import { useState, useMemo } from 'react';
import { useForm, type SubmitHandler, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label'; // Keep for budget
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { UniversityCard } from '@/components/university/UniversityCard';
import { guidedUniversitySelection } from '@/ai/flows/guided-university-selection';
import type { GuidedUniversitySelectionInput, GuidedUniversitySelectionOutput as AISuggestionSchemaArray } from '@/ai/flows/guided-university-selection';
import { getUniversityDetailsByName } from '@/ai/flows/get-university-details-flow';
import type { UniversityDetailsOutput } from '@/types';
import { Loader2, Search, Frown } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { mockUniversities } from '@/data/universities'; // Still used for dropdowns
import type { University } from '@/types';

const FormSchema = z.object({
  specialization: z.string().optional(),
  budget: z.coerce.number().min(0, 'الميزانية يجب أن تكون رقمًا موجبًا').optional(),
  city: z.string().optional(),
});

type FormData = z.infer<typeof FormSchema>;

const ALL_SPECIALIZATIONS_VALUE = "all-specializations";
const ALL_CITIES_VALUE = "all-cities";

export function GuidedWizardForm() {
  const [results, setResults] = useState<University[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isFetchingDetails, setIsFetchingDetails] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      specialization: '', 
      budget: undefined,
      city: '', 
    }
  });


  const uniqueSpecializations = useMemo(() => {
    const specializations = new Set<string>();
    mockUniversities.forEach(uni => {
      uni.availableCourses?.forEach(course => specializations.add(course));
    });
    return Array.from(specializations).sort((a, b) => a.localeCompare(b));
  }, []);

  const uniqueCities = useMemo(() => {
    const cities = new Set<string>();
    mockUniversities.forEach(uni => {
      if (uni.city) {
        cities.add(uni.city);
      }
    });
    return Array.from(cities).sort((a,b) => a.localeCompare(b));
  }, []);


  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsLoading(true);
    setIsFetchingDetails(false); 
    setResults([]);
    try {
      const aiInput: GuidedUniversitySelectionInput = {
        specialization: data.specialization === ALL_SPECIALIZATIONS_VALUE || data.specialization === '' ? undefined : data.specialization,
        budget: data.budget,
        city: data.city === ALL_CITIES_VALUE || data.city === '' ? undefined : data.city,
      };
      const aiSuggestions: AISuggestionSchemaArray = await guidedUniversitySelection(aiInput);
      
      setIsLoading(false); 

      if (aiSuggestions && aiSuggestions.length > 0) {
        setIsFetchingDetails(true); 

        const enrichedResultsPromises = aiSuggestions.map(async (suggestedUni) => {
          try {
            const fetchedDetails: UniversityDetailsOutput = await getUniversityDetailsByName({ universityName: suggestedUni.name });
            return {
              ...suggestedUni, // Base info from initial suggestion
              ...fetchedDetails, // Detailed info from the second AI call
              id: `ai-detailed-${encodeURIComponent(fetchedDetails.name || suggestedUni.name)}-${Date.now()}`,
              name: fetchedDetails.name || suggestedUni.name, // Prioritize AI's official name
              city: fetchedDetails.city || suggestedUni.city,
              annualFees: fetchedDetails.annualFees !== undefined ? fetchedDetails.annualFees : suggestedUni.annualFees,
              availableCourses: fetchedDetails.availableCourses || suggestedUni.availableCourses,
              imageUrl: fetchedDetails.imageUrl || 'https://placehold.co/600x400.png?text=University',
              dataAiHint: fetchedDetails.dataAiHint || 'university campus',
              description: fetchedDetails.description || `AI suggested university: ${suggestedUni.name}. Further details might be available on their official website.`,
            };
          } catch (detailError) {
            console.error(`Error fetching details for ${suggestedUni.name}:`, detailError);
            // Fallback to basic info from the initial suggestion if detail fetching fails
            return {
              ...suggestedUni,
              id: `ai-fallback-${encodeURIComponent(suggestedUni.name)}-${Date.now()}`,
              imageUrl: 'https://placehold.co/600x400.png?text=Info+Unavailable',
              dataAiHint: 'university campus',
              description: `AI suggested university. Detailed information could not be fetched. Original suggestion: ${suggestedUni.name}, City: ${suggestedUni.city}, Fees: $${suggestedUni.annualFees}, Courses: ${suggestedUni.availableCourses.join(', ')}`,
            };
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
        setResults([]); 
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
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="specialization"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>التخصص المطلوب (اختياري)</FormLabel>
                  <Select
                    onValueChange={(value) => field.onChange(value === ALL_SPECIALIZATIONS_VALUE ? "" : value)}
                    value={field.value === "" || field.value === undefined ? ALL_SPECIALIZATIONS_VALUE : field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="اختر التخصص أو اتركه فارغًا..." />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value={ALL_SPECIALIZATIONS_VALUE}>أي تخصص</SelectItem>
                      {uniqueSpecializations.map((spec) => (
                        <SelectItem key={spec} value={spec}>
                          {spec}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="budget"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>الميزانية السنوية (بالدولار الأمريكي - اختياري)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="مثال: 5000 أو اتركه فارغًا"
                      {...field}
                      value={field.value ?? ''}
                      onChange={e => field.onChange(e.target.value === '' ? undefined : +e.target.value)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>المدينة المفضلة (اختياري)</FormLabel>
                  <Select
                    onValueChange={(value) => field.onChange(value === ALL_CITIES_VALUE ? "" : value)}
                    value={field.value === "" || field.value === undefined ? ALL_CITIES_VALUE : field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="اختر المدينة أو اتركها فارغة..." />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                       <SelectItem value={ALL_CITIES_VALUE}>أي مدينة</SelectItem>
                      {uniqueCities.map((cityOption) => (
                        <SelectItem key={cityOption} value={cityOption}>
                          {cityOption}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" disabled={isLoading || isFetchingDetails}>
              {(isLoading || isFetchingDetails) ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin rtl:ml-2 rtl:mr-0" />
              ) : (
                <Search className="mr-2 h-4 w-4 rtl:ml-2 rtl:mr-0" />
              )}
              {isLoading ? 'جاري البحث عن اقتراحات...' : isFetchingDetails ? 'جاري جلب التفاصيل...' : 'ابحث عن الجامعات'}
            </Button>
          </form>
        </Form>

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
        {results.length === 0 && !isLoading && !isFetchingDetails && Object.keys(form.formState.errors).length === 0 && form.formState.isSubmitted && (
          <div className="mt-10 text-center">
             <Frown className="mx-auto mb-4 h-16 w-16 text-muted-foreground" />
            <p className="text-lg text-muted-foreground">لم يتم العثور على جامعات تطابق بحثك. يرجى تجربة معايير مختلفة.</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
