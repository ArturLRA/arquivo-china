import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function modalMassacreDeNanquim() {
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
        <Modal.Body>
            AVENTURAS NA HISTÓRIA. História: o massacre de Nanquim do Japão Imperial. [2022?]. 
            Disponível em: <a>https://aventurasnahistoria.com.br/noticias/reportagem/historia-massacre-de-nanquim-japao-imperial.phtml</a>. 
            Acesso em: 02 set. 2025. BRASIL ESCOLA. Massacre de Nanquim. [2023?]. 
            Disponível em: <a>https://brasilescola.uol.com.br/historiag/massacre-nanquim.htm</a>. 
            Acesso em: 02 set. 2025.BBC. O que foi o Massacre de Nanquim, episódio histórico que a China não esquece. [2023?]. 
            Disponível em: <a>https://www.bbc.com/portuguese/articles/c39d9ldxvkzo</a>. Acesso em: 04 set. 2025.WARFARE HISTORY NETWORK. 
            The Fall of Shanghai: Prelude to the Rape of Nanking, WWII. [2024?]. 
            Disponível em: <a>https://warfarehistorynetwork.com/article/the-fall-of-shanghai-prelude-to-the-rape-of-nanking-wwii/</a>. 
            Acesso em: 08 set. 2025.YONGXING, X. China in World War II, 1937-1945: experience, memory, and legacy. 
            Modern Asian Studies, Cambridge, v. 50, n. 4, p. 977-1002, jul. 2016. 
            Disponível em: <a>https://www.cambridge.org/core/journals/modern-asian-studies/article/abs/china-in-world-war-ii-19371945-experience-memory-and-legacy/FE41E41B7F9DB7C5E75CE44AFD2EDF7D.</a>
            Acesso em: 08 set. 2025.BOOKS OPENEDITION. Chine: un nouvel âge des relations entre l'Armée de libération populaire et la nation?. 
            [2012?]. Disponível em: <a>https://books.openedition.org/cdf/11197</a>. Acesso em: 08 set. 2025.BRITANNICA. Nanjing Massacre. [2024?]. 
            Disponível em: <a>https://www.britannica.com/event/Nanjing-Massacre</a>. Acesso em: 08 set. 2025.BRITANNICA. Second Sino-Japanese War. 
            [2024?]. Disponível em: <a>https://www.britannica.com/event/Second-Sino-Japanese-War</a>. 
            Acesso em: 08 set. 2025.WIKIPEDIA. Nanjing Massacre. [2024?]. Disponível em: <a>https://en.wikipedia.org/wiki/Nanjing_Massacre</a>. 
            Acesso em: 08 set. 2025.OXFORD REFERENCE. Nanjing Massacre. [2024?]. 
            Disponível em: <a>https://oxfordre.com/asianhistory/display/10.1093/acrefore/9780190277727.001.0001/acrefore-9780190277727-e-147?p=emailAuTZFucL8xV0Y&d=/10.1093/acrefore/9780190277727.001.0001/acrefore-9780190277727-e-147</a>. 
            Acesso em: 26 ago. 2025.NUNES, S. H. A construção do herói e o imaginário nacional-popular na China do século XX: o caso de Mao Zedong. 
            2017. 136 f. Tese (Doutorado em Ciências Sociais) - Programa de Pós-Graduação em Ciências Sociais, Universidade do Vale do Rio dos Sinos, São Leopoldo, 2017. 
            Disponível em: <a>https://repositorio.jesuita.org.br/bitstream/handle/UNISINOS/13660/Simone%20Henz%20Nunes.pdf?sequence=1</a>. 
            Acesso em: 26 ago. 2025.</Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default modalMassacreDeNanquim;