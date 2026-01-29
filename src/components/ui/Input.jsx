import { cn } from "@/lib/cn";

export function Input({ className, ...props }) {
    return (
        <input
            className={cn(
                "w-full rounded-2xl border border-white/10 bg-white/5",
                "px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-400",
                "outline-none focus:ring-2 focus:ring-white/10",
                className
            )}
            {...props}
        />
    );
}