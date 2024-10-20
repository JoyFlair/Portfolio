import {Col, Image} from 'react-bootstrap';

const MainTitle = () => {
  return (
    <>
      <Col lg="6" className="text-center mt-5">
        <Image src="/images/1.jpg" width={200} height={200} roundedCircle thumbnail/>
        <h1 className='mt-3'>Joie llegunas</h1>
      </Col>
    </>
  )
}

export default MainTitle;

