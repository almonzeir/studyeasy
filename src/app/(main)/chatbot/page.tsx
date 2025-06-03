import { ChatbotInterface } from '@/components/chatbot/ChatbotInterface';
import { BotMessageSquare } from 'lucide-react';

export default function ChatbotPage() {
  return (
    <div className="flex h-[calc(100vh-4rem)] flex-col items-center px-4 py-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-secondary/10 to-background"> {/* Reduced py, removed justify-center */}
      <header className="mb-4 w-full max-w-4xl text-center"> {/* Reduced mb */}
        <BotMessageSquare className="mx-auto mb-6 h-20 w-20 text-accent animate-pulse" />
        <h1 className="font-headline text-5xl font-bold md:text-6xl text-primary">
          الدردشة <span className="text-accent">التفاعلية</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground md:text-xl">
          اطرح أسئلتك حول الدراسة في ماليزيا وسأجيبك باللغة العربية.
        </p>
      </header>
      <div className="w-full max-w-4xl flex-grow overflow-hidden rounded-2xl border border-border/30 bg-card/80 shadow-2xl backdrop-blur-sm flex flex-col">
        <ChatbotInterface />
      </div>
    </div>
  );
}
