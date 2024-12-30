import React from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import { Hello } from '../Func';
import Stack from 'react-bootstrap/Stack'
import { useState, useEffect } from 'react';

const Home = () => {

  const [currentText, setCurrentText] = useState('Web Developer');
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const texts = ['Web Developer', 'Software Developer'];
    let index = 0;
    const interval = setInterval(() => {
      setAnimate(true); // Trigger animation
      setTimeout(() => {
        index = (index + 1) % texts.length;
        setCurrentText(texts[index]); // Update text
        setAnimate(false); // Reset animation
      }, 500); // Match animation duration
    }, 3000); // Interval for switching texts

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const textStyle = {
    transition: 'transform 0.5s, opacity 0.5s',
    transform: animate ? 'translateY(-20%)' : 'translateY(20%)',
    opacity: animate ? 0 : 1,
  };

 
  

  return (  
    <div  style={{background: 'rgb(247, 237, 248)', position: 'relative' , zIndex: '1000', fontFamily: "Karla", fontWeight: '400', fontStyle: 'normal', height: '100vh', width: '100vw'}} id='home'>
      <Container fluid className='p-5 '>
        <Row >

          <Col className='px-5'  md={6} sm={12}>
            <Container style={{backgroundColor: 'grey'}}>
              <Image style={{width: '100%', height: 'auto'}} src="/vmk.jpg" rounded  />
            </Container>
          </Col>

          <Col md={6} sm={12} className=' px-4 pt-0 d-flex justify-content-center' >
            <Stack >
              <Hello className="d-flex justify-content-center" />
              <h3 style={{textAlign: 'right'}}>I'm VEERAMANIKANDAN K R </h3>
              <div className='d-inline-flex align-items-baseline justify-content-end'>  
                <h4  style={textStyle}>{currentText}</h4>
              </div>
            </Stack>
          </Col>
        </Row>
     </Container>
    </div>
      
  )
}

export default Home

