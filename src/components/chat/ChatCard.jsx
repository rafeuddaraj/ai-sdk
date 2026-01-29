import { cn } from "@/lib/cn";

export function ChatCard({ className, children, ...props }) {
    return (
        <section
            className={cn(
                "flex h-[calc(100vh-48px)] flex-col rounded-3xl",
                "border border-white/10 bg-zinc-950 shadow-soft",
                className
            )}
            {...props}
        >
            {children}
        </section>
    );
}