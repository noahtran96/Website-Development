import { assets } from "@/assets/assets";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const isCourseListPage = location.pathname.includes("/course-list");

  return (
    <div
      className={`flex items-center justify-between border-b border-gray-500 px-4 py-4 sm:px-10 md:px-14 lg:px-36 ${isCourseListPage ? "bg-white" : "bg-cyan-100/70"}`}
    >
      <img
        src={assets.logo}
        alt="Edemy logo"
        className="w-28 cursor-pointer lg:w-32"
      />
      {/* Desktop navbar */}
      <div className="hidden items-center gap-5 text-gray-500 md:flex">
        <div>
          <button>Become Educator</button> |{" "}
          <Link to="/my-enrollments">My Enrollments</Link>
        </div>
        <button className="rounded-full bg-blue-600 px-5 py-2 text-white">
          Create Account
        </button>
      </div>
      <div></div>
    </div>
  );
};
