import { useState } from "react";
import logo from "../../assets/logo.png";
import { NAV_ITEMS, type NavItem } from "../../constants";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  scrolled: boolean;
}

export const Navbar = ({ scrolled }: NavbarProps) => {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState<boolean>(false);

  {
    /* render nav items logic */
  }
  const renderNavLinks = (isMobile = false) =>
    NAV_ITEMS.map((item: NavItem, index: number) => (
      <a
        href={item.href}
        key={index}
        className={`${isMobile ? "block" : "text-sm lg:text-base"} text-gray-300 transition-colors hover:text-white`}
        onClick={() => isMobile && setMobileMenuIsOpen(false)}
      >
        {item.text}
      </a>
    ));

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? "border-b border-slate-800 bg-slate-950/80 backdrop-blur-lg" : "bg-slate-950/20 backdrop-blur-sm"}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between sm:h-16 md:h-20">
          {/* logo */}
          <div className="group flex cursor-pointer items-center space-x-1">
            <div>
              <img
                src={logo}
                alt="CodeFlow Logo"
                className="h-6 w-6 sm:h-8 sm:w-8"
              />
            </div>
            <span className="text-lg font-medium sm:text-xl md:text-2xl">
              <span className="text-white">Code</span>
              <span className="text-blue-400">Flow</span>
            </span>
          </div>

          {/* desktop nav */}
          <div className="hidden items-center space-x-6 md:flex lg:space-x-8">
            {renderNavLinks()}
          </div>

          {/* mobile menu button */}
          <button
            aria-label={mobileMenuIsOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuIsOpen}
            className="p-2 text-gray-300 hover:text-white md:hidden"
            onClick={() => setMobileMenuIsOpen((prev) => !prev)}
          >
            {mobileMenuIsOpen ? (
              <X className="h-5 w-5 sm:h-6 sm:w-6" />
            ) : (
              <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
            )}
          </button>
        </div>
      </div>

      {/* mobile nav dropdown */}
      {mobileMenuIsOpen && (
        <div className="animate-in slide-in-from-top border-t border-slate-800 bg-slate-900/95 backdrop-blur-lg duration-300 md:hidden">
          <div className="space-y-3 px-4 py-4 sm:space-y-4 sm:py-6">
            {renderNavLinks(true)}
          </div>
        </div>
      )}
    </nav>
  );
};
