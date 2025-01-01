import React from 'react'
import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Figure from 'react-bootstrap/Figure';
import { Link } from 'react-scroll';
import { FaExternalLinkAlt } from "react-icons/fa";
import { VscSourceControl } from "react-icons/vsc";
import { useResponsiveWidth } from '../Func';
import { useResponsiveFontSize } from '../Func';
import Stack from 'react-bootstrap/esm/Stack';

const Project = () => {

  const [key, setKey] = useState('Project1');

 
  const fontSize = useResponsiveFontSize();
  const width = useResponsiveWidth();
  const size = width === '70vw' ? '14px' : '12px'

  const tabStyle = {
    backgroundColor: "rgb(94, 32, 133)", 
    color: "white", 
    padding: '3%',
    position: "relative",
    zIndex: 2,
    marginBottom: '-9px',
    textDecoration: 'none'
  };
  
  const activeTabStyle = {
    ...tabStyle, 
    backgroundColor: "rgb(247, 237, 248)",
    border: "1px solid rgb(94, 32, 133)",
    borderBottom: "none", 
    color: 'black',
  };
  

  return (
    <div className="d-flex flex-column align-items-center mb-5">
      <Container className=' pt-4 ' fluid style={{height: 'auto', width,fontSize, fontFamily: "Libre Baskerville", fontWeight: '400', fontStyle: 'normal'}} id='project'>
        <h1 className='d-flex justify-content-center py-4' style={{fontWeight: '700'}}>My Projects</h1>

        <Tabs id="project" activeKey={key} onSelect={(k) => setKey(k)} fill className='m-0'>

          <Tab eventKey="Project1" title={<div style={key === 'Project1' ? activeTabStyle : tabStyle}>Project-1</div>} style={{backgroundColor: 'rgb(247, 237, 248)', border: '1px solid rgb(94, 32, 133) '}} className='m-0 pb-5 px-3'>
            
                <h2 style={{fontWeight: '700'}} className='pb-3 pt-4 d-flex justify-content-center'>E-commerce site for Merchants</h2>
                <Figure className='d-flex align-items-center justify-content-center'>
                  <Figure.Image width={720} height={480} alt="e-commerce site" src="/Projects/e-commerce.png"/>
                </Figure>
             
                <Stack direction='vertical' className=' mx-2'>

                  <h4 style={{fontWeight: '700'}}>Description</h4>
                  <h5 className='pt-3' style={{fontSize, fontFamily: 'Eco2'}}>This web application allows merchants to manage their products by performing CRUD (Create, Read, Update, Delete) operations. Merchants can post new products, update details, remove products, and view them.</h5>
                  <h4 style={{fontWeight: '700', paddingTop: '20px'}}>Technologies</h4>

                  <Row className='pt-3'>
                    <Col>
                    <Link className='py-1 px-3' style={{backgroundColor: 'rgb(238, 217, 251)',textDecoration: 'none', justifyContent: 'center', borderRadius: '20px', color: 'rgb(74, 10, 93)', border: '2px solid rgb(74, 10, 93)', marginRight: '5px', fontSize: size}}>MongoDB</Link> 
                    <Link className='py-1 px-3' style={{backgroundColor: 'rgb(238, 217, 251)',textDecoration: 'none', justifyContent: 'center', borderRadius: '20px', color: 'rgb(74, 10, 93)', border: '2px solid rgb(74, 10, 93)', marginRight: '5px', fontSize: size}}>Express</Link>
                    <Link className='py-1 px-3' style={{backgroundColor: 'rgb(238, 217, 251)',textDecoration: 'none', justifyContent: 'center', borderRadius: '20px', color: 'rgb(74, 10, 93)', border: '2px solid rgb(74, 10, 93)', marginRight: '5px', fontSize: size}}>React</Link>
                    <Link className='py-1 px-3' style={{backgroundColor: 'rgb(238, 217, 251)',textDecoration: 'none', justifyContent: 'center', borderRadius: '20px', color: 'rgb(74, 10, 93)', border: '2px solid rgb(74, 10, 93)', marginRight: '5px', fontSize: size}}>node js</Link>
                    </Col>
                  </Row>
                </Stack>
          
              

              <div className='d-flex justify-content-end align-items-end'>
                <a className='py-2 px-4 me-2 mt-4' style={{backgroundColor: 'rgb(151, 68, 202)', color : 'white', textDecoration: 'none',cursor: 'pointer', border: '1px solid black' }} href='https://github.com/VMK-2002/MERN-kickstart' target='blank'>Source <VscSourceControl /></a>
                <a className='py-2 px-4 me-2 mt-4' style={{backgroundColor: 'rgb(151, 68, 202)', color : 'white', textDecoration: 'none',cursor: 'pointer', border: '1px solid black'}} href='https://mern-kickstart.onrender.com/' target='blank'>Visit <FaExternalLinkAlt /></a>
              </div>
            
          </Tab>

          <Tab eventKey="Project2" title={<div style={key === 'Project2' ? activeTabStyle : tabStyle}>Project-2</div>} style={{backgroundColor: 'rgb(247, 237, 248)', border: '1px solid rgb(94, 32, 133) '}} className='pt-3 pb-5 px-3'>
            
            
                <h2 style={{fontWeight: '700'}} className='pb-3 pt-4 d-flex justify-content-center'>My Portfolio</h2>
                <Figure className='d-flex align-items-center justify-content-center'>
                  <Figure.Image width={720} height={480} alt="My-Portfolio" src="/Projects/myp.png"/>
                </Figure>
              
                <Stack direction='vertical' className=' mx-2'>

                <h4 style={{fontWeight: '700'}}>Description</h4>
                <h5 className='pt-3' style={{fontSize, fontFamily: 'Eco2'}}> A personal website designed to showcase your skills, projects, and achievements. It acts as a digital resume and portfolio.</h5>
                <h4 style={{fontWeight: '700', paddingTop: '20px'}}>Technologies</h4>

                <Row className='pt-3'>
                  <Col>
                  <Link className='py-1 px-3' style={{backgroundColor: 'rgb(238, 217, 251)',textDecoration: 'none', justifyContent: 'center', borderRadius: '20px', color: 'rgb(74, 10, 93)', border: '2px solid rgb(74, 10, 93)', marginRight: '5px', fontSize: size}}>React</Link>
                  <Link className='py-1 px-3' style={{backgroundColor: 'rgb(238, 217, 251)',textDecoration: 'none', justifyContent: 'center', borderRadius: '20px', color: 'rgb(74, 10, 93)', border: '2px solid rgb(74, 10, 93)', marginRight: '5px', fontSize: size}}>Java Script</Link>

                  </Col>
                </Row>
              </Stack>
             
              <div className='d-flex justify-content-end align-items-end'>
                <a className='py-2 px-4 me-2 mt-4' style={{backgroundColor: 'rgb(151, 68, 202)', color : 'white', textDecoration: 'none',cursor: 'pointer', border: '1px solid black' }} href='https://github.com/VMK-2002/Portfolio' target='blank'>Source <VscSourceControl /></a>
                <Link className='py-2 px-4 me-2 mt-4' style={{backgroundColor: 'rgb(151, 68, 202)', color : 'white', textDecoration: 'none',cursor: 'pointer', border: '1px solid black'}} to="home" spy={true} smooth={true} offset={0} duration={500}>Visit <FaExternalLinkAlt /></Link>
              </div>
           
          </Tab>

          <Tab eventKey="Project3" title={<div style={key === 'Project3' ? activeTabStyle : tabStyle}>Project-3</div>} style={{backgroundColor: 'rgb(247, 237, 248)', border: '1px solid rgb(94, 32, 133) '}} className='pt-3 pb-5 px-3'>
           
         
                <h2 style={{fontWeight: '700'}} className='pb-3 pt-4 d-flex justify-content-center'>Collage Network Design</h2>
                <Figure className='d-flex align-items-center justify-content-center'>
                  <Figure.Image width={720} height={480} alt="Collage-Network" src="/Projects/clgnet.png"/>
                </Figure>
           
                <Stack direction='vertical' className=' mx-2'>

                  <h4 style={{fontWeight: '700'}}>Description</h4>
                  <h5 className='pt-3' style={{fontSize, fontFamily: 'Eco2'}}>This project involves designing a network for a college campus using Cisco Packet Tracer, simulating devices, routers, switches, and configuring network elements.</h5>
                  <h4 style={{fontWeight: '700', paddingTop: '20px'}}>Technologies</h4>

                  <Row className='pt-3'>
                    <Col>
                      <Link className='py-1 px-3' style={{backgroundColor: 'rgb(238, 217, 251)',textDecoration: 'none', justifyContent: 'center', borderRadius: '20px', color: 'rgb(74, 10, 93)', border: '2px solid rgb(74, 10, 93)', marginRight: '5px', fontSize: size}}>EIGRP</Link>
                      <Link className='py-1 px-3' style={{backgroundColor: 'rgb(238, 217, 251)',textDecoration: 'none', justifyContent: 'center', borderRadius: '20px', color: 'rgb(74, 10, 93)', border: '2px solid rgb(74, 10, 93)', marginRight: '5px', fontSize: size}}>EIGRP</Link>
                      <Link className='py-1 px-3' style={{backgroundColor: 'rgb(238, 217, 251)',textDecoration: 'none', justifyContent: 'center', borderRadius: '20px', color: 'rgb(74, 10, 93)', border: '2px solid rgb(74, 10, 93)', marginRight: '5px', fontSize: size}}>DHCP</Link>
                      <Link className='py-1 px-3' style={{backgroundColor: 'rgb(238, 217, 251)',textDecoration: 'none', justifyContent: 'center', borderRadius: '20px', color: 'rgb(74, 10, 93)', border: '2px solid rgb(74, 10, 93)', marginRight: '5px', fontSize: size}}>servers</Link>
                      </Col>
                  </Row>

                  
                </Stack>
              
              <div className='d-flex justify-content-end align-items-end'>
                <a className='py-2 px-4 me-2 mt-4' style={{backgroundColor: 'rgb(151, 68, 202)', color : 'white', textDecoration: 'none',cursor: 'pointer', border: '1px solid black'}} href='https://github.com/VMK-2002/Collage-Network' target='blank'>Source <VscSourceControl /></a>
                <a className='py-2 px-4 me-2 mt-4' style={{backgroundColor: 'rgb(151, 68, 202)', color : 'white', textDecoration: 'none',cursor: 'pointer', border: '1px solid black'}} href='https://drive.google.com/file/d/1qKPgkHKQAD6rfS3pidcfwDRFLJwPiQSW/view?usp=sharing' target='blank'>Visit <FaExternalLinkAlt /></a>
              </div>
          
          </Tab>
        </Tabs>
      </Container>
    </div>
  )
}

export default Project
