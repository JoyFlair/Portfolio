import {Button, Col} from 'react-bootstrap';

const SocialMedia = () => {
  return (
    <>
      <Col lg="12" className="text-center">
        <h3>My Social Media</h3>
        <Button variant='primary' href={"/about"}>Facebook</Button> &nbsp;
        <Button variant='success' href={"/instagram"}>Instagram</Button> &nbsp;
   
      </Col>
    </>
  )
}

export default SocialMedia;