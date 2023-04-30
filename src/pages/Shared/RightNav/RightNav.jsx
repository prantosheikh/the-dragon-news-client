import React from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import { FaFacebook, FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import logo from "../../../assets/Instagram_logo_2022.svg.webp";
import bg from "../../../assets/bg.png";
import QZone from "../Q-Zone/QZone";
const RightNav = () => {
  return (
    <div>
      <div className="my-4">
        <h5 className="mb-4">Login With</h5>
        <Button className="mb-2" variant="outline-primary">
          <FaGoogle className="mx-2"></FaGoogle>
          Login with Google
        </Button>
        <Button variant="outline-secondary">
          <FaGithub className="mx-2" /> Login with Github
        </Button>
      </div>
      <div>
        <ListGroup>
          <h5 className="mb-3">Find Us On</h5>
          <ListGroup.Item>
            <FaFacebook className="mx-3 my-2 text-primary" /> Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter className="mx-3 my-2 text-info" /> Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <img className="mx-3 my-2 text-info" src={logo} alt="" width={16} />
            Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>
      <Card className="bg-dark text-white text-center">
        <Card.Img src={bg} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title className="mt-5 fs-2">Create an Amazing Newspaper</Card.Title>
          <Card.Text className="mt-3 fs-6">
            Discover thousands of options, easy to customize layouts, one-click
            to import demo and much more.
          </Card.Text>
          <button className="btn btn-danger">Learn More</button>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
};

export default RightNav;
