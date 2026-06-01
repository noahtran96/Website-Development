import { Route, Routes } from "react-router-dom";
import {
  Home,
  CourseList,
  CourseDetails,
  MyEnrollments,
  Player,
} from "./pages/student";
import { Loading } from "./components/student/";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course-list" element={<CourseList />} />
        <Route path="/course-list/:input" element={<CourseList />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/my-enrollments" element={<MyEnrollments />} />
        <Route path="/player/:courseId" element={<Player />} />
        <Route path="/loading/:path" element={<Loading />} />
      </Routes>
    </div>
  );
};

export default App;
