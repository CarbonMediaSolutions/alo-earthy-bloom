import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface HeroProps {
  title: string;
  subtitle?: string;
  image: string;
  showCta?: boolean;
  ctaText?: string;
  ctaLink?: string;
  secondaryCta?: string;
  secondaryCtaLink?: string;
  size?: "default" | "large";
}

export function Hero({
  title,
  subtitle,
  image,
  showCta = false,
  ctaText = "Check Availability",
  ctaLink = "/rooms",
  secondaryCta,
  secondaryCtaLink,
  size = "default",
}: HeroProps) {
  return (
    <section
      className={cn(
        "relative w-full flex items-center justify-center overflow-hidden",
        size === "large" ? "min-h-screen" : "min-h-[60vh]"
      )}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Overlay */}
      <div className="hero-overlay" />

      {/* Content */}
      <div className="relative z-10 container text-center px-4">
        {subtitle && (
          <p className="font-body text-primary-foreground/90 text-lg md:text-xl mb-4 animate-fade-up opacity-0 delay-100">
            {subtitle}
          </p>
        )}
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-primary-foreground mb-6 animate-fade-up opacity-0 delay-200">
          {title}
        </h1>
        
        {showCta && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 animate-fade-up opacity-0 delay-300">
            <Button variant="hero" size="lg" asChild>
              <Link to={ctaLink}>{ctaText}</Link>
            </Button>
            {secondaryCta && secondaryCtaLink && (
              <Button variant="hero-outline" size="lg" asChild>
                <Link to={secondaryCtaLink}>{secondaryCta}</Link>
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
