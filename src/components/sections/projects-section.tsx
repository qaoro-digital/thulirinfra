import { ArrowRight } from "lucide-react";

import { ButtonLink } from "@/components/common/button-link";
import { SectionHeading } from "@/components/common/section-heading";
import { projects } from "@/data/site-data";

export function ProjectsSection({ full = false }: { full?: boolean }) {
  return (
    <section className="section-space bg-background">
      <div className="site-container">
        <SectionHeading
          eyebrow="Project highlights"
          title="Spaces shaped by thoughtful engineering."
          intro="The images shown are representative architectural visuals. Actual Thulir Infra project photography will replace them when available."
        />
        <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-12">
          {projects.map((project, index) => (
            <article
              key={project.number}
              className={`group ${index === 0 ? "lg:col-span-5" : index === 1 ? "lg:col-span-7 lg:pt-24" : "md:col-start-2 lg:col-span-6 lg:col-start-7"}`}
            >
              <div className="relative overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.alt}
                  width={project.dimensions[0]}
                  height={project.dimensions[1]}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-[1.025] ${index === 0 ? "aspect-[4/5]" : "aspect-[4/3]"}`}
                />
                <span className="absolute left-3 top-3 bg-background px-3 py-2 text-[9px] uppercase text-foreground">
                  Representative image
                </span>
              </div>
              <div className="mt-5 grid grid-cols-[24px_minmax(0,1fr)_20px] gap-3 border-t border-border pt-4">
                <span className="text-xs text-primary">{project.number}</span>
                <div>
                  <p className="text-xs uppercase text-muted-foreground">
                    {project.location ? `${project.location} · ` : ""}
                    {project.year}
                  </p>
                  <h3 className="mt-2 font-display text-2xl">{project.type}</h3>
                  <p className="mt-3 max-w-xl text-base leading-7 text-muted-foreground">
                    {project.description}
                  </p>
                </div>
                <ArrowRight size={17} />
              </div>
            </article>
          ))}
        </div>
        {!full && (
          <div className="mt-12 flex justify-end">
            <ButtonLink to="/projects" variant="outline">
              View project highlights
            </ButtonLink>
          </div>
        )}
      </div>
    </section>
  );
}
