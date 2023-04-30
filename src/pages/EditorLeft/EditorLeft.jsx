import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import img1 from '../../assets/1.png';
import img2 from '../../assets/2.png';
import img3 from '../../assets/3.png';

const EditorLeft = () => {
    return (
      <Row xs={1} className="g-4">
        <Col>
          <Card>
            <Card.Img variant="top" src={img1} />
            <Card.Body>
              <Card.Title>Our First Home</Card.Title>
              <Card.Text>
                This custom watercolor house portrait will be created based on
                the photo you submit. A preview will be sent within 8 business
                days This is a longer card with supporting text below as a
                natural lead-in to additional content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={img3} />
            <Card.Body>
              <Card.Title>Football Stadiums By Capacity</Card.Title>
              <Card.Text>
                List of football stadiums redirects here. For American football
                stadiums see List of American football stadiums by capacity. For
                Canadian football stadiums see List of Canadian football
                stadiums by capacity.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={img2} />
            <Card.Body>
              <Card.Title>Selfie Time</Card.Title>
              <Card.Text>
                Selfie Time Photobooths provides premium photo booth rentals for
                weddings, corporate, birthdays and all types of events This is a
                longer card with supporting text below as a natural lead-in to
                additional content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    );
};

export default EditorLeft;