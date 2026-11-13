export interface SkillCategory {
  category: string;
  items: string[];
}

export const SKILLS: SkillCategory[] = [
  {
    category: "Business Analysis & Ops",
    items: [
      "Requirement Gathering",
      "UML Diagrams",
      "Odoo ERP",
      "Jira",
      "Agile/Scrum",
    ],
  },
  { category: "Data & Analytics", items: ["SQL", "Python", "Power BI"] },
  {
    category: "Web & Engineering",
    items: [
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
    ],
  },
];
