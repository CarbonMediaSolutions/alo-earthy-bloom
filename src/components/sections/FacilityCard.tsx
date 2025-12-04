import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FacilityCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export function FacilityCard({
  icon: Icon,
  title,
  description,
  className,
}: FacilityCardProps) {
  return (
    <div
      className={cn(
        "bg-card p-8 rounded-lg text-center card-hover",
        className
      )}
    >
      <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-secondary flex items-center justify-center">
        <Icon className="w-7 h-7 text-primary" />
      </div>
      <h3 className="font-heading text-xl text-foreground mb-3">{title}</h3>
      <p className="font-body text-muted-foreground text-sm">{description}</p>
    </div>
  );
}
