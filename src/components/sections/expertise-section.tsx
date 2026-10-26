import { expertiseItems, heroStructure } from "@/data/site-data";

export function ExpertiseSection() {
  return (
    <section className="section-space bg-background">
      <div className="site-container grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div>
          <p className="eyebrow text-primary">Engineering expertise</p>
          <h2 className="section-title mt-6 max-w-2xl font-display">
            Designed with purpose.
            <br />
            Built with responsibility.
          </h2>
          <div className="mt-10 border-t border-border">
            {expertiseItems.map(([title, copy], index) => (
              <div
                key={title}
                className="grid grid-cols-[36px_minmax(0,1fr)] gap-4 border-b border-border py-6"
              >
                <span className="text-xs text-primary">0{index + 1}</span>
                <div>
                  <h3 className="font-display text-2xl">{title}</h3>
                  <p className="mt-3 max-w-lg text-base leading-7 text-muted-foreground">{copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <figure className="architectural-image relative self-end overflow-hidden lg:mt-20">
          <img
            src={heroStructure}
            alt="Representative concrete structure illustrating civil engineering"
            width={1920}
            height={1200}
            loading="lazy"
            className="aspect-[4/5] w-full object-cover"
          />
          <figcaption className="absolute bottom-0 left-0 bg-background px-4 py-3 text-[10px] text-muted-foreground">
            Structural engineering · Representative image
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
