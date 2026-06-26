import { Loading } from "@/components/student";
import { AppContext } from "@/context/AppContext";
import { useContext, useMemo } from "react";
import { useParams } from "react-router-dom";

export const CourseDetails = () => {
  const { id } = useParams();
  const { allCourses } = useContext(AppContext);
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
      </div>
      {/* Right column */}
      <div className="relative z-20"></div>
    </div>
  );
};
