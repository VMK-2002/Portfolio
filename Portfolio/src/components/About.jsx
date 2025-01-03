import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { useResponsiveWidth } from '../Func';
import { Link } from 'react-scroll';
import { useResponsiveFontSize } from '../Func';

const About = () => {

  const width = useResponsiveWidth();
  console.log(width)
  const fontSize = useResponsiveFontSize();
  const lineHeight = width === '70vw' ? 2 : 1.5

  return (
    <Container style={{width, fontSize, paddingTop: '10vh', paddingBottom: '10vh'}} className='d-flex flex-column align-items-center justify-content-center' id='about' >
      <Row>
        <Col className="d-flex flex-column justify-content-center align-items-center">
          <h1 style={{fontFamily: "Libre Baskerville", fontWeight: '700', fontStyle: 'normal'}} className='pb-5'>Know me</h1>
          <h5 className="px-3 px-lg-10 px-md-5 text-center" style={{fontFamily: "Eco2", fontWeight: '400', fontStyle: 'normal',fontSize, lineHeight}} >
            I am a passionate individual with a growing expertise in IT and Full Stack Development. Currently pursuing a 
            <Link to='mcs' spy={true} smooth={true} offset={-200} duration={500} style={{cursor: 'pointer', fontWeight: '700'}} ><em> Minor degree in Computer Science </em></Link>
            with a focus on Full Stack Development, I have developed 
            <Link to='project' spy={true} smooth={true} offset={0} duration={500} style={{cursor: 'pointer', fontWeight: '700'}}><em> projects </em></Link>in web development and gained hands-on experience in 
            <Link to='cisco' spy={true} smooth={true} offset={-200} duration={500} style={{cursor: 'pointer', fontWeight: '700'}}><em> networking</em></Link>, 
            including routing and switching. Additionally, I have worked with databases like MongoDB and MySQL. My journey in technology is driven 
            by a strong interest in exploring interdisciplinary challenges and opportunities, and I enjoy combining my 
            <Link to='skill' spy={true} smooth={true} offset={0} duration={500} style={{cursor: 'pointer', fontWeight: '700'}}><em> IT skills </em></Link>with my mechanical
            background.
          </h5>
        </Col>
      </Row>
    </Container>
  )
}

export default About
