import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, PageHero, ServicesSection, TrustSection } from "@/components/site";
import heroStructure from "@/assets/thulir-hero-structure.jpg";

const description =
  "Explore Thulir Infra services: Residential Building, Commercial Building, architectural and structural planning, DTCP approval, plan approval, Project Management Consultancy (PMC), and Bank Estimation & Loan Processing.";
export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Civil Engineering & Construction Services | Thulir Infra" },
      { name: "description", content: description },
      { property: "og:title", content: "Civil Engineering & Construction Services | Thulir Infra" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});
function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="One team, from early planning to final handover."
        intro="Residential Building and Commercial Building services, architectural planning, structural design, statutory approvals, project oversight, and Bank Estimation & Loan Processing support coordinated around your requirements."
        image={heroStructure}
      />
      <ServicesSection full />
      <TrustSection />
      <CtaBand />
    </>
  );
}
