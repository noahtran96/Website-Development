import type { FC } from "react";
import { Container } from "../shared/Container";
import Logo from "../../../public/assets/icon.svg";
import { NAV_ITEMS } from "../../constants";
import type { NavItemConfig } from "../../constants";
import { NavItem } from "../shared/NavItem";

export const Footer: FC = () => {
  return (
    <footer className="relative pt-28 rounded-t-3xl bg-box-bg">
      <Container className="pb-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <img src={Logo} alt="EdgeAI Logo" className="w-7 h-7" />
            <span className="text-lg font-semibold text-heading-1">EdgeAI</span>
          </div>
          <ul className="flex gap-6 text-heading-1">
            {NAV_ITEMS.map((item: NavItemConfig, index: number) => (
              <NavItem key={index} href={item.href} text={item.text} />
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
};
