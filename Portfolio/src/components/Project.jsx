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

  const tabStyle = {
    
    backgroundColor: "rgb(94, 32, 133)",
    border: '2px solid rgb(94, 32, 133) ',
    borderBottom: "none",
    color: "white", 
    padding: "10px 20px",
    borderRadius: "5px 5px 0 0",
    position: "relative",
    zIndex: 1,
    marginBottom: "0", 
  };

  const activeTabStyle = {
    ...tabStyle, 
    backgroundColor: "rgb(247, 237, 248)", 
    color: 'black',
    fontWeight: "bold", 
    marginRight: '0px',
  };

  const width = useResponsiveWidth();

  return (
    <div className="d-flex flex-column align-items-center" >
      <Container className='px-4 pt-4 ' fluid style={{height: 'auto', width, fontFamily: "Libre Baskerville", fontWeight: '400', fontStyle: 'normal'}} id='project'>
        <h1 className='d-flex justify-content-center py-4' style={{fontWeight: '700'}}>My Projects</h1>

        <Tabs id="project" activeKey={key} onSelect={(k) => setKey(k)} className=" justify-content-center" style={{color: 'white'}}>

          <Tab eventKey="Project1" title={<span style={key === "Project1" ? activeTabStyle : tabStyle}> # Project-1</span>} style={{backgroundColor: 'rgb(247, 237, 248)', border: '2px solid rgb(94, 32, 133) '}} className='pt-3 pb-5 px-3'>
            
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

                  <div className='pt-4'>
                    <Link className='py-2 px-4' style={{backgroundColor: 'rgb(238, 217, 251)',textDecoration: 'none', justifyContent: 'center', borderRadius: '20px', color: 'rgb(74, 10, 93)', border: '2px solid rgb(74, 10, 93)', marginRight: '5px'}}>MongoDB</Link> 
                    <Link className='py-2 px-4' style={{backgroundColor: 'rgb(238, 217, 251)',textDecoration: 'none', justifyContent: 'center', borderRadius: '20px', color: 'rgb(74, 10, 93)', border: '2px solid rgb(74, 10, 93)', marginRight: '5px'}}>Express</Link>
                    <Link className='py-2 px-4' style={{backgroundColor: 'rgb(238, 217, 251)',textDecoration: 'none', justifyContent: 'center', borderRadius: '20px', color: 'rgb(74, 10, 93)', border: '2px solid rgb(74, 10, 93)', marginRight: '5px'}}>React</Link>
                    <Link className='py-2 px-4' style={{backgroundColor: 'rgb(238, 217, 251)',textDecoration: 'none', justifyContent: 'center', borderRadius: '20px', color: 'rgb(74, 10, 93)', border: '2px solid rgb(74, 10, 93)', marginRight: '5px'}}>node js</Link>
                    </div>
                </Stack>
          
              </Col>

              <div className='d-flex justify-content-end align-items-end'>
                <Link className='py-2 px-4 me-2 mt-4' style={{backgroundColor: 'rgb(151, 68, 202)', color : 'white', textDecoration: 'none',cursor: 'pointer', border: '1px solid black' }}>Source <VscSourceControl /></Link>
                <Link className='py-2 px-4 me-2 mt-4' style={{backgroundColor: 'rgb(151, 68, 202)', color : 'white', textDecoration: 'none',cursor: 'pointer', border: '1px solid black'}}>Visit <FaExternalLinkAlt /></Link>
              </div>
            </Row>
          </Tab>

          <Tab eventKey="Project2" title={<span style={key === "Project2" ? activeTabStyle : tabStyle}> # Project-2</span>} style={{backgroundColor: 'rgb(247, 237, 248)', border: '2px solid rgb(94, 32, 133) '}} className='pt-3 pb-5 px-3'>
            
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

                <ButtonGroup className='pt-3'>
                  <Link className='py-2 px-4' style={{backgroundColor: 'rgb(238, 217, 251)',textDecoration: 'none', justifyContent: 'center', borderRadius: '20px', color: 'rgb(74, 10, 93)', border: '2px solid rgb(74, 10, 93)', marginRight: '5px'}}>React</Link>
                  <Link className='py-2 px-4' style={{backgroundColor: 'rgb(238, 217, 251)',textDecoration: 'none', justifyContent: 'center', borderRadius: '20px', color: 'rgb(74, 10, 93)', border: '2px solid rgb(74, 10, 93)', marginRight: '5px'}}>Java Script</Link>
                </ButtonGroup>
              </Stack>
              </Col>
              <div className='d-flex justify-content-end align-items-end'>
                <Link className='py-2 px-4 me-2 mt-4' style={{backgroundColor: 'rgb(151, 68, 202)', color : 'white', textDecoration: 'none',cursor: 'pointer', border: '1px solid black' }}>Source <VscSourceControl /></Link>
                <Link className='py-2 px-4 me-2 mt-4' style={{backgroundColor: 'rgb(151, 68, 202)', color : 'white', textDecoration: 'none',cursor: 'pointer', border: '1px solid black'}}>Visit <FaExternalLinkAlt /></Link>
              </div>
            </Row>
          </Tab>

          <Tab eventKey="Project3" title={<span style={key === "Project3" ? activeTabStyle : tabStyle}> # Project-3</span>} style={{backgroundColor: 'rgb(247, 237, 248)', border: '2px solid rgb(94, 32, 133) '}} className='pt-3 pb-5 px-3'>
           
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

                  <ButtonGroup className='pt-3'>
                    <Link className='py-2 px-4' style={{backgroundColor: 'rgb(238, 217, 251)',textDecoration: 'none', justifyContent: 'center', borderRadius: '20px', color: 'rgb(74, 10, 93)', border: '2px solid rgb(74, 10, 93)', marginRight: '5px'}}>EIGRP</Link>
                    <Link className='py-2 px-4' style={{backgroundColor: 'rgb(238, 217, 251)',textDecoration: 'none', justifyContent: 'center', borderRadius: '20px', color: 'rgb(74, 10, 93)', border: '2px solid rgb(74, 10, 93)', marginRight: '5px'}}>vlan</Link>
                    <Link className='py-2 px-4' style={{backgroundColor: 'rgb(238, 217, 251)',textDecoration: 'none', justifyContent: 'center', borderRadius: '20px', color: 'rgb(74, 10, 93)', border: '2px solid rgb(74, 10, 93)', marginRight: '5px'}}>DHCP</Link>
                    <Link className='py-2 px-4' style={{backgroundColor: 'rgb(238, 217, 251)',textDecoration: 'none', justifyContent: 'center', borderRadius: '20px', color: 'rgb(74, 10, 93)', border: '2px solid rgb(74, 10, 93)', marginRight: '5px'}}>servers</Link>
                  </ButtonGroup>

                  
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
