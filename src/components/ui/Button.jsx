import { cn } from "@/lib/cn";

export function Button({ className, children, ...props }) {
    return (
        <button
            className={cn(
                "h-10 rounded-xl px-4 text-sm font-medium transition",
                "focus:outline-none focus:ring-2 focus:ring-white/10",
                "disabled:opacity-50 disabled:cursor-not-allowed",
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}