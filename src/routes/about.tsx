import { createFileRoute } from "@tanstack/react-router";
import {
  AboutSection,
  CtaBand,
  FoundersSection,
  PageHero,
  TrustSection,
  ValuesSection,
} from "@/components/site";
import heroInterior from "@/assets/thulir-hero-interior.jpg";

const description =
  "Meet Thulir Infra, a professionally managed civil engineering and construction firm focused on safe structures, quality, transparency, and timely execution.";
export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Thulir Infra | Engineering with Responsibility" },
      { name: "description", content: description },
      { property: "og:title", content: "About Thulir Infra" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});
function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Thulir Infra"
        title="Sound engineering. Practical design. Responsible execution."
        intro="We approach every residential and multi-storey structure with attention to safety, regulatory standards, functional planning, and long-term performance."
        image={heroInterior}
      />
      <AboutSection />
      <FoundersSection />
      <TrustSection />
      <ValuesSection />
      <CtaBand />
    </>
  );
}
