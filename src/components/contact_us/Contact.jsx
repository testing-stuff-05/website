import { Container, Row } from "react-bootstrap";
import items from "./contact_us_info.js";
import "./styles.css";
import ContactItem from "./ContactItem";
import Queries from "./Queries.jsx";

function Contact() {
  return (
    <div>
      <Container fluid className="contact-container">
        <h1 className="contact-title">Contact Us</h1>
        <Row className="contact-items">
          {items.map((item) => {
            return (
              <ContactItem
                key={item.id}
                id={item.id}
                image={item.image}
                alt={item.alt}
                heading={item.heading}
                desc={item.description}
                rightBorder={item.borderStyle}
              />
            );
          })}
        </Row>
      </Container>
      <Queries />
    </div>
  );
}

export default Contact;
