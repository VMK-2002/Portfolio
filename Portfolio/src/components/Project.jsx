import React from 'react'
import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Figure from 'react-bootstrap/Figure';
import { Link } from 'react-scroll';
import { ButtonGroup, Stack } from 'react-bootstrap';
import { FaExternalLinkAlt } from "react-icons/fa";
import { VscSourceControl } from "react-icons/vsc";
import { useResponsiveWidth } from '../Func';

const Project = () => {

  const [key, setKey] = useState('Project1');

 

  const width = useResponsiveWidth();

  return (
    <div className="d-flex flex-column align-items-center" >
      <Container className='px-4 pt-4 ' fluid style={{height: 'auto', width, fontFamily: "Libre Baskerville", fontWeight: '400', fontStyle: 'normal'}} id='project'>
        <h1 className='d-flex justify-content-center py-4' style={{fontWeight: '700'}}>My Projects</h1>

        <Tabs id="project" activeKey={key} onSelect={(k) => setKey(k)} fill>

          <Tab eventKey="Project1" title= "# Project-1" style={{backgroundColor: 'rgb(247, 237, 248)', border: '1px solid rgb(94, 32, 133) '}} className='pt-3 pb-5 px-3'>
            
            <Row className='pt-4'>

              <Col md={12} sm={12}>
                <h2 style={{fontWeight: '700'}} className='pb-3 d-flex justify-content-center'>E-commerce site for Merchants</h2>
                <Figure className='d-flex align-items-center justify-content-center'>
                  <Figure.Image width={720} height={480} alt="e-commerce site" src="/Projects/e-commerce.png"/>
                </Figure>
              </Col>

              <Col md={12} sm={12} className='px-4'>
                <Stack direction='vertical' className='pt-5'>

                  <h4 style={{fontWeight: '700', paddingTop: '10px'}}>Description</h4>
                  <h6 className='pt-3'>This web application allows merchants to manage their products by performing CRUD (Create, Read, Update, Delete) operations. Merchants can post new products, update details, remove products, and view them.</h6>
                  <h4 style={{fontWeight: '700', paddingTop: '20px'}}>Technologies</h4>

                  <Row className='pt-3'>
                    <Col>
                    <Link className='py-2 px-4' style={{backgroundColor: 'rgb(238, 217, 251)',textDecoration: 'none', justifyContent: 'center', borderRadius: '20px', color: 'rgb(74, 10, 93)', border: '2px solid rgb(74, 10, 93)', marginRight: '5px'}}>MongoDB</Link> 

                    </Col>
                    <Col>
                    <Link className='py-2 px-4' style={{backgroundColor: 'rgb(238, 217, 251)',textDecoration: 'none', justifyContent: 'center', borderRadius: '20px', color: 'rgb(74, 10, 93)', border: '2px solid rgb(74, 10, 93)', marginRight: '5px'}}>Express</Link>

                    </Col>
                    <Col>
                    <Link className='py-2 px-4' style={{backgroundColor: 'rgb(238, 217, 251)',textDecoration: 'none', justifyContent: 'center', borderRadius: '20px', color: 'rgb(74, 10, 93)', border: '2px solid rgb(74, 10, 93)', marginRight: '5px'}}>React</Link>

                    </Col>
                    <Col>
                    <Link className='py-2 px-4' style={{backgroundColor: 'rgb(238, 217, 251)',textDecoration: 'none', justifyContent: 'center', borderRadius: '20px', color: 'rgb(74, 10, 93)', border: '2px solid rgb(74, 10, 93)', marginRight: '5px'}}>node js</Link>

                    </Col>
                  </Row>
                </Stack>
          
              </Col>

              <div className='d-flex justify-content-end align-items-end'>
                <Link className='py-2 px-4 me-2 mt-4' style={{backgroundColor: 'rgb(151, 68, 202)', color : 'white', textDecoration: 'none',cursor: 'pointer', border: '1px solid black' }}>Source <VscSourceControl /></Link>
                <Link className='py-2 px-4 me-2 mt-4' style={{backgroundColor: 'rgb(151, 68, 202)', color : 'white', textDecoration: 'none',cursor: 'pointer', border: '1px solid black'}}>Visit <FaExternalLinkAlt /></Link>
              </div>
            </Row>
          </Tab>

          <Tab eventKey="Project2" title="# Project-2" style={{backgroundColor: 'rgb(247, 237, 248)', border: '1px solid rgb(94, 32, 133) '}} className='pt-3 pb-5 px-3'>
            
            <Row className='pt-4'>
            
              <Col md={12} sm={12}>
                <h2 style={{fontWeight: '700'}} className='pb-3 d-flex justify-content-center'>My Portfolio</h2>
                <Figure className='d-flex align-items-center justify-content-center'>
                  <Figure.Image width={720} height={480} alt="My-Portfolio" src="/Projects/myp.png"/>
                </Figure>
              </Col>

              <Col md={6} sm={12}>
                <Stack direction='vertical' className='pt-5'>

                <h4 style={{fontWeight: '700', paddingTop: '10px'}}>Description</h4>
                <h6 className='pt-3'> A personal website designed to showcase your skills, projects, and achievements. It acts as a digital resume and portfolio.</h6>
                <h4 style={{fontWeight: '700', paddingTop: '20px'}}>Technologies</h4>

                <Row className='pt-3'>
                  <Col>
                  <Link className='py-2 px-4' style={{backgroundColor: 'rgb(238, 217, 251)',textDecoration: 'none', justifyContent: 'center', borderRadius: '20px', color: 'rgb(74, 10, 93)', border: '2px solid rgb(74, 10, 93)', marginRight: '5px'}}>React</Link>

                  </Col>
                  <Col>
                  <Link className='py-2 px-4' style={{backgroundColor: 'rgb(238, 217, 251)',textDecoration: 'none', justifyContent: 'center', borderRadius: '20px', color: 'rgb(74, 10, 93)', border: '2px solid rgb(74, 10, 93)', marginRight: '5px'}}>Java Script</Link>

                  </Col>
                </Row>
              </Stack>
              </Col>
              <div className='d-flex justify-content-end align-items-end'>
                <Link className='py-2 px-4 me-2 mt-4' style={{backgroundColor: 'rgb(151, 68, 202)', color : 'white', textDecoration: 'none',cursor: 'pointer', border: '1px solid black' }}>Source <VscSourceControl /></Link>
                <Link className='py-2 px-4 me-2 mt-4' style={{backgroundColor: 'rgb(151, 68, 202)', color : 'white', textDecoration: 'none',cursor: 'pointer', border: '1px solid black'}}>Visit <FaExternalLinkAlt /></Link>
              </div>
            </Row>
          </Tab>

          <Tab eventKey="Project3" title="# Project-3" style={{backgroundColor: 'rgb(247, 237, 248)', border: '1px solid rgb(94, 32, 133) '}} className='pt-3 pb-5 px-3'>
           
            <Row className='pt-4'>

              <Col md={12} sm={12}>
                <h2 style={{fontWeight: '700'}} className='pb-3 d-flex justify-content-center'>Collage Network Design</h2>
                <Figure className='d-flex align-items-center justify-content-center'>
                  <Figure.Image width={720} height={480} alt="Collage-Network" src="/Projects/clgnet.png"/>
                </Figure>
              </Col>

              <Col md={6} sm={12}>
                <Stack direction='vertical'  className='pt-5'>

                  <h4 style={{fontWeight: '700', paddingTop: '10px'}}>Description</h4>
                  <h6 className='pt-3'>This project involves designing a network for a college campus using Cisco Packet Tracer, simulating devices, routers, switches, and configuring network elements.</h6>
                  <h4 style={{fontWeight: '700', paddingTop: '20px'}}>Technologies</h4>

                  <Row className='pt-3'>
                    <Col>
                      <Link className='py-2 px-4' style={{backgroundColor: 'rgb(238, 217, 251)',textDecoration: 'none', justifyContent: 'center', borderRadius: '20px', color: 'rgb(74, 10, 93)', border: '2px solid rgb(74, 10, 93)', marginRight: '5px'}}>EIGRP</Link>
                    </Col>
                    <Col>
                    <Link className='py-2 px-4' style={{backgroundColor: 'rgb(238, 217, 251)',textDecoration: 'none', justifyContent: 'center', borderRadius: '20px', color: 'rgb(74, 10, 93)', border: '2px solid rgb(74, 10, 93)', marginRight: '5px'}}>EIGRP</Link>

                    </Col>
                    <Col>
                    <Link className='py-2 px-4' style={{backgroundColor: 'rgb(238, 217, 251)',textDecoration: 'none', justifyContent: 'center', borderRadius: '20px', color: 'rgb(74, 10, 93)', border: '2px solid rgb(74, 10, 93)', marginRight: '5px'}}>DHCP</Link>

                    </Col>
                    <Col>
                    <Link className='py-2 px-4' style={{backgroundColor: 'rgb(238, 217, 251)',textDecoration: 'none', justifyContent: 'center', borderRadius: '20px', color: 'rgb(74, 10, 93)', border: '2px solid rgb(74, 10, 93)', marginRight: '5px'}}>servers</Link>

                    </Col>
                  </Row>

                  
                </Stack>
              </Col>
              <div className='d-flex justify-content-end align-items-end'>
                <Link className='py-2 px-4 me-2 mt-4' style={{backgroundColor: 'rgb(151, 68, 202)', color : 'white', textDecoration: 'none',cursor: 'pointer', border: '1px solid black' }}>Source <VscSourceControl /></Link>
                <Link className='py-2 px-4 me-2 mt-4' style={{backgroundColor: 'rgb(151, 68, 202)', color : 'white', textDecoration: 'none',cursor: 'pointer', border: '1px solid black'}}>Visit <FaExternalLinkAlt /></Link>
              </div>
            </Row>
          </Tab>
        </Tabs>
      </Container>
    </div>
  )
}

export default Project
