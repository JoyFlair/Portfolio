"use client";
import Footer from "./components/footer";
import Header from "./components/header";
import MainInfo from "./components/maininfo";
import MainTitle from "./components/maintitle";
import {Container, Row} from 'react-bootstrap';
import SocialMedia from "./components/socialmedia";
const Main = () => {
  return (
    <>
      <Header/>
      <Container>
        <Row>
          <MainInfo/>
          <MainTitle/>
          <SocialMedia/>
          <Footer/>
        </Row>
      </Container>
    </>
  );
}

export default Main;
