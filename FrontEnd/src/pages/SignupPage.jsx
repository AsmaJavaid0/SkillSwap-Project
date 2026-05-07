import React, { useState } from "react";
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import { User, Mail, Lock, Eye, EyeOff } from "lucide-react"; // Matching your project's icon choice
import { Link } from "react-router-dom";
import "./SignupPage.css";

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Container fluid className="signup-container p-0">
      <Row className="m-0 min-vh-100">
        {/* Left Side: Form */}
        <Col lg={7} className="d-flex flex-column p-5 bg-white">
          <div className="d-flex justify-content-between align-items-center mb-5">
            <div className="logo-container">
               {/* Replace with your logo image path */}
              <img src="/path-to-your-logo.png" alt="SkillSwap Logo" height="40" />
              <span className="h4 fw-bold ms-2 align-middle">SkillSwap</span>
            </div>
            <p className="mb-0">
              Already have an account? <Link to="/login" className="text-primary text-decoration-none fw-bold">Log in</Link>
            </p>
          </div>

          <div className="mx-auto" style={{ maxWidth: "450px", width: "100%" }}>
            <h2 className="fw-bold mb-1">Create your account</h2>
            <p className="text-muted mb-4">Join SkillSwap and start exchanging skills</p>

            <Form>
              <Form.Group className="mb-3">
                <Form.Label className="small fw-bold">Full Name</Form.Label>
                <InputGroup>
                  <InputGroup.Text className="bg-transparent border-end-0">
                    <User size={18} className="text-muted" />
                  </InputGroup.Text>
                  <Form.Control className="border-start-0 ps-0" type="text" placeholder="Enter your full name" />
                </InputGroup>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="small fw-bold">Email Address</Form.Label>
                <InputGroup>
                  <InputGroup.Text className="bg-transparent border-end-0">
                    <Mail size={18} className="text-muted" />
                  </InputGroup.Text>
                  <Form.Control className="border-start-0 ps-0" type="email" placeholder="Enter your email" />
                </InputGroup>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="small fw-bold">Username</Form.Label>
                <InputGroup>
                  <InputGroup.Text className="bg-transparent border-end-0">
                    <User size={18} className="text-muted" />
                  </InputGroup.Text>
                  <Form.Control className="border-start-0 ps-0" type="text" placeholder="Choose a username" />
                </InputGroup>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="small fw-bold">Password</Form.Label>
                <InputGroup>
                  <InputGroup.Text className="bg-transparent border-end-0">
                    <Lock size={18} className="text-muted" />
                  </InputGroup.Text>
                  <Form.Control className="border-start-0 border-end-0 ps-0" type={showPassword ? "text" : "password"} placeholder="Create a password" />
                  <InputGroup.Text 
                    className="bg-transparent border-start-0 cursor-pointer" 
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </InputGroup.Text>
                </InputGroup>
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label className="small fw-bold">Confirm Password</Form.Label>
                <InputGroup>
                  <InputGroup.Text className="bg-transparent border-end-0">
                    <Lock size={18} className="text-muted" />
                  </InputGroup.Text>
                  <Form.Control className="border-start-0 border-end-0 ps-0" type="password" placeholder="Confirm your password" />
                  <InputGroup.Text className="bg-transparent border-start-0">
                    <Eye size={18} />
                  </InputGroup.Text>
                </InputGroup>
              </Form.Group>

              <Form.Group className="mb-4" controlId="termsCheckbox">
                <Form.Check 
                  type="checkbox" 
                  label={<span>I agree to the <a href="#" className="text-decoration-none">Terms of Service</a> and <a href="#" className="text-decoration-none">Privacy Policy</a></span>} 
                />
              </Form.Group>

              <Button variant="primary" className="w-100 py-2 fw-bold signup-btn mb-4">
                Sign Up
              </Button>

              <div className="divider d-flex align-items-center mb-4">
                <hr className="flex-grow-1" />
                <span className="mx-2 text-muted small">or sign up with</span>
                <hr className="flex-grow-1" />
              </div>

             <Row>
  <Col>
    <Button variant="outline-light" className="w-100 d-flex align-items-center justify-content-center py-2 border text-dark shadow-sm">
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" 
        alt="Google" 
        width="20" 
        className="me-2" 
      /> 
      Google
    </Button>
  </Col>
  <Col>
   <Button variant="outline-light" className="w-100 d-flex align-items-center justify-content-center py-2 border text-dark shadow-sm">
  <img 
    src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png" 
    alt="Facebook" 
    width="20" 
    className="me-2" 
  /> 
  Facebook
</Button>  </Col>
</Row>         
   </Form>
          </div>
        </Col>

        {/* Right Side: Features/Branding */}
        <Col lg={5} className="features-sidebar p-5 d-none d-lg-flex flex-column justify-content-center">
          <h2 className="fw-bold mb-3"><span className="text-primary">Learn. Teach.</span> Grow.</h2>
          <p className="text-muted mb-5">Exchange skills, build connections and grow together.</p>

          <div className="feature-list">
            <FeatureItem 
              icon="👥" 
              title="Share Your Skills" 
              desc="Teach others what you know and help them grow." 
            />
            <FeatureItem 
              icon="📖" 
              title="Learn New Skills" 
              desc="Find people who can teach you what you need." 
            />
            <FeatureItem 
              icon="🤝" 
              title="Build Connections" 
              desc="Connect with like-minded learners and mentors." 
            />
            <FeatureItem 
              icon="📈" 
              title="Grow Together" 
              desc="Track your progress and achieve your goals." 
            />
          </div>

          <div className="mt-auto text-center">
            {/* Replace with your bottom illustration path */}
            <img src="/path-to-illustration.png" alt="Illustration" className="img-fluid rounded" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

const FeatureItem = ({ icon, title, desc }) => (
  <div className="d-flex mb-4">
    <div className="feature-icon-box me-3">{icon}</div>
    <div>
      <h6 className="fw-bold mb-1">{title}</h6>
      <p className="text-muted small mb-0">{desc}</p>
    </div>
  </div>
);

export default SignupPage;