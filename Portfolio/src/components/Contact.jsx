import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import Stack from 'react-bootstrap/esm/Stack';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useResponsiveWidth } from '../Func';

const Contact = () => {

  const width = useResponsiveWidth();
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

    const subject = `Message from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage: ${message}`;
    const mailtoLink = `mailto:veeramanikandan.kravi@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  
  return (
    <div className='pb-4' id='contact' style={{fontFamily: "Libre Baskerville", fontWeight: '700', fontStyle: 'normal'}}>
      <Container className=' justify-content-center p-5' style={{width}}>
        <h4 style={{fontFamily: "Libre Baskerville", fontWeight: '700', fontStyle: 'normal'}}>Drop Me a Line</h4>
      
        <Form noValidate validated={validated} onSubmit={handleSubmit} style={{fontFamily: "Libre Baskerville", fontWeight: '400'}} >
          <Stack>

            <Form.Group as={Col} controlId="validationCustom01" className='pb-3 pt-4'>
              <Form.Label>Name</Form.Label>
              <Form.Control required type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} controlId="validationCustom02" className='pb-3'>
              <Form.Label>Email</Form.Label>
              <Form.Control required type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} controlId="validationCustom02" className='pb-3'>
              <Form.Label>Comments</Form.Label>
              <Form.Control required as="textarea" rows={3} placeholder="Write you thought about me" value={message} onChange={(e) => setMessage(e.target.value)} />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Row className='justify-content-center' >
              <Button type="submit" style={{width: '20vw', backgroundColor: 'rgb(151, 68, 202)', borderColor: 'white'}}>Submit</Button>
            </Row>
          </Stack>
        </Form>
   
      </Container>
    </div>
  )
}

export default Contact;