import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Courses({ course }) {
  const { title, img, price } = course;
  return (
    <Card className="mb-3">
      <Card.Img style={{ height: "300px" }} variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Courses;
