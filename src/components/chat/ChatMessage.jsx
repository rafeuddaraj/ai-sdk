import { cn } from "@/lib/cn";

export function ChatMessage({
    role = "assistant",
    className,
    bubbleClassName,
    children,
    ...props
}) {
    const isUser = role === "user";

    return (
        <div
            className={cn("flex", isUser ? "justify-end" : "justify-start", className)}
            {...props}
        >
            <div
                className={cn(
                    "max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-wrap",
                    "ring-1 ring-white/10",
                    isUser ? "bg-primary text-white" : "bg-white/5 text-zinc-100",
                    bubbleClassName
                )}
            >
                {children}
            </div>
        </div>
    );
}