import { cn } from "@/lib/cn";
import { Input } from "./Input";

export function FileInput({
    label = "Attach file",
    helperText = "image/pdf/txt",
    showHelper = true,
    className,
    labelClassName,
    rowClassName,
    helperClassName,
    ...props
}) {
    return (
        <div className={cn("mb-3", className)}>
            <label className={cn("block text-xs text-zinc-400", labelClassName)}>
                {label}
            </label>

            <div className={cn("mt-2 flex items-center gap-3", rowClassName)}>
                <Input
                    type="file"
                    className={cn(
                        "cursor-pointer",
                        "file:mr-3 file:rounded-xl file:border-0",
                        "file:bg-white/10 file:px-3 file:py-2",
                        "file:text-sm file:font-medium file:text-zinc-100",
                        "hover:file:bg-white/15"
                    )}
                    {...props}
                />

                {showHelper ? (
                    <span
                        className={cn(
                            "hidden sm:inline-flex rounded-full border border-white/10",
                            "bg-white/5 px-2.5 py-1 text-xs text-zinc-300",
                            helperClassName
                        )}
                    >
                        {helperText}
                    </span>
                ) : null}
            </div>
        </div>
    );
}