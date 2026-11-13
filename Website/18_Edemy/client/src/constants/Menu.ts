import { assets } from "@/assets/assets";

export interface MenuType {
  id: number;
  name: string;
  path: string;
  icon: string;
}

export const MENU: MenuType[] = [
  {
    id: 1,
    name: "Dashboard",
    path: "/educator",
    icon: assets.home_icon,
  },
  {
    id: 2,
    name: "Add Course",
    path: "/educator/add-course",
    icon: assets.add_icon,
  },
  {
    id: 3,
    name: "My Courses",
    path: "/educator/my-courses",
    icon: assets.my_course_icon,
  },
  {
    id: 4,
    name: "Student Enrolled",
    path: "/educator/student-enrolled",
    icon: assets.person_tick_icon,
  },
];
