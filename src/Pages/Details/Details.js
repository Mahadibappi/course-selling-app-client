import Card from "react-bootstrap/Card";
import { Link, useLoaderData } from "react-router-dom";

function Details() {
  const course = useLoaderData();
  const { _id, title, img, Price } = course;
  console.log(course);
  return (
    <Card className="mb-3 mt-5">
      <Card.Img style={{ height: "300px" }} variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          <h6 className="text-warning">Price : {Price}</h6>
          <h6>Enrollment start on 29/10/2022</h6>
          <p>Duration 3 months</p>
        </Card.Text>
        <button className="btn btn-dark rounded">
          <Link className="text-decoration-none" to={`/details/${_id}`}>
            check it out
          </Link>
        </button>
      </Card.Body>
    </Card>
  );
}

export default Details;
