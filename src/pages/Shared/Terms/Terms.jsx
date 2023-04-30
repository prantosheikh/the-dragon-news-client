import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
      <Container>
        <h3>Term And Conditions</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          laudantium nesciunt deserunt et ipsum corrupti commodi neque. Corporis
          ut alias quod illo veritatis laborum, deleniti at doloribus nemo eum
          iste!
        </p>
        <span>
          Go Back <Link to="/register">Register</Link>
        </span>
      </Container>
    );
};

export default Terms;