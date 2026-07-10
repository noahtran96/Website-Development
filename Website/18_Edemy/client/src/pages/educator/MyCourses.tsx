import { Loading } from "@/components/student";
import { AppContext } from "@/context/AppContext";
import { useContext, useState } from "react";

export const MyCourses = () => {
  const { currency, allCourses } = useContext(AppContext);
  const [courses, setCourses] = useState(allCourses);
  return courses ? (
    <div className="flex h-screen flex-col items-start justify-between p-4 pt-8 pb-0 md:p-8 md:pb-0">
      <div className="w-full">
        <h2 className="pb-4 text-lg font-medium">My Courses</h2>
        <div className="flex w-full max-w-4xl flex-col items-center overflow-hidden rounded-md border border-gray-500/20 bg-white">
          <table className="w-full table-fixed overflow-hidden md:table-auto">
            <thead className="border-b border-gray-500/20 text-left text-sm text-gray-900">
              <tr>
                <th className="truncate px-4 py-3 font-semibold">
                  All Courses
                </th>
                <th className="truncate px-4 py-3 font-semibold">Earnings</th>
                <th className="truncate px-4 py-3 font-semibold">Students</th>
                <th className="truncate px-4 py-3 font-semibold">
                  Published On
                </th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-500">
              {courses.map((course) => (
                <tr key={course._id} className="border-b border-gray-500/20">
                  <td className="flex items-center space-x-3 truncate py-3 pl-2 md:px-4 md:pl-4">
                    <img
                      src={course.courseThumbnail}
                      alt="Course thumbnail"
                      className="w-16"
                    />
                    <span className="hidden truncate md:block">
                      {course.courseTitle}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    {currency}{" "}
                    {Math.floor(
                      course.enrolledStudents.length *
                        (course.coursePrice -
                          (course.discount * course.coursePrice) / 100)
                    )}
                  </td>
                  <td className="px-4 py-3">
                    {course.enrolledStudents.length}
                  </td>
                  <td className="px-4 py-3">
                    {new Date(course.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};
