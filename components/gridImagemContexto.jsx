import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Imagem1 from '../image/imagemContexto1.png';
import Imagem2 from '../image/imagemContexto2.png';

function GridImagemContexto() {
  return (
    <Container>
      <Row>
        <Col sm={8}><img src={Imagem1}></img></Col>
        <Col sm={4}><img src={Imagem2}></img></Col>
      </Row>
      </Container>
  );
}

export default GridImagemContexto;