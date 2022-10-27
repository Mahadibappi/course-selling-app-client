import Card from "react-bootstrap/Card";
import { Link, useLoaderData } from "react-router-dom";

function Categories() {
  const category = useLoaderData();
  const { _id, title, img, Price } = category;

  return (
    <div>
      {category.map((cate) => (
        <div>
          <Card className="mb-3">
            <Card.Img
              style={{ height: "300px" }}
              variant="top"
              src={cate?.img}
            />
            <Card.Body>
              <Card.Title>{cate.title}</Card.Title>
              <Card.Text>
                <h6 className="text-warning">Price : {cate.Price}</h6>
              </Card.Text>
              <button className="btn btn-dark rounded">
                <Link className="text-decoration-none" to={`/details/${_id}`}>
                  Purchase Now
                </Link>
              </button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default Categories;
