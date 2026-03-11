import ReactMarkdown from "react-markdown";
import { Message } from "@/lib/chat";
import { Bot, User } from "lucide-react";

export function ChatMessage({ message }: { message: Message }) {
  const isUser = message.role === "user";

  return (
    <div className={`flex gap-3 px-4 py-5 ${isUser ? "bg-transparent" : "bg-muted/50"}`}>
      <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${isUser ? "bg-primary text-primary-foreground" : "bg-accent text-accent-foreground"}`}>
        {isUser ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
      </div>
      <div className="prose prose-sm max-w-none text-foreground prose-headings:text-foreground prose-p:text-foreground prose-strong:text-foreground prose-code:text-foreground prose-pre:bg-secondary prose-pre:text-foreground">
        <ReactMarkdown>{message.content || "..."}</ReactMarkdown>
      </div>
    </div>
  );
}
