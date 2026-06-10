import { Link } from "react-router-dom";

export const CourseSection = () => {
  return (
    <div className="px-8 py-16 md:px-40">
      <h2 className="text-3xl font-medium text-gray-800">
        Learn from the best
      </h2>
      <p className="mt-3 text-sm text-gray-500 md:text-base">
        Discover our top-rated courses across various categories. From coding
        and design to business and wellness, our courses are crafted to deliver
        results.
      </p>
      <Link
        to={"/course-list"}
        onClick={() => scrollTo(0, 0)}
        className="rounded border border-gray-500/30 px-10 py-3 text-gray-500"
      >
        Show all courses
      </Link>
    </div>
  );
};
