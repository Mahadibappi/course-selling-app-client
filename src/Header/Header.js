import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Header.css";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { FaUser } from "react-icons/fa";

function Header() {
  const { user, logOut } = useContext(AuthContext);
  const [theme, setTheme] = useState(false);

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  // toggle theme
  const handleTheme = () => {
    setTheme(!theme);
  };
  useEffect(() => {
    if (theme === true) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  });

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/" className="text-decoration-none text-white">
            <Image
              className="me-2"
              style={{ width: "30px" }}
              rounded
              src={
                "https://www.pngitem.com/pimgs/m/292-2923379_undergraduate-education-logo-for-education-png-transparent-png.png"
              }
            ></Image>
            Academia-IT
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link
                className="text-decoration-none text-white"
                to="/categories"
              >
                All Courses
              </Link>
            </Nav.Link>

            <Nav.Link>
              <Link className="text-decoration-none text-white" to="/blog">
                Blog
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="text-decoration-none text-white" to="/blog">
                FAQ
              </Link>
            </Nav.Link>
            <Nav.Link>
              <button onClick={handleTheme}>{theme ? "Light" : "Dark"}</button>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              {user?.uid ? (
                <>
                  <span>{user?.displayName}</span>
                  <button
                    onClick={handleLogout}
                    className="ms-2 rounded text-primary"
                  >
                    Log Out
                  </button>
                </>
              ) : (
                <>
                  <Link className="ms-2 rounded text-primary" to="/login">
                    Login
                  </Link>
                  <Link className="ms-2 rounded text-primary" to="/signup">
                    SignUp
                  </Link>
                </>
              )}
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              {user?.photoURL ? (
                <Image
                  style={{ height: "30px" }}
                  roundedCircle
                  src={user?.photoURL}
                ></Image>
              ) : (
                <FaUser></FaUser>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
