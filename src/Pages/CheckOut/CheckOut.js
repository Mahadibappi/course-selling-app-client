import Card from "react-bootstrap/Card";
import { useLoaderData } from "react-router-dom";

function CheckOut() {
  const checkout = useLoaderData();
  const { title, Price } = checkout;
  return (
    <Card className="mb-3 mt-5">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          <h6 className="text-warning">Price : {Price}</h6>
          <h6>Take the course for the best skill</h6>
          <p> Three month duration makes your great skill</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CheckOut;
