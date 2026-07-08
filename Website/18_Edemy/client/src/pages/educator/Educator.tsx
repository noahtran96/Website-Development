import { Navbar } from "@/components/educator/Navbar";
import { Outlet } from "react-router-dom";

export const Educator = () => {
  return (
    <div className="text-default min-h-screen bg-white">
      <Navbar />
      <div>{<Outlet />}</div>
    </div>
  );
};
