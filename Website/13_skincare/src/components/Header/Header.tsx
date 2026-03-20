import React, { useState } from "react";
import type { FC } from "react";
import css from "./Header.module.css";
import Logo from "../../assets/logo.png";
import { CgShoppingBag } from "react-icons/cg";
import { GoRows } from "react-icons/go";

const Header: FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(true);
  const toggleMenu = (): void => {
    setShowMenu((showMenu) => !showMenu);
  };
  return (
    <div className={css.container}>
      <div className={css.logo}>
        <img src={Logo} alt="Amazon Logo" />
        <span>amazon</span>
      </div>
      <div className={css.right}>
        <div className={css.bars} onClick={toggleMenu}>
          <GoRows />
        </div>
        <ul
          className={css.menu}
          style={{ display: showMenu ? "flex" : "none" }}
        >
          <li>Collections</li>
          <li>Brands</li>
          <li>New</li>
          <li>Sales</li>
          <li>ENG</li>
        </ul>
        <input type="text" className={css.search} placeholder="Search" />
        <CgShoppingBag className={css.cart} />
      </div>
    </div>
  );
};

export default Header;
