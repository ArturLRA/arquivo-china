import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MapaGuerraSinoJaponesa1 from './mapaGuerraSinoJaponesa1';
import '../style/textoGuerraSinoJaponesa1.css'

function TextoGuerraSinoJaponesa1() {
  return (
    <Container>
      <Row>
        <Col><MapaGuerraSinoJaponesa1/></Col>
        <Col>
        <div className='textoGuerraSinoJaponesa1'>
        A Primeira Guerra Sino-Japonesa, também conhecida como Guerra de Jiawu, 
        ocorreu entre 1894 e 1895 e começou quando houve uma grande revolta de camponeses na Coreia, 
        chamada de Revolta Donghak. Liderado por camponeses e seguidores da religião Donghak (hoje conhecida como Cheondoísmo), 
        o movimento visava a reformar a sociedade coreana, combatendo a corrupção, a injustiça social e a influência estrangeira.
        <p/>
        Com a revolta, a Coreia pediu ajuda à China. Tradicionalmente, a Coreia era um estado tributário da China, 
        ou seja, ela mantinha sua autonomia interna (tinha seu próprio rei, leis e governo), 
        porém pagava tributos como um sinal de lealdade e respeito. Em troca, a China oferecia proteção militar e política.
                
        </div>
        </Col>
      </Row>
      
    </Container>
  );
}

export default TextoGuerraSinoJaponesa1;