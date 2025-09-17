import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../style/NavBarHome.css'


function NavBarHome() {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 
  
  return (
    <Navbar expand="lg" fixed="top" className={isScrolled ? 'navbar-scrolled' : 'navbar-transparent'}>
      <Container>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#projeto">Projeto</Nav.Link>
            <span className='nav-divisor'>|</span>
            <Nav.Link href='#assunto'>Assunto</Nav.Link>
            <span className='nav-divisor'>|</span>
            <NavDropdown title="Mapa" id="basic-nav-dropdown">
              <NavDropdown.Item href='#guerraSinoJaponesa'>Guerra Sino-Japonesa</NavDropdown.Item>
              <NavDropdown.Item href='#massacreDeNanquim'>Massacre de Nanquim</NavDropdown.Item>
              <NavDropdown.Item href='#mulheresDeConforto'>Mulheres de Conforto</NavDropdown.Item>
              <NavDropdown.Divider/>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarHome;