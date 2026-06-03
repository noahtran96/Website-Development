import { Outlet } from "react-router-dom";

export const Educator = () => {
  return (
    <div>
      <div>{<Outlet />}</div>
    </div>
  );
};
