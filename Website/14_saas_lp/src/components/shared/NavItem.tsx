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
        className="duration-300 font-medium ease-linear hover:text-primary py-3"
      >
        {text}
      </a>
    </li>
  );
};
