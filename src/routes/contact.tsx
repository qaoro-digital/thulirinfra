import { createFileRoute } from "@tanstack/react-router";
import { ContactSection, PageHero, ServiceAreas } from "@/components/site";
import heroInterior from "@/assets/thulir-hero-interior.jpg";

const description =
  "Contact Thulir Infra engineers for Residential Building, Commercial Building, architectural planning, DTCP approval, plan approval, PMC, or Bank Estimation & Loan Processing across Tamil Nadu.";
export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Talk to Our Engineers | Thulir Infra" },
      { name: "description", content: description },
      { property: "og:title", content: "Talk to Our Engineers | Thulir Infra" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});
function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start your project with a clear conversation."
        intro="Share your requirements with our qualified civil engineers for guidance on residential or commercial buildings, planning, approvals, and bank estimation and home loan documentation support."
        image={heroInterior}
      />
      <ContactSection />
      <ServiceAreas />
    </>
  );
}
