
'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { universityChatbot } from '@/ai/flows/university-chatbot';
import type { UniversityChatbotInput, UniversityChatbotOutput } from '@/ai/flows/university-chatbot';
import { Loader2, Send, User, Bot } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

// Function to clean text from asterisks (used for initial greeting/errors)
const cleanSimpleText = (text: string) => {
  return text.replace(/\*/g, ''); // Remove all asterisks
};

// Function to format bot messages: remove asterisks and convert Markdown links to HTML
const formatBotMessageContent = (text: string): string => {
  // 1. Remove asterisks
  let processedText = text.replace(/\*/g, '');
  // 2. Convert Markdown links to HTML links
  // Regex: \[([^\]]+)\]\(([^)]+)\)
  // $1: link text, $2: URL
  processedText = processedText.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-accent hover:underline font-medium">$1</a>'
  );
  return processedText;
};


export function ChatbotInterface() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [context, setContext] = useState<string | undefined>(undefined);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    if (scrollAreaRef.current) {
      const scrollViewport = scrollAreaRef.current.querySelector('div[data-radix-scroll-area-viewport]');
      if (scrollViewport) {
        scrollViewport.scrollTop = scrollViewport.scrollHeight;
      }
    }
  };

  useEffect(() => {
    setMessages([
      {
        id: 'initial-greeting',
        text: cleanSimpleText('مرحباً بك! أنا هنا لمساعدتك في الإجابة على أسئلتك حول الدراسة في ماليزيا. كيف يمكنني خدمتك اليوم؟'),
        sender: 'bot',
        timestamp: new Date(),
      }
    ]);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e?: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const aiInput: UniversityChatbotInput = {
        question: userMessage.text,
        context: context,
      };
      const response: UniversityChatbotOutput = await universityChatbot(aiInput);

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response.answer, // Store raw answer, formatting will be done at render time
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setContext(response.newContext);
    } catch (error) {
      console.error('Error fetching chatbot response:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: cleanSimpleText('عذرًا، حدث خطأ أثناء معالجة طلبك. يرجى المحاولة مرة أخرى.'),
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
      toast({
        title: "خطأ في الدردشة",
        description: "لم نتمكن من الاتصال بمساعد الدردشة. تحقق من اتصالك بالإنترنت.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-full flex-col">
      <ScrollArea className="flex-grow p-6 md:p-8" ref={scrollAreaRef}>
        <div className="space-y-8">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={cn(
                'flex items-end gap-3',
                msg.sender === 'user' ? 'justify-end' : 'justify-start'
              )}
            >
              {msg.sender === 'bot' && (
                <Avatar className="h-10 w-10 border-2 border-primary/50">
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    <Bot className="h-6 w-6" />
                  </AvatarFallback>
                </Avatar>
              )}
              <div
                className={cn(
                  'max-w-[75%] rounded-3xl px-5 py-3 shadow-md text-sm md:text-base leading-relaxed whitespace-pre-wrap',
                  msg.sender === 'user'
                    ? 'rounded-br-lg bg-accent text-accent-foreground shadow-accent/30'
                    : 'rounded-bl-lg bg-muted text-muted-foreground shadow-muted/30'
                )}
              >
                {msg.sender === 'bot' ? (
                  <p dangerouslySetInnerHTML={{ __html: formatBotMessageContent(msg.text) }} />
                ) : (
                  <p>{msg.text}</p>
                )}
                <p className={cn(
                    "mt-2 text-xs opacity-70",
                    msg.sender === 'user' ? "text-right text-accent-foreground/80" : "text-left text-muted-foreground/80"
                  )}
                >
                  {msg.timestamp.toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
              {msg.sender === 'user' && (
                <Avatar className="h-10 w-10 border-2 border-accent/50">
                  <AvatarFallback className="bg-accent text-accent-foreground">
                    <User className="h-6 w-6" />
                  </AvatarFallback>
                </Avatar>
              )}
            </div>
          ))}
          {isLoading && (
             <div className="flex items-end gap-3 justify-start">
               <Avatar className="h-10 w-10 border-2 border-primary/50">
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    <Bot className="h-6 w-6" />
                  </AvatarFallback>
                </Avatar>
                <div className="max-w-[70%] rounded-3xl rounded-bl-lg px-5 py-3 shadow-md bg-muted text-muted-foreground">
                  <Loader2 className="h-5 w-5 animate-spin text-primary" />
                </div>
             </div>
          )}
        </div>
      </ScrollArea>
      <form onSubmit={handleSubmit} className="flex items-center gap-3 border-t border-border/30 p-4 md:p-6 bg-background/90 backdrop-blur-sm">
        <Input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="اكتب سؤالك هنا..."
          className="flex-grow rounded-full border-2 border-border/50 bg-secondary/50 px-5 py-3 text-base focus:border-accent focus:bg-secondary/70 focus:ring-0"
          disabled={isLoading}
          aria-label="اكتب سؤالك هنا"
        />
        <Button type="submit" size="icon" className="h-12 w-12 rounded-full bg-accent text-accent-foreground hover:bg-accent/80 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background transition-all duration-150 ease-in-out hover:scale-105 active:scale-95" disabled={isLoading || !inputValue.trim()}>
          {isLoading ? <Loader2 className="h-6 w-6 animate-spin" /> : <Send className="h-6 w-6" />}
          <span className="sr-only">إرسال</span>
        </Button>
      </form>
    </div>
  );
}
