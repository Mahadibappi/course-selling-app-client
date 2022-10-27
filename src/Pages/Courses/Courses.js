import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Courses({ course }) {
  const { _id, title, img, Price } = course;

  return (
    <Card className="mb-3">
      <Card.Img style={{ height: "300px" }} variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          <h6 className="text-warning">Price : {Price}</h6>
        </Card.Text>
        <button className="btn btn-dark rounded">
          <Link className="text-decoration-none" to={`/details/${_id}`}>
            Purchase Now
          </Link>
        </button>
      </Card.Body>
    </Card>
  );
}

export default Courses;
