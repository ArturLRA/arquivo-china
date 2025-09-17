import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../style/textoGuerraSinoJaponesa1.css'

function ModalGuerraSinoJaponesa1() {
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
            FALA UNIVERSIDADES. Saiba tudo sobre a Primeira Guerra Sino-Japonesa? [2022?]. 
            Disponível em: <a>https://falauniversidades.com.br/saiba-tudo-sobre-a-primeira-guerra-sino-japonesa/</a>. 
            Acesso em: 26 ago. 2025. BRASIL ESCOLA. Primeira Guerra Sino-Japonesa: motivos, resumo. [2023?]. 
            Disponível em: <a>https://brasilescola.uol.com.br/historiag/primeira-guerra-sino-japonesa.htm</a>. 
            Acesso em: 26 ago. 2025. CNN. Forgotten ally? China's unsung role in World War II. [2021?]. 
            Disponível em: <a>https://edition.cnn.com/2015/09/02/asia/china-world-war-ii-forgotten-ally/index.html</a>. 
            Acesso em: 26 ago. 2025. DOSES DA HISTÓRIA: DOSES DA HISTÓRIA. Como aconteceu a Primeira Guerra sino japonesa? [2023?]. 
            Disponível em: <a>https://youtu.be/CPZhNtypoO</a>. Acesso em: 26 ago. 2025. EBSCO RESEARCH STARTERS: EBSCO RESEARCH STARTERS. 
            Sino-Japanese War. [2024?]. Disponível em: <a>https://www.ebsco.com/research-starters/history/sino-japanese-war</a> 
            Acesso em: 26 ago. 2025. THE NATIONAL WWII MUSEUM: THE NATIONAL WWII MUSEUM. Liberation in China and the Pacific. [2024?]. 
            Disponível em: <a>https://www.nationalww2museum.org/war/articles/liberation-china-and-pacific</a>. Acesso em: 26 ago. 2025. 
            WIKIVOYAGE. World War II in China. [2024?]. Disponível em: <a>https://en.wikivoyage.org/wiki/World_War_II_in_China</a>. 
            Acesso em: 26 ago. 2025. MAGNO, Bruno. Revolução nacional e guerra prolongada na China: 
            análise estratégica e operacional da Segunda Guerra Sino-Japonesa (1937-1945). 
            Dissertação (Mestrado) - Faculdade de Ciências Econômicas da UFGRS. Porto Alegre, 2018. 
            Disponível em: <a>https://lume.ufrgs.br/handle/10183/193522</a>.  Acesso em: 26 ago. 2025.
        </Modal.Body>
        <Modal.Footer>

        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalGuerraSinoJaponesa1;