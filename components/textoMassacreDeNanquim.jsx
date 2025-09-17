import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MapaMassacreDeNanquim from './mapaMassacreDeNanquim';

function TextoMassacreDeNanquim() {
  return (
    <Container>
      <Row>
        <Col>
        Antes mesmo da chegada a Nanquim, as tropas japonesas já demonstravam grande brutalidade. Durante a marcha a partir de Xangai, 
        aldeias foram saqueadas, incendiadas e populações locais sofreram agressões e mortes. 
        Esse clima de violência preparou o cenário para os acontecimentos que marcariam a queda da capital.

        <p/>

        No dia 13 de dezembro de 1937, o Exército Imperial Japonês entrou em Nanquim. A partir desse momento, 
        iniciou-se um período de seis a sete semanas de extrema violência contra a população civil e prisioneiros de guerra. 
        Durante esse tempo, foram registrados assassinatos em massa, pilhagens, estupros coletivos e incêndios.
        </Col>
        <Col><MapaMassacreDeNanquim/></Col>
      </Row>
      
    </Container>
  );
}

export default TextoMassacreDeNanquim;