import { assets } from "@/assets/assets";
import { Loading } from "@/components/student";
import { AppContext } from "@/context/AppContext";
import { useContext, useMemo } from "react";
import { useParams } from "react-router-dom";

export const CourseDetails = () => {
  const { id } = useParams();
  const { allCourses, calculateRating } = useContext(AppContext);
  const courseData = useMemo(() => {
    if (!allCourses || allCourses.length === 0) return null;
    return allCourses.find((course) => course._id === id) || null;
  }, [allCourses, id]);

  if (!courseData) return <Loading />;

  return (
    <div className="relative z-0 flex flex-col-reverse items-start justify-between gap-10 px-8 pt-20 text-left md:flex-row md:px-36 md:pt-30">
      <div className="h-section-height absolute top-0 left-0 z-10 w-full bg-gradient-to-b from-cyan-100/70"></div>
      {/* Left column */}
      <div className="relative z-20 max-w-xl text-gray-500">
        <h1 className="md:text-course-details-heading-large text-course-details-heading-small font-semibold text-gray-800">
          {courseData.courseTitle}
        </h1>
        <p
          dangerouslySetInnerHTML={{
            __html: courseData.courseDescription.slice(0, 200),
          }}
          className="pt-4 text-sm md:text-base"
        ></p>

        {/* Reviews & ratings */}
        <div className="flex items-center space-x-2 pt-3 pb-1 text-sm">
          <p>{calculateRating(courseData)}</p>
          <div className="flex">
            {Array.from({ length: 5 }).map((_, index: number) => (
              <img
                key={index}
                src={
                  index < Math.floor(calculateRating(courseData))
                    ? assets.star
                    : assets.star_blank
                }
                alt="Rating star"
                className="h-3.5 w-3.5"
              />
            ))}
          </div>
          <p className="text-blue-600">
            ({courseData.courseRatings.length}{" "}
            {courseData.courseRatings.length > 1 ? "ratings" : "rating"})
          </p>
          <p>
            {courseData.enrolledStudents.length}{" "}
            {courseData.enrolledStudents.length > 1 ? "students" : "student"}
          </p>
        </div>
        <p className="text-sm">
          Course by{" "}
          <span className="text-blue-600 underline">{courseData.educator}</span>
        </p>
      </div>
      {/* Right column */}
      <div className="relative z-20"></div>
    </div>
  );
};
