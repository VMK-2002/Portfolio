import React from 'react'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import { Networking, Programming, WebDevelopment } from '../Func';


const Skills = () => {

  const [web, setweb] = useState(true);
  const [program, setprogram] = useState(false);
  const [network, setnetwork] = useState(false);

  const handleweb = () => {
    setweb(true); 
    setprogram(false); 
    setnetwork(false); 
  };

  const handleprogram = () => {
    setweb(false); 
    setprogram(true); 
    setnetwork(false); 
  };

  const handlenetwork = () => {
    setweb(false); 
    setprogram(false); 
    setnetwork(true); 
  };

  const [hoveredButton, setHoveredButton] = useState(null);
  
     const handleMouseEnter = (index) => setHoveredButton(index);
     const handleMouseLeave = () => setHoveredButton(null);
  
     const buttonStyle = (index) => ({
        cursor: 'pointer',
        marginLeft: hoveredButton === index ? '0' : '2vw',
        marginRight: hoveredButton === index ? '0' : '2vw',
        paddingLeft: hoveredButton === index ? '4vw' : '2vw',
        paddingRight: hoveredButton === index ? '4vw' : '2vw',
        transition: 'all 0.3s ease',
     });

     const clickWeb = () => ({
      border: web ? '3px solid rgb(94, 32, 133)' : '3px solid white',
     });

     const clickProgram = () => ({
      border: program ? '3px solid rgb(94, 32, 133)' : '3px solid white',
     
     });

     const clickNetwork = () => ({
      border: network ? '3px solid rgb(94, 32, 133)' : '3px solid white',
     });

  return (
    <div className='w-100 fluid d-flex flex-column align-items-center  pb-5 pt-3' style={{height: '85vh', fontFamily: "Libre Baskerville", fontWeight: '700', fontStyle: 'normal'}} id='skill'>
      <h1  >Skills</h1>
      <Row className='mt-3'>
        <ButtonGroup aria-label="Basic example" style={{width: '15vw'}} className='d-flex justify-content-center'>
          <Button style={{...buttonStyle(1), ...clickWeb(), backgroundColor: 'rgb(151, 68, 202)'}} onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={handleMouseLeave}  onClick={handleweb} rounded>Web Development</Button>
          <Button style={{...buttonStyle(2), ...clickProgram(), backgroundColor: 'rgb(151, 68, 202)'}} onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={handleMouseLeave} onClick={handleprogram} rounded>Programming</Button>
          <Button style={{...buttonStyle(3), ...clickNetwork(), backgroundColor: 'rgb(151, 68, 202)'}} onMouseEnter={() => handleMouseEnter(3)} onMouseLeave={handleMouseLeave}  onClick={handlenetwork} rounded>Networking</Button>
        </ButtonGroup>
      </Row>

      {web && <WebDevelopment />}
      {program && <Programming />}
      {network && <Networking />}
      
    </div>
  )
}

export default Skills;
