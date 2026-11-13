import React, { useEffect } from "react";
import type { FC } from "react";
import { Navbar } from "./elements/Navbar";
import { Footer } from "./elements/Footer";

interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ title, children }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <>
      <Navbar />
      <main className="flex flex-col gap-y-20 overflow-hidden bg-[rgb(var(--color-bg))] transition-colors duration-300 md:gap-y-32">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
