import React from 'react'
import { GrLinkedin } from "react-icons/gr";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { FaGithubSquare } from "react-icons/fa";
import Stack from 'react-bootstrap/esm/Stack';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Footer = () => {
  return (
    <div  style={{background: 'rgb(113, 3, 168)', color: 'white'}}>
      <Navbar collapseOnSelect expand="lg">
        <Container className=' justify-content-center'>
          <Nav>
            <Stack direction='horizontal' gap={3}>
              <Nav.Link  style={{color: 'white'}} href="https://www.linkedin.com/in/krveeramanikandan/" target='blank'><GrLinkedin size={20} /></Nav.Link>
              <Nav.Link style={{color: 'white'}} href="http://wa.me/8870942902" target='blank'><FaSquareWhatsapp size={20} /></Nav.Link>
              <Nav.Link style={{color: 'white'}} href="mailto:veeramanikandan.kravi@gmail.com" target='blank'><SiGmail size={20} /></Nav.Link>
              <Nav.Link style={{color: 'white'}} href="https://github.com/VMK-2002" target='blank'><FaGithubSquare size={20} /></Nav.Link>
            </Stack>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Footer

