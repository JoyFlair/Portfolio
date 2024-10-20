'use client';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Image from 'next/image';
import React from 'react';

const Hobby = () => {
  return (
    <Container className='mt-5'>
        <Row>
          <Col sm={6} className='text-center'>
            <h1>Hobbies</h1>
          </Col>

          <Col sm={6} className='mt-3 d-flex justify-content-start'>
            <Button variant='success' href={"/"}>Profile</Button> &nbsp;
            <Button variant='success' href={"/about"}>About</Button> &nbsp;
            <Button variant='success' href={"/contact"}>Contact</Button> &nbsp;
            <Button variant='success' href={"/Gallery"}>Gallery</Button> &nbsp;

          </Col>
          <Col sm={6} className='mt-5'>
            <Image
              src={'/images/12.jpg'}
              width={400}
              height={300}
              alt='Image'
            />
          </Col>
          <Col sm={6} className='mt-5'>
          <Row className='mt-5'>
          <Col>
            <h2>Hobbies and Interests</h2>
            <ul>
              <li>Playing guitar</li>
              <li>Reading fantasy and  Romance novels</li>
              <li>Hiking and outdoor activities</li>
              <li>Photography</li>
              <li>Cooking and experimenting with new recipes</li>
            </ul>
          </Col>
        </Row>
          </Col>
        </Row>
      
        </Container>
  )
}

export default Hobby
