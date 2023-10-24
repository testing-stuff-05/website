import { Col, Container, Row } from "react-bootstrap";
import "./styles.css";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faSquareInstagram, faLinkedin  } from '@fortawesome/free-brands-svg-icons'


const year = new Date().getFullYear();

function Footer() {
  return (
    <div>
    <div className="map">
      {/* <iframe title="mapFrame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.0821567336575!2d78.37904257437313!3d17.407844483482826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb959eab752a91%3A0x6f862b6cfab4a16f!2sUdipi&#39;s%20Upahar%20Manikonda!5e0!3m2!1sen!2sin!4v1697218581945!5m2!1sen!2sin" width="100%" height="350" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
      </div>
      <Container fluid className="footer-container">
        <Row>
          <Col md={6} sm={12}>
            <h6 className="heading">USEFUL LINKS</h6>
            <ul className="list-unstyled useful-links">
              <Row>
                <Col sm={6}>
                  <li>
                    <Link to="" spy={true} smooth={true} offset={0} duration={0} className="useful-link-text" >
                      PRIVACY POLICY </Link>
                  </li>
                  <li>
                    <Link to="about" spy={true} smooth={true} offset={-100} duration={0} className="useful-link-text" >
                      ABOUT US </Link>
                  </li>
                  <li>
                    <Link to="gallery" spy={true} smooth={true} offset={-110} duration={0} className="useful-link-text" >
                      GALLERY </Link>
                  </li>
                  <li>
                    <Link to="testimonials" spy={true} smooth={true} offset={-50} duration={0} className="useful-link-text" >
                      TESTIMONIALS </Link>
                  </li>
                </Col>
                <Col>
                  <li>
                    <Link to="home" spy={true} smooth={true} offset={0} duration={0} className="useful-link-text" >
                      HOME </Link>
                  </li>
                  <li>
                    <Link to="services" spy={true} smooth={true} offset={-50} duration={0} className="useful-link-text" >
                      SERVICES </Link>
                  </li>
                  <li>
                    <Link to="contact" spy={true} smooth={true} offset={0} duration={0} className="useful-link-text" >
                      CONTACT US </Link>
                  </li>
                </Col>
              </Row>
            </ul>
          </Col>
          <Col md={3} sm={12}>
            <h6 className="heading">CONTACT</h6>
            <ul className="list-unstyled">
              <li className="contact-address">
                Vivaah Event Planner, Sree Heights, opposite to Sampoorna Supermarket, Manikonda, 500089, Hyderabad
              </li>
              <li className="select-text">+91-7981579065</li>
              <li className="select-text">vivaahplannerpanindia@gmail.com</li>
            </ul>
          </Col>
          <Col md={3} sm={12}>
            <h6 className="heading">CONNECT</h6>
            <ul className="list-unstyled tileMe">
              <li>
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/vivaah_eventplanner/" >
                  <FontAwesomeIcon icon={faSquareInstagram} size="xl" style={{color: "#4b1827",}} />
                </a>
              </li>
              <li>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/vivaah-wedding-planner-by-sindhu-reddy/about/" >
                <FontAwesomeIcon icon={faLinkedin} size="xl" style={{color: "#4b1827",}} />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="lower-footer">
        <p className="copyright"> © Copyrights {year} - {year + 1}. Vivaah Event Planner. All Rights Reserved. </p>
      </div>
    </div>
  );
}

export default Footer;
