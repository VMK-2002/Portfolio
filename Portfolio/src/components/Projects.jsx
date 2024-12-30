import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from 'react';
import { useResponsiveWidth } from '../Func';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/esm/Stack';
import { VscSourceControl } from "react-icons/vsc";
import { MdOutlineOpenInNew } from "react-icons/md";
import { Link } from 'react-scroll';
import Figure from 'react-bootstrap/Figure';
import { GrLinkPrevious } from "react-icons/gr";
import { GrLinkNext } from "react-icons/gr";
import { IoIosInformationCircleOutline } from "react-icons/io";

<GrLinkPrevious />

const Projects = () => {

    const width = useResponsiveWidth();
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [isAutoSwitching, setIsAutoSwitching] = useState(true);
  
    const [hoveredImage, setHoveredImage] = useState(null);
    
       const handleMouseEnter = (index) => setHoveredImage(index);
       const handleMouseLeave = () => setHoveredImage(null);
  
    const textStyle = (index) => ({
      cursor: 'pointer',
      opacity: hoveredImage === index ? '1' : '0',
      transition: 'opacity 0.3s ease',
      backgroundColor: 'rgb(151, 68, 202)',
      color: 'white',
   });

  const cards = [
    <Card style={{ width: '100%',  border: "1px solid black", backgroundColor: 'white', fontFamily: "Libre Baskerville", fontWeight: '400', fontStyle: 'normal' }} key="1">
        <div className='d-flex justify-content-center align-items-center'>
                <Figure className='p-0 m-0'>
      <Figure.Image 
        width={800}
        height={650}
        alt="E-Commerce Site"
        src="/Projects/e-commerce.png"
        className='m-0'
      />
    </Figure>
    </div>

      <Card.Body style={{ height: '17vh', backgroundColor: 'rgb(151, 68, 202)', color: 'white'}}>
        <Stack direction='horizontal' >
                <Card.Title style={{fontFamily: "Libre Baskerville", fontWeight: '700', fontStyle: 'normal'}}>E-Commerce Site</Card.Title>
                <p className='ms-auto' style={textStyle(1)}>Source</p>
                <Button   style={{ backgroundColor: 'transparent', border: 'none'}} onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={handleMouseLeave} href='https://github.com/VMK-2002/MERN-kickstart' target='blank'><VscSourceControl size={22} color='white' /></Button>
               
                <Button  href='https://mern-kickstart.onrender.com/' target='blank' style={{backgroundColor: 'transparent', border: 'none'}} onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={handleMouseLeave}><MdOutlineOpenInNew size={22} color='white'/></Button>
                <p style={textStyle(2)}>Visit</p>
              </Stack>
              <Card.Text className='d-flex pb-2 pt-2'>
                Built a MERN stack E-Commerce site allowing merchants to post, edit, and delete products, with a responsive design and secure features.
                </Card.Text>

      </Card.Body>
    </Card>,

    <Card style={{ width: '100%',  border: "1px solid black" , backgroundColor: 'white', fontFamily: "Libre Baskerville", fontWeight: '400', fontStyle: 'normal'}} key="2">
        <div className='d-flex justify-content-center align-items-center'>
        <Figure className='p-0 m-0'>
      <Figure.Image
        width={800}
        height={650}
        alt="My-Portfolio"
        src="/Projects/myp.png"
        className='m-0'
      />
    </Figure>
    </div>

      <Card.Body style={{height: '17vh', backgroundColor: 'rgb(151, 68, 202)', color: 'white'}}>
              <Stack direction='horizontal' >
                <Card.Title style={{fontFamily: "Libre Baskerville", fontWeight: '700', fontStyle: 'normal'}}>My Portfolio</Card.Title>
                <p className='ms-auto' style={textStyle(3)}>Source</p>
                <Button  style={{ backgroundColor: 'transparent', border: 'none', paddingRight: '10px'}} onMouseEnter={() => handleMouseEnter(3)} onMouseLeave={handleMouseLeave} href='https://github.com/VMK-2002/Portfolio' target='blank'><VscSourceControl size={22} color='white' /></Button>
                
                <Link style={{backgroundColor: 'transparent', border: 'none', paddingRight: '10px', paddingLeft: '8px'}} onMouseEnter={() => handleMouseEnter(4)} onMouseLeave={handleMouseLeave} to="home" spy={true} smooth={true} offset={0} duration={500} className='d-flex justify-content-center align-items-center'><MdOutlineOpenInNew size={22} color='white'/></Link>
                <p style={textStyle(4)}>Visit</p>
                
              </Stack>
              <Card.Text className='d-flex pb-2 pt-2' >Developed a personal portfolio website showcasing my skills, projects, and experience using HTML, CSS, Bootstrap, JavaScript, and React. 
               </Card.Text>
      </Card.Body>
    </Card>,

    <Card style={{ width: '100%',  border: "1px solid black", backgroundColor: 'white', fontFamily: "Libre Baskerville", fontWeight: '400', fontStyle: 'normal' }} key="3">
        <div className='d-flex justify-content-center align-items-center'>
        <Figure className='p-0 m-0'>
      <Figure.Image
        width={800}
        height={650}
        alt="Network Design"
        src="/Projects/clgnet.png"
        className='m-0'
      />
    </Figure>
    </div>

      <Card.Body style={{height: '17vh', backgroundColor: 'rgb(151, 68, 202)', color: 'white'}}>
      <Stack direction='horizontal'>
                <Card.Title style={{fontFamily: "Libre Baskerville", fontWeight: '700', fontStyle: 'normal'}}>Network Design</Card.Title>
               
                <p className='ms-auto' style={textStyle(5)}>Source</p>
                <Button  style={{  backgroundColor: 'transparent', border: 'none'}} onMouseEnter={() => handleMouseEnter(5)} onMouseLeave={handleMouseLeave} href='https://github.com/VMK-2002/Collage-Network' target='blank'><VscSourceControl size={22} color='white' /></Button>
               
                <Button  href='https://drive.google.com/file/d/1qKPgkHKQAD6rfS3pidcfwDRFLJwPiQSW/view?usp=drive_link' target='blank' style={{backgroundColor: 'transparent', border: 'none'}} onMouseEnter={() => handleMouseEnter(6)} onMouseLeave={handleMouseLeave}><MdOutlineOpenInNew size={22} color='white'/></Button>
                <p style={textStyle(6)}>Visit</p>
               

              </Stack>
              <Card.Text className='d-flex pb-2 pt-2'>Designed a simple college network in Cisco Packet Tracer with basic routing, switching, and device connectivity</Card.Text>

      </Card.Body>
    </Card>,

  ];

  const handleNext = () => {
    interruptAutoSwitching(); // Stop auto-switching
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrevious = () => {
    interruptAutoSwitching(); // Stop auto-switching
    setCurrentCardIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  const interruptAutoSwitching = () => {
    setIsAutoSwitching(false); // Disable auto-switching
  };

  useEffect(() => {
    if (!isAutoSwitching) return; // Skip auto-switching if manual interaction occurred

    const interval = setInterval(() => {
      setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 3000); // Interval for auto-switching cards

    return () => clearInterval(interval); // Cleanup on unmount
  }, [isAutoSwitching, cards.length]);

  const handleSwipe = (direction) => {
    interruptAutoSwitching(); // Stop auto-switching
    if (direction === 'left') handleNext();
    if (direction === 'right') handlePrevious();
  };

  const handleTouchStart = (e) => {
    setSwipeStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const swipeEnd = e.changedTouches[0].clientX;
    const swipeDistance = swipeEnd - swipeStart;

    if (swipeDistance > 50) handleSwipe('right'); // Swipe right
    if (swipeDistance < -50) handleSwipe('left'); // Swipe left
  };

  const [swipeStart, setSwipeStart] = useState(null);


  return (
    <div  className="d-flex flex-column align-items-center" onTouchStart={handleTouchStart}  onTouchEnd={handleTouchEnd}>
      <Container className='p-4 ' fluid style={{height: 'auto', width}} id='project'>
      <h1 className='d-flex justify-content-center' style={{fontFamily: "Libre Baskerville", fontWeight: '700', fontStyle: 'normal'}}>My Projects</h1>

      <div >{cards[currentCardIndex]}</div>
      <div className="mt-3">
        <Stack direction='horizontal'>
        <Button onClick={handlePrevious} className='py-2 px-4' style={{textDecoration: 'none', color: 'white', border: 'none', backgroundColor: 'rgb(151, 68, 202)' }} >
        <GrLinkPrevious /> Previous
        </Button>
        <Button onClick={handleNext} className='ms-auto py-2 px-4' style={{textDecoration: 'none', color: 'white', border: 'none', backgroundColor: 'rgb(151, 68, 202)' }}>
         Next <GrLinkNext />
        </Button> 
        </Stack>
      </div>
    </Container>
    </div>
  )
}

export default Projects;

