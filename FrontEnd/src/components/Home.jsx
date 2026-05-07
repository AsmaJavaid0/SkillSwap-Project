import React from 'react';
import { Container, Row, Col, Button, Form, InputGroup } from 'react-bootstrap';

const Home = () => {
  return (
    <Container className="py-5">
      {/* Hero Section */}
      <Row className="justify-content-center text-center mb-5">
        <Col lg={8} md={10}>
          <h1 className="display-3 fw-bold mb-3" style={{ color: '#2D2D5F' }}>
            Exchange Skills, <br />
            <span style={{ color: '#6366F1' }}>Grow Together</span>
          </h1>
          <p className="lead text-secondary mb-4">
            Learn what you need, teach what you know. <br />
            Connect, collaborate, and grow together.
          </p>
          
          <div className="d-flex gap-3 justify-content-center mb-5">
            <Button size="lg" style={{ backgroundColor: '#6366F1', border: 'none', padding: '12px 30px' }}>
              Find Skills
            </Button>
            <Button 
  variant="outline-primary" 
  size="lg" 
  className="text-white" // Bootstrap utility to force white text
  style={{ 
    backgroundColor: '#6366F1', // Give it a background so white text is visible
    color: '#FFFFFF',           // Explicitly set text to white
    borderColor: '#6366F1', 
    padding: '12px 30px' 
  }}
>
  Offer a Skill
</Button>
          </div>

          {/* Search Bar centered under buttons */}
          <div className="d-flex justify-content-center">
            <InputGroup className="mb-3 shadow-sm" style={{ borderRadius: '10px', overflow: 'hidden', maxWidth: '600px' }}>
              <InputGroup.Text bg="white" className="bg-white border-end-0">
                <i className="bi bi-search"></i>
              </InputGroup.Text>
              <Form.Control
                placeholder="What do you want to learn?"
                aria-label="Search"
                style={{ height: '50px', borderLeft: 'none' }}
              />
            </InputGroup>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;