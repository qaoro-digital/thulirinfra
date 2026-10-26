import { SectionHeading } from "@/components/common/section-heading";
import { trustPoints } from "@/data/site-data";

export function TrustSection() {
  return (
    <section className="section-space bg-foreground text-primary-foreground">
      <div className="site-container">
        <SectionHeading
          eyebrow="Why Thulir Infra"
          title="Built on engineering. Driven by trust."
          light
        />
        <div className="mt-16 grid border-t border-primary-foreground/20 md:grid-cols-2">
          {trustPoints.map((point, index) => (
            <div
              key={point}
              className="grid grid-cols-[40px_1fr] gap-3 border-b border-primary-foreground/20 py-6 md:even:border-l md:even:pl-8"
            >
              <span className="text-xs text-accent">0{index + 1}</span>
              <p className="max-w-md text-base leading-7 text-primary-foreground/80">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
