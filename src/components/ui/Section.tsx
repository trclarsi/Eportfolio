import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends HTMLAttributes<HTMLDivElement> {
  id?: string;
}

const Section = forwardRef<HTMLDivElement, SectionProps>(
  ({ className, id, children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        id={id}
        className={cn(
          "py-16 md:py-24 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto",
          className
        )}
        {...props}
      >
        {children}
      </section>
    );
  }
);

Section.displayName = "Section";

export { Section };
