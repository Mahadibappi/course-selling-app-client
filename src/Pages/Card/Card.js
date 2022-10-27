import Card from "react-bootstrap/Card";
import { useLoaderData } from "react-router-dom";

function Details() {
  const course = useLoaderData();
  const { title, img, Price } = course;
  console.log(course);
  return (
    <Card className="mb-3 mt-5">
      <Card.Img style={{ height: "300px" }} variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title?.title}</Card.Title>
        <Card.Text>
          <h6 className="text-warning">Price : {Price}</h6>
          <h6>Enrollment start on 29/10/2022</h6>
          <p>Duration 3 months</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Details;
