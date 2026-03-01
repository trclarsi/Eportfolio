import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "accent" | "success" | "warning" | "purple";
  icon?: LucideIcon;
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", icon: Icon, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-sm font-medium transition-all duration-200",
          {
            "bg-white/10 text-foreground": variant === "default",
            "bg-accent/20 text-accent": variant === "accent",
            "bg-accent-tertiary/20 text-accent-tertiary": variant === "success",
            "bg-yellow-500/20 text-yellow-500": variant === "warning",
            "bg-accent-secondary/20 text-accent-secondary": variant === "purple",
          },
          className
        )}
        {...props}
      >
        {Icon && <Icon size={14} />}
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";

export { Badge };
