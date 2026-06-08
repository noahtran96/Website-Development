import { Companies } from "@/components/student/Companies";
import { Hero } from "@/components/student/Hero";

export const Home = () => {
  return (
    <div className="flex flex-col items-center space-y-7 text-center">
      <Hero />
      <Companies />
    </div>
  );
};
