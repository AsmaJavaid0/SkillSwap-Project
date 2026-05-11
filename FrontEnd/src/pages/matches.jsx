import { Container, Row, Col, Card, Button } from "react-bootstrap";
import skillsData from "../data/skillsData";

const Matches = () => {
  return (
    <Container className="py-4">
      <h3 className="mb-4">Your Matches</h3>

      <Row>
        {skillsData.slice(0, 2).map((user) => (
          <Col md={6} key={user.id}>
            <Card className="shadow-sm border-0 mb-4">
              <Card.Body>
                <div className="d-flex align-items-center gap-3">
                  <img
                    src={user.image}
                    alt={user.name}
                    className="rounded-circle"
                    width="70"
                    height="70"
                  />

                  <div>
                    <h5>{user.name}</h5>

                    <p className="mb-1">
                      <strong>Teaches:</strong> {user.teaches}
                    </p>

                    <p className="mb-1">
                      <strong>Wants:</strong> {user.learns}
                    </p>
                  </div>
                </div>

                <div className="mt-3 d-flex gap-2">
                  <Button variant="outline-danger">
                    Reject
                  </Button>

                  <Button variant="primary">
                    Accept Match
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Matches;