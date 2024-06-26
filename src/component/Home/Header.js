import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import './Header.css';

export default function Header() {
  return (
    <div id='head-section'>
      <header>
        <Container fluid="md">
          <Row>
            <Col md={6} >
              <h2>Good food choices are good investments.</h2>
              <p>
                Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit, sed do <br/>eiusmod tempor incididunt ut labore.
              </p>
              <button>Order Now</button>
              <button>Learn More</button>
            </Col>
           
          </Row>
        </Container>
      </header>
    </div>
  );
}
