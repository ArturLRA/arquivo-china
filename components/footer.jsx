import React from 'react';
import '../style/Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <p>&copy; Direitos autorais {currentYear}  Participação da China na Segunda Guerra Mundial e o Massacre de Nanquim. Todos os direitos reservados.</p>
      <p>Criado por Artur Luiz Rodrigues Alves e Natália Zaguini de Andrade.</p>
    </footer>
  );
}

export default Footer;