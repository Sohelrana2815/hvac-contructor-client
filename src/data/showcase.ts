export interface ShowcaseItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  iconName: string;
}

export const SHOWCASE_ITEMS: ShowcaseItem[] = [
  {
    id: "heating",
    title: "HEATING SYSTEMS",
    subtitle: "Furnace & Boiler Solutions",
    description:
      "High-efficiency heating installation, emergency repairs, and seasonal tune-ups to keep your home warm and cozy.",
    image:
      "https://res.cloudinary.com/dt683zwm2/image/upload/v1793717492/HEATING_SYSTEMS_zyszlm.webp",
    iconName: "Flame",
  },
  {
    id: "cooling",
    title: "AC & COOLING",
    subtitle: "Central & Ductless AC",
    description:
      "Beat the summer heat with rapid cooling repairs, precision maintenance, and energy-saving AC replacements.",
    image:
      "https://res.cloudinary.com/dt683zwm2/image/upload/v1793717492/AC_COOLING_zrhemc.webp",
    iconName: "Snowflake",
  },
  {
    id: "heat-pumps",
    title: "HEAT PUMPS",
    subtitle: "All-in-One Climate Control",
    description:
      "Energy-efficient hybrid systems that provide both powerful heating and cooling for maximum year-round comfort.",
    image:
      "https://res.cloudinary.com/dt683zwm2/image/upload/v1793717493/HEAT_PUMPS_unmusu.webp",
    iconName: "Zap",
  },
  {
    id: "ductwork",
    title: "DUCTWORK & IAQ",
    subtitle: "Pure Air & Ventilation",
    description:
      "Professional duct cleaning, sealing, and advanced air purifiers to eliminate allergens and optimize airflow.",
    image:
      "https://res.cloudinary.com/dt683zwm2/image/upload/v1793718899/DUCTWORK_IAQ-HVAC_b4jsy0.jpg",
    iconName: "Wind",
  },
];
