import { useState } from "react";

import { SectionHeading } from "@/components/common/section-heading";
import { Button } from "@/components/ui/button";
import { values } from "@/data/site-data";

export function ValuesSection() {
  const [active, setActive] = useState(0);
  return (
    <section className="section-space bg-background">
      <div className="site-container">
        <SectionHeading
          eyebrow="Our core values"
          title="Principles that shape every decision."
          intro="Customer satisfaction, quality standards, transparent communication, and responsibility guide how we plan, build, and work together."
        />
        <div className="mt-12 border-t border-border">
          {values.map(([number, title, description], index) => (
            <div key={number} className="border-b border-border">
              <Button
                variant="architecturalPlain"
                onClick={() => setActive(active === index ? -1 : index)}
                aria-expanded={active === index}
                className="grid h-auto w-full grid-cols-[32px_minmax(0,1fr)_24px] gap-4 whitespace-normal py-6 text-left hover:text-primary"
              >
                <span className="text-xs text-primary">{number}</span>
                <span className="min-w-0 font-display text-2xl font-normal leading-snug md:text-3xl">
                  {title}
                </span>
                <span
                  className={`text-xl transition-transform ${active === index ? "rotate-45" : ""}`}
                >
                  +
                </span>
              </Button>
              {active === index && (
                <p className="hero-copy max-w-3xl pb-7 pl-12 text-base leading-7 text-muted-foreground">
                  {description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
