import { Github, Linkedin, Globe, Music2, LucideIcon } from "lucide-react";

export interface SocialLink {
  icon: LucideIcon;
  href: string;
  label: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  { icon: Github, href: "https://github.com/noahtran96", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/noahtran96",
    label: "LinkedIn",
  },
  {
    icon: Globe,
    href: "https://justachillgeek.wordpress.com/",
    label: "Website",
  },
  {
    icon: Music2,
    href: "https://www.tiktok.com/@noahisblogging",
    label: "TikTok",
  },
];
