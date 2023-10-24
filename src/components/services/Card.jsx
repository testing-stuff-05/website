import { Card, Button, Col } from "react-bootstrap";


function MyCard(props) {
  return (
    <Col lg={{span:3, offset:0}} md={6} sm={6} xs={{span:10, offset:1}} className="all-cards">
      <Card className="s-card">
        <Card.Img className="service-card-img" variant="top" src={props.img} />
        <Card.Body>
          <Card.Title className="font-weight-bold">{props.title}</Card.Title>
          <Card.Text className="service-card-text">{props.body}</Card.Text>
        </Card.Body>
        <Button className="service-btn" variant="dark">More Details</Button>
      </Card>
    </Col>
  );
}

export default MyCard;
