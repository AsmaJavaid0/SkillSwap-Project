import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LoginForm from '../components/LoginForm';
import { Link } from 'react-router-dom';
import './LoginPage.css';


const LoginPage = () => {
  return (
    <Container fluid className="vh-100 d-flex flex-column p-0 bg-white">
      
      {/* 1. THE UPPER PART (HEADER) */}
      <header className="d-flex justify-content-between align-items-center px-lg-5 px-4 py-3">
        <div className="d-flex align-items-center fw-bold fs-4">
          <img src="images/logo.png" alt="Logo" height="32" className="me-2" />
          <span style={{ color: '#2D2D2D' }}>SkillSwap</span>
        </div>
        <div className="text-muted small d-flex align-items-center">
  New here? 
  <Link 
    to="/signup" 
    className="btn btn-primary btn-sm fw-bold ms-2"
  >
    Sign up
  </Link>
</div>
      </header>

      {/* 2. THE MAIN BODY (SPLIT SCREEN) */}
      <Row className="flex-grow-1 m-0">
        
        {/* LEFT SIDE: Your LoginForm fits here */}
        <Col lg={7} className="d-flex align-items-center justify-content-center py-5">
          <LoginForm />
        </Col>

        {/* RIGHT SIDE: The Purple Panel with Quote */}
        <Col lg={5} className="d-none d-lg-flex flex-column align-items-center justify-content-center p-5 right-panel-bg">
          <div className="quote-container mb-5">
             <span className="quote-mark">“</span>
             <h4 className="quote-text">
               The beautiful thing about learning is that no one can take it away from you.
             </h4>
             <span className='quote-mark'>”</span>
             <p className="quote-author">— B.B. King</p>
          </div>
          
          <img 
            src="https://illustrations.popsy.co/purple/online-learning.svg" 
            alt="Learning Illustration" 
            className="img-fluid illustration-img"
          />

          {/* Dots at the bottom */}
          <div className="d-flex gap-2 mt-5">
            <div className="dot active"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </Col>

      </Row>
    </Container>
  );
};

export default LoginPage;