export interface ContactInfoCard {
  id: string;
  title: string;
  detail: string;
  subDetail: string;
  icon: string; // Lucide icon identifier
  actionUrl?: string; // Optional link for phone/email/map
}

export const contactInfoData: ContactInfoCard[] = [
  {
    id: "phone",
    title: "Call Us Anytime",
    detail: "123-456-78900",
    subDetail: "Available 24/7, no extra fee",
    icon: "Phone",
    actionUrl: "tel:12345678900",
  },
  {
    id: "email",
    title: "Email Us",
    detail: "info@business.com",
    subDetail: "Replies within one business day",
    icon: "Mail",
    actionUrl: "mailto:info@business.com",
  },
  {
    id: "location",
    title: "Our Office Location",
    detail: "Detail Location",
    subDetail: "Main Lookout Ave",
    icon: "MapPin",
    actionUrl: "https://maps.google.com",
  },
  {
    id: "hours",
    title: "Operating Hours",
    detail: "Open 24 hours",
    subDetail: "After-hours service fees apply",
    icon: "Clock",
  },
];