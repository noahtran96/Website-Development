import React, { useState } from "react";
import Logo from "../../imgs/logo.png";
import "./Sidebar.css";
import { SidebarData } from "../../Data/Data";
import { UilSignOutAlt } from "@iconscout/react-unicons";

function Sidebar() {
  const [selected, setSelected] = useState(0);
  return (
    <section className="Sidebar">
      {/* logo */}
      <div className="logo">
        <img src={Logo} alt="" />
        <span>
          Sh<span>o</span>ps
        </span>
      </div>

      {/* menu */}
      <div className="menu">
        {SidebarData.map((item, i) => {
          return (
            <div
              className={selected === i ? "menuItem active" : "menuItem"}
              key={i}
              onClick={() => setSelected(i)}
            >
              <item.icon />
              <span>{item.heading}</span>
            </div>
          );
        })}
        <div className="menuItem">
          <UilSignOutAlt />
        </div>
      </div>
    </section>
  );
}

export default Sidebar;
