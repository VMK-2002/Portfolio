import React from 'react'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link } from 'react-scroll';
import { useState } from 'react';
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { useResponsiveWidth } from '../Func';

const ScrollThrough = () => {
  const [hoveredButton, setHoveredButton] = useState(null);
  const handleMouseEnter = (index) => setHoveredButton(index);
  const handleMouseLeave = () => setHoveredButton(null);

  const handleTouchStart = () => {
    
    setHoveredButton(true);
    setTimeout(() => setHoveredButton(false), 500);
  };

  const width = useResponsiveWidth();
  const size = width === '70vw' ? '14px' : '10px'

  const buttonStyle = (index) => ({
    cursor: 'pointer',
    color: 'white',
    opacity: hoveredButton === index ? '1' : '0.6',
    transition: 'all 0.3s ease',
  });

  return (
    <div style={{fontFamily: "Libre Baskerville", fontWeight: '700', fontStyle: 'normal', fontSize: size}}>
      <ButtonGroup aria-label="Basic example" className='d-flex justify-content-center' style={{bottom: '8vh',right: '20%', left: '20%', position: 'fixed', zIndex: '100'}}>
        <Link style={{...buttonStyle(1), backgroundColor: 'rgba(74, 10, 93, 0.8)',textDecoration: 'none', width: '12vw', justifyContent: 'center', borderTopLeftRadius: '20px', borderBottomLeftRadius: '20px'}} onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={handleMouseLeave} onTouchStart={handleTouchStart} to="home" spy={true} smooth={true} offset={-50} duration={500} className='d-flex align-items-center p-2'><FaChevronUp /></Link>
        <Link style={{...buttonStyle(2), backgroundColor: 'rgba(74, 10, 93, 0.8)',textDecoration: 'none', width: '12vw', justifyContent: 'center'}} onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={handleMouseLeave} onTouchStart={handleTouchStart} to="about" spy={true} smooth={true} offset={-50} duration={500} className='d-flex align-items-center p-2'>About</Link>
        <Link style={{...buttonStyle(3), backgroundColor: 'rgba(74, 10, 93, 0.8)',textDecoration: 'none', width: '12vw', justifyContent: 'center'}} onMouseEnter={() => handleMouseEnter(3)} onMouseLeave={handleMouseLeave} onTouchStart={handleTouchStart} to="project" spy={true} smooth={true} offset={0} duration={500} className='d-flex align-items-center p-2'>Projects</Link>
        <Link style={{...buttonStyle(4), backgroundColor: 'rgba(74, 10, 93, 0.8)',textDecoration: 'none', width: '12vw', justifyContent: 'center'}} onMouseEnter={() => handleMouseEnter(4)} onMouseLeave={handleMouseLeave} onTouchStart={handleTouchStart} to="skill" spy={true} smooth={true} offset={0} duration={500} className='d-flex align-items-center p-2'>Skills</Link>
        <Link style={{...buttonStyle(5), backgroundColor: 'rgba(74, 10, 93, 0.8)',textDecoration: 'none', width: '20vw', justifyContent: 'center'}} onMouseEnter={() => handleMouseEnter(5)} onMouseLeave={handleMouseLeave} onTouchStart={handleTouchStart} to="qualify" spy={true} smooth={true} offset={0} duration={500} className='d-flex align-items-center p-2'>Qualification</Link>
        <Link style={{...buttonStyle(6), backgroundColor: 'rgba(74, 10, 93, 0.8)',textDecoration: 'none', width: '12vw', justifyContent: 'center'}} onMouseEnter={() => handleMouseEnter(6)} onMouseLeave={handleMouseLeave} onTouchStart={handleTouchStart} to="contact" spy={true} smooth={true} offset={-50} duration={500} className='d-flex align-items-center p-2'>Contact</Link>
        <Link style={{...buttonStyle(7), backgroundColor: 'rgba(74, 10, 93, 0.8)',textDecoration: 'none', width: '12vw', justifyContent: 'center', borderTopRightRadius: '20px', borderBottomRightRadius: '20px'}} onMouseEnter={() => handleMouseEnter(7)} onMouseLeave={handleMouseLeave} onTouchStart={handleTouchStart} to="contact" spy={true} smooth={true} offset={50} duration={500} className='d-flex align-items-center p-2'><FaChevronDown /></Link>
      </ButtonGroup>
    </div>
  )
}

export default ScrollThrough;
