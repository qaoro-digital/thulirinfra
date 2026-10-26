import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { planningImage } from "@/data/site-data";

export function AboutSection() {
  return (
    <section className="section-space bg-background">
      <div className="site-container grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <figure className="architectural-image relative overflow-hidden">
          <img
            src={planningImage}
            alt="Representative architectural and structural planning drawings"
            width={1408}
            height={1600}
            loading="lazy"
            className="aspect-[4/5] w-full object-cover"
          />
          <figcaption className="absolute bottom-0 left-0 bg-background px-4 py-3 text-[10px] uppercase text-muted-foreground">
            Planning with engineering rigour · Representative image
          </figcaption>
        </figure>
        <div className="flex flex-col justify-center">
          <p className="eyebrow text-primary">Who we are</p>
          <h2 className="section-title mt-6 text-balance font-display">
            Engineering spaces built for the way you live.
          </h2>
          <div className="mt-8 space-y-5 text-base leading-8 text-muted-foreground">
            <p>
              Thulir Infra is a professionally managed civil engineering and construction firm
              committed to building safe, durable, and well-designed structures. Led by experienced
              civil engineers, we deliver end-to-end construction solutions with a strong focus on
              quality, transparency, and timely execution.
            </p>
            <p>
              Our approach combines sound engineering practices, practical design thinking, and
              strict adherence to regulatory standards. Whether it is a residential home or a
              multi-storey structure, every project is executed with attention to detail and
              long-term performance in mind.
            </p>
          </div>
          <Link
            to="/about"
            className="mt-9 inline-flex w-fit items-center gap-3 border-b border-foreground pb-2 text-xs font-semibold uppercase"
          >
            About Thulir Infra <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
