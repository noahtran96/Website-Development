import React, { useState } from "react";
import css from "./Header.module.css";
import Logo from "../../assets/logo.png";
import { CgShoppingBag } from "react-icons/cg";
import { GoRows } from "react-icons/go";

const Header: React.FC = () => {
  const [ShowMenu, setShowMenu] = useState(true);
  const toggleMenu = () => {
    setShowMenu((ShowMenu) => !ShowMenu);
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
          style={{ display: ShowMenu ? "flex" : "none" }}
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
