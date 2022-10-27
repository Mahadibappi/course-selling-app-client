import { useState } from "react";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../Context/AuthProvider";

function SignUp() {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photoUrl.value;
    const password = form.password.value;
    console.log(name, email, photo, password);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        form.reset();
        setError(" ");
        console.log(user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <Form onSubmit={handleSignUp}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your Name</Form.Label>
        <Form.Control
          className="w-50"
          name="name"
          type="text"
          placeholder="Enter Name"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          className="w-50"
          name="email"
          type="email"
          placeholder="Enter email"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control
          className="w-50"
          name="photoUrl"
          type="text"
          placeholder="Photo URL"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          className="w-50"
          name="password"
          type="password"
          placeholder="Password"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Text className="text-warning">{error}</Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit">
        SignUP
      </Button>
    </Form>
  );
}

export default SignUp;
