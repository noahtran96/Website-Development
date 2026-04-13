export interface ProjectItem {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  github: string;
}

export const PROJECT_ITEMS: ProjectItem[] = [
  {
    title: "Crypto Tracker",
    description:
      "A cryptocurrency tracking app with real-time data, interactive charts, and detailed coin insights.",
    image: "/projects/project1.png",
    tags: ["React", "TypeScript", "React Router", "Recharts", "Vite", "Vercel"],
    link: "https://16cryptotracker.vercel.app/",
    github:
      "https://github.com/noahtran96/Website-Development/tree/main/Website/16_crypto_tracker",
  },
  {
    title: "SaaS Landing Page",
    description:
      "A modern AI SaaS landing page showcasing services, pricing plans, and business solutions with a clean, responsive UI.",
    image: "/projects/project2.png",
    tags: ["React", "TypeScript", "Zustand", "Tailwind CSS", "Vite", "Vercel"],
    link: "https://14saaslp.vercel.app/",
    github:
      "https://github.com/noahtran96/Website-Development/tree/main/Website/14_saas_lp",
  },
  {
    title: "Food Ordering Website",
    description:
      "A simple and interactive food ordering website that allows users to browse food categories, add items to a cart, and simulate the checkout process.",
    image: "/projects/project3.png",
    tags: ["React", "Python", "FastAPI"],
    link: "#",
    github:
      "https://github.com/noahtran96/Website-Development/tree/main/Website/11_food_delivery",
  },
  {
    title: "Dev Platform Landing Page",
    description:
      "A premium AI-powered developer landing page featuring a dynamic IDE simulator, interactive code completion showcases, and custom mouse-tracking animations.",
    image: "/projects/project4.png",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite", "Vercel"],
    link: "https://15codeflow.vercel.app/",
    github:
      "https://github.com/noahtran96/Website-Development/tree/main/Website/15_codeflow",
  },
];
