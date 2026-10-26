import { ButtonLink } from "@/components/common/button-link";
import { SectionHeading } from "@/components/common/section-heading";
import { packages } from "@/data/site-data";

export function PackagesSection({
  full = false,
  productsView = false,
}: {
  full?: boolean;
  productsView?: boolean;
}) {
  return (
    <section className="section-space bg-secondary">
      <div className="site-container">
        <SectionHeading
          eyebrow={productsView ? "Products & pricing" : "Packages & pricing"}
          title="Construction packages designed around your vision."
          intro="A clear starting point for planning. Our listed package pricing applies exclusively to residential buildings. Your final quotation is tailored after understanding the site and project scope."
        />
        <div className="section-content grid gap-6 lg:grid-cols-3">
          {packages.map((item) => (
            <article
              key={item.name}
              className={`relative flex min-h-[400px] flex-col bg-background p-8 transition-transform duration-300 hover:-translate-y-1 md:p-9 ${item.featured ? "text-primary-foreground !bg-primary" : ""}`}
            >
              {item.featured && (
                <span className="absolute right-5 top-5 border border-primary-foreground/30 px-3 py-1 text-[9px] uppercase">
                  Preferred
                </span>
              )}
              <h3 className="eyebrow">{item.name}</h3>
              <p className="mt-12 font-display text-5xl">{item.price}</p>
              <p
                className={`mt-2 text-xs ${item.featured ? "text-primary-foreground/75" : "text-muted-foreground"}`}
              >
                per sq.ft · Residential buildings only
              </p>
              <p
                className={`mt-8 border-t pt-6 text-base leading-7 ${item.featured ? "border-primary-foreground/20 text-primary-foreground/75" : "border-border text-muted-foreground"}`}
              >
                {item.description}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-8 flex flex-col items-start justify-between gap-6 border-t border-border pt-7 md:flex-row md:items-center">
          <p className="max-w-2xl text-xs leading-6 text-muted-foreground">
            Final pricing may vary based on design requirements, material selection, site
            conditions, and project scope, for both residential and commercial buildings.
          </p>
          <ButtonLink to="/contact">Discuss your project</ButtonLink>
        </div>
        {full && (
          <p className="mt-12 max-w-3xl text-lg leading-8 text-muted-foreground">
            Each package is a planning reference, not a guaranteed final quote. Our engineers review
            requirements, site conditions, preferred materials, and the full scope before preparing
            a transparent proposal.
          </p>
        )}
      </div>
    </section>
  );
}
