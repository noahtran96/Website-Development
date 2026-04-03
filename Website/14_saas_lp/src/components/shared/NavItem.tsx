import type { FC } from "react";

interface NavItemProps {
  href: string;
  text: string;
}

export const NavItem: FC<NavItemProps> = ({ href, text }) => {
  return (
    <li>
      <a
        href={href}
        className="hover:text-primary py-3 font-medium duration-300 ease-linear"
      >
        {text}
      </a>
    </li>
  );
};
