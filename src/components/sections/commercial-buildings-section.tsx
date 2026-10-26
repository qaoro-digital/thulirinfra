import { ButtonLink } from "@/components/common/button-link";
import { commercialBuildings } from "@/data/site-data";

export function CommercialBuildingsSection() {
  return (
    <section className="section-space bg-primary text-primary-foreground">
      <div className="site-container">
        <div className="border-t border-primary-foreground/20 pt-7">
          <h2 className="section-title max-w-4xl text-balance font-display">
            {commercialBuildings.title}
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-primary-foreground/80">
            {commercialBuildings.subtitle}
          </p>
        </div>
        <div className="mt-14 grid gap-10 border-t border-primary-foreground/20 pt-10 lg:grid-cols-[1fr_2fr] lg:items-end">
          <div>
            <p className="eyebrow text-primary-foreground/75">{commercialBuildings.priceLabel}</p>
            <p className="mt-5 font-display text-6xl leading-none md:text-7xl">
              {commercialBuildings.price}
              <span className="ml-4 align-middle text-xs uppercase text-primary-foreground/75">
                {commercialBuildings.unit}
              </span>
            </p>
          </div>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <p className="max-w-xl text-sm leading-7 text-primary-foreground/80">
              {commercialBuildings.support}
            </p>
            <ButtonLink to="/contact" variant="light" className="shrink-0">
              Discuss your project
            </ButtonLink>
          </div>
        </div>
        <p className="mt-10 max-w-2xl text-xs leading-6 text-primary-foreground/70">
          Final pricing may vary based on design requirements, material selection, site conditions,
          and project scope.
        </p>
      </div>
    </section>
  );
}
