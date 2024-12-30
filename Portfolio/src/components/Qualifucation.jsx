import { useContext } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import AccordionContext from 'react-bootstrap/AccordionContext';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import { useResponsiveWidth } from '../Func';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Figure from 'react-bootstrap/Figure';

const PURPLE = 'rgb(94, 32, 133)';
const WHITE = 'rgba(94, 32, 133, 0.60)';

function ContextAwareToggle({ children, eventKey, callback }) {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey),
  );

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <button
      type="button"
      style={{ backgroundColor: isCurrentEventKey ? PURPLE : WHITE , textDecoration: 'none', border: 'none', display: 'flex', justifyContent: 'start', width: '100%', height: 'auto', color: 'white', padding: '10px' }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

const Qualification = () => {

  const width = useResponsiveWidth();

  return (
    <div className=' w-100 d-flex justify-content-center  p-4' id='qualify' style={{fontFamily: "Libre Baskerville", fontWeight: '400', fontStyle: 'normal'}}>
      <Container fluid style={{height: 'auto', width}} className='pb-5'>
        <h1 className='d-flex justify-content-center p-3' style={{fontFamily: "Libre Baskerville", fontWeight: '700', fontStyle: 'normal'}}>QUALIFICATION</h1>
        
        <Row className='d-flex'>

          <Col md={6} sm={12} className='pt-5' style={{transition: 'all 0.5s ease'}}>
            <h3 style={{fontFamily: "Libre Baskerville", fontWeight: '700', fontStyle: 'normal'}}>Education</h3>
            <Accordion defaultActiveKey="0" >
              <Card>
                <Card.Header style={{padding: '0px', margin: '0px'}}>
                  <ContextAwareToggle eventKey="0">Bachelor of Engineering</ContextAwareToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0" style={{transition: 'all 0.3s ease'}}>
                  <Card.Body  style={{backgroundColor: 'rgba(238, 217, 251, 0.40) '}}>
                    <Row >
                      <Col >
                        <h5>B.E. MECHANICAL ENGINEERING</h5>
                        <h6>Anna University Regional Campus Madurai</h6>
                        <p>CGPA: 7.56</p>
                        <p>2021-2025</p>
                      </Col>
              
                      <Col className='d-flex justify-content-end' >
                        <Figure>
                          <Figure.Image width={101} height={110} alt="AURCM" src="/Qualify/au.svg" />
                        </Figure>
                      </Col>
                    </Row>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card id='mcs'>
                <Card.Header style={{padding: '0px', margin: '0px'}}>
                  <ContextAwareToggle eventKey="1">Minor Degree</ContextAwareToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1" style={{transition: 'all 0.3s ease'}}>
                  <Card.Body style={{backgroundColor: 'rgb(238, 217, 251, 0.40) '}}>
                    <Row>

                      <Col>
                        <h5>Minor in COMPUTER SCIENCE ENGINEERING <p>(Full Stack development)</p></h5>
                        <h6>Anna University Regional Campus Madurai</h6>
                        <p>2021-2025</p>
                      </Col>
                      
                      <Col className='d-flex justify-content-end'>
                        <Figure>
                          <Figure.Image width={101} height={110} alt="AURCM" src="/Qualify/au.svg" />
                        </Figure>
                      </Col>

                    </Row>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Card.Header style={{padding: '0px', margin: '0px'}}>
                  <ContextAwareToggle eventKey="2">HSC</ContextAwareToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2" style={{transition: 'all 0.3s ease'}}>
                  <Card.Body style={{backgroundColor: 'rgb(238, 217, 251, 0.40) '}}>
                    <Row>
                      <Col>
                        <h5>COMPUTER SCIENCE (Physics, Chemistry, Mathematics)</h5>
                        <h6>Muthuthevar Mukulathor Higher Secondary School</h6>
                        <p>Score: 90%</p>
                        <p>2020-2021</p>
                      </Col>
                      
                      <Col className='d-flex justify-content-end'>
                        <Figure>
                          <Figure.Image width={101} height={110} alt="MMHSS" src="/Qualify/mmhss.jpg" />
                        </Figure>
                      </Col>
                    </Row>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Card.Header style={{padding: '0px', margin: '0px'}}>
                  <ContextAwareToggle eventKey="3">SSLC</ContextAwareToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3" style={{transition: 'all 0.3s ease'}}>
                  <Card.Body style={{backgroundColor: 'rgb(238, 217, 251, 0.40) '}}>
                    <Row>

                      <Col>
                        <h5>Muthuthevar Mukulathor Higher Secondary School</h5>
                        <h6>Score: 90%</h6>
                        <p>2018-2019</p>
                      </Col>
                      
                      <Col className='d-flex justify-content-end'>
                        <Figure>
                          <Figure.Image width={101} height={110} alt="MMHSS" src="/Qualify/mmhss.jpg"/>
                        </Figure>
                      </Col>
                    </Row>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>  
          </Col>

          <Col md={6} sm={12} className='pt-5'>
            <h3 className='d-flex justify-content-end' style={{fontFamily: "Libre Baskerville", fontWeight: '700', fontStyle: 'normal'}}>Certification</h3>
            <Accordion defaultActiveKey="0">
              <Card id='cisco'>
                <Card.Header style={{padding: '0px', margin: '0px'}}>
                  <ContextAwareToggle eventKey="0">Network Technician Certification</ContextAwareToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0" style={{transition: 'all 0.3s ease'}}>
                  <Card.Body style={{backgroundColor: 'rgb(238, 217, 251, 0.40) '}}>
                    <Row>
                      <Col>
                        <h5>Network Technician Careet Path</h5>
                        <h6>CISCO</h6>
                        <p>July-2024</p>
                      </Col>
                      
                      <Col className='d-flex justify-content-end'>
                        <Figure>
                          <Figure.Image width={101} height={110}  alt="CISCO" src="/Qualify/cisco.jpg"/>
                          <Figure.Caption>
                            <a style={{backgroundColor: 'rgb(94, 32, 133)',textDecoration: 'none', justifyContent: 'center', color: 'white', fontSize: '12px'}} href='https://www.credly.com/badges/71d0eea4-9721-45f2-93ee-ba9ae5e85d87/linked_in_profile' target='blank' className='d-flex align-items-center p-1'>Verify</a>
                          </Figure.Caption>
                        </Figure>
                      </Col>
                    </Row>
          
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Card.Header style={{padding: '0px', margin: '0px'}}>
                  <ContextAwareToggle eventKey="1">C Programming</ContextAwareToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1" style={{transition: 'all 0.3s ease'}}>
                  <Card.Body style={{backgroundColor: 'rgb(238, 217, 251, 0.40) '}}>
                    <Row>
                      <Col>
                        <h5>Problem Solving through Programming in C</h5>
                        <h6>NPTEL</h6>
                        <p>April-2023</p>
                      </Col>
                      
                      <Col className='d-flex justify-content-end'>
                        <Figure>
                          <Figure.Image width={101} height={110}  alt="NPTEL" src="/Qualify/nptel.png"/>
                          <Figure.Caption>
                            <a style={{backgroundColor: 'rgb(94, 32, 133)',textDecoration: 'none', justifyContent: 'center', color: 'white', fontSize: '12px'}} href='https://archive.nptel.ac.in/content/noc/NOC23/SEM1/Ecertificates/106/noc23-cs53/Course/NPTEL23CS53S3411112604325463.jpg' target='blank' className='d-flex align-items-center p-1'>Verify</a>
                          </Figure.Caption>
                        </Figure>
                      </Col>
                    </Row>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Card.Header style={{padding: '0px', margin: '0px'}}>
                  <ContextAwareToggle eventKey="2">Java Programming</ContextAwareToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2" style={{transition: 'all 0.3s ease'}}>
                  <Card.Body style={{backgroundColor: 'rgb(238, 217, 251, 0.40) '}}>
                    <Row>
                      <Col>
                        <h5>Programming in Java</h5>
                        <h6>NPTEL</h6>
                        <p>April-2023</p>
                      </Col>
                      
                      <Col className='d-flex justify-content-end'>
                        <Figure>
                          <Figure.Image width={101} height={110}  alt="NPTEL" src="/Qualify/nptel.png"/>
                          <Figure.Caption>
                            <a style={{backgroundColor: 'rgb(94, 32, 133)',textDecoration: 'none', justifyContent: 'center', color: 'white', fontSize: '12px'}} href='https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL23CS49S5411113804325463' target='blank' className='d-flex align-items-center p-1'>Verify</a>
                          </Figure.Caption>
                        </Figure>
                      </Col>
                    </Row>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Card.Header style={{padding: '0px', margin: '0px'}}>
                  <ContextAwareToggle eventKey="3">Python Programming</ContextAwareToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3" style={{transition: 'all 0.3s ease'}}>
                  <Card.Body style={{backgroundColor: 'rgb(238, 217, 251, 0.40) '}}>
                    <Row>
                      <Col>
                        <h5>Crash Course on Python</h5>
                        <h6>Grow with Google-Coursera</h6>
                        <p>March-2023</p>
                      </Col>
                      
                      <Col className='d-flex justify-content-end'>
                        <Figure>
                          <Figure.Image width={101} height={110}  alt="Grow with Google" src="/Qualify/gwg.png"/>
                          <Figure.Caption>
                            <a style={{backgroundColor: 'rgb(94, 32, 133)',textDecoration: 'none', justifyContent: 'center', color: 'white', fontSize: '12px'}} href='https://www.coursera.org/account/accomplishments/verify/7XLE8GKSFV64' target='blank' className='d-flex align-items-center p-1'>Verify</a>
                          </Figure.Caption>
                        </Figure>
                      </Col>
                    </Row>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Qualification;