import { Container, Row, Col, Button } from 'react-bootstrap';
import element2 from './Images/element2-min.png'


function Home() {
    return (
      <Container>
        <Row>
          <Col lg={6} className="title-text"><h1>MARRIAGES ARE MADE IN HEAVEN</h1>
          
          <Button size="md" variant="light" className='download-btn'>Login</Button>
          <Button size="md" variant="outline-light" className='download-btn'>Sign Up</Button>
          <h3 style={{color:"#fff"}}><i>" We Provide End to End Services "</i></h3>
          </Col>
          <Col lg={6}><img className='title-img' src={element2} alt="WELCOME"></img></Col>
        </Row>
      </Container>
    );
  }
  
  export default Home;