'use server';

/**
 * @fileOverview An Arabic chatbot for answering questions about Malaysian universities.
 *
 * - universityChatbot - A function that handles the chatbot interaction.
 * - UniversityChatbotInput - The input type for the universityChatbot function.
 * - UniversityChatbotOutput - The return type for the universityChatbot function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const UniversityChatbotInputSchema = z.object({
  question: z.string().describe('The user question about Malaysian universities in Arabic.'),
  context: z.string().optional().describe('Previous conversation context to maintain conversation flow.'),
});
export type UniversityChatbotInput = z.infer<typeof UniversityChatbotInputSchema>;

const UniversityChatbotOutputSchema = z.object({
  answer: z.string().describe('The answer to the user question in Arabic.'),
  newContext: z.string().optional().describe('Updated conversation context for the next turn.'),
});
export type UniversityChatbotOutput = z.infer<typeof UniversityChatbotOutputSchema>;

export async function universityChatbot(input: UniversityChatbotInput): Promise<UniversityChatbotOutput> {
  return universityChatbotFlow(input);
}

const prompt = ai.definePrompt({
  name: 'universityChatbotPrompt',
  input: {
    schema: UniversityChatbotInputSchema,
  },
  output: {
    schema: UniversityChatbotOutputSchema,
  },
  prompt: `أنت مساعد افتراضي باللغة العربية متخصص في الإجابة على أسئلة الطلاب حول الجامعات الماليزية وبرامجها ومتطلبات القبول.

  سياق المحادثة السابق:
  {{#if context}}
  {{context}}
  {{else}}
  لا يوجد سياق سابق.
  {{/if}}

  السؤال الحالي:
  {{question}}

  يرجى تقديم إجابة دقيقة ومفصلة باللغة العربية. إذا كان السؤال يتعلق بمتطلبات القبول، يرجى ذكرها بالتفصيل.
  حافظ على نبرة ودية ومهنية.
  إذا لم تتمكن من العثور على إجابة، اذكر أنك تبذل قصارى جهدك ولكنك غير قادر على الإجابة على وجه التحديد، وحاول توجيه الطالب إلى مصدر آخر.

  تنسيق الإخراج:
  يجب أن يكون الإخراج عبارة عن كائن JSON صالح مع حقلين:
  - الإجابة: إجابة على السؤال باللغة العربية.
  - سياق جديد: سياق المحادثة المحدثة للمحادثات المستقبلية.
  {
  "answer": "",
  "newContext": ""
  }
  `,
});

const universityChatbotFlow = ai.defineFlow(
  {
    name: 'universityChatbotFlow',
    inputSchema: UniversityChatbotInputSchema,
    outputSchema: UniversityChatbotOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

