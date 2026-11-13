import { assets } from "@/assets/assets";
import { EDUCATORS } from "@/constants";
import { UserButton, useUser } from "@clerk/react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const educatorData = EDUCATORS;
  const { user } = useUser();
  return (
    <div className="flex items-center justify-between border-b border-gray-500 px-4 py-3 md:px-8">
      <Link to="/">
        <img src={assets.logo} alt="Logo" className="w-28 lg:w-32" />
      </Link>
      <div className="relative flex items-center gap-5 text-gray-500">
        <p>Hi! {user ? user.fullName : "Developers"}</p>
        {user ? (
          <UserButton />
        ) : (
          <img
            src={assets.profile_img}
            alt="Profile image"
            className="max-w-8"
          />
        )}
      </div>
    </div>
  );
};
