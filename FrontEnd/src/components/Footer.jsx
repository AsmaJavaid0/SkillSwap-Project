import React from 'react';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
// Note: You'll need to install react-icons: npm install react-icons
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPaperPlane } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#0b1426', color: '#fff', padding: '60px 0 20px' }}>
      <Container>
        <Row className="gy-4">
          {/* Brand and Description */}
          <Col lg={3} md={6}>
            <div className="d-flex align-items-center mb-3">
              <div 
                className="bg-primary rounded-circle d-flex justify-content-center align-items-center me-2" 
                style={{ width: '32px', height: '32px' }}
              >
                <span className="fw-bold" style={{ fontSize: '14px' }}>S</span>
              </div>
              <h5 className="mb-0 fw-bold">SkillSwap</h5>
            </div>
            <p className="text-secondary small" style={{ lineHeight: '1.6' }}>
              Exchange skills, grow together, <br /> and build a better tomorrow.
            </p>
            <div className="d-flex gap-3 mt-4">
              <FaFacebookF className="text-secondary" style={{ cursor: 'pointer' }} />
              <FaTwitter className="text-secondary" style={{ cursor: 'pointer' }} />
              <FaInstagram className="text-secondary" style={{ cursor: 'pointer' }} />
              <FaLinkedinIn className="text-secondary" style={{ cursor: 'pointer' }} />
            </div>
          </Col>

          {/* Platform Links */}
          <Col lg={2} md={6}>
            <h6 className="fw-bold mb-4">Platform</h6>
            <ul className="list-unstyled text-secondary small">
              <li className="mb-2">Explore Skills</li>
              <li className="mb-2">How it Works</li>
              <li className="mb-2">Become a Teacher</li>
              <li className="mb-2">Community</li>
            </ul>
          </Col>

          {/* Resources Links */}
          <Col lg={2} md={6}>
            <h6 className="fw-bold mb-4">Resources</h6>
            <ul className="list-unstyled text-secondary small">
              <li className="mb-2">Blog</li>
              <li className="mb-2">Help Center</li>
              <li className="mb-2">Guidelines</li>
              <li className="mb-2">Contact Us</li>
            </ul>
          </Col>

          {/* Company Links */}
          <Col lg={2} md={6}>
            <h6 className="fw-bold mb-4">Company</h6>
            <ul className="list-unstyled text-secondary small">
              <li className="mb-2">About Us</li>
              <li className="mb-2">Careers</li>
              <li className="mb-2">Privacy Policy</li>
              <li className="mb-2">Terms of Service</li>
            </ul>
          </Col>

          {/* Newsletter Section */}
          <Col lg={3} md={6}>
            <h6 className="fw-bold mb-4">Newsletter</h6>
            <p className="text-secondary small mb-3">
              Stay updated with our latest news and features.
            </p>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Enter your email"
                className="bg-transparent border-secondary text-white small"
                style={{ borderRadius: '4px 0 0 4px shadow-none' }}
              />
              <Button variant="primary" style={{ borderRadius: '0 4px 4px 0' }}>
                <FaPaperPlane size={14} />
              </Button>
            </InputGroup>
          </Col>
        </Row>

        <hr className="border-secondary mt-5 mb-4" />

        <Row>
          <Col className="text-center">
            <p className="text-secondary" style={{ fontSize: '12px' }}>
              © 2024 SkillSwap. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;