import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import img1 from '../../assets/editorsInsight1.png';
import img2 from '../../assets/editorsInsight2.png';
import img3 from '../../assets/editorsInsight3.png';
import Carou from './Carou/Carou';


const EditorInsider = () => {
    return (
      <div>
        <Row xs={1} md={2} lg={3} className="g-4 mt-4">
          <Col>
            <Card>
              <Card.Img variant="top" src={img1} />
              <Card.Body>
                <Card.Title>
                  Benjamin Netanyahu says he will meet with Florida Gov.
                </Card.Title>
                <Card.Text>
                  Israeli Prime Minister Benjamin Netanyahu said Sunday that
                  he’d “of course” meet with Ron DeSantis during a high-profile
                  trade mission as the Florida.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card>
              <Card.Img variant="top" src={img2} />
              <Card.Body>
                <Card.Title>
                  Bed Bath & Beyond files for bankruptcy protection
                </Card.Title>
                <Card.Text>
                  The company said in a statement that “it and certain of its
                  subsidiaries filed voluntary petitions for relief under
                  Chapter 11 of the U.S.
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
                  List of football stadiums redirects here. For American
                  football stadiums see List of American football stadiums by
                  capacity. For Canadian football stadiums.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
            </Row>
            <Carou></Carou>
      </div>
    );
};

export default EditorInsider;