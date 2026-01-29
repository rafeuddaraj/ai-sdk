import { cn } from "@/lib/cn";
import { Button } from "../ui/Button";
import { Textarea } from "../ui/Textarea";

export function ChatComposer({
    className,
    formProps = {},      // onSubmit etc go here
    textareaProps = {},  // value/onChange/name etc go here
    actionsClassName,
    clearButtonProps = {}, // type="button" onClick etc
    sendButtonProps = {},  // type="submit" disabled etc
    clearLabel = "Clear",
    sendLabel = "Send",
    children
}) {
    return (
        <form
            className={cn(
                "rounded-2xl border border-white/10 bg-white/5 p-3",
                className
            )}
            {...formProps}
        >
            <Textarea
                rows={2}
                placeholder="Write your prompt…"
                {...textareaProps}
            />

            <div className={cn("mt-3 flex items-center gap-2", actionsClassName)}>
                <Button
                    className={cn("bg-white/10 text-zinc-100 hover:bg-white/15")}
                    {...clearButtonProps}
                >
                    {clearLabel}
                </Button>

                <Button
                    className={cn("bg-primary text-white hover:opacity-90")}
                    {...sendButtonProps}
                >
                    {sendLabel}
                </Button>
                {children}
            </div>
        </form>
    );
}