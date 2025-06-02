import { ChatbotInterface } from '@/components/chatbot/ChatbotInterface';
import { BotMessageSquare } from 'lucide-react';

export default function ChatbotPage() {
  return (
    <div className="container flex h-[calc(100vh-4rem)] flex-col py-8 md:py-12"> {/* Adjust height considering header */}
      <header className="mb-8 text-center">
        <BotMessageSquare className="mx-auto mb-4 h-16 w-16 text-accent" />
        <h1 className="font-headline text-4xl font-bold md:text-5xl">
          الدردشة <span className="text-accent">التفاعلية</span>
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          اطرح أسئلتك حول الدراسة في ماليزيا وسأجيبك باللغة العربية.
        </p>
      </header>
      <div className="flex-grow overflow-hidden rounded-lg border bg-card shadow-xl">
        <ChatbotInterface />
      </div>
    </div>
  );
}
