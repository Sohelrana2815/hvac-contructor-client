export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon: string; // Lucide icon identifier suggestion
  category: "cooling" | "heating" | "air-quality" | "commercial";
}

export const servicesData: ServiceItem[] = [
  {
    id: "ac-repair",
    title: "AC Repair",
    slug: "ac-repair",
    description: "Repairs for warm air, uneven cooling, leaks, and repeated shutdowns, with the work and its price clearly explained before you approve.",
    icon: "Wrench",
    category: "cooling",
  },
  {
    id: "emergency-ac-repair",
    title: "Emergency AC Repair",
    slug: "emergency-ac-repair",
    description: "Urgent help when your AC stops cooling. Call to check the next available appointment and after-hours emergency dispatch options.",
    icon: "Clock",
    category: "cooling",
  },
  {
    id: "ac-maintenance",
    title: "AC Maintenance",
    slug: "ac-maintenance",
    description: "Comprehensive tune-ups and ongoing membership care plans to optimize system efficiency and get your equipment ready for peak seasons.",
    icon: "ShieldCheck",
    category: "cooling",
  },
  {
    id: "ac-installation",
    title: "AC Installation",
    slug: "ac-installation",
    description: "High-efficiency brand installations with complete project pricing and personalized system sizing evaluated specifically for your home.",
    icon: "PlusCircle",
    category: "cooling",
  },
  {
    id: "ac-replacement",
    title: "AC Replacement",
    slug: "ac-replacement",
    description: "Free replacement estimates and expert second opinions so you can easily compare upgrading with repairing your existing setup.",
    icon: "RefreshCw",
    category: "cooling",
  },
  {
    id: "heating-repair",
    title: "Heating Repair",
    slug: "heating-repair",
    description: "Fast diagnostics and prompt repairs when rooms stay cold, heaters run unevenly, or heating equipment keeps shutting down.",
    icon: "Flame",
    category: "heating",
  },
  {
    id: "heating-installation",
    title: "Heating Installation",
    slug: "heating-installation",
    description: "New heating and furnace equipment chosen around your home's unique layout, starting with a transparent free new-system estimate.",
    icon: "Home",
    category: "heating",
  },
  {
    id: "heat-pump-installation",
    title: "Heat Pump Installation",
    slug: "heat-pump-installation",
    description: "All-in-one systems for year-round heating and cooling, complete with free estimates covering equipment options and labor.",
    icon: "ArrowUpDown",
    category: "heating",
  },
  {
    id: "air-duct-cleaning",
    title: "Air Duct Cleaning & Repair",
    slug: "air-duct-cleaning",
    description: "Remove accumulated dust, allergens, and debris from your ductwork to improve indoor airflow efficiency and system performance.",
    icon: "Wind",
    category: "air-quality",
  },
  {
    id: "indoor-air-quality",
    title: "Indoor Air Quality (IAQ)",
    slug: "indoor-air-quality",
    description: "Advanced whole-home air purifiers, UV germicidal lamps, and humidifiers installed to eliminate airborne pollutants and mold spores.",
    icon: "Activity",
    category: "air-quality",
  },
  {
    id: "smart-thermostats",
    title: "Smart Thermostat Setup",
    slug: "smart-thermostats",
    description: "Professional installation and mobile app programming of Wi-Fi smart thermostats to automate climate control and lower monthly utility bills.",
    icon: "Smartphone",
    category: "cooling",
  },
  {
    id: "commercial-hvac",
    title: "Commercial HVAC Services",
    slug: "commercial-hvac",
    description: "Specialized repairs, preventive maintenance contracts, and new-system installations for commercial properties with multi-unit setups.",
    icon: "Building2",
    category: "commercial",
  },
];