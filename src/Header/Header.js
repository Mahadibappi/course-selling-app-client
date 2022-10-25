import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand to="/">
          <Image
            className="me-2"
            style={{ width: "30px" }}
            rounded
            src={
              "https://www.pngitem.com/pimgs/m/292-2923379_undergraduate-education-logo-for-education-png-transparent-png.png"
            }
          ></Image>
          Academia-IT
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
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
