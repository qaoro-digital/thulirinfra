import { createFileRoute } from "@tanstack/react-router";
import {
  AboutSection,
  CommercialBuildingsSection,
  ContactSection,
  CtaBand,
  ExpertiseSection,
  FaqSection,
  FoundersSection,
  HeroCarousel,
  PackagesSection,
  ProcessSection,
  ProjectsSection,
  ServiceAreas,
  ServicesSection,
  TrustSection,
  ValuesSection,
} from "@/components/site";

const description =
  "Thulir Infra provides professional civil engineering, residential and commercial construction, architectural planning, DTCP approvals, plan approvals, Project Management Consultancy (PMC), and bank estimation and home loan documentation support services across Madurai, Virudhunagar, Namakkal, Trichy (Tiruchirappalli), Salem and surrounding regions.";
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Thulir Infra | Civil Engineering & Construction Services" },
      { name: "description", content: description },
      { property: "og:title", content: "Thulir Infra | Civil Engineering & Construction Services" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <HeroCarousel />
      <AboutSection />
      <FoundersSection />
      <ServicesSection />
      <ExpertiseSection />
      <ProjectsSection />
      <ProcessSection />
      <TrustSection />
      <ValuesSection />
      <PackagesSection productsView />
      <CommercialBuildingsSection />
      <FaqSection />
      <ServiceAreas />
      <ContactSection />
      <CtaBand />
    </>
  );
}
