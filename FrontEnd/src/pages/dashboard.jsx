import {
  Container,
  Row,
  Col,
  Card,
  ProgressBar,
  Button,
} from "react-bootstrap";

const Dashboard = () => {
  return (
    <Container fluid className="bg-light min-vh-100 p-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold">Welcome Back, Priya 👋</h2>

          <p className="text-muted mb-0">
            Here's what's happening in your learning journey.
          </p>
        </div>

        <Button variant="primary">
          Explore Skills
        </Button>
      </div>

      {/* Top Stats Cards */}
      <Row className="g-4 mb-5">
        <Col lg={3} md={6}>
          <Card className="border-0 shadow-sm text-center p-4 dashboard-card">
            <h2 className="fw-bold text-primary">3</h2>

            <p className="text-muted mb-0">
              Active Swaps
            </p>
          </Card>
        </Col>

        <Col lg={3} md={6}>
          <Card className="border-0 shadow-sm text-center p-4 dashboard-card">
            <h2 className="fw-bold text-success">8</h2>

            <p className="text-muted mb-0">
              Completed Sessions
            </p>
          </Card>
        </Col>

        <Col lg={3} md={6}>
          <Card className="border-0 shadow-sm text-center p-4 dashboard-card">
            <h2 className="fw-bold text-warning">24</h2>

            <p className="text-muted mb-0">
              Hours Learned
            </p>
          </Card>
        </Col>

        <Col lg={3} md={6}>
          <Card className="border-0 shadow-sm text-center p-4 dashboard-card">
            <h2 className="fw-bold text-danger">5</h2>

            <p className="text-muted mb-0">
              Badges Earned
            </p>
          </Card>
        </Col>
      </Row>

      {/* Bottom Section */}
      <Row className="g-4">
        {/* Progress Section */}
        <Col lg={7}>
          <Card className="border-0 shadow-sm p-4 h-100">
            <h4 className="fw-bold mb-4">
              Skill Progress
            </h4>

            <div className="mb-4">
              <div className="d-flex justify-content-between">
                <span>UI/UX Design</span>
                <span>75%</span>
              </div>

              <ProgressBar
                now={75}
                variant="primary"
                className="mt-2"
              />
            </div>

            <div className="mb-4">
              <div className="d-flex justify-content-between">
                <span>React</span>
                <span>40%</span>
              </div>

              <ProgressBar
                now={40}
                variant="success"
                className="mt-2"
              />
            </div>

            <div>
              <div className="d-flex justify-content-between">
                <span>JavaScript</span>
                <span>65%</span>
              </div>

              <ProgressBar
                now={65}
                variant="warning"
                className="mt-2"
              />
            </div>
          </Card>
        </Col>

        {/* Badge Section */}
        <Col lg={5}>
          <Card className="border-0 shadow-sm p-4 h-100">
            <h4 className="fw-bold mb-4">
              Recent Badges
            </h4>

            <div className="d-flex flex-wrap gap-3">
              <div className="badge-box">
                🏆 Quick Learner
              </div>

              <div className="badge-box">
                ⭐ Helpful Mind
              </div>

              <div className="badge-box">
                🔥 Consistent
              </div>

              <div className="badge-box">
                🚀 Fast Progress
              </div>
            </div>

            {/* Recent Activity */}
            <div className="mt-5">
              <h5 className="fw-bold mb-3">
                Recent Activity
              </h5>

              <div className="activity-item mb-3">
                Completed React Session
              </div>

              <div className="activity-item mb-3">
                Earned "Quick Learner" Badge
              </div>

              <div className="activity-item">
                New Match Request Received
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;