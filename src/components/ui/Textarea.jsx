import { cn } from "@/lib/cn";

export function Textarea({ className, ...props }) {
    return (
        <textarea
            className={cn(
                "w-full resize-none rounded-xl bg-transparent",
                "px-2 py-2 text-sm text-zinc-100 placeholder:text-zinc-400",
                "outline-none focus:ring-2 focus:ring-white/10",
                className
            )}
            {...props}
        />
    );
}