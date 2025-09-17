import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MapaGuerraSinoJaponesa2 from './mapaGuerraSinoJaponesa2';

function TextoGuerraSinoJapones2() {
  return (
    <Container>
      <Row>
        <Col>
        Após esse conflito, em 7 de julho de 1937, com o Incidente da Ponte Marco Polo, 
        inicia se a Segunda Guerra Sino-Japonesa devido a uma série de conflitos e tensões crescentes entre o Japão e a China, 
        disputas territoriais, visto que o Japão buscava expandir tanto seu território, 
        tanto sua influência no Leste Asiatico e disputas de longas datas como a Mongólia e Manchúria, 
        além dos interesses econômicos já que o Japão tinha uma limitação em relação aos recursos naturais, 
        o nacionalismo e o militarismo teve uma grande aumento no Japão 
        ( facções ultranacionalistas dentros das forças armadas e do governo ) e na China 
        ( o governo nacionalista de Chiang Kai-shek, resistindo à invasões estrangeiras ).
        </Col>
        <Col><MapaGuerraSinoJaponesa2/></Col>
      </Row>
      
    </Container>
  );
}

export default TextoGuerraSinoJapones2;