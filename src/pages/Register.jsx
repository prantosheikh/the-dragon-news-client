import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [accepted, setAccepted] = useState(false);
  console.log(accepted);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);
    form.reset()

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleAccepted = event => {
      setAccepted(event.target.checked);
    }


  return (
    <div>
      <Container className="w-25 mt-5">
        <h3>Register your account</h3>
        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3 " controlId="formBasicEmail">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter Your Name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3 " controlId="formBasicEmail">
            <Form.Label> Photo URL</Form.Label>
            <Form.Control
              type="Link"
              name="photoUrl"
              placeholder="Photo URL"
              required
            />
          </Form.Group>
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
            <Form.Check
              onClick={handleAccepted}
              type="checkbox"
              name="accepted"
              label={
                <>
                  Accept Term and <Link to="/terms">Conditions</Link>
                </>
              }
            />
          </Form.Group>

          <Button className="w-100 mb-2" variant="primary" disabled={!accepted} type="submit">
            Submit
          </Button>
          <Form.Text>
            Already Have An Account <Link to="/login">Login</Link>
          </Form.Text>
          <Form.Text className="text-danger">
            <h6>Error</h6>
          </Form.Text>
          <Form.Text className="text-success">
            <h6>Success</h6>
          </Form.Text>
        </Form>
      </Container>
    </div>
  );
};

export default Register;
