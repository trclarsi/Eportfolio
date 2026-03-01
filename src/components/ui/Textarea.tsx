import { TextareaHTMLAttributes, forwardRef, useState } from "react";
import { cn } from "@/lib/utils";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const [focused, setFocused] = useState(false);

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={id}
            className={cn(
              "block text-sm font-medium mb-2 transition-colors duration-200",
              focused ? "text-accent" : "text-foreground-secondary"
            )}
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={id}
          className={cn(
            "w-full bg-transparent border-b-2 border-white/10 py-2.5 px-1 text-foreground placeholder:text-foreground-secondary/50 transition-all duration-300 focus:outline-none resize-none",
            error
              ? "border-error focus:border-error"
              : "border-white/10 focus:border-accent",
            className
          )}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          {...props}
        />
        {error && (
          <p className="mt-1.5 text-sm text-error animate-shake">{error}</p>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };
