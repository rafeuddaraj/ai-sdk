import { cn } from "@/lib/cn";

export function ChatError({
    title = "Request failed",
    description = "Something went wrong",
    className,
    titleClassName,
    descriptionClassName,
    ...props
}) {
    return (
        <div
            className={cn(
                "rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3",
                "text-sm text-red-100",
                className
            )}
            {...props}
        >
            <div className={cn("font-semibold", titleClassName)}>{title}</div>
            <div className={cn("mt-1 text-xs opacity-80", descriptionClassName)}>
                {description}
            </div>
        </div>
    );
}