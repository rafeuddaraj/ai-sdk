import { cn } from "@/lib/cn";
import { FileInput } from "../ui/FileInput";
import { ChatComposer } from "./ChatComposer";

export function ChatFooter({
    className,
    showFile = true,
    fileProps = {},       // goes to <FileInput />
    composerProps = {},   // goes to <ChatComposer />
    ...props
}) {
    return (
        <div className={cn("border-t border-white/10 p-4", className)} {...props}>
            {showFile ? <FileInput {...fileProps} /> : null}
            <ChatComposer {...composerProps} />
        </div>
    );
}