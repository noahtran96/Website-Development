export interface NavLink {
  id: string;
  href: string;
  label: string;
}

export const NAV_LINKS: NavLink[] = [
  { id: "1", href: "#about", label: "About" },
  { id: "2", href: "#projects", label: "Projects" },
  { id: "3", href: "#experience", label: "Experience" },
  { id: "4", href: "#testimonials", label: "Testimonials" },
];
