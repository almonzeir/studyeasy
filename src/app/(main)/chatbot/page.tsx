import { ChatbotInterface } from '@/components/chatbot/ChatbotInterface';
import { BotMessageSquare } from 'lucide-react';

export default function ChatbotPage() {
  return (
    <div className="flex h-[calc(100vh-4rem)] flex-col items-center px-4 pt-2 pb-2 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-secondary/10 to-background"> {/* Reduced vertical padding */}
      <header className="mb-2 w-full max-w-4xl text-center"> {/* Reduced bottom margin */}
        <BotMessageSquare className="mx-auto mb-3 h-12 w-12 text-accent animate-pulse" /> {/* Reduced size and margin */}
        <h1 className="font-headline text-4xl font-bold md:text-5xl text-primary"> {/* Slightly reduced font size */}
          الدردشة <span className="text-accent">التفاعلية</span>
        </h1>
        <p className="mt-3 text-base text-muted-foreground md:text-lg"> {/* Reduced top margin and font size */}
          اطرح أسئلتك حول الدراسة في ماليزيا وسأجيبك باللغة العربية.
        </p>
      </header>
      <div className="w-full max-w-4xl flex-grow overflow-hidden rounded-2xl border border-border/30 bg-card/80 shadow-2xl backdrop-blur-sm flex flex-col">
        <ChatbotInterface />
      </div>
    </div>
  );
}
