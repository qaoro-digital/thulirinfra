import { MapPin } from "lucide-react";

import { OfficeAddress } from "@/components/common/office-address";
import { serviceLocations } from "@/data/site-data";

export function ServiceAreas() {
  return (
    <section className="section-space overflow-hidden border-y border-border bg-secondary">
      <div className="site-container grid gap-12 lg:grid-cols-[1fr_1.5fr]">
        <div>
          <p className="eyebrow text-primary">Service areas</p>
          <h2 className="section-title mt-6 font-display">
            Serving growing communities across Tamil Nadu.
          </h2>
        </div>
        <div className="relative grid grid-cols-2 gap-px bg-border border border-border">
          {serviceLocations.map((place, index) => (
            <div key={place} className="relative flex min-h-32 items-end bg-background p-5">
              <MapPin className="absolute right-5 top-5 text-primary" size={17} />
              <span className="min-w-0 font-display text-xl break-words">{place}</span>
              <span className="absolute left-4 top-4 text-[9px] text-muted-foreground">
                0{index + 1}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="site-container mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
        <p className="flex items-center gap-2">
          <MapPin size={14} className="text-primary" /> Office: <OfficeAddress />
        </p>
        <p>We also serve surrounding locations.</p>
      </div>
    </section>
  );
}
