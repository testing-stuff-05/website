import MyCard from "./Card";
import { Container, Row } from "react-bootstrap";
import servicesInfo from "./servicesInfo";
import "./services.css";

function ServiceCard() {
  return (
    <div>
      <h1 className="services-title">SERVICES</h1>
      <Container fluid className="services-grid">
        <Row>
          {servicesInfo.map((service) => {
            return (
              <MyCard
                key={service.id}
                id={service.id}
                img={service.img}
                title={service.title}
                body={service.body}
              />
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default ServiceCard;
