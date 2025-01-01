import React from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Hello } from '../Func';
import Stack from 'react-bootstrap/Stack'
import { useState, useEffect } from 'react';
import Figure from 'react-bootstrap/Figure';

const Home = () => {

  const [currentText, setCurrentText] = useState('Web Developer');
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const texts = ['Web Developer', 'Software Developer'];
    let index = 0;
    const interval = setInterval(() => {
      setAnimate(true);
      setTimeout(() => {
        index = (index + 1) % texts.length;
        setCurrentText(texts[index]);
        setAnimate(false); 
      }, 500);
    }, 3000);

    return () => clearInterval(interval); 
  }, []);

  const textStyle = {
    transition: 'transform 0.5s, opacity 0.5s',
    transform: animate ? 'translateY(-20%)' : 'translateY(20%)',
    opacity: animate ? 0 : 1,
  };

 
  

  return (  
    <div  style={{background: 'rgb(247, 237, 248)', position: 'relative' , zIndex: '1000', fontFamily: "Karla", fontWeight: '400', fontStyle: 'normal', height: '100vh'}} id='home'>
      <Container fluid className='my-2'>
        <Row >

          <Col md={6} sm={12}>
            <Figure>
              <Figure.Image
                width={720}
                height={720}
                alt="My-Self"
                src="/vmk.jpg"
                rounded
                style={{border: '2px solid black', padding: '5px'}}
              />
            </Figure>
              
          </Col>

          <Col md={6} sm={12} className='d-flex justify-content-center' >
            <Stack >
              <Hello className="d-flex justify-content-center" />
              <div className='d-inline-flex align-items-baseline justify-content-end pb-5 mb-5 me-3'>
                <Stack>
              <h3 style={{textAlign: 'right'}}>I'm VEERAMANIKANDAN K R </h3>
              <div className='d-inline-flex align-items-baseline justify-content-end pb-3 mb-3 me-3'>  
                <h4  style={textStyle}>{currentText}</h4>
              </div>
              </Stack>
              </div>
            </Stack>
          </Col>
        </Row>
     </Container>
    </div>
      
  )
}

export default Home

