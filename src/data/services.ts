export interface Service {
  slug: string;
  name: string;
  shortDesc: string;
  description: string;
  icon: string;
  featured?: boolean;
}

export const SERVICES: Service[] = [
  {
    slug: "customs-clearance",
    name: "Customs Clearance",
    shortDesc: "Expert customs clearance for imports & exports",
    description: "End-to-end customs clearance services ensuring compliance and fast processing.",
    icon: "ClipboardText",
    featured: true,
  },
  {
    slug: "air-freight",
    name: "Air Freight Services",
    shortDesc: "Fast, reliable air freight solutions worldwide",
    description: "Time-critical air freight services connecting major airports globally.",
    icon: "Airplane",
    featured: true,
  },
  {
    slug: "sea-freight",
    name: "Sea Freight Services",
    shortDesc: "Cost-effective sea freight for every cargo size",
    description: "FCL and LCL sea freight solutions across international shipping lanes.",
    icon: "Ship",
    featured: true,
  },
  {
    slug: "road-freight",
    name: "Road Freight Services",
    shortDesc: "Pan-India road transport solutions",
    description: "Reliable road freight and full-truckload services across India.",
    icon: "Truck",
    featured: false,
  },
  {
    slug: "rail-freight",
    name: "Rail Freight Services",
    shortDesc: "Efficient rail cargo movement",
    description: "Economical rail freight options for bulk and containerized cargo.",
    icon: "Train",
    featured: false,
  },
  {
    slug: "door-to-door",
    name: "Door to Door Delivery",
    shortDesc: "Seamless pickup and delivery",
    description: "Complete logistics coordination from shipper's door to consignee's door.",
    icon: "HouseLine",
    featured: false,
  },
  {
    slug: "project-cargo",
    name: "Project Cargo Handling",
    shortDesc: "Heavy and oversized cargo expertise",
    description: "Specialized handling for project cargo, heavy lifts, and oversized shipments.",
    icon: "Crane",
    featured: false,
  },
  {
    slug: "warehousing",
    name: "Warehousing & Distribution",
    shortDesc: "Storage and distribution network",
    description: "Secure warehousing and efficient distribution across key Indian locations.",
    icon: "Warehouse",
    featured: true,
  },
  {
    slug: "cargo-insurance",
    name: "Cargo Insurance",
    shortDesc: "Protect your shipments end-to-end",
    description: "Comprehensive cargo insurance options for safe and insured logistics.",
    icon: "ShieldCheck",
    featured: false,
  },
  {
    slug: "packaging",
    name: "Packaging & Repacking",
    shortDesc: "Export-ready packaging solutions",
    description: "Professional packaging and repacking services to ensure safe transit.",
    icon: "Package",
    featured: false,
  },
  {
    slug: "documentation",
    name: "Import & Export Documentation",
    shortDesc: "Complete trade documentation support",
    description: "Accurate preparation and management of import/export documentation.",
    icon: "FileText",
    featured: false,
  },
  {
    slug: "lcl-consolidation",
    name: "Consolidation (LCL Services)",
    shortDesc: "Share container space, reduce costs",
    description: "LCL consolidation services for cost-effective small-volume shipments.",
    icon: "Stack",
    featured: false,
  },
  {
    slug: "third-party-logistics",
    name: "Third Party Logistics (3PL)",
    shortDesc: "Outsourced logistics management",
    description: "Integrated 3PL solutions to manage your supply chain efficiently.",
    icon: "ArrowsLeftRight",
    featured: false,
  },
];

export const FEATURED_SERVICES = SERVICES.filter(s => s.featured);
