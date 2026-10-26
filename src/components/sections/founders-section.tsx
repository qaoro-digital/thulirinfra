import { SectionHeading } from "@/components/common/section-heading";
import { founderJourney, leadership } from "@/data/site-data";

export function FoundersSection() {
  return (
    <section className="section-space bg-secondary" aria-label="Founders and leadership">
      <div className="site-container">
        <SectionHeading
          eyebrow="Founders & leadership"
          title="Two engineers. One shared vision."
          intro="Meet the people behind Thulir Infra and the principles that guide its journey."
        />
        <div className="mt-14 grid items-stretch gap-12 xl:grid-cols-[1.1fr_0.9fr] xl:gap-20">
          <div className="grid grid-cols-2 gap-6 md:gap-8">
            {leadership.map((person) => (
              <figure key={person.name} className="flex min-w-0 flex-col">
                <div className="relative max-h-[720px] min-h-[260px] flex-1 overflow-hidden border-b-4 border-primary bg-muted md:min-h-[440px] lg:min-h-[560px] xl:min-h-[460px]">
                  <img
                    src={person.photo}
                    alt={`${person.name}, ${person.role} of Thulir Infra`}
                    width={person.role === "Founder" ? 388 : 368}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover object-top"
                  />
                </div>
                <figcaption className="flex flex-col justify-center border-b border-border py-5">
                  <p className="eyebrow text-primary">{person.role}</p>
                  <h3 className="mt-2 font-display text-xl md:text-3xl">{person.name}</h3>
                  <p className="mt-2 text-xs text-muted-foreground">{person.qualification}</p>
                </figcaption>
              </figure>
            ))}
          </div>
          <div>
            <p className="eyebrow text-primary">Our founders’ journey</p>
            <div className="mt-6 border-t border-border">
              {founderJourney.map(([title, copy], index) => (
                <div
                  key={title}
                  className="grid grid-cols-[28px_minmax(0,1fr)] gap-4 border-b border-border py-5"
                >
                  <span className="text-xs text-primary">0{index + 1}</span>
                  <div>
                    <h3 className="font-display text-2xl">{title}</h3>
                    <p className="mt-3 text-base leading-7 text-muted-foreground">{copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
