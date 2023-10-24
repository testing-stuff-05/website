import { Col } from "react-bootstrap";


export default function ContactItem(props) {
  return (
    <Col lg={3} md={12} className={`${ props.rightBorder } contact-box`}>
      <img className="img-icons" src={props.image} alt={props.alt}></img>
      <h3 className="contact-name">{props.heading}</h3>
      <p className="contact-desc">{props.desc}</p>
    </Col>
  );
}


