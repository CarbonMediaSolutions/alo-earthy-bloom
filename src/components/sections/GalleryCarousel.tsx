import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface GalleryCarouselProps {
  images: { src: string; alt: string }[];
  className?: string;
}

export function GalleryCarousel({ images, className }: GalleryCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className={cn("relative", className)}>
      <div className="overflow-hidden rounded-xl" ref={emblaRef}>
        <div className="flex gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="flex-none w-[320px] md:w-[420px] lg:w-[480px]"
            >
              {/* 3:2 Cinematic aspect ratio with shadow */}
              <div className="gallery-image aspect-[3/2]">
                <div className="image-zoom h-full">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Elegant Minimal Navigation Arrows */}
      <button
        onClick={scrollPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 w-14 h-14 rounded-full bg-background/95 backdrop-blur-sm border border-border flex items-center justify-center text-foreground/70 hover:text-foreground hover:bg-background hover:border-primary/30 transition-all duration-300 z-10 group"
        aria-label="Previous image"
      >
        <ChevronLeft size={20} strokeWidth={1.5} className="group-hover:-translate-x-0.5 transition-transform duration-300" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 w-14 h-14 rounded-full bg-background/95 backdrop-blur-sm border border-border flex items-center justify-center text-foreground/70 hover:text-foreground hover:bg-background hover:border-primary/30 transition-all duration-300 z-10 group"
        aria-label="Next image"
      >
        <ChevronRight size={20} strokeWidth={1.5} className="group-hover:translate-x-0.5 transition-transform duration-300" />
      </button>

      {/* Elegant Dots */}
      <div className="flex justify-center gap-3 mt-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={cn(
              "h-2 rounded-full transition-all duration-500",
              index === selectedIndex
                ? "bg-primary w-8"
                : "bg-primary/25 w-2 hover:bg-primary/40"
            )}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}