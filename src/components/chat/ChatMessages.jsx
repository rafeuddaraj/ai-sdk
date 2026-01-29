import { cn } from "@/lib/cn";

export function ChatMessages({ className, children, ...props }) {
    return (
        <div
            className={cn("flex-1 overflow-y-auto px-5 py-5", className)}
            {...props}
        >
            <div className="space-y-3">{children}</div>
        </div>
    );
}