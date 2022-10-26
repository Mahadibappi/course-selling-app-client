import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Courses({ course }) {
  const { title, img, Price } = course;
  return (
    <Card className="mb-3">
      <Card.Img style={{ height: "300px" }} variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          <h6 className="text-warning">Price : {Price}</h6>
        </Card.Text>
        <Button variant="primary">See Details</Button>
      </Card.Body>
    </Card>
  );
}

export default Courses;
