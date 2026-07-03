import { AppContext } from "@/context/AppContext";
import { useContext, useState } from "react";

export const MyEnrollments = () => {
  const { enrolledCourses, calculateCourseDuration } = useContext(AppContext);
  const [progressArray, setProgressArray] = useState([
    { lectureCompleted: 2, totalLectures: 4 },
    { lectureCompleted: 1, totalLectures: 5 },
    { lectureCompleted: 3, totalLectures: 6 },
    { lectureCompleted: 4, totalLectures: 4 },
    { lectureCompleted: 0, totalLectures: 3 },
    { lectureCompleted: 5, totalLectures: 7 },
    { lectureCompleted: 6, totalLectures: 8 },
    { lectureCompleted: 2, totalLectures: 6 },
    { lectureCompleted: 4, totalLectures: 10 },
    { lectureCompleted: 3, totalLectures: 5 },
    { lectureCompleted: 7, totalLectures: 7 },
    { lectureCompleted: 1, totalLectures: 4 },
    { lectureCompleted: 0, totalLectures: 2 },
    { lectureCompleted: 5, totalLectures: 5 },
  ]);
  return (
    <>
      <div className="px-8 pt-10 md:px-36">
        <h1 className="text-2xl font-semibold">My Enrollments</h1>
        <table className="mt-10 w-full table-fixed overflow-hidden border md:table-auto">
          <thead className="border-b border-gray-500/20 text-left text-sm text-gray-900 max-sm:hidden">
            <tr>
              <th className="truncate px-4 py-3 font-semibold">Course</th>
              <th className="truncate px-4 py-3 font-semibold">Duration</th>
              <th className="truncate px-4 py-3 font-semibold">Completed</th>
              <th className="truncate px-4 py-3 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {enrolledCourses.map((course) => (
              <tr key={course._id} className="border-b border-gray-500/20">
                <td className="flex items-center space-x-3 py-3 pl-2 md:px-4 md:pl-4">
                  <img
                    src={course.courseThumbnail}
                    alt="Course thumbnail"
                    className="w-14 sm:w-24 md:w-28"
                  />
                  <div className="flex-1">
                    <p className="mb-1 max-sm:text-sm">{course.courseTitle}</p>
                  </div>
                </td>
                <td className="px-4 py-3 max-sm:hidden">
                  {calculateCourseDuration(course)}
                </td>
                <td className="px-4 py-3 max-sm:hidden">
                  4 / 10 <span>Lectures</span>
                </td>
                <td className="px-4 py-3 max-sm:text-right">
                  <button className="bg-blue-600 px-3 py-1.5 text-white max-sm:text-xs sm:px-5 sm:py-2">
                    Ongoing
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
