import { MENU } from "@/constants";
import { AppContext } from "@/context/AppContext";
import { useContext } from "react";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  const { isEducator } = useContext(AppContext);
  return (
    isEducator && (
      <div className="flex min-h-screen w-16 flex-col border-r border-gray-500 py-2 text-base md:w-64">
        {MENU.map((item) => (
          <NavLink
            to={item.path}
            key={item.id}
            end={item.path === "/educator"}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center gap-3 py-3.5 md:flex-row md:justify-start md:px-10 ${isActive ? "border-r-[6px] border-indigo-500/90 bg-indigo-50" : "border-r-[6px] border-white hover:border-gray-100/90 hover:bg-gray-100/90"}`
            }
          >
            <img
              src={item.icon}
              alt={`${item.name} icon`}
              className="h-6 w-6"
            />
            <p className="hidden text-center md:block">{item.name}</p>
          </NavLink>
        ))}
      </div>
    )
  );
};
