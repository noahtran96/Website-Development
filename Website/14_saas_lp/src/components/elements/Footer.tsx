import type { FC } from "react";
import { Container } from "../shared/Container";
import Logo from "../../../public/assets/icon.svg";
import { NAV_ITEMS } from "../../constants";
import type { NavItemConfig } from "../../constants";
import { NavItem } from "../shared/NavItem";

export const Footer: FC = () => {
  return (
    <footer className="bg-box-bg relative rounded-t-3xl pt-28">
      <Container className="pb-8">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-4 flex items-center gap-3 md:mb-0">
            <img src={Logo} alt="EdgeAI Logo" className="h-7 w-7" />
            <span className="text-heading-1 text-lg font-semibold">EdgeAI</span>
          </div>
          <ul className="text-heading-1 flex gap-6">
            {NAV_ITEMS.map((item: NavItemConfig, index: number) => (
              <NavItem key={index} href={item.href} text={item.text} />
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
};
