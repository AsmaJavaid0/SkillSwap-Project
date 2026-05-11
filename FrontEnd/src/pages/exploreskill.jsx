import { Container, Row, Col, Form } from "react-bootstrap";
import SkillCard from "../components/SkillCard";
import skillsData from "../data/skillsData";

const ExploreSkills = () => {
  return (
    <Container fluid className="bg-light min-vh-100 p-4">
      <Row>
        {/* Sidebar */}
        <Col md={2}>
          <div className="bg-white p-3 rounded shadow-sm">
            <h5 className="mb-3">Filters</h5>

            <h6 className="mb-2">Categories</h6>

            <Form.Check label="All" className="mb-2" />
            <Form.Check label="Design" className="mb-2" />
            <Form.Check label="Programming" className="mb-2" />
            <Form.Check label="Marketing" className="mb-2" />
            <Form.Check label="Business" className="mb-3" />

            <hr />

            <h6 className="mb-2">Level</h6>

            <Form.Check label="Beginner" className="mb-2" />
            <Form.Check label="Intermediate" className="mb-2" />
            <Form.Check label="Advanced" className="mb-2" />
          </div>
        </Col>

        {/* Main Content */}
        <Col md={10}>
          {/* Top Section */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h3 className="fw-bold mb-1">Explore Skills</h3>
              <p className="text-muted">
                Find people to learn and teach skills
              </p>
            </div>

            <Form.Control
              type="text"
              placeholder="Search people or skills..."
              style={{ width: "300px" }}
            />
          </div>

          {/* Cards */}
          <Row>
            {skillsData.map((user) => (
              <Col lg={4} md={6} className="mb-4" key={user.id}>
                <SkillCard user={user} />
              </Col>
            ))}
          </Row>

          {/* Matches Section */}
          <div className="mt-5">
            <h3 className="fw-bold mb-4">Your Matches</h3>

            <Row>
              {skillsData.slice(0, 2).map((user) => (
                <Col md={6} key={user.id}>
                  <div className="bg-white p-4 rounded shadow-sm mb-4">
                    <div className="d-flex align-items-center">
                      <img
                        src={user.image}
                        alt={user.name}
                        className="rounded-circle me-3"
                        width="70"
                        height="70"
                      />

                      <div>
                        <h5 className="mb-1">{user.name}</h5>

                        <p className="mb-1">
                          <strong>You Learn:</strong> {user.teaches}
                        </p>

                        <p className="mb-0">
                          <strong>You Teach:</strong> {user.learns}
                        </p>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ExploreSkills;