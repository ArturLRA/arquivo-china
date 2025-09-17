import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Imagem1 from '../image/imagemContexto1.png';
import Imagem2 from '../image/imagemContexto2.png';
import '../style/gridImagemContexto.css';


function GridImagemContexto() {
  return (
    <div className='gridImagemContexto'>
    <Container>
      <Row>
        <Col><img src={Imagem1}></img></Col>
        <Col><img src={Imagem2}></img></Col>
      </Row>
      </Container>
      </div>
  );
}

export default GridImagemContexto;