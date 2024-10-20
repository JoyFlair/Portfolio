"use client"
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <>
      <Navbar bg="light" variant="light" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href={'/'}>Joie llegunas</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarCollapse" />
          <Navbar.Collapse id="navbarCollapse">
            <Nav className="me-auto"> {/* Note: "mr-auto" is now "me-auto" in Bootstrap 5 */}
              <Nav.Link href={'/'}>Home</Nav.Link>
              <Nav.Link href={'/about'}>About</Nav.Link>
              {/* <Nav.Link href={'/contact'}>Contact</Nav.Link>
              <Nav.Link href={'/services'}>Services</Nav.Link>
              <Nav.Link href={'/project'}>Project</Nav.Link> */}
              <NavDropdown title="Other Pages" id="navbarDropdownBlog">
                <NavDropdown.Item href="#">Other Page 1</NavDropdown.Item>
                <NavDropdown.Item href="/Home/ForAuthUser">Other Page 2</NavDropdown.Item>
                <NavDropdown.Item href="/Home/ForRoleUser">Other Page 3</NavDropdown.Item>
                <NavDropdown.Divider />
                {/* <NavDropdown.Item href={'https://github.com/Dukz17'}>Github</NavDropdown.Item>
                <NavDropdown.Item href={'https://www.facebook.com/dykjs/'}>Facebook</NavDropdown.Item>
                <NavDropdown.Divider /> */}
                <NavDropdown.Item href="">Weather Forecast</NavDropdown.Item>
                <NavDropdown.Item href="/crudsample">CRUD Sample</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>//End Fragment
  )
}

export default Header;
