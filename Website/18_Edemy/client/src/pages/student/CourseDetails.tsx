import { assets } from "@/assets/assets";
import { Loading } from "@/components/student";
import { Footer } from "@/components/student/Footer";
import { AppContext } from "@/context/AppContext";
import humanizeDuration from "humanize-duration";
import { useContext, useMemo, useState } from "react";
import { useParams } from "react-router-dom";

export const CourseDetails = () => {
  const { id } = useParams();
  const [openSection, setOpenSection] = useState({});
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [playerData, setPlayerData] = useState(null);
  const {
    allCourses,
    calculateRating,
    calculateChapterTime,
    calculateCourseDuration,
    calculateNoOfLectures,
    currency,
  } = useContext(AppContext);
  const courseData = useMemo(() => {
    if (!allCourses || allCourses.length === 0) return null;
    return allCourses.find((course) => course._id === id) || null;
  }, [allCourses, id]);

  if (!courseData) return <Loading />;

  const toggleSection = (id) => {
    setOpenSection((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <>
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
            <span className="text-blue-600 underline">
              {courseData.educator}
            </span>
          </p>
          <div className="pt-8 text-gray-800">
            <h2 className="text-xl font-semibold">Course Structure</h2>
            <div className="pt-5">
              {courseData.courseContent.map((chapter) => (
                <div
                  key={chapter.chapterId}
                  className="mb-2 rounded border border-gray-300 bg-white"
                >
                  <div
                    onClick={() => toggleSection(chapter.chapterId)}
                    className="flex cursor-pointer items-center justify-between px-4 py-3 select-none"
                  >
                    <div className="flex items-center gap-2">
                      <img
                        src={assets.down_arrow_icon}
                        alt="Down arrow icon"
                        className={`transform transition-transform ${openSection[chapter.chapterId] ? "rotate-180" : ""}`}
                      />
                      <p className="text-sm font-medium md:text-base">
                        {chapter.chapterTitle}
                      </p>
                    </div>
                    <p className="md:text-default text-sm">
                      {chapter.chapterContent.length} lectures -{" "}
                      {calculateChapterTime(chapter)}
                    </p>
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${openSection[chapter.chapterId] ? "max-h-96" : "max-h-0"}`}
                  >
                    <ul className="list-disc border-t border-gray-300 py-2 pr-4 pl-4 text-gray-600 md:pl-10">
                      {chapter.chapterContent.map((lecture) => (
                        <li
                          key={lecture.lectureId}
                          className="flex items-start gap-2 py-1"
                        >
                          <img
                            src={assets.play_icon}
                            alt="Play icon"
                            className="mt-1 h-4 w-4"
                          />
                          <div className="md:text-default flex w-full items-center justify-between text-xs text-gray-800">
                            <p>{lecture.lectureTitle}</p>
                            <div className="flex gap-2">
                              {lecture.isPreviewFree && (
                                <p onClick={() => setPlayerData({videoId: lecture.lectureUrl.split("/").pop()})} className="cursor-pointer text-blue-500">
                                  Preview
                                </p>
                              )}
                              <p>
                                {humanizeDuration(
                                  lecture.lectureDuration * 60 * 1000,
                                  { units: ["h", "m"] }
                                )}
                              </p>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="md:text-default py-20 text-sm">
            <h3 className="text-xl font-semibold text-gray-800">
              Course Description
            </h3>
            <p
              dangerouslySetInnerHTML={{
                __html: courseData.courseDescription,
              }}
              className="rich-text pt-3"
            ></p>
          </div>
        </div>
        {/* Right column */}
        <div className="max-w-course-card shadow-custom-card relative z-20 min-w-[300px] overflow-hidden rounded-t bg-white sm:min-w-[420px] md:rounded-none">
          <img src={courseData.courseThumbnail} alt="Course thumbnail" />
          <div className="px-5 pt-5 pb-5">
            <div className="flex items-center gap-2">
              {playerData ? : <img
                src={assets.time_left_clock_icon}
                alt="Time left clock icon"
                className="h-3.5 w-3.5 object-contain"
              />}
              
              <p className="text-red-500">
                <span className="font-medium">5 days</span> left at this price!
              </p>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <p className="text-2xl font-semibold text-gray-800 md:text-4xl">
                {currency}
                {(
                  courseData.coursePrice -
                  (courseData.discount * courseData.coursePrice) / 100
                ).toFixed(2)}
              </p>
              <p className="text-gray-500 line-through md:text-lg">
                {currency}
                {courseData.coursePrice}
              </p>
              <p className="text-gray-500 md:text-lg">
                {courseData.discount}% off
              </p>
            </div>

            <div className="md:text-default flex items-center gap-4 pt-2 text-sm text-gray-500 md:pt-4">
              <div className="flex items-center gap-1">
                <img src={assets.star} alt="Star icon" />
                <p>{calculateRating(courseData)}</p>
              </div>
              <div className="h-4 w-px bg-gray-500/40" />
              <div className="flex items-center gap-1">
                <img src={assets.time_clock_icon} alt="Time clock icon" />
                <p>{calculateCourseDuration(courseData)}</p>
              </div>
              <div className="h-4 w-px bg-gray-500/40" />
              <div className="flex items-center gap-1">
                <img src={assets.lesson_icon} alt="Lesson icon" />
                <p>{calculateNoOfLectures(courseData)} lessons</p>
              </div>
            </div>
            <button className="mt-4 w-full rounded bg-blue-600 py-3 font-medium text-white md:mt-6">
              {isEnrolled ? "Enrolled" : "Enroll Now"}
            </button>
            <div className="pt-6">
              <p className="text-lg font-medium text-gray-800 md:text-xl">
                What's in the course?
              </p>
              <ul className="md:text-default ml-4 list-disc pt-2 text-sm text-gray-500">
                <li>Lifetime access with free updates.</li>
                <li>Step-by-step, hands-on project guidance.</li>
                <li>Downloadable resources and source code.</li>
                <li>Quizzes to test your knowledge.</li>
                <li>Certificate of completion.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
