import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import guerraSinoJaponesa1 from '../image/guerraSinoJaponesa1.png';
import guerraSinoJaponesa2 from '../image/guerraSinoJaponesa2.png';

function GridGuerraSinoJaponesa() {
  return (
    <Container>
      <Row>
        <Col sm={8}><img src={guerraSinoJaponesa1}></img></Col>
        <Col sm={4}><img src={guerraSinoJaponesa2}></img></Col>
      </Row>
      </Container>
  );
}

export default GridGuerraSinoJaponesa;