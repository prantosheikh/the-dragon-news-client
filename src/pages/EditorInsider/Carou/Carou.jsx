import React from 'react';
import { Carousel } from 'react-bootstrap';
import img3 from '../../../assets/brandon-romanchuk-NOFyRmSQfUQ-unsplash.jpg';
import img2 from '../../../assets/v-a-tao-SBkSfFwZbew-unsplash.jpg';
import img1 from '../../../assets/v-a-tao-qCpz5D9ceyI-unsplash.jpg';

const Carou = () => {
    return (
      <div className="w-75 mx-auto">
        <Carousel className="mt-5" variant="dark">
          <Carousel.Item>
            <img
              className="d-block img-fluid w-90"
              src={img2}
              alt="First slide"
            />
            <Carousel.Caption>
              <button className="btn btn-primary mb-3">Visit Now</button>
              <p className="text-white">
                Nulla vitae elit libero, a pharetra augue mollis interdum.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block img-fluid" src={img1} alt="Second slide" />
            <Carousel.Caption>
              <button className="btn btn-primary mb-3">Visit Now</button>
              <p className="text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block img-fluid" src={img3} alt="Third slide" />
            <Carousel.Caption>
              <button className="btn btn-primary mb-3">Visit Now</button>
              <p className="text-white">
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
};

export default Carou;