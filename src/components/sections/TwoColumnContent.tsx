import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TwoColumnContentProps {
  label?: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  ctaText?: string;
  ctaLink?: string;
  reverse?: boolean;
  className?: string;
}

export function TwoColumnContent({
  label,
  title,
  description,
  image,
  imageAlt,
  ctaText,
  ctaLink,
  reverse = false,
  className,
}: TwoColumnContentProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center",
        className
      )}
    >
      {/* Image */}
      <div
        className={cn(
          "image-zoom rounded-lg overflow-hidden shadow-card",
          reverse && "lg:order-2"
        )}
      >
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-[400px] lg:h-[500px] object-cover"
        />
      </div>

      {/* Content */}
      <div className={cn(reverse && "lg:order-1")}>
        {label && (
          <span className="font-body text-sm uppercase tracking-widest text-primary mb-3 block">
            {label}
          </span>
        )}
        <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
          {title}
        </h2>
        <p className="font-body text-muted-foreground text-lg leading-relaxed mb-8">
          {description}
        </p>
        {ctaText && ctaLink && (
          <Button variant="outline" asChild>
            <Link to={ctaLink}>{ctaText}</Link>
          </Button>
        )}
      </div>
    </div>
  );
}
