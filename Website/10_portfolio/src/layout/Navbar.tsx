import { Button } from "../components/Button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { NAV_LINKS, type NavLink } from "../constants";

// Scroll threshold constant for navbar UI trigger
const SCROLL_THRESHOLD = 50;

export const Navbar = () => {
  // useState hooks: mobile menu and user scroll behavior states
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  // Toggle mobile menu
  const toggleMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMobileMenuOpen(false);

  // useEffect hook: control navbar interface when scrolled above 50px, run once when component is mounted
  useEffect(() => {
    // scroll event handler when scrolled above 50px
    const handleScroll = () => {
      const scrolled = window.scrollY > SCROLL_THRESHOLD;
      setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev)); // throttle to ensure necessary re-render
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll); // cleanup
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 transition-all duration-500 ${isScrolled ? "glass-strong py-3" : "bg-transparent py-5"} z-50`}
    >
      <nav className="container mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <a
          href="#"
          className="hover:text-primary text-xl font-bold tracking-tight"
        >
          Noah<span className="text-primary">.</span>
        </a>
        {/* Desktop Nav*/}
        <div className="hidden items-center gap-1 md:flex">
          <div className="glass flex items-center gap-1 rounded-full px-2 py-1">
            {NAV_LINKS.map((link: NavLink) => (
              <a
                href={link.href}
                key={link.id}
                className="text-muted-foreground hover:text-foreground hover:bg-surface rounded-full px-4 py-2 text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        {/* CTA Button */}
        <div className="hidden md:block">
          <Button href="#contact" size="sm">
            Contact Me
          </Button>
        </div>

        {/* Mobile Menu Button*/}
        <button
          className="text-foreground cursor-pointer p-2 md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu*/}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="glass-strong animate-fade-in md:hidden">
          <div className="container mx-auto flex flex-col gap-4 px-6 py-6">
            {NAV_LINKS.map((link: NavLink) => (
              <a
                href={link.href}
                key={link.id}
                onClick={closeMenu}
                className="text-muted-foreground hover:text-foreground py-2 text-lg"
              >
                {link.label}
              </a>
            ))}

            <Button href="#contact" onClick={closeMenu}>
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
