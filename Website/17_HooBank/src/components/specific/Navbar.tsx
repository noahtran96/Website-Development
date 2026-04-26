import { useState } from "react";
import { close, logo, menu } from "../../assets";
import { NAV_LINKS, type navLink } from "../../constants";

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="navbar bg-primary fixed top-0 z-[50] flex w-full items-center justify-between py-6">
      <img src={logo} alt="HooBank logo" className="h-[32px] w-[124px]" />
      <ul className="hidden flex-1 list-none items-center justify-end gap-10 sm:flex">
        {NAV_LINKS.map((nav: navLink) => (
          <li
            key={nav.id}
            className="cursor-pointer text-[16px] font-normal text-white"
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      {/* mobile responsive menu */}
      <div className="flex flex-1 items-center justify-end sm:hidden">
        <img
          src={toggle ? close : menu}
          alt="Mobile menu"
          className="h-[28px] w-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${toggle ? "flex" : "hidden"} sidebar bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl p-6`}
        >
          <ul className="flex flex-1 list-none flex-col items-center justify-end gap-10">
            {NAV_LINKS.map((nav: navLink) => (
              <li
                key={nav.id}
                className="cursor-pointer text-[16px] font-normal text-white"
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
