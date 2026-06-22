import { assets } from "@/assets/assets";

export interface TestimonialType {
  id: number;
  name: string;
  role: string;
  image: string;
  rating: number;
  feedback: string;
}

export const TESTIMONIALS: TestimonialType[] = [
  {
    id: 1,
    name: "Donald Jackman",
    role: "SWE 1 @ Amazon",
    image: assets.profile_img_1,
    rating: 5,
    feedback:
      "I've been using Imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
  },
  {
    id: 2,
    name: "Richard Nelson",
    role: "SWE 2 @ Samsung",
    image: assets.profile_img_2,
    rating: 4,
    feedback:
      "As a developer, I really appreciate how smooth the integration is. Imagify has significantly optimized our team's asset workflow for marketing campaigns.",
  },
  {
    id: 3,
    name: "James Washington",
    role: "SWE 2 @ Google",
    image: assets.profile_img_3,
    rating: 4.5,
    feedback:
      "Excellent performance and clean UI. It automates all the tedious image scaling tasks perfectly. Highly recommended for quick design iterations.",
  },
];
