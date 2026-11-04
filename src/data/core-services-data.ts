export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  slug: string;
  features: string[];
}

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: "ac-repair",
    title: "AC Repair & Cooling",
    description: "Emergency cooling repairs, urgent tune-ups, and high-efficiency system installations. Stay comfortable all summer long.",
    iconName: "Snowflake",
    slug: "/services/ac-repair",
    features: ["24/7 Emergency Repairs", "AC Installation & Replacement", "Preventative Tune-ups"]
  },
  {
    id: "heating",
    title: "Heating & Furnaces",
    description: "Reliable furnace and boiler repairs, routine seasonal maintenance, and energy-efficient heating replacements.",
    iconName: "Flame",
    slug: "/services/heating",
    features: ["Furnace Repair & Service", "Heat Pump Solutions", "Boiler Maintenance"]
  },
  {
    id: "ductwork",
    title: "Ductwork & Air Quality",
    description: "Professional duct cleaning, professional sealing, and custom installation to maximize airflow and indoor air purity.",
    iconName: "Wind",
    slug: "/services/ductwork",
    features: ["Air Duct Cleaning", "Leak Sealing & Repair", "Indoor Air Quality Filters"]
  }
];