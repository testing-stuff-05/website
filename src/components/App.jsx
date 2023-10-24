import {NavigationBar, Home, Services, AboutUs, Gallery, Testimonials, Contact, Footer} from "./index.js"
import Container from "react-bootstrap/Container";
import "./app.css";

function App() {
  return (
    <div>
      <section id="home">
        <Container fluid className="title-container">
          <NavigationBar />
          <Home />
        </Container>
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="about">
        <AboutUs />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
      <section id="testimonials">
        <Container fluid>
          <Testimonials />
        </Container>
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
}

export default App;
