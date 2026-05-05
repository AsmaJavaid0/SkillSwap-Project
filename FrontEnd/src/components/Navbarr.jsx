import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';      
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';  


const Navbarr = () => {
    return(
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">
                    <img
                        src="/images/logo.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top me-2"
                        alt="Skill Sync Hub Logo"
                    />
                    Skill Sync Hub
                </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/explore">Explore Skills</Nav.Link>
            <Nav.Link as={Link} to="/how-it-works">How it Works</Nav.Link>
            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
          </Nav>

                       {/* Right-aligned Buttons */}
                    <Nav className="ms-auto d-flex align-items-center">
                        <Nav.Link as={Link} to="/login" className="me-2">
                            Login
                        </Nav.Link>
                        <Button as={Link} to="/signup" variant="primary">
                            Sign Up
                        </Button>
                    </Nav>
        </Navbar.Collapse>
      
      </Container>
    </Navbar>

    )
}
export default Navbarr;  