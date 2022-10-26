import { useLoaderData } from "react-router-dom";
import Courses from "../Courses/Courses";

function Home() {
  const courses = useLoaderData();

  return (
    <div>
      {courses.map((course) => (
        <Courses key={course.id} course={course}></Courses>
      ))}
    </div>
  );
}

export default Home;
