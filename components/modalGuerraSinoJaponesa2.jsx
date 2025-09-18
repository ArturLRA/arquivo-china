import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../style/modalGuerraSinoJaponesa2.css'


function ModalGuerraSinoJaponesa2() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="link" onClick={handleShow} data-bs-theme="dark">
        Referências
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Referências</Modal.Title>
        </Modal.Header>
        <Modal.Body className='textoModal'>
          Second Sino-Japanese War Facts & Worksheets. KidsKonnect, [s.d.].
          Disponível em: <a href='https://kidskonnect.com/history/second-sino-japanese-war/'>https://kidskonnect.com/history/second-sino-japanese-war/</a>. Second Sino-Japanese War. 
          Britannica. 25 ago, 2025. Disponível em: <a href='https://www.britannica.com/event/Second-Sino-Japanese-War'>https://www.britannica.com/event/Second-Sino-Japanese-War</a>. 
          FOLHA DE S.PAULO. O drama chinês da guerra com o Japão. São Paulo, 11 jul. 2004. Mundo. 
          Disponível em: <a href='https://www1.folha.uol.com.br/fsp/mundo/ft1107200415.htm'>https://www1.folha.uol.com.br/fsp/mundo/ft1107200415.htm</a>. Acesso em: 26 ago. 2025. O GLOBO. 
          Dia em que o mundo mudou: 80 anos dos bombardeios atômicos que devastaram o Japão. Rio de Janeiro, 6 ago. 2025. Época. 
          Disponível em: <a href='https://oglobo.globo.com/mundo/epoca/noticia/2025/08/06/dia-em-que-o-mundo-mudou-80-anos-dos-bombardeios-atomicos-que-devastaram-o-japao.ghtml'>https://oglobo.globo.com/mundo/epoca/noticia/2025/08/06/dia-em-que-o-mundo-mudou-80-anos-dos-bombardeios-atomicos-que-devastaram-o-japao.ghtml</a>. 
          Acesso em: 27 ago. 2025.</Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalGuerraSinoJaponesa2;