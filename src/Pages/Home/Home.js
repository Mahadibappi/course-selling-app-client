import { useLoaderData } from "react-router-dom";
import Courses from "../Courses/Courses";

function Home() {
  const courses = useLoaderData();

  return (
    <div className="mt-3">
      {courses.map((course) => (
        <Courses key={course.id} course={course}></Courses>
      ))}
    </div>
  );
}

export default Home;
