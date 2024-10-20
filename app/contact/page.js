'use client';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Image from 'next/image';
import React from 'react';

const Contact = () => {
  return (
  <>
  
  <Container className='mt-5'>
        <Row>
          <Col sm={6} className='text-center'>
            <h1>My Contact</h1>
          </Col>

          <Col sm={6} className='mt-3 d-flex justify-content-start'>
            <Button variant='success' href={"/"}>Profile</Button> &nbsp;
            <Button variant='success' href={"/about"}>About</Button> &nbsp;
            <Button variant='success' href={"/Gallery"}>Gallery</Button> &nbsp;
            <Button variant='success' href={"/Hobbies"}>Hobbies</Button> &nbsp;

          </Col>
        </Row>
        <Row>
          <Col sm={6} className='mt-5'>
            <Image
              src={'/images/3.jpg'}
              width={250}
              height={300}
              alt='Image'
            />
          </Col>
          <Col sm={6} className='mt-5'>
          <p>Contact no. <spam> 09366154606</spam></p>
          <p>Email: <spam>llegunas02@gmail.com</spam></p>
          <p>Social Med: <spam>Joie llegunas</spam></p>
          </Col>
          </Row>
          </Container>
  </>
  )
}

export default Contact
