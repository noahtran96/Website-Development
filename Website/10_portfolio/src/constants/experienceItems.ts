export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  description: string;
  technologies: string[];
  current: boolean;
}

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    period: "Mar 2026 — now",
    role: "Software Engineering Trainee | NAB WeCamp",
    company: "NAB Innovation Centre Vietnam",
    description:
      "Intensive training in Software Engineering as a career-switcher. Combining an analytical Operations mindset with modern engineering to build clean, optimized, and scalable solutions.",
    technologies: ["React", "JavaScript"],
    current: true,
  },
  {
    period: "Jul 2025 — Mar 2026",
    role: "Operations Analyst",
    company: "Geniebook Vietnam",
    description:
      "Leveraged Google Sheets and Looker Studio to build comprehensive dashboards for Marketing, Sales, and Customer Service, achieving a 90% automation rate, 100% accuracy and 65% cost reduction.",
    technologies: ["Odoo", "Looker Studio", "Google Sheets"],
    current: false,
  },
  {
    period: "Jan 2021 — Jul 2025",
    role: "Head of Operations",
    company: "Algorithmics Vietnam",
    description:
      "Promoted 4 times from Specialist to Head level; scaled team (5 to 150+) and learner base (35 to 1,600+). Architected the company’s entire infrastructure from Google Sheets to Odoo/Slack, achieving 80% automation, 67% cost reduction, and a 22% boost in overall performance.",
    technologies: ["Odoo", "Google Sheets"],
    current: false,
  },
  {
    period: "Apr 2020 — Dec 2020",
    role: "Teacher Community Lead cum Data Analyst",
    company: "One On One English",
    description:
      "Promoted twice to Lead Admin; engineered the company’s entire operational infrastructure from scratch using Airtable and Notion. Integrated internal CRM systems to automate payroll and workforce forecasting, slashing manual workload by 45% and boosting efficiency by 85%.",
    technologies: ["Google Sheets", "Airtable", "Notion"],
    current: false,
  },
  {
    period: "Nov 2019 — Apr 2020",
    role: "South Hub Program Manager (Operations)",
    company: "OYO",
    description:
      "Led cross-functional project management and data analysis for 1,000+ hotels nationwide, collaborating with global teams to optimize operational systems. Built custom data solutions in Google Sheets, driving a 65% increase in efficiency.",
    technologies: ["Google Sheets"],
    current: false,
  },
];
