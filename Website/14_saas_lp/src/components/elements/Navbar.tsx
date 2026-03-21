import type { FC } from "react";
import { Container } from "../shared/Container";
import Logo from "../../../public/assets/icon.svg";

const navItems = [
  { href: "#", text: "Home" },
  { href: "#services", text: "Services" },
  { href: "#about-us", text: "About Us" },
  { href: "#features", text: "Features" },
];

export const Navbar: FC = () => {
  return (
    <header className="absolute inset-x-0 top-0 z-50 py-6">
      <Container>
        <nav className="w-full flex justify-between gap-6 relative">
          {/* Logo */}
          <div className="min-w-max inline-flex relative">
            <a href="/" className="relative flex items-center gap-3">
              <img src={Logo} alt="EgdeAI Logo" className="w-10 h-10" />
              <div className="inline-flex text-lg font-semibold text-heading-1">
                EdgeAI
              </div>
            </a>
          </div>
        </nav>
      </Container>
    </header>
  );
};
