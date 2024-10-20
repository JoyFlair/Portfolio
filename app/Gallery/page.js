
'use client';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Image from 'next/image';
import React from 'react';


        const Gallery = () => {
          return (
     <>
     <Container className='mt-5'>
        <Row>
          <Col sm={6} className='text-center'>
            <h1>Gallery</h1>
          </Col>

          <Col sm={6} className='mt-3 d-flex justify-content-start'>
            <Button variant='success' href={"/Main"}>Profile</Button> &nbsp;
            <Button variant='success' href={"/about"}>About</Button> &nbsp;
            <Button variant='success' href={"/contact"}>Contact</Button> &nbsp;
            <Button variant='success' href={"/Hobbies"}>Hobbies</Button> &nbsp;

          </Col>
        </Row>
        <Row>
        <Col sm={3} className='mt-5'>
            <Image
              src={'/images/4.jpg'}
              width={200}
              height={200}
              alt='Image'
            />
          </Col>
          <Col sm={3} className='mt-5'>
            <Image
              src={'/images/5.jpg'}
              width={200}
              height={200}
              alt='Image'
            />
          </Col>
          <Col sm={3} className='mt-5'>
            <Image
              src={'/images/6.jpg'}
              width={200}
              height={200}
              alt='Image'
            />
          </Col>
          <Col sm={3} className='mt-5'>
            <Image
              src={'/images/7.jpg'}
              width={200}
              height={200}
              alt='Image'
            />
          </Col>
          <Col sm={3} className='mt-5'>
            <Image
              src={'/images/8.jpg'}
              width={200}
              height={200}
              alt='Image'
            />
          </Col>
          <Col sm={3} className='mt-5'>
            <Image
              src={'/images/9.jpg'}
              width={200}
              height={200}
              alt='Image'
            />
          </Col>
          <Col sm={3} className='mt-5'>
            <Image
              src={'/images/10.jpg'}
              width={200}
              height={200}
              alt='Image'
            />
          </Col>
          <Col sm={3} className='mt-5'>
            <Image
              src={'/images/11.jpg'}
              width={200}
              height={200}
              alt='Image'
            />
          </Col>
          </Row>
        </Container>
     </>
          )
        }
        
        export default Gallery
        