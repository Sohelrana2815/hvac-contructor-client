export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  // { label: "Case Studies", href: "/case-studies" },
  // { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];
