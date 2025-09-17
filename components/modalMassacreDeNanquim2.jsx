import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function modalMassacreDeNanquim2() {
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
            BBC NEWS. BBC Brasil acompanha ato de protesto em Seul para marcar 1.211ª marcha semanal por reparação das escravas sexuais. 
            Disponível em: <a>https://www.bbc.com/portuguese/noticias/2015/12/151228_escravas_sexuais_japao_rs</a>. 
            Acesso em: 17 set. 2025.G1 GLOBO. Imagens raras mostram 'mulheres de conforto' coreanas da 2ª Guerra Mundial. 
            Disponível em: <a>https://g1.globo.com/mundo/noticia/imagens-raras-mostram-mulheres-de-conforto-coreanas-da-2-guerra-mundial.ghtml</a>. 
            Acesso em: 17 set. 2025.LABCOM. Uma história de dor: a triste realidade das mulheres de conforto do Exército japonês na obra Grama. 
            Eikon, n. 14, 2022. Disponível em: <a>https://ojs.labcom-ifp.ubi.pt/eikon/article/view/1210</a>. 
            Acesso em: 17 set. 2025.BRITANNICA. Comfort women. Disponível em: <a>https://www.britannica.com/topic/comfort-women</a>. 
            Acesso em: 17 set. 2025.KIM, J.; BISLAND, B. M.; SHIN, S. 
            Teaching about the Comfort Women during World War II and the Use of Personal Stories of the Victims. 
            Education About Asia, v. 24, n. 3, p. 58–63, 2019. 
            Disponível em: <a>https://www.asianstudies.org/publications/eaa/archives/teaching-about-the-comfort-women-during-world-war-ii-and-the-use-of-personal-stories-of-the-victims/</a>. 
            Acesso em: 17 set. 2025.PAIVA, C. M. M. Mulheres, feminismo e relações internacionais: o caso do movimento de reparação das “mulheres de conforto” sul coreanas. 2021. 
            Dissertação (Mestrado em Ciência Política e Relações Internacionais) - Centro de Ciências Humanas, Letras e Artes, 
            Universidade Federal da Paraíba, João Pessoa, 2021. Disponível em: <a>https://repositorio.ufpb.br/jspui/handle/123456789/24516</a>. 
            Acesso em: 17 set. 2025.ROLIM, M. E. de Q. As “Mulheres de Conforto”: o corpo como território. 2018. 
            Trabalho de Conclusão de Curso (Graduação em Relações Internacionais) - 
            Instituto de Relações Internacionais e Defesa, Universidade Federal do Rio de Janeiro, Rio de Janeiro, 2018. 
            Disponível em: <a>https://d1wqtxts1xzle7.cloudfront.net/57994006/Mulheres_de_Conforto_-_o_corpo_como_territorio-libre.pdf</a>. 
            Acesso em: 17 set. 2025.UNIFESP. Repositório Institucional da Unifesp. 
            Disponível em: <a>https://repositorio.unifesp.br/items/fa42d35e-791e-4c89-8fb7-6daba44259c0</a>. Acesso em: 17 set. 2025.
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default modalMassacreDeNanquim2;