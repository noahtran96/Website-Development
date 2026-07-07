import { assets } from "@/assets/assets";
import { AppContext } from "@/context/AppContext";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import humanizeDuration from "humanize-duration";
import YouTube from "react-youtube";
import { Footer } from "@/components/student/Footer";
import { Rating } from "@/components/student/Rating";

export const Player = () => {
  const { enrolledCourses, calculateChapterTime } = useContext(AppContext);
  const { courseId } = useParams();
  const [courseData, setCourseData] = useState(null);
  const [openSection, setOpenSection] = useState({});
  const [playerData, setPlayerData] = useState(null);
  const toggleSection = (id) => {
    setOpenSection((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  const getCourseData = () => {
    const currentCourse = enrolledCourses.find(
      (course) => (course._id = courseId)
    );
    if (currentCourse) {
      setCourseData(currentCourse);
    }
  };
  useEffect(() => {
    getCourseData();
  }, [enrolledCourses, courseId]);
  return (
    <>
      <div className="flex flex-col-reverse gap-10 p-4 sm:p-10 md:grid md:grid-cols-2 md:px-36">
        {/* Left column */}
        <div className="text-gray-800">
          <h2 className="text-xl font-semibold">Course Structure</h2>
          <div className="pt-5">
            {courseData &&
              courseData.courseContent.map((chapter, index: number) => (
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
                      {chapter.chapterContent.map((lecture, i: number) => (
                        <li
                          key={lecture.lectureId}
                          className="flex items-start gap-2 py-1"
                        >
                          <img
                            src={
                              false ? assets.blue_tick_icon : assets.play_icon
                            }
                            alt="Play icon"
                            className="mt-1 h-4 w-4"
                          />
                          <div className="md:text-default flex w-full items-center justify-between text-xs text-gray-800">
                            <p>{lecture.lectureTitle}</p>
                            <div className="flex gap-2">
                              {lecture.lectureUrl && (
                                <p
                                  onClick={() =>
                                    setPlayerData({
                                      ...lecture,
                                      chapter: index + 1,
                                      lecture: i + 1,
                                    })
                                  }
                                  className="cursor-pointer text-blue-500"
                                >
                                  Watch
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
          {/* Ratings */}
          <div className="mt-10 flex items-center gap-2 py-3">
            <h1 className="text-xl font-bold">Rate this course</h1>
            <Rating initialRating={0} />
          </div>
        </div>
        {/* Right column */}
        <div className="md:mt-10">
          {playerData ? (
            <div>
              <YouTube
                videoId={playerData.lectureUrl.split("/").pop()}
                iframeClassName="w-full aspect-video"
              />
              <div className="mt-1 flex items-center justify-between">
                <p>
                  {playerData.chapter}.{playerData.lecture}{" "}
                  {playerData.lectureTitle}
                </p>
                <p>
                  <button className="text-blue-600">
                    {false ? "Completed" : "Mark Complete"}
                  </button>
                </p>
              </div>
            </div>
          ) : (
            <img
              src={courseData ? courseData.courseThumbnail : ""}
              alt="Course thumbnail"
            />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};
