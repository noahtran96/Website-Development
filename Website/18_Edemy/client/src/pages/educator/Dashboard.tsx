import { AppContext } from "@/context/AppContext";
import { useContext, useState } from "react";

export const Dashboard = () => {
  const { currency } = useContext(AppContext);
  const [dashboardData, setDashboardData] = useState(null);
  const fetchDashboardData = async () => {
    setDashboardData();
  };
  return <div>Dashboard</div>;
};
