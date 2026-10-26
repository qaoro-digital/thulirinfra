import { useState } from "react";

import { ButtonLink } from "@/components/common/button-link";
import { Button } from "@/components/ui/button";
import { faqs } from "@/data/site-data";

export function FaqSection() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section className="section-space bg-background">
      <div className="site-container grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="eyebrow text-primary">Frequently asked questions</p>
          <h2 className="section-title mt-6 font-display">
            Clarity before
            <br />
            construction.
          </h2>
          <div className="mt-8">
            <ButtonLink to="/contact" variant="outline">
              Talk to our engineers
            </ButtonLink>
          </div>
        </div>
        <div className="border-t border-border">
          {faqs.map(([question, answer], index) => (
            <div key={question} className="border-b border-border">
              <Button
                variant="architecturalPlain"
                onClick={() => setActive(active === index ? null : index)}
                aria-expanded={active === index}
                aria-controls={`faq-answer-${index}`}
                className="grid h-auto w-full grid-cols-[minmax(0,1fr)_24px] gap-6 whitespace-normal py-6 text-left hover:text-primary"
              >
                <span className="font-display text-2xl font-normal">{question}</span>
                <span
                  className={`text-xl transition-transform ${active === index ? "rotate-45" : ""}`}
                >
                  +
                </span>
              </Button>
              <div id={`faq-answer-${index}`} hidden={active !== index}>
                <p className="hero-copy max-w-2xl pb-6 text-base leading-7 text-muted-foreground">
                  {answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
