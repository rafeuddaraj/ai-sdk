import { cn } from "@/lib/cn";

export function ChatLoading({ className, ...props }) {
    return (
        <div className={cn("space-y-2 pt-2", className)} {...props}>
            <div className="flex justify-start">
                <div className="h-10 w-[52%] animate-pulse rounded-2xl bg-white/5 ring-1 ring-white/10" />
            </div>
            <div className="flex justify-start">
                <div className="h-10 w-[36%] animate-pulse rounded-2xl bg-white/5 ring-1 ring-white/10" />
            </div>
        </div>
    );
}