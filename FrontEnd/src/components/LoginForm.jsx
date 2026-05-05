import React from 'react';
import { Form, Button, InputGroup, Row, Col } from 'react-bootstrap';
import { Mail, Lock, Eye } from 'lucide-react';

const LoginForm = () => {
  return (
    <div className="login-form-container w-100" style={{ maxWidth: '400px' }}>
      {/* Header Text */}
      <h2 className="fw-bold mb-1">Welcome back!</h2>
      <p className="text-muted mb-4">Login to continue your learning journey</p>

      <Form>
        {/* Email Field */}
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label className="small fw-bold">Email or Username</Form.Label>
          <InputGroup className="custom-input-group">
            <InputGroup.Text className="bg-white border-end-0">
              <Mail size={18} className="text-muted" />
            </InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Enter your email or username"
              className="border-start-0 ps-0 py-2"
            />
          </InputGroup>
        </Form.Group>

        {/* Password Field */}
        <Form.Group className="mb-3" controlId="formPassword">
          <div className="d-flex justify-content-between">
            <Form.Label className="small fw-bold">Password</Form.Label>
            <a href="#" className="small text-primary text-decoration-none">Forgot password?</a>
          </div>
          <InputGroup className="custom-input-group">
            <InputGroup.Text className="bg-white border-end-0">
              <Lock size={18} className="text-muted" />
            </InputGroup.Text>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              className="border-start-0 ps-0 py-2"
            />
            <InputGroup.Text className="bg-white border-start-0">
              <Eye size={18} className="text-muted" style={{ cursor: 'pointer' }} />
            </InputGroup.Text>
          </InputGroup>
        </Form.Group>

        {/* Remember Me */}
        <Form.Check 
          type="checkbox" 
          id="rememberMe"
          label="Remember me" 
          className="small text-muted mb-4" 
        />

        {/* Login Button */}
        <Button variant="primary" className="w-100 py-2 fw-bold mb-4 custom-btn-primary">
          Log In
        </Button>

        {/* Divider */}
        <div className="position-relative text-center mb-4">
          <hr className="text-muted opacity-25" />
          <span className="position-absolute top-50 start-50 translate-middle bg-white px-3 small text-muted">
            or continue with
          </span>
        </div>

        {/* Social Buttons */}
<Row className="g-3 mb-4">
  <Col xs={6}>
    <Button variant="outline-secondary" className="w-100 d-flex align-items-center justify-content-center bg-white py-2 social-btn">
      <img 
        src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" 
        alt="Google" 
        width="18" 
        className="me-2" 
      />
      <span className="small fw-bold text-dark">Google</span>
    </Button>
  </Col>
  <Col xs={6}>
    <Button variant="outline-secondary" className="w-100 d-flex align-items-center justify-content-center bg-white py-2 social-btn">
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg" 
        alt="FB" 
        width="18" 
        className="me-2" 
      />
      <span className="small fw-bold text-dark">Facebook</span>
    </Button>
  </Col>
</Row>

        {/* Footer Links */}
        <p className="small text-muted text-center mt-5">
          By continuing, you agree to our <a href="#" className="text-primary text-decoration-none fw-medium">Terms of Service</a> and <a href="#" className="text-primary text-decoration-none fw-medium">Privacy Policy</a>.
        </p>
      </Form>
    </div>
  );
};

export default LoginForm;