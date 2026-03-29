import { useState, type FC } from "react";
import logo from "/logo.png";
import { NAV_ITEMS } from "../constants";
import type { NavItemConfig } from "../constants";
import { Menu, X } from "lucide-react";

export const Navbar: FC = () => {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState<boolean>(false);
  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-slate-950/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
          {/* logo */}
          <div className="flex items-center space-x-1 group cursor-pointer">
            <div>
              <img
                src={logo}
                alt="CodeFlow Logo"
                className="w-6 h-6 sm:w-8 sm:h-8"
              />
            </div>
            <span className="text-lg sm:text-xl md:text-2xl font-medium">
              <span className="text-white">Code</span>
              <span className="text-blue-400">Flow</span>
            </span>
          </div>
          {/* navigation links */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {NAV_ITEMS.map((item: NavItemConfig, index: number) => (
              <a
                href={item.href}
                key={index}
                className="text-gray-300 hover:text-white text-sm lg:text-base"
              >
                {item.text}
              </a>
            ))}
          </div>
          {/* mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-300 hover:text-white"
            onClick={() => setMobileMenuIsOpen((prev) => !prev)}
          >
            {mobileMenuIsOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </button>
        </div>
      </div>
      {mobileMenuIsOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 animate-in slide-in-from-top duration-300">
          {NAV_ITEMS.map((item: NavItemConfig, index: number) => (
            <a
              href={item.href}
              key={index}
              className="text-gray-300 hover:text-white text-sm lg:text-base"
            >
              {item.text}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};
