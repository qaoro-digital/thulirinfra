import { Facebook, Instagram } from "lucide-react";

import ctaImage from "@/assets/thulir-cta.jpg";
import heroInterior from "@/assets/thulir-hero-interior.jpg";
import heroStructure from "@/assets/thulir-hero-structure.jpg";
import heroVilla from "@/assets/thulir-hero-villa.jpg";
import materialAggregate20 from "@/assets/thulir-material-aggregate-20.jpg";
import materialAggregate40 from "@/assets/thulir-material-aggregate-40.jpg";
import materialCement from "@/assets/thulir-material-cement.jpg";
import materialChips from "@/assets/thulir-material-chips.jpg";
import materialMsand from "@/assets/thulir-material-msand.jpg";
import materialPsand from "@/assets/thulir-material-psand.jpg";
import materialRiverSand from "@/assets/thulir-material-river-sand.jpg";
import planningImage from "@/assets/thulir-planning.jpg";
import thiruPortrait from "@/assets/thulir-chairman-thiru.webp";
import dineshPortrait from "@/assets/thulir-founder-dinesh.webp";

export const services = [
  {
    number: "01",
    title: "Residential Building",
    description:
      "We provide residential building construction from initial concept to final handover, with functional layouts, structural safety, quality materials, and coordinated execution. Residential package pricing provides a starting point, with the final quotation tailored to your site and scope.",
  },
  {
    number: "02",
    title: "Commercial Building",
    description:
      "We plan and construct commercial buildings around their intended use, structural requirements, and site conditions. Commercial construction starts from ₹1,600/sq.ft as a planning reference, with the final quotation tailored to your project scope.",
  },
  {
    number: "03",
    title: "Architectural and Structural Planning",
    description:
      "We prepare detailed architectural layouts and structural designs that comply with government norms and site conditions, ensuring safety, ventilation, and optimal space utilization.",
  },
  {
    number: "04",
    title: "DTCP Approval",
    description:
      "We assist clients with DTCP approvals by handling drawings, documentation, and coordination with authorities, ensuring a smooth and hassle-free approval process.",
  },
  {
    number: "05",
    title: "Plan Approval",
    description:
      "We manage building plan approvals as per local body regulations, reducing delays and ensuring full compliance with statutory requirements.",
  },
  {
    number: "06",
    title: "Project Management Consultancy (PMC)",
    description:
      "We oversee scheduling, site supervision, quality control, and coordination to ensure projects are completed on time and within the agreed budget.",
  },
  {
    number: "07",
    title: "Bank Estimation & Loan Processing",
    description:
      "We prepare bank estimation reports and construction cost estimates for bank submission, with documentation support related to home loan processing, as applicable. Loan approval remains subject to the bank’s assessment and requirements.",
  },
];

export const values = [
  [
    "01",
    "Customer Commitment",
    "We understand client requirements clearly and deliver services with honesty, transparency, and responsibility.",
  ],
  [
    "02",
    "Quality and Continuous Improvement",
    "We strive to improve our planning, execution, and workmanship with every project, ensuring consistent quality standards.",
  ],
  [
    "03",
    "Professional Responsibility",
    "Every project is handled with accountability, ensuring accuracy, safety, and timely completion.",
  ],
  [
    "04",
    "Collaboration and Respect",
    "We believe in teamwork, mutual respect, and clear communication with clients, consultants, and workforce.",
  ],
  [
    "05",
    "Transparency and Integrity",
    "We communicate clearly, stand by our commitments, and take responsibility for our decisions and execution.",
  ],
  [
    "06",
    "Environmental Responsibility",
    "We follow mindful construction practices to reduce waste and support sustainable development.",
  ],
];

export const packages = [
  {
    name: "Premium",
    price: "₹2,400",
    description:
      "Ideal for standard residential construction with quality materials and efficient design.",
  },
  {
    name: "Luxury",
    price: "₹2,450",
    description:
      "Suitable for clients seeking improved finishes, enhanced materials, and modern design elements.",
    featured: true,
  },
  {
    name: "Elite",
    price: "₹2,600",
    description:
      "Designed for premium construction requirements with customized designs and superior finishing standards.",
  },
];

export const projects = [
  {
    number: "01",
    location: "Virudhunagar",
    type: "Residential Floor Plan",
    year: "2026",
    description:
      "A thoughtfully planned residential layout focusing on comfort, functionality, and efficient space utilization.",
    image: planningImage,
    alt: "Representative architectural floor planning visual",
    dimensions: [1408, 1600],
  },
  {
    number: "02",
    location: "",
    type: "G+1 Residential Project",
    year: "2025",
    description:
      "A G+1 residential structure designed to meet modern living standards with proper ventilation and structural balance.",
    image: heroVilla,
    alt: "Representative contemporary South Indian residence",
    dimensions: [1920, 1200],
  },
  {
    number: "03",
    location: "",
    type: "G+3 Residential Project",
    year: "2026",
    description:
      "A multi-storey residential project planned for urban living with optimized layouts and safety considerations.",
    image: heroStructure,
    alt: "Representative reinforced concrete building structure",
    dimensions: [1920, 1200],
  },
];

export const navItems = [
  ["/", "Home"],
  ["/about", "About"],
  ["/services", "Services"],
  ["/projects", "Projects"],
  ["/products", "Products"],
  ["/packages", "Packages"],
  ["/contact", "Contact"],
] as const;

export const slides = [
  {
    image: heroVilla,
    heading: "Trusted Civil Engineering & Construction Solutions",
    copy: "Thulir Infra delivers reliable residential and commercial construction services with strong engineering principles, quality materials, and transparent execution.",
    support: "Serving Madurai, Virudhunagar, Namakkal, Trichy, Salem, and surrounding regions.",
    primary: "Get Free Consultation",
    primaryTo: "/contact" as const,
    secondary: "View Our Projects",
    secondaryTo: "/projects" as const,
  },
  {
    image: heroStructure,
    heading: "From Planning to Construction — Complete Building Solutions",
    copy: "We provide architectural planning, structural design, DTCP approvals, and end-to-end construction under one roof.",
    support:
      "Every project is handled by experienced civil engineers with strict adherence to safety and government norms.",
    primary: "Explore Our Services",
    primaryTo: "/services" as const,
    secondary: "Request a Call Back",
    secondaryTo: "/contact" as const,
  },
  {
    image: heroInterior,
    heading: "Building Quality Spaces That Stand the Test of Time",
    copy: "Our projects focus on durability, functionality, and long-term value through professional planning and skilled execution.",
    support: "Your vision, engineered with responsibility and delivered with commitment.",
    primary: "Start Your Project",
    primaryTo: "/contact" as const,
    secondary: "Contact Our Engineers",
    secondaryTo: "/contact" as const,
  },
];

export const leadership = [
  {
    name: "Dinesh Kumar",
    role: "Founder",
    qualification: "BE (Civil)",
    photo: dineshPortrait,
    phone: "+919790226284",
    displayPhone: "97902 26284",
  },
  {
    name: "ThiruKarthi",
    role: "CEO",
    qualification: "BE (Civil)",
    photo: thiruPortrait,
    phone: "+918667394901",
    displayPhone: "86673 94901",
  },
];

export const officeAddressLine1 = "Balaji Nagar 3rd Street,";
export const officeAddressLine2 = "T. Kallupatti,";
export const officeAddressLine3 = "Madurai (Dt) - 625 702";

export const officeAddress = `${officeAddressLine1} ${officeAddressLine2} ${officeAddressLine3}`;

export const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61594950760244",
    Icon: Facebook,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/thulir__infra555/",
    Icon: Instagram,
  },
];

export const founderJourney = [
  [
    "A civil engineering foundation",
    "Dinesh Kumar and ThiruKarthi bring their BE (Civil) backgrounds to Thulir Infra’s approach to planning, structural safety, and construction.",
  ],
  [
    "A shared vision",
    "Safe, durable, and functional spaces, guided by sound engineering, practical design, and transparent communication.",
  ],
  [
    "Working together",
    "With Dinesh Kumar as Founder and ThiruKarthi as CEO, the company brings planning, approvals, construction, and Project Management Consultancy (PMC) together.",
  ],
  [
    "A continuing commitment",
    "Quality workmanship, professional responsibility, and customer satisfaction remain central to the company’s direction.",
  ],
];

export const trustPoints = [
  "Experienced civil engineers personally overseeing projects",
  "Transparent pricing and clear communication",
  "Strong focus on structural safety and quality workmanship",
  "Compliance with government rules and building regulations",
  "Use of reliable materials and proven construction practices",
  "Timely delivery with regular progress updates",
  "Customer-focused approach from planning to completion",
];

export const expertiseItems = [
  [
    "Structural safety",
    "Structural designs developed around site conditions, building norms, and long-term performance.",
  ],
  [
    "Practical space planning",
    "Functional layouts with attention to ventilation, comfort, and efficient space utilization.",
  ],
  [
    "Coordinated execution",
    "Scheduling, site supervision, quality control, and clear communication throughout construction.",
  ],
];

export const processSteps = [
  [
    "Understand & plan",
    "Discuss requirements, site conditions, and scope. Develop architectural layouts and structural designs.",
  ],
  [
    "Coordinate approvals",
    "Prepare drawings and documentation, and coordinate DTCP and local body plan approvals as required.",
  ],
  [
    "Build & supervise",
    "Coordinate construction, materials, scheduling, site supervision, and quality control.",
  ],
  [
    "Review & handover",
    "Maintain clear communication and attention to workmanship through to final handover.",
  ],
];

export const commercialBuildings = {
  title: "Commercial Buildings",
  subtitle: "Professional construction solutions tailored to your business needs.",
  priceLabel: "Construction Starting Price",
  price: "₹1,600",
  unit: "/ sq. ft.",
  support: "Transparent pricing for commercial building construction.",
};

export const materials = [
  {
    number: "01",
    name: "20mm Aggregate",
    description:
      "Coarse crushed stone aggregate commonly used in concrete works, footings, and structural elements.",
    image: materialAggregate20,
    alt: "Representative pile of 20mm coarse granite aggregate",
  },
  {
    number: "02",
    name: "40mm Aggregate",
    description:
      "Larger coarse aggregate suited to mass concrete works, foundations, and base course layers.",
    image: materialAggregate40,
    alt: "Representative pile of 40mm coarse granite aggregate",
  },
  {
    number: "03",
    name: "Chips",
    description:
      "Small-sized stone chips used in concrete works, flooring preparation, and finishing applications.",
    image: materialChips,
    alt: "Representative pile of small granite chips",
  },
  {
    number: "04",
    name: "M-Sand (Manufactured Sand)",
    description:
      "Manufactured sand with consistent gradation for concrete works and masonry applications.",
    image: materialMsand,
    alt: "Representative pile of manufactured sand, M-Sand",
  },
  {
    number: "05",
    name: "P-Sand (Plastering Sand)",
    description: "Fine manufactured sand suitable for plastering and wall finishing works.",
    image: materialPsand,
    alt: "Representative pile of fine plastering sand, P-Sand",
  },
  {
    number: "06",
    name: "River Sand",
    description:
      "Naturally sourced sand with a smooth texture, valued for plastering and masonry work.",
    image: materialRiverSand,
    alt: "Representative pile of natural river sand",
  },
  {
    number: "07",
    name: "Cement",
    description:
      "Quality cement for concrete, masonry, and plastering applications across your project.",
    image: materialCement,
    alt: "Representative cement bags",
  },
];

export const serviceLocations = [
  "Madurai",
  "Virudhunagar",
  "Namakkal",
  "Trichy (Tiruchirappalli)",
  "Salem",
];

export const faqs = [
  [
    "Which regions do you serve?",
    "We serve Madurai, Virudhunagar, Namakkal, Trichy (Tiruchirappalli), Salem, and surrounding locations in Tamil Nadu.",
  ],
  [
    "Can you help with building approvals?",
    "We assist with DTCP and local body plan approvals, including drawings, documentation, and coordination with authorities.",
  ],
  [
    "Are package prices final quotations?",
    `No. ${packages.map((item) => `${item.name} ${item.price}/sq.ft`).join(", ")} apply to residential buildings, and commercial construction starts from ₹1,600/sq.ft. All are planning references only. Final pricing varies with design requirements, material selection, site conditions, and project scope.`,
  ],
  [
    "What should I share in a project enquiry?",
    "Share your name, mobile number, project location, and required service. You can also include project details and an email address in your enquiry.",
  ],
];

export { ctaImage, heroInterior, heroStructure, heroVilla, planningImage };
