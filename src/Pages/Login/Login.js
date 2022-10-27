import { useState } from "react";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

function Login() {
  const { logIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const Navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleSigIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    logIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError(" ");
        Navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <Form onSubmit={handleSigIn}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          className="w-50"
          name="email"
          type="email"
          placeholder="Enter email"
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
        <Form.Text className="text-danger">{error}</Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
}

export default Login;
