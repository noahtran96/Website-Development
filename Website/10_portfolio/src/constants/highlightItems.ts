import {
  BarChart3,
  Code2,
  Layers,
  Lightbulb,
  Rocket,
  Terminal,
  Users,
  Workflow,
} from "lucide-react";
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
    icon: Workflow,
    title: "Business & System Analysis",
    description:
      "Translating messy operational bottlenecks into clear technical specs, ERDs, and scalable workflows.",
  },
  {
    id: "2",
    icon: BarChart3,
    title: "Data & BI Architecture",
    description:
      "Designing automated pipelines and executive dashboards that drive 100% reporting accuracy.",
  },
  {
    id: "3",
    icon: Terminal,
    title: "Fullstack Execution",
    description:
      "Bridging the gap with devs—capable of prototyping and shipping full-stack web apps end-to-end.",
  },
  {
    id: "4",
    icon: Layers,
    title: "Operations at Scale",
    description:
      "Proven track record scaling teams (150+) and systems (1,600+ users) with 80–90% automation.",
  },
];

export interface ImpactMetric {
  value: string;
  label: string;
  context: string;
}

export const IMPACT_METRICS: ImpactMetric[] = [
  {
    value: "90%",
    label: "Workflow Automation",
    context: "Automated cross-team BI reporting across Marketing, Sales & CS",
  },
  {
    value: "65%",
    label: "Cost Reduction",
    context:
      "Cut operational overhead via ERP migration & process re-engineering",
  },
  {
    value: "150+ / 1.6K",
    label: "Org & User Scale",
    context: "Scaled operations from 5 to 150+ staff and 35 to 1,600+ learners",
  },
  {
    value: "5+ Yrs",
    label: "Ops & Data Leadership",
    context: "Ex-Head of Operations, Data Analyst & Tech BA",
  },
];
