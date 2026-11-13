import { Github, Linkedin, Globe, Music2, LucideIcon } from "lucide-react";

export interface SocialLink {
  id: string;
  icon: LucideIcon;
  href: string;
  label: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: "1",
    icon: Github,
    href: "https://github.com/noahtran96",
    label: "GitHub",
  },
  {
    id: "2",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/noahtran96",
    label: "LinkedIn",
  },
];
