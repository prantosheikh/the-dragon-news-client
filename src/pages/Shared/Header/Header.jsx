import moment from "moment";
import { Button, Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import logo from '../../../assets/logo.png';


const Header = () => {
  
    return (
      <Container>
        <div className="text-center mt-5">
          <img src={logo} alt="" />
          <p className="text-secondary">
            <small>Journalism Without Fear or Favour</small>
          </p>
          <p className="fw-bold">{moment().format("dddd, MMMM, D, YYYY")}</p>
        </div>
        <div className="d-flex mt-4 align-items-center">
          <Button variant="danger">Latest</Button>
          <Marquee className="text-dark mt-3" pauseOnClick speed={75}>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat,
              esse! Illum mollitia minima placeat dolore accusamus? Saepe,
              maiores! Eum fuga perferendis assumenda velit eius cumque vero
              similique quasi sint officia!
            </p>
          </Marquee>
        </div>
  
      </Container>
    );
};

export default Header;