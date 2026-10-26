import { createFileRoute } from "@tanstack/react-router";
import { CommercialBuildingsSection, CtaBand, PackagesSection, PageHero } from "@/components/site";
import heroVilla from "@/assets/thulir-hero-villa.jpg";

const description =
  "Review Thulir Infra construction pricing: residential building packages Premium ₹2,400/sq.ft, Luxury ₹2,450/sq.ft, and Elite ₹2,600/sq.ft, plus commercial building construction from ₹1,600/sq.ft. Final quotations are tailored to project scope.";
export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "Construction Packages & Pricing | Thulir Infra" },
      { name: "description", content: description },
      { property: "og:title", content: "Construction Packages & Pricing | Thulir Infra" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/packages" }],
  }),
  component: PackagesPage,
});
function PackagesPage() {
  return (
    <>
      <PageHero
        eyebrow="Packages & pricing"
        title="A clearer starting point for your construction plan."
        intro="Compare residential building package references and commercial building construction pricing, then speak with our engineers for a tailored proposal based on your project scope."
        image={heroVilla}
      />
      <PackagesSection full />
      <CommercialBuildingsSection />
      <CtaBand />
    </>
  );
}
