import { cn } from "@/lib/cn";

export function ChatLayout({ className, children, ...props }) {
    return (
        <main
            className={cn(
                "mx-auto flex min-h-screen max-w-3xl flex-col px-4 py-6",
                className
            )}
            {...props}
        >
            {children}
        </main>
    );
}