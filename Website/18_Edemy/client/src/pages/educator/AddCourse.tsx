import { assets } from "@/assets/assets";
import { useEffect, useRef, useState } from "react";
import uniqid from "uniqid";

export const AddCourse = () => {
  const quillRef = useRef(null);
  const editorRef = useRef(null);

  const [courseTitle, setCourseTitle] = useState("");
  const [coursePrice, setCoursePrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [image, setImage] = useState(null);
  const [chapters, setChapters] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [currentChapterId, setCurrentChapterId] = useState(null);
  const [lectureDetails, setLectureDetails] = useState({
    lectureTitle: "",
    lectureDuration: "",
    lectureUrl: "",
    isPreviewFree: false,
  });

  const handleChapter = (action, chapterId) => {
    if (action === "add") {
      const title = prompt("Enter Chapter Name:");
      if (title) {
        const newChapter = {
          chapterId: uniqid(),
          chapterTitle: title,
          chapterContent: [],
          collapsed: false,
          chapterOrder:
            chapters.length > 0 ? chapters.at(-1).chapterOrder + 1 : 1,
        };
        setChapters([...chapters, newChapter]);
      }
    } else if (action === "remove") {
      setChapters(
        chapters.filter((chapter) => chapter.chapterId !== chapterId)
      );
    } else if (action === "toggle") {
      setChapters(
        chapters.map((chapter) =>
          chapter.chapterId === chapterId
            ? { ...chapter, collapsed: !chapter.collapsed }
            : chapter
        )
      );
    }
  };

  const handleLecture = (action, chapterId, lectureIndex) => {
    if (action === "add") {
      setCurrentChapterId(chapterId);
      setShowPopup(true);
    } else if (action === "remove") {
      setChapters(
        chapters.map((chapter) => {
          if (chapter.chapterId === chapterId) {
            return {
              ...chapter,
              chapterContent: chapter.chapterContent.filter(
                (_, index) => index !== lectureIndex
              ),
            };
          }
          return chapter;
        })
      );
    }
  };

  const addLecture = () => {
    setChapters(
      chapters.map((chapter) => {
        if (chapter.chapterId === currentChapterId) {
          const newLecture = {
            ...lectureDetails,
            lectureOrder:
              chapter.chapterContent.length > 0
                ? chapter.chapterContent.at(-1).lectureOrder + 1
                : 1,
            lectureId: uniqid(),
          };
          chapter.chapterContent.push(newLecture);
        }
        return chapter;
      })
    );
    setShowPopup(false);
    setLectureDetails({
      lectureTitle: "",
      lectureDuration: "",
      lectureUrl: "",
      isPreviewFree: false,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: "snow",
      });
    }
  }, []);
  return (
    <div className="flex h-screen flex-col items-start justify-between overflow-scroll p-4 pt-8 pb-0 md:p-8 md:pb-0">
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-md flex-col gap-4 text-gray-500"
      >
        <div className="flex flex-col gap-1">
          <p>Course Title</p>
          <input
            onChange={(e) => setCourseTitle(e.target.value)}
            value={courseTitle}
            type="text"
            placeholder="Type here"
            required
            className="rounded border border-gray-500 px-3 py-2 outline-none md:py-2.5"
          />
        </div>
        <div className="flex flex-col gap-1">
          <p>Course Description</p>
          <div ref={editorRef}></div>
        </div>
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex flex-col gap-1">
            <p>Course Price</p>
            <input
              onChange={(e) => setCoursePrice(e.target.value)}
              type="number"
              value={coursePrice}
              placeholder="0"
              required
              className="w-28 rounded border border-gray-500 px-3 py-2 outline-none md:py-2.5"
            />
          </div>
          <div className="flex flex-col items-center gap-3 md:flex-row">
            <p>Course Thumbnail</p>
            <label htmlFor="thumbnailImage" className="flex items-center gap-3">
              <img
                src={assets.file_upload_icon}
                alt="File upload icon"
                className="rounded bg-blue-500 p-3"
              />
              <input
                onChange={(e) => setImage(e.target.files[0])}
                accept="image/*"
                type="file"
                id="thumbnailImage"
                hidden
              />
              <img
                src={image ? URL.createObjectURL(image) : ""}
                alt=""
                className="max-h-10"
              />
            </label>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <p>Discount %</p>
          <input
            onChange={(e) => setDiscount(e.target.value)}
            value={discount}
            type="number"
            placeholder="0"
            min={0}
            max={100}
            required
            className="w-28 rounded border border-gray-500 px-3 py-2 outline-none md:py-2.5"
          />
        </div>
        <div>
          {chapters.map((chapter, chapterIndex: number) => (
            <div key={chapterIndex} className="mb-4 rounded-lg border bg-white">
              <div className="flex items-center justify-between border-b p-4">
                <div className="flex items-center">
                  <img
                    onClick={() => handleChapter("toggle", chapter.chapterId)}
                    src={assets.dropdown_icon}
                    alt="Dropdown icon"
                    width={14}
                    className={`mr-2 cursor-pointer transition-all ${chapter.collapsed && "-rotate-90"}`}
                  />
                  <span className="font-semibold">
                    {chapterIndex + 1} {chapter.chapterTitle}
                  </span>
                </div>
                <span className="text-gray-500">
                  {chapter.chapterContent.length} Lectures
                </span>
                <img
                  onCLick={() => handleChapter("remove", chapter.chapterId)}
                  src={assets.cross_icon}
                  alt="Cross icon"
                  className="cursor-pointer"
                />
              </div>
              {!chapter.collapsed && (
                <div className="p-4">
                  {chapter.chapterContent.map(
                    (lecture, lectureIndex: number) => (
                      <div
                        key={lectureIndex}
                        className="mb-2 flex items-center justify-between"
                      >
                        <span>
                          {lectureIndex + 1} {lecture.lectureTitle} -{" "}
                          {lecture.lectureDuration} mins -{" "}
                          <a
                            href={lecture.lectureUrl}
                            target="_blank"
                            className="text-blue-500"
                          >
                            Link
                          </a>{" "}
                          - {lecture.isPreviewFree ? "Free Preview" : "Paid"}
                        </span>
                        <img
                          onClick={() =>
                            handleLecture(
                              "remove",
                              chapter.chapterId,
                              lectureIndex
                            )
                          }
                          src={assets.cross_icon}
                          alt="Cross icon"
                          className="cursor-pointer"
                        />
                      </div>
                    )
                  )}
                  <div
                    onClick={() => handleLecture("add", chapter.chapterId)}
                    className="mt-2 inline-flex cursor-pointer rounded bg-gray-100"
                  >
                    + Add Lecture
                  </div>
                </div>
              )}
            </div>
          ))}
          <div
            onClick={() => handleChapter("add")}
            className="flex cursor-pointer items-center justify-center rounded-lg bg-blue-100 p-2"
          >
            + Add Chapter
          </div>
          {showPopup && (
            <div className="bg-opacity-50 fixed inset-0 flex items-center justify-center bg-gray-800">
              <div className="relative w-full max-w-80 rounded bg-white p-4 text-gray-700">
                <h2 className="mb-4 text-lg font-semibold">Add Lecture</h2>
                <div className="mb-2">
                  <p>Lecture Title</p>
                  <input
                    onChange={(e) =>
                      setLectureDetails({
                        ...lectureDetails,
                        lectureTitle: e.target.value,
                      })
                    }
                    value={lectureDetails.lectureTitle}
                    type="text"
                    className="mt-1 block w-full rounded border px-2 py-1"
                  />
                </div>
                <div className="mb-2">
                  <p>Duration (minutes)</p>
                  <input
                    onChange={(e) =>
                      setLectureDetails({
                        ...lectureDetails,
                        lectureDuration: e.target.value,
                      })
                    }
                    value={lectureDetails.lectureDuration}
                    type="number"
                    className="mt-1 block w-full rounded border px-2 py-1"
                  />
                </div>
                <div className="mb-2">
                  <p>Lecture URL</p>
                  <input
                    onChange={(e) =>
                      setLectureDetails({
                        ...lectureDetails,
                        lectureUrl: e.target.value,
                      })
                    }
                    value={lectureDetails.lectureUrl}
                    type="text"
                    className="mt-1 block w-full rounded border px-2 py-1"
                  />
                </div>
                <div className="my-4 flex gap-2">
                  <p>Is Preview Free?</p>
                  <input
                    onChange={(e) =>
                      setLectureDetails({
                        ...lectureDetails,
                        isPreviewFree: e.target.checked,
                      })
                    }
                    checked={lectureDetails.isPreviewFree}
                    type="checkbox"
                    className="mt-1 scale-125"
                  />
                </div>
                <button
                  type="button"
                  className="w-full rounded bg-blue-400 px-4 py-2 text-white"
                >
                  Add
                </button>
                <img
                  onClick={() => setShowPopup(false)}
                  src={assets.cross_icon}
                  alt="Cross icon"
                  className="absolute top-4 right-4 w-4 cursor-pointer"
                />
              </div>
            </div>
          )}
        </div>
        <button
          onClick={addLecture}
          type="submit"
          className="my-4 w-max rounded bg-black px-8 py-2.5 text-white"
        >
          ADD
        </button>
      </form>
    </div>
  );
};
