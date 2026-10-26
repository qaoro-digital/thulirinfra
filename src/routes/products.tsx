import { createFileRoute } from "@tanstack/react-router";
import {
  CommercialBuildingsSection,
  CtaBand,
  MaterialsSection,
  PackagesSection,
  PageHero,
} from "@/components/site";
import heroVilla from "@/assets/thulir-hero-villa.jpg";

const description =
  "Explore Thulir Infra construction materials — 20mm & 40mm aggregate, chips, M-Sand, P-Sand, river sand, and cement — plus residential building packages Premium (₹2,400/sq.ft), Luxury (₹2,450/sq.ft), and Elite (₹2,600/sq.ft), and commercial building construction from ₹1,600/sq.ft.";
export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products & Construction Materials | Thulir Infra" },
      { name: "description", content: description },
      { property: "og:title", content: "Products & Construction Materials | Thulir Infra" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});
function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Construction materials & packages."
        intro="Reliable construction materials for every stage of your build, alongside Premium, Luxury, and Elite packages for residential buildings and commercial building construction from ₹1,600/sq.ft. Request pricing and our team will get in touch."
        image={heroVilla}
      />
      <MaterialsSection />
      <PackagesSection full productsView />
      <CommercialBuildingsSection />
      <CtaBand />
    </>
  );
}
