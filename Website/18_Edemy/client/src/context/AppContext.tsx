import { COURSE_DATA } from "@/constants";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const currency = import.meta.env.VITE_CURRENCY;
  const navigate = useNavigate()
  const [allCourses, setAllCourses] = useState([]);

  // Fetch all courses
  const fetchAllCourses = async () => {
    setAllCourses(COURSE_DATA);
  };

  useEffect(() => {
    const loadData = async () => {
      await fetchAllCourses();
    };
    loadData();
  }, []);

  const value = { currency, allCourses, navigate };
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
