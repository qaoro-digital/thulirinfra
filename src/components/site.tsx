// Central source of truth for shared company content and reusable page sections.
// All public routes and tests import from this file.

// Re-export company data
export {
  commercialBuildings,
  ctaImage,
  faqs,
  founderJourney,
  heroInterior,
  heroStructure,
  heroVilla,
  leadership,
  materials,
  navItems,
  officeAddress,
  officeAddressLine1,
  officeAddressLine2,
  officeAddressLine3,
  packages,
  planningImage,
  processSteps,
  projects,
  serviceLocations,
  services,
  slides,
  socialLinks,
  trustPoints,
  values,
} from "@/data/site-data";

// Re-export common UI components
export { ButtonLink } from "@/components/common/button-link";
export { Logo } from "@/components/common/logo";
export { OfficeAddress } from "@/components/common/office-address";
export { PageHero } from "@/components/common/page-hero";
export { SectionHeading } from "@/components/common/section-heading";
export { SocialLinks } from "@/components/common/social-links";

// Re-export navigation components
export { Footer } from "@/components/navigation/footer";
export { Navbar } from "@/components/navigation/navbar";

// Re-export sections
export { AboutSection } from "@/components/sections/about-section";
export { CommercialBuildingsSection } from "@/components/sections/commercial-buildings-section";
export { ContactDetails } from "@/components/sections/contact-details";
export { ContactForm } from "@/components/sections/contact-form";
export { ContactSection } from "@/components/sections/contact-section";
export { CtaBand } from "@/components/sections/cta-band";
export { ExpertiseSection } from "@/components/sections/expertise-section";
export { FaqSection } from "@/components/sections/faq-section";
export { FoundersSection } from "@/components/sections/founders-section";
export { HeroCarousel } from "@/components/sections/hero-carousel";
export { MaterialsSection } from "@/components/sections/materials-section";
export { PackagesSection } from "@/components/sections/packages-section";
export { ProcessSection } from "@/components/sections/process-section";
export { ProjectsSection } from "@/components/sections/projects-section";
export { ServiceAreas } from "@/components/sections/service-areas";
export { ServicesSection } from "@/components/sections/services-section";
export { TrustSection } from "@/components/sections/trust-section";
export { ValuesSection } from "@/components/sections/values-section";
