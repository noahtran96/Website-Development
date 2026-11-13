export interface NavLinkItem {
  id: string;
  path: string;
  label: string;
}

export const NAV_LINKS: NavLinkItem[] = [
  { id: "1", path: "/about", label: "About" },
  { id: "2", path: "/projects", label: "Projects" },
];
