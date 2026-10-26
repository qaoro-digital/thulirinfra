import { ArrowRight } from "lucide-react";

import { SectionHeading } from "@/components/common/section-heading";
import { processSteps } from "@/data/site-data";

export function ProcessSection() {
  return (
    <section className="section-space bg-secondary">
      <div className="site-container">
        <SectionHeading
          eyebrow="Our work process"
          title="A considered path from idea to handover."
          intro="Planning, approvals, construction, and oversight brought together in one coordinated approach."
        />
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map(([title, copy], index) => (
            <article key={title} className="group border-t border-border pt-6">
              <div className="flex items-center justify-between">
                <span className="font-display text-5xl text-primary/35">0{index + 1}</span>
                <ArrowRight
                  size={18}
                  className="text-primary transition-transform group-hover:translate-x-1"
                />
              </div>
              <h3 className="mt-7 font-display text-2xl">{title}</h3>
              <p className="mt-4 text-base leading-7 text-muted-foreground">{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
