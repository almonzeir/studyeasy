
'use client';

import { useState, useMemo } from 'react';
import { useForm, type SubmitHandler, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
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
  specialization: z.string().optional().describe("The student's desired field of study. If omitted, the AI should consider all specializations."),
  budget: z.coerce.number().min(0, 'الميزانية يجب أن تكون رقمًا موجبًا').optional().describe("The student's annual budget for university fees and living costs in USD. If omitted, the AI should consider all budgets or not filter by it."),
  city: z.string().optional().describe("The student's preferred city in Malaysia. If omitted, the AI should consider all cities in Malaysia."),
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
        specialization: data.specialization === ALL_SPECIALIZATIONS_VALUE || !data.specialization ? undefined : data.specialization,
        budget: data.budget,
        city: data.city === ALL_CITIES_VALUE || !data.city ? undefined : data.city,
      };
      const aiSuggestions: AISuggestionSchemaArray = await guidedUniversitySelection(aiInput);
      
      setIsLoading(false); 

      if (aiSuggestions && aiSuggestions.length > 0) {
        setIsFetchingDetails(true); 

        const enrichedResultsPromises = aiSuggestions.map(async (suggestedUni) => {
          const fetchedDetails: UniversityDetailsOutput = await getUniversityDetailsByName({ universityName: suggestedUni.name });
          
          // Use the university name as the ID for AI-sourced universities
          // This makes the URL for the detail page cleaner and directly usable for AI queries if needed.
          const universityId = fetchedDetails.name || suggestedUni.name;

          return {
            ...fetchedDetails,
            id: universityId, 
            name: fetchedDetails.name || suggestedUni.name,
            city: fetchedDetails.city || suggestedUni.city,
            annualFees: fetchedDetails.annualFees !== undefined ? fetchedDetails.annualFees : suggestedUni.annualFees,
            availableCourses: fetchedDetails.availableCourses || suggestedUni.availableCourses,
            imageUrl: fetchedDetails.imageUrl || `https://placehold.co/600x400.png?text=${encodeURIComponent(universityId)}`,
            dataAiHint: fetchedDetails.dataAiHint || 'university campus',
            description: fetchedDetails.description || `AI suggested university: ${suggestedUni.name}. Further details might be available on their official website.`,
            logoUrl: fetchedDetails.logoUrl || `https://placehold.co/100x100.png?text=${encodeURIComponent(universityId)}`,
            livingCosts: fetchedDetails.livingCosts,
            acceptanceCriteria: fetchedDetails.acceptanceCriteria,
            officialWebsiteUrl: fetchedDetails.officialWebsiteUrl,
            applicationLink: fetchedDetails.applicationLink,
            studentHandbookUrl: fetchedDetails.studentHandbookUrl,
          } as University;
        });

        const settledResults = await Promise.allSettled(enrichedResultsPromises);
        
        const finalResults = settledResults
          .filter(result => result.status === 'fulfilled')
          .map(result => (result as PromiseFulfilledResult<University>).value);
        
        setIsFetchingDetails(false);
        setResults(finalResults);

        if (finalResults.length > 0) {
           toast({
             title: "تم العثور على الجامعات",
             description: `وجدنا ${finalResults.length} جامعة تطابق بحثك.`,
             variant: "default"
           });
        } else { 
          if (aiSuggestions.length > 0) {
            toast({
              title: "فشل في جلب التفاصيل",
              description: "تم العثور على اقتراحات أولية، ولكن لم نتمكن من تحميل التفاصيل الكاملة لأي منها. حاول مرة أخرى أو قم بتوسيع معايير البحث.",
              variant: "default",
            });
          } else {
            toast({
              title: "لا توجد نتائج",
              description: "لم يتم العثور على جامعات تطابق معاييرك. حاول تعديل بحثك.",
              variant: "default",
            });
          }
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
                        <SelectValue placeholder="اختر التخصص أو اتركه فارغًا لاختيار أي تخصص" />
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
                  <FormLabel>الميزانية السنوية القصوى (بالدولار الأمريكي - اختياري)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="مثال: 5000 (اتركه فارغًا لأي ميزانية)"
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
                        <SelectValue placeholder="اختر المدينة أو اتركها فارغة لاختيار أي مدينة" />
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

        {(results.length > 0 && !isLoading && !isFetchingDetails) && (
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
        {(results.length === 0 && !isLoading && !isFetchingDetails && Object.keys(form.formState.errors).length === 0 && form.formState.isSubmitted) && (
          <div className="mt-10 text-center">
             <Frown className="mx-auto mb-4 h-16 w-16 text-muted-foreground" />
            <p className="text-lg text-muted-foreground">لم يتم العثور على جامعات تطابق بحثك. يرجى تجربة معايير مختلفة.</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
