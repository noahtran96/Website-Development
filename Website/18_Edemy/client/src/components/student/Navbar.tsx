import { assets } from "@/assets/assets";
import { Link } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/react";
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";

export const Navbar = () => {
  const { navigate } = useContext(AppContext);
  const isCourseListPage = location.pathname.includes("/course-list");
  const { openSignIn } = useClerk();
  const { user } = useUser();

  return (
    <div
      className={`flex items-center justify-between border-b border-gray-500 px-4 py-4 sm:px-10 md:px-14 lg:px-36 ${isCourseListPage ? "bg-white" : "bg-cyan-100/70"}`}
    >
      <img
        onClick={() => navigate("/")}
        src={assets.logo}
        alt="Edemy logo"
        className="w-28 cursor-pointer lg:w-32"
      />
      {/* Desktop navbar */}
      <div className="hidden items-center gap-5 text-gray-500 md:flex">
        <div className="flex items-center gap-5">
          {user && (
            <>
              <button>Become Educator</button> |{" "}
              <Link to="/my-enrollments">My Enrollments</Link>{" "}
            </>
          )}
        </div>
        {user ? (
          <UserButton />
        ) : (
          <button
            onClick={() => openSignIn()}
            className="rounded-full bg-blue-600 px-5 py-2 text-white"
          >
            Create Account
          </button>
        )}
      </div>

      {/* Mobile navbar */}
      <div className="flex items-center gap-2 text-gray-500 sm:gap-5 md:hidden">
        <div className="flex items-center gap-1 max-sm:text-xs sm:gap-2">
          {user && (
            <>
              <button>Become Educator</button> |{" "}
              <Link to="/my-enrollments">My Enrollments</Link>
            </>
          )}
        </div>
        {user ? (
          <UserButton />
        ) : (
          <button onClick={() => openSignIn()}>
            <img src={assets.user_icon} alt="User icon" />
          </button>
        )}
      </div>
    </div>
  );
};
