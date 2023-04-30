import React, { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const location = useLocation();
  console.log(location);
  const from = location.state?.from?.pathname || "/category/0";
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from,{ replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <Container className="w-25 mt-5">
      <h3>Login your account</h3>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3 " controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button className="w-100 mb-2" variant="primary" type="submit">
          Submit
        </Button>
        <Form.Text>
          Don't Have An Account <Link to="/register">Register</Link>
        </Form.Text>
        <Form.Text className="text-danger">
          <h6>Error</h6>
        </Form.Text>
        <Form.Text className="text-success">
          <h6>Success</h6>
        </Form.Text>
      </Form>
    </Container>
  );
};

export default Login;
