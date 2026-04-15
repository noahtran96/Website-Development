import { close, logo, menu } from "../assets";
import { NAV_LINKS, type navLink } from "../constants";

export const Navbar = () => {
  return (
    <nav className="navbar flex w-full items-center justify-between py-6">
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
    </nav>
  );
};
