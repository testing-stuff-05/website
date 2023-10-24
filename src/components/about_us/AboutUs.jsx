import { Container } from "react-bootstrap";
import "./about.css";

export default function AboutUs() {
  return (
    <div>
      <Container fluid className="about-us-container">
        <h1 className="about-title">ABOUT US</h1>
        <img
          className="about-img"
          src="https://image3.jdomni.in/banner/07092022/3A/93/18/5C3186B283649294DF754ABF3C_1662540590700.jpeg?output-format=webp"
          alt="About Us"
        ></img>
        <h5 className="about-text">
          <b>" WE PROVIDE END TO END SERVICES "</b></h5>
        <p>
          Our dedicated team weaves dreams, emotions, relations and
          responsibilities. Our presence has now become global as we have
          fulfilled the dreams of many individuals, corporate and families. The
          inspiration of our team is customer’s desires and their
          responsibilities. We, Vivaah Wedding Planner situated at Manikonda,
          Telangana, are specialized in offering complete service for weddings,
          seminars and events. We know and understand your responsibility and
          let you transfer it onto our shoulder, as we plan and arrange, venue
          booking, decide on the menu, conceives themes, consider the
          neighborliness and many more.
        </p>
      </Container>
    </div>
  );
}
