import { Phone } from "lucide-react";

import { ButtonLink } from "@/components/common/button-link";
import { ctaImage } from "@/data/site-data";

export function CtaBand() {
  return (
    <section className="relative min-h-[590px] overflow-hidden text-primary-foreground">
      <img
        src={ctaImage}
        alt="Representative contemporary South Indian residence"
        width={1920}
        height={1008}
        loading="lazy"
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="site-container relative flex min-h-[590px] flex-col justify-end py-16">
        <p className="eyebrow text-primary-foreground/65">Begin a conversation</p>
        <h2 className="section-title mt-6 max-w-4xl text-balance font-display">
          Planning to build your home or commercial space?
        </h2>
        <p className="mt-6 max-w-2xl text-base leading-7 text-primary-foreground/75">
          Speak with our experienced civil engineers for reliable planning, approvals, and
          construction services. Contact Thulir Infra today to start your project with confidence.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink to="/contact" variant="light">
            Get free consultation
          </ButtonLink>
          <a
            href="tel:+918667394901"
            className="inline-flex min-h-12 items-center gap-3 border border-primary-foreground px-5 py-3 text-xs font-semibold uppercase"
          >
            Contact our engineers <Phone size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
