import { assets } from "@/assets/assets";
import { AppContext } from "@/context/AppContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

export const CourseCard = ({ course }) => {
  const { currency } = useContext(AppContext);
  return (
    <Link to={"/course/" + course._id} onClick={() => scrollTo(0, 0)}>
      <img src={course.courseThumbnail} alt="Course thumbnail" />
      <div>
        <h3>{course.courseTitle}</h3>
        <p>{course.educator.name}</p>
        <div>
          <p>4.5</p>
          <div>
            {[...Array(5)].map((_, index: number) => (
              <img key={index} src={assets.star} alt="Rating star" />
            ))}
          </div>
          <p>22</p>
        </div>
        <p>
          {currency}
          {(
            course.coursePrice -
            (course.discount * course.coursePrice) / 100
          ).toFixed(2)}
        </p>
      </div>
    </Link>
  );
};
