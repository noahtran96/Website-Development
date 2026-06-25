import { assets } from "@/assets/assets";
import { CourseCard } from "@/components/student/CourseCard";
import { SearchBar } from "@/components/student/SearchBar";
import { AppContext } from "@/context/AppContext";
import { useContext, useMemo } from "react";
import { useParams } from "react-router-dom";

export const CourseList = () => {
  const { navigate, allCourses } = useContext(AppContext);
  const { input } = useParams();
  const filteredCourse = useMemo(() => {
    if (!allCourses) return [];
    if (!input) return allCourses;
    return allCourses.filter((course) =>
      course.courseTitle?.toLowerCase().includes(input.toLowerCase())
    );
  }, [allCourses, input]);

  return (
    <>
      <div className="relative px-8 pt-20 text-left md:px-36">
        {/* Headline & searchbar */}
        <div className="flex w-full flex-col items-start justify-between gap-6 md:flex-row">
          <div>
            <h1 className="text-4xl font-semibold text-gray-800">
              Course List
            </h1>
            <p className="text-gray-500">
              <span
                onClick={() => navigate("/")}
                className="cursor-pointer text-blue-600"
              >
                Home
              </span>{" "}
              / <span>Course List</span>
            </p>
          </div>
          <SearchBar data={input} />
        </div>

        {/* Courses */}
        {input && (
          <div className="mt-8 -mb-8 inline-flex items-center gap-4 border px-4 py-2 text-gray-600">
            <p>{input}</p>
            <img
              onClick={() => navigate("/course-list")}
              src={assets.cross_icon}
              alt="Cross icon"
              className="cursor-pointer"
            />
          </div>
        )}
        <div className="my-16 grid grid-cols-1 gap-3 px-2 sm:grid-cols-2 md:grid-cols-3 md:p-0 lg:grid-cols-4">
          {filteredCourse.map((course) => (
            <CourseCard key={course._id} course={course} />
          ))}
        </div>
      </div>
    </>
  );
};
