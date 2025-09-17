import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import massacreDeNanquim1 from '../image/massacreDeNanquim1.png';
import massacreDeNanquim2 from '../image/massacreDeNanquim2.png';
import massacreDeNanquim3 from '../image/massacreDeNanquim3.png';
import massacreDeNanquim4 from '../image/massacreDeNanquim4.png';
import massacreDeNanquim5 from '../image/massacreDeNanquim5.png';

function GridMassacreDeNanquim() {
  return (
    <Container>
      <Row>
        <Col><img src={massacreDeNanquim1}></img></Col>
        <Col><img src={massacreDeNanquim2}></img></Col>
      </Row>
      <Row>
        <Col><img src={massacreDeNanquim3}></img></Col>
        <Col><img src={massacreDeNanquim4}></img></Col>
        <Col><img src={massacreDeNanquim5}></img></Col>
      </Row>
    </Container>
  );
}

export default GridMassacreDeNanquim;