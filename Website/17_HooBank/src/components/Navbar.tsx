import { close, logo, menu } from "../assets";

export const Navbar = () => {
  return (
    <nav className="navbar flex w-full items-center justify-between py-6">
      <img src={logo} alt="HooBank logo" className="h-[32px] w-[124px]" />
    </nav>
  );
};
