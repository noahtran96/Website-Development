export const Player = () => {
  return (
    <>
      <div className="flex flex-col-reverse gap-10 p-4 sm:p-10 md:grid md:grid-cols-2 md:px-36">
        {/* Left column */}
        <div className="text-gray-800">
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
                              <p
                                onClick={() =>
                                  setPlayerData({
                                    videoId: lecture.lectureUrl
                                      .split("/")
                                      .pop(),
                                  })
                                }
                                className="cursor-pointer text-blue-500"
                              >
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
        {/* Right column */}
        <div></div>
      </div>
    </>
  );
};
