import { assets } from "@/assets/assets";

export interface MenuType {
  name: string;
  path: string;
  icon: string;
}

export const MENU: MenuType[] = [
  {
    name: "Dashboard",
    path: "/educator",
    icon: assets.home_icon,
  },
  {
    name: "Add Course",
    path: "/educator/add-course",
    icon: assets.add_icon,
  },
  {
    name: "My Courses",
    path: "/educator/my-courses",
    icon: assets.my_course_icon,
  },
  {
    name: "Student Enrolled",
    path: "/educator/student-enrolled",
    icon: assets.person_tick_icon,
  },
];
