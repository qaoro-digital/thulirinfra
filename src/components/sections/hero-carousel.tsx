import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

import { ButtonLink } from "@/components/common/button-link";
import { Button } from "@/components/ui/button";
import { slides } from "@/data/site-data";

export function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setActive((v) => (v + 1) % slides.length), 9000);
    return () => window.clearInterval(id);
  }, [paused]);

  const currentSlide = slides[active] ?? slides[0];
  if (!currentSlide) return null;

  return (
    <section
      className="architecture-hero relative overflow-hidden bg-foreground text-primary-foreground"
      aria-roledescription="carousel"
      aria-label="Thulir Infra introduction"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
    >
      {slides.map((slide, index) => (
        <img
          key={slide.heading}
          src={slide.image}
          alt="Representative South Indian architecture"
          width={1920}
          height={1200}
          fetchPriority={index === 0 ? "high" : "auto"}
          className={`absolute inset-0 size-full object-cover transition-all duration-[1600ms] ${index === active ? "scale-100 opacity-100" : "scale-[1.04] opacity-0"}`}
        />
      ))}
      <div className="absolute inset-0 bg-clarity-overlay" />
      <div className="hero-layout relative mx-auto flex w-full flex-col">
        <div className="hero-copy" key={active}>
          <p className="eyebrow mb-7 flex items-center gap-4 text-[11px] text-accent md:mb-8">
            <span className="h-px w-10 shrink-0 bg-accent/70" />
            Civil engineering · Construction · Tamil Nadu
          </p>
          <h1 className="hero-heading text-balance font-display">{currentSlide.heading}</h1>
          <div className="mt-8 grid gap-9 md:mt-10 xl:grid-cols-[minmax(0,1fr)_auto] xl:items-end xl:gap-16">
            <div className="min-w-0 max-w-xl">
              <p className="text-base leading-7 text-primary-foreground/90 md:text-[17px] md:leading-8">
                {currentSlide.copy}
              </p>
              <p className="mt-4 text-xs leading-6 text-primary-foreground/60 md:text-sm">
                {currentSlide.support}
              </p>
            </div>
            <div className="hero-actions grid gap-3 sm:flex sm:flex-wrap sm:gap-4">
              <ButtonLink to={currentSlide.primaryTo}>{currentSlide.primary}</ButtonLink>
              <ButtonLink to={currentSlide.secondaryTo} variant="outline">
                {currentSlide.secondary}
              </ButtonLink>
            </div>
          </div>
        </div>
        <div className="hero-controls grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-t border-primary-foreground/15 pt-6">
          <div>
            <p className="text-xs font-semibold">Thulir Infra</p>
            <p className="mt-1 text-[10px] text-primary-foreground/70">
              Representative architectural imagery
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex gap-1">
              <Button
                variant="architecturalIcon"
                size="icon"
                onClick={() => setActive((active + slides.length - 1) % slides.length)}
                aria-label="Previous slide"
              >
                <ChevronLeft />
              </Button>
              <Button
                variant="architecturalIcon"
                size="icon"
                onClick={() => setActive((active + 1) % slides.length)}
                aria-label="Next slide"
              >
                <ChevronRight />
              </Button>
            </div>
            <div className="hidden items-center gap-2 sm:flex">
              <span className="text-xs">0{active + 1}</span>
              <div className="flex gap-1">
                {slides.map((slide, index) => (
                  <Button
                    key={slide.heading}
                    variant="architecturalPlain"
                    onClick={() => setActive(index)}
                    className="h-8 w-7 p-0"
                    aria-label={`Show slide ${index + 1}`}
                    aria-pressed={index === active}
                  >
                    <span
                      className={`h-0.5 w-full ${index === active ? "bg-accent" : "bg-primary-foreground/30"}`}
                    />
                  </Button>
                ))}
              </div>
              <span className="text-xs text-primary-foreground/50">03</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
