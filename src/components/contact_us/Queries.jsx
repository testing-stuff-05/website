import { Container, Row, Col } from "react-bootstrap";

export default function Queries() {
  return (

    
    <div>
      <Container fluid className="queries-container">
        <h2 className="queries-title">For Queries </h2>
        <Row>
          <Col lg={4} mg={12}>
            <input
              className="query-input"
              type="text"
              placeholder="Full Name"
            />
          </Col>
          <Col lg={4} mg={12}>
            <input 
              className="query-input" 
              type="text" 
              placeholder="Email ID" />
          </Col>
          <Col lg={4} mg={12}>
            <input
              className="query-input"
              type="text"
              placeholder="Mobile Number"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <input className="query-input" type="text" placeholder="Message" />
          </Col>
        </Row>
        <button className="query-submit-btn">Submit Now</button>
      </Container>
    </div>
  );
}
