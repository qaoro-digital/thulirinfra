import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, PageHero, ProjectsSection } from "@/components/site";
import planningImage from "@/assets/thulir-planning.jpg";

const description =
  "View Thulir Infra project highlights, including Virudhunagar residential floor planning and G+1 and G+3 residential work.";
export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Project Highlights | Thulir Infra" },
      { name: "description", content: description },
      { property: "og:title", content: "Project Highlights | Thulir Infra" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});
function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Project highlights"
        title="Planning and structures shaped around real lives."
        intro="Selected residential planning and structural work. Representative images are used until actual project photography is supplied."
        image={planningImage}
      />
      <ProjectsSection full />
      <CtaBand />
    </>
  );
}
