import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { FaGoogle, FaGithub } from "react-icons/fa";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const CourseList = () => {
  const [course, setCourse] = useState([]);
  const { loginProvider } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleSignin = () => {
    loginProvider(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    fetch("https://edu-server-phi.vercel.app/single-category")
      .then((res) => res.json())
      .then((data) => setCourse(data));
  }, []);

  return (
    <div>
      <div>
        <ButtonGroup vertical className="mt-3">
          <Button
            onClick={handleGoogleSignin}
            className="btn-success btn-outline mb-2 rounded "
          >
            <FaGoogle /> SignIn With Google
          </Button>
          <Button className="btn-info btn-outline mb-2 rounded ">
            <FaGithub /> SignIn With Github
          </Button>
        </ButtonGroup>
      </div>
      <div className="mt-5">
        <h3 className="text-info">
          All Courses <span className="text-info">{course.length}</span>{" "}
        </h3>
        {course.map((course) => (
          <Link
            key={course.id}
            to={`/details/${course.id}`}
            className="text-decoration-none"
          >
            <h5 className=" border rounded p-2">{course.name}</h5>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
