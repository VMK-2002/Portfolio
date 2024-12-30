
import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-scroll';

const Navigation = () => {
  return (
    <Navbar expand="lg" className="px-5" style={{background: 'rgb(113, 3, 168)', position: 'relative', zIndex: '2000', fontFamily: "Libre Baskerville", fontWeight: '700', fontStyle: 'normal'}}>
      <div className="d-flex align-items-center w-100 justify-content-between">
        <Navbar.Brand style={{color: 'white', fontFamily: "Rubik Vinyl", fontWeight: '700', fontStyle: 'normal'}}  ><h2>My_Portfolio</h2></Navbar.Brand>   
        <Navbar.Toggle style={{color: 'white'}} aria-controls="basic-navbar-nav" className="ms-2" />
      </div>
      
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link style={{color: 'white', paddingRight: '20px '}} href="https://drive.google.com/file/d/1zhSwew23G7zUwi51Pl-eR83nVlq2hCWn/view?usp=drive_link" target='blank' >Resume</Nav.Link>
          <Link style={{color: 'white', textDecoration: 'none', cursor: 'pointer', paddingRight: '20px'}} to="project" spy={true} smooth={true} offset={0} duration={500} className='d-flex align-items-center'>Projects</Link>

          <NavDropdown   title={<span style={{ color: 'white' }}>Contact</span>}  className="custom-dropdown"  id="basic-nav-dropdown">
            <NavDropdown.Item href="https://www.linkedin.com/in/krveeramanikandan/" target='blank'>LinkedIn</NavDropdown.Item>
            <NavDropdown.Item href="http://wa.me/8870942902" target='blank'>Whatsapp</NavDropdown.Item>
            <NavDropdown.Item href="mailto:veeramanikandan.kravi@gmail.com" target='blank'>E-mail</NavDropdown.Item>
            <NavDropdown.Item href="https://github.com/VMK-2002" target='blank'>Github</NavDropdown.Item>
          </NavDropdown>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation;