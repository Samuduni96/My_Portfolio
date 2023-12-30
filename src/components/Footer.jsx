import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <br></br>
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/samuduni-wijerathna-552103189/" target="_blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://github.com/Samuduni96" target="_blank"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright @ Samuduni Wijerathna</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}