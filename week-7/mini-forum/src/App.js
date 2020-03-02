import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Row className="justify-content-md-center">
          <Col>
            <h3>Fórum</h3>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col>
            <Routes />
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
