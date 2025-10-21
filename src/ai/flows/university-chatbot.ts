"use server";

/**
 * @fileOverview Provides an Arabic Q&A assistant backed by curated local data.
 */

import { universities } from '@/data/universities';
import { z } from 'zod';

const UniversityChatbotInputSchema = z.object({
  question: z.string().describe('The user question about Malaysian universities in Arabic.'),
  context: z
    .string()
    .optional()
    .describe('Previous conversation context to maintain conversation flow.'),
});

export type UniversityChatbotInput = z.infer<typeof UniversityChatbotInputSchema>;

const UniversityChatbotOutputSchema = z.object({
  answer: z.string().describe('The answer to the user question in Arabic.'),
  newContext: z.string().optional().describe('Updated conversation context for the next turn.'),
});

export type UniversityChatbotOutput = z.infer<typeof UniversityChatbotOutputSchema>;

function normalise(text: string) {
  return text
    .toLowerCase()
    .replace(/[\p{P}\p{S}]+/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function formatUniversityAnswer(question: string) {
  const normalizedQuestion = normalise(question);
  const matchedUniversity = universities.find((uni) =>
    [uni.name, uni.id, uni.city, uni.englishName, uni.slug, ...(uni.aliases ?? [])]
      .filter(Boolean)
      .map((value) => normalise(String(value)))
      .some((candidate) => candidate.length > 0 && normalizedQuestion.includes(candidate))
  );

  if (!matchedUniversity) {
    return null;
  }

  const courses = matchedUniversity.availableCourses?.slice(0, 4).join('، ');
  const rankingDetails = [] as string[];
  if (matchedUniversity.ranking?.national) {
    rankingDetails.push(`التصنيف الوطني: ${matchedUniversity.ranking.national}`);
  }
  if (matchedUniversity.ranking?.global) {
    rankingDetails.push(`التصنيف العالمي: ${matchedUniversity.ranking.global}`);
  }
  if (matchedUniversity.ranking?.source) {
    rankingDetails.push(`المصدر: ${matchedUniversity.ranking.source}`);
  }
  const ranking = rankingDetails.length > 0 ? `\n${rankingDetails.join(' | ')}.` : '';
  const website = matchedUniversity.officialWebsiteUrl
    ? `\nيمكنك زيارة الموقع الرسمي هنا: [${matchedUniversity.name}](${matchedUniversity.officialWebsiteUrl}).`
    : '';

  const fees =
    typeof matchedUniversity.annualFees === 'number'
      ? `\nالرسوم السنوية التقريبية للطلاب الدوليين هي حوالي ${matchedUniversity.annualFees.toLocaleString('en-US')} دولار أمريكي.`
      : '';

  const city = matchedUniversity.city ? ` وتقع في مدينة ${matchedUniversity.city}` : '';

  return `جامعة ${matchedUniversity.name}${city} تعد من الخيارات البارزة للطلاب الدوليين.${fees}
${courses ? `\nأبرز التخصصات المتاحة: ${courses}.` : ''}${ranking}${website}`.trim();
}

function buildGeneralAnswer(): string {
  return [
    'لم أتمكن من تحديد جامعة معينة من سؤالك، لكن يسعدني مساعدتك!',
    'حدد اسم الجامعة أو نوع التخصص أو المدينة التي تهمك، وسأشاركك أفضل الخيارات المتاحة في ماليزيا.',
    'يمكنك أيضًا تصفح دليل الجامعات لدينا للاطلاع على الرسوم، التخصصات، وروابط التقديم مباشرة.'
  ].join(' ');
}

export async function universityChatbot(
  input: UniversityChatbotInput
): Promise<UniversityChatbotOutput> {
  const validatedInput = UniversityChatbotInputSchema.parse(input);
  const answer =
    formatUniversityAnswer(validatedInput.question) ??
    buildGeneralAnswer();

  const historySnippet = `${validatedInput.context ?? ''}\nالسؤال: ${validatedInput.question}\nالإجابة: ${answer}`.trim();

  return UniversityChatbotOutputSchema.parse({
    answer,
    newContext: historySnippet.slice(-2000),
  });
}
