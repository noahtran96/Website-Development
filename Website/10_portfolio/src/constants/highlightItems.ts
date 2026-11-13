import { Code2, Lightbulb, Rocket, Users } from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface HighlightItem {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export const HIGHLIGHT_ITEMS: HighlightItem[] = [
  {
    id: "1",
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    id: "2",
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lightning-fast user experiences.",
  },
  {
    id: "3",
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    id: "4",
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
];
