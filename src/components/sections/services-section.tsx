import { ArrowRight } from "lucide-react";

import { ButtonLink } from "@/components/common/button-link";
import { SectionHeading } from "@/components/common/section-heading";
import { services } from "@/data/site-data";

export function ServicesSection({ full = false }: { full?: boolean }) {
  return (
    <section className="section-space bg-secondary">
      <div className="site-container">
        <SectionHeading
          eyebrow="Our services"
          title="From concept to completion, engineered with precision."
          intro="One coordinated approach to planning, approvals, construction, and project oversight."
        />
        <div className="mt-16 border-t border-border">
          {services.map((service) => (
            <article
              key={service.number}
              className="group grid gap-5 border-b border-border py-9 transition-colors hover:bg-background md:grid-cols-[32px_minmax(0,1fr)_24px] md:gap-x-6 lg:grid-cols-[48px_minmax(0,1fr)_minmax(0,1.2fr)_24px] lg:gap-x-10"
            >
              <span className="text-xs text-primary">{service.number}</span>
              <h3 className="font-display text-2xl md:text-3xl">{service.title}</h3>
              <p className="max-w-2xl text-base leading-7 text-muted-foreground md:col-start-2 lg:col-start-auto">
                {service.description}
              </p>
              <ArrowRight
                className="hidden transition-transform group-hover:translate-x-1 md:col-start-3 md:row-start-1 md:block lg:col-start-auto lg:row-start-auto"
                size={18}
              />
            </article>
          ))}
        </div>
        {!full && (
          <div className="mt-10 flex justify-end">
            <ButtonLink to="/services">Explore all services</ButtonLink>
          </div>
        )}
      </div>
    </section>
  );
}
