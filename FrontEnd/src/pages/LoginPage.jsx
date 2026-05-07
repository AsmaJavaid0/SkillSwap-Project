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

      {/* 2. THE MAIN BODY (CENTERED CONTENT) */}
      <Row className="flex-grow-1 m-0 justify-content-center align-items-center">
        
        {/* Changed lg={7} to md={6} or lg={5} for a tighter, centered look */}
        <Col xs={11} sm={8} md={6} lg={4} className="py-5">
          
          
          <LoginForm />
        </Col>

      </Row>
    </Container>
  );
};

export default LoginPage;