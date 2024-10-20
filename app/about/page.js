'use client';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Image from 'next/image';
import React from 'react';

const About = () => {
    return (
        <>
           <Container className='mt-5'>
        <Row>
          <Col sm={6} className='text-center'>
            <h1>About</h1>
          </Col>

          <Col sm={6} className='mt-3 d-flex justify-content-start'>
            <Button variant='success' href={"/"}>Profile</Button> &nbsp;
            <Button variant='success' href={"/contact"}>Contact</Button> &nbsp;
            <Button variant='success' href={"/Gallery"}>Gallery</Button> &nbsp;
            <Button variant='success' href={"/Hobbies"}>Hobbies</Button> &nbsp;

          </Col>
        </Row>
        <Row>
          <Col sm={6} className='mt-5'>
            <Image
              src={'/images/2.jpg'}
              width={250}
              height={300}
              alt='Image'
            />
          </Col>
          <Col sm={6} className='mt-5'>
          <p>Joie llegunas "JOY-JOY" is Born in october 5, 2002. she graduated shs at san andress national high school kadingilan bukidnon at 2021. beside of that  her hobbies when it gets bored is to play guitar while singing. at the age of 8 she enters different singing contest up until now. and grown up as a well woman. she studied her college days at PHINMA Cagayan de oro college with the bachelor of science in Information technology major of Web development 4rth year student. </p>
          </Col>
          </Row>
            </Container>
        </>
    )
}

export default About
