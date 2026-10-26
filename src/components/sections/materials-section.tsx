import { ButtonLink } from "@/components/common/button-link";
import { SectionHeading } from "@/components/common/section-heading";
import { materials } from "@/data/site-data";

export function MaterialsSection() {
  return (
    <section className="section-space bg-background">
      <div className="site-container">
        <SectionHeading
          eyebrow="Construction materials"
          title="Quality materials for every stage of your build."
          intro="We help arrange reliable construction materials for your project. Share your requirement and our team will get in touch with pricing, availability, and delivery details."
        />
        <div className="section-content grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {materials.map((item) => (
            <article key={item.number} className="group flex flex-col bg-background">
              <div className="architectural-image overflow-hidden bg-muted">
                <img
                  src={item.image}
                  alt={item.alt}
                  width={1280}
                  height={960}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col pt-6">
                <span className="text-xs text-primary">{item.number}</span>
                <h3 className="mt-3 font-display text-2xl leading-tight">{item.name}</h3>
                <p className="mt-3 flex-1 text-base leading-7 text-muted-foreground">
                  {item.description}
                </p>
                <ButtonLink to="/contact" variant="outline" className="mt-6 w-full justify-center">
                  Request price
                </ButtonLink>
              </div>
            </article>
          ))}
          <article className="flex flex-col justify-between bg-secondary p-8">
            <div>
              <span className="text-xs text-primary">08</span>
              <h3 className="mt-3 font-display text-2xl leading-tight">Need something else?</h3>
              <p className="mt-3 text-base leading-7 text-muted-foreground">
                Tell us about your other material requirements and our team will get in touch with
                you.
              </p>
            </div>
            <ButtonLink to="/contact" className="mt-6 w-full justify-center">
              Talk to our engineers
            </ButtonLink>
          </article>
        </div>
        <p className="mt-6 max-w-3xl text-xs leading-6 text-muted-foreground">
          Product images are representative. Material quantities, applicable units, and final
          pricing are confirmed through our team based on your requirement and location.
        </p>
      </div>
    </section>
  );
}
