import React from 'react';
import { Container, Row, Col, Button, Form, InputGroup } from 'react-bootstrap';

const Home = () => {
  return (
    <Container className="py-5">
      {/* Hero Section */}
      <Row className="align-items-center mb-5">
        <Col lg={6} md={12} className="text-start">
          <h1 className="display-3 fw-bold mb-3" style={{ color: '#2D2D5F' }}>
            Exchange Skills, <br />
            <span style={{ color: '#6366F1' }}>Grow Together</span>
          </h1>
          <p className="lead text-secondary mb-4">
            Learn what you need, teach what you know. <br />
            Connect, collaborate, and grow together.
          </p>
          <div className="d-flex gap-3 mb-4">
            <Button size="lg" style={{ backgroundColor: '#6366F1', border: 'none', padding: '12px 30px' }}>
              Find Skills
            </Button>
            <Button variant="outline-primary" size="lg" style={{ color: '#6366F1', borderColor: '#6366F1', padding: '12px 30px' }}>
              Offer a Skill
            </Button>
          </div>
        </Col>

        <Col lg={6} md={12} className="text-center">
          {/* Replace 'hero-img.png' with your actual image path */}
          <img 
            src="/path-to-your-image.png" 
            alt="Skill Swap Illustration" 
            className="img-fluid" 
          />
        </Col>
      </Row>

      {/* Search Bar Section */}
      <Row>
        <Col lg={6}>
          <InputGroup className="mb-3 shadow-sm" style={{ borderRadius: '10px', overflow: 'hidden' }}>
            <InputGroup.Text bg="white" border="end-0">
              <i className="bi bi-search"></i> {/* Ensure bootstrap-icons is installed */}
            </InputGroup.Text>
            <Form.Control
              placeholder="What do you want to learn?"
              aria-label="Search"
              style={{ height: '50px', borderLeft: 'none' }}
            />
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;