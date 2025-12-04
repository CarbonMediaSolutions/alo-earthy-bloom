import { cn } from "@/lib/utils";

interface SectionTitleProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionTitle({
  label,
  title,
  subtitle,
  align = "center",
  className,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      {label && (
        <span className="font-body text-sm uppercase tracking-widest text-primary mb-3 block">
          {label}
        </span>
      )}
      <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="font-body text-muted-foreground max-w-2xl mx-auto text-lg">
          {subtitle}
        </p>
      )}
      {align === "center" && (
        <div className="w-12 h-0.5 bg-primary mx-auto mt-6" />
      )}
    </div>
  );
}
