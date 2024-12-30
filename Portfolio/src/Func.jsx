import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Container from 'react-bootstrap/esm/Container';
import Stack from 'react-bootstrap/esm/Stack';
import { useState, useEffect } from 'react';


export const WebDevelopment = () => {

  const [hoveredImage, setHoveredImage] = useState(null);

   const handleMouseEnter = (index) => setHoveredImage(index);
   const handleMouseLeave = () => setHoveredImage(null);

   const imageStyle = (index) => ({
      cursor: 'pointer',
      boxShadow: hoveredImage === index ? '0 0 12px rgba(0, 0, 0, 0.3)' : 'none',
      transition: 'box-shadow 0.3s ease',
   });

    return (
      <div  className='my-4'>
        <Container fluid style={{width: '70vw'}} className='d-flex justify-content-center ps-5' >
          <Row className='d-flex justify-content-center'>

            <Col xxs={6} sm={6} md={4} className='my-3 d-flex justify-content-center' >
              <Stack className="align-items-center">
              <img src='/Skill/htmllogo.png' alt='html' style={{...imageStyle(1), width: '30%'}} onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={handleMouseLeave}></img>
              <h6 style={{fontFamily: "Libre Baskerville", fontWeight: '700', fontStyle: 'normal', paddingTop: '10px'}}>HTML</h6>
              </Stack>
            </Col>

            <Col xxs={6} sm={6} md={4} className='my-3 d-flex justify-content-center'>
              <Stack className="align-items-center">
                <img src='/Skill/css.png' alt='css' style={{...imageStyle(2), width: '30%'}} onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={handleMouseLeave}></img>
                <h6 style={{fontFamily: "Libre Baskerville", fontWeight: '700', fontStyle: 'normal', paddingTop: '10px'}}>CSS</h6>
              </Stack>
            </Col>

            <Col xxs={6} sm={6} md={4} className='my-3 d-flex justify-content-center'>
              <Stack className="align-items-center">
                <img src='/Skill/js.png' alt='js' style={{...imageStyle(3), width: '30%'}} onMouseEnter={() => handleMouseEnter(3)} onMouseLeave={handleMouseLeave}></img>
                <h6 style={{fontFamily: "Libre Baskerville", fontWeight: '700', fontStyle: 'normal', paddingTop: '10px'}}>Java Script</h6>
              </Stack>
            </Col>

            <Col xxs={6} sm={6} md={4} className='my-3 d-flex justify-content-center'>
              <Stack className="align-items-center">
                <img src='/Skill/react.png' alt='react' style={{...imageStyle(4), width: '30%'}} onMouseEnter={() => handleMouseEnter(4)} onMouseLeave={handleMouseLeave}></img>
                <h6 style={{fontFamily: "Libre Baskerville", fontWeight: '700', fontStyle: 'normal', paddingTop: '10px'}}>React</h6>
              </Stack>
            </Col>
            
            <Col xxs={6} sm={6} md={4} className='my-3 d-flex justify-content-center'>
              <Stack className="align-items-center">
                <img src='/Skill/bootstrap.png' alt='Bootstrap' style={{...imageStyle(5), width: '30%'}} onMouseEnter={() => handleMouseEnter(5)} onMouseLeave={handleMouseLeave}></img>
                <h6 style={{fontFamily: "Libre Baskerville", fontWeight: '700', fontStyle: 'normal', paddingTop: '10px'}}>Bootstrap</h6>
              </Stack>
            </Col>
            
            <Col xxs={6} sm={6} md={4} className='my-3 d-flex justify-content-center'>
              <Stack className="align-items-center">
                <img src='/Skill/nodejs.png' alt='Node Js' style={{...imageStyle(6), width: '30%'}} onMouseEnter={() => handleMouseEnter(6)} onMouseLeave={handleMouseLeave}></img>
                <h6 style={{fontFamily: "Libre Baskerville", fontWeight: '700', fontStyle: 'normal', paddingTop: '10px'}}>Node Js</h6>
              </Stack>
            </Col>
            
            <Col xxs={6} sm={6} md={4} className='my-3 d-flex justify-content-center'>
              <Stack className="align-items-center">
                <img src='/Skill/express.png' alt='Express' style={{...imageStyle(7), width: '30%'}} onMouseEnter={() => handleMouseEnter(7)} onMouseLeave={handleMouseLeave}></img>
                <h6 style={{fontFamily: "Libre Baskerville", fontWeight: '700', fontStyle: 'normal', paddingTop: '10px'}}>Express</h6>
              </Stack>
            </Col>
            
            <Col xxs={6} sm={6} md={4} className='my-3 d-flex justify-content-center'>
              <Stack className="align-items-center">
                <img src='/Skill/mysql.png' alt='MySQL' style={{...imageStyle(8), width: '30%'}} onMouseEnter={() => handleMouseEnter(8)} onMouseLeave={handleMouseLeave}></img>
                <h6 style={{fontFamily: "Libre Baskerville", fontWeight: '700', fontStyle: 'normal', paddingTop: '10px'}}>MySQL</h6>
              </Stack>
            </Col>
            
            <Col xxs={6} sm={6} md={4} className='my-3 d-flex justify-content-center'>
              <Stack className="align-items-center">
                <img src='/Skill/mongodb.png' alt='MongoDB' style={{...imageStyle(9), width: '30%'}} onMouseEnter={() => handleMouseEnter(9)} onMouseLeave={handleMouseLeave}></img>
                <h6 style={{fontFamily: "Libre Baskerville", fontWeight: '700', fontStyle: 'normal', paddingTop: '10px'}}>MongoDB</h6>
              </Stack>
            </Col>

          </Row>
        </Container>
      </div>
    )
}

export const Programming = () => {

  const [hoveredImage, setHoveredImage] = useState(null);
  const handleMouseEnter = (index) => setHoveredImage(index);
  const handleMouseLeave = () => setHoveredImage(null);

  const imageStyle = (index) => ({
    cursor: 'pointer',
    boxShadow: hoveredImage === index ? '0 0 12px rgba(0, 0, 0, 0.3)' : 'none',
    transition: 'box-shadow 0.3s ease',
  });

  return (
    <div  className='my-4'>
      <Container fluid style={{width: '70vw'}} className='d-flex justify-content-center ps-5'>
        <Row  className='d-flex justify-content-center'>
          <Col  xxs={6} sm={6} md={4} className='my-3 d-flex justify-content-center'>
            <Stack  className="align-items-center">
              <img src='/Skill/js.png' alt='js' style={{...imageStyle(1), width: '30%'}} onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={handleMouseLeave}></img>
              <h6 style={{fontFamily: "Libre Baskerville", fontWeight: '700', fontStyle: 'normal', paddingTop: '10px'}}>Java Script</h6>
            </Stack>
          </Col>

          <Col xxs={6} sm={6} md={4} className='my-3 d-flex justify-content-center'>
            <Stack className="align-items-center">
              <img src='/Skill/python.png' alt='python' style={{...imageStyle(2), width: '30%'}} onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={handleMouseLeave}></img>
              <h6 style={{fontFamily: "Libre Baskerville", fontWeight: '700', fontStyle: 'normal', paddingTop: '10px'}}>Python</h6>
            </Stack>
          </Col>
        
          <Col  xxs={6} sm={6} md={4} className='my-3 d-flex justify-content-center'>
            <Stack className="align-items-center">
              <img src='/Skill/java.png' alt='java' style={{...imageStyle(3), width: '30%'}} onMouseEnter={() => handleMouseEnter(3)} onMouseLeave={handleMouseLeave}></img>
              <h6 style={{fontFamily: "Libre Baskerville", fontWeight: '700', fontStyle: 'normal', paddingTop: '10px'}}>Java</h6>
            </Stack>
          </Col>
        
          <Col xxs={6} sm={6} md={4} className='my-3 d-flex justify-content-center'>
            <Stack className="align-items-center">
              <img src='/Skill/c.png' alt='c' style={{...imageStyle(4), width: '30%'}} onMouseEnter={() => handleMouseEnter(4)} onMouseLeave={handleMouseLeave}></img>
              <h6 style={{fontFamily: "Libre Baskerville", fontWeight: '700', fontStyle: 'normal', paddingTop: '10px'}}>C</h6>
            </Stack>
          </Col>
        </Row>
      </Container>
    </div>
    )
}

export const Networking = () => {

  const [hoveredImage, setHoveredImage] = useState(null);
  const handleMouseEnter = (index) => setHoveredImage(index);
  const handleMouseLeave = () => setHoveredImage(null);

  const imageStyle = (index) => ({
    cursor: 'pointer',
    boxShadow: hoveredImage === index ? '0 0 12px rgba(0, 0, 0, 0.3)' : 'none',
    transition: 'box-shadow 0.3s ease',
  });

  return (
    <div  className='my-4'>
      <Container fluid style={{width: '70vw'}} className='d-flex justify-content-center ps-5'>
        <Row className='d-flex justify-content-center' >
          <Col xxs={6} sm={6} md={4} className='my-3 d-flex justify-content-center'>
            <Stack className="align-items-center">
              <img src='/Skill/routing.png' alt='Routing' style={{...imageStyle(1), width: '30%'}} onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={handleMouseLeave}></img>
              <h6 style={{fontFamily: "Libre Baskerville", fontWeight: '700', fontStyle: 'normal', paddingTop: '10px'}}>Routing</h6>
            </Stack>
          </Col>

          <Col xxs={6} sm={6} md={4} className='my-3 d-flex justify-content-center'>
            <Stack className="align-items-center">
              <img src='/Skill/switch.png' alt='Switching' style={{...imageStyle(2), width: '30%'}} onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={handleMouseLeave}></img>
              <h6 style={{fontFamily: "Libre Baskerville", fontWeight: '700', fontStyle: 'normal', paddingTop: '10px'}}>Switching</h6>
            </Stack>
          </Col>
        
          <Col xxs={6} sm={6} md={4} className='my-3 d-flex justify-content-center'>
            <Stack className="align-items-center">
              <img src='/Skill/subnetting.png' alt='Subnetting'style={{...imageStyle(3), width: '30%'}} onMouseEnter={() => handleMouseEnter(3)} onMouseLeave={handleMouseLeave}></img>
              <h6 style={{fontFamily: "Libre Baskerville", fontWeight: '700', fontStyle: 'normal', paddingTop: '10px'}}>Subnetting</h6>
            </Stack>
          </Col>
        
          <Col xxs={6} sm={6} md={4} className='my-3 d-flex justify-content-center'>
            <Stack className="align-items-center">
              <img src='/Skill/RoutingProtocol.png' alt='Routing Protocol' style={{...imageStyle(4), width: '30%'}} onMouseEnter={() => handleMouseEnter(4)} onMouseLeave={handleMouseLeave}></img>
              <h6 style={{fontFamily: "Libre Baskerville", fontWeight: '700', fontStyle: 'normal', paddingTop: '10px'}}>Routing Protocols</h6>
            </Stack>
          </Col>
        </Row>
      </Container>
    </div>
    )
}

export const Hello = () => {
  return (
    <DotLottieReact
      src="https://lottie.host/651556e5-28d8-4fba-b0c4-91ad25ff76f8/4aTjOBEdx4.lottie"
      loop
      autoplay
    />
  );
};

export const Download = () => {
  return (
    <DotLottieReact
      style={{width: '50%'}}
      src="https://lottie.host/4c0f011f-43ee-4da3-be75-6178e5a3881a/YQEIApKU7h.lottie"
      loop
      autoplay
    >
      <p >Resume</p>
    </DotLottieReact>
  );
};


export const useResponsiveWidth = () => {
  const [width, setWidth] = useState(() => {
    return window.innerWidth <= 768 ? '100vw' : '70vw';
  });

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth <= 768 ? '100vw' : '70vw');
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return width;
};