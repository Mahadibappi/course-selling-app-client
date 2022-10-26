import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { useLoaderData } from "react-router-dom";

function Home() {
  const courses = useLoaderData();
  console.log(courses);
  return (
    <CardGroup className="mt-3">
      <Card>
        <Card.Img variant="top" src="image" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default Home;
