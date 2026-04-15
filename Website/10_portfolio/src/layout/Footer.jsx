const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-border border-t py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold tracking-tight">
              Noah<span className="text-primary">.</span>
            </a>
            <p className="text-muted-foreground mt-2 text-sm">
              © {currentYear} Noah Tran. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="glass hover:bg-primary/10 hover:text-primary rounded-full p-2 transition-all"
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
