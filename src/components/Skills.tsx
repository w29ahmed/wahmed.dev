import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import "./styles/Skills.scss";

const Skills = () => {
  return (
    <section id="skills">
      <Container fluid>
        <h1>
          Skills <hr />
        </h1>

        <Row className="skill-cards">
          <Col>
            <Card className="skill-card">
              <Card.Header>
                <h3>Languages</h3>
              </Card.Header>
              <Card.Body>
                <Badge pill variant="primary">
                  test
                </Badge>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="skill-card">
              <Card.Header>
                <h3>Languages</h3>
              </Card.Header>
              <Card.Body>
                <Badge pill variant="primary">
                  test
                </Badge>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="skill-card">
              <Card.Header>
                <h3>Languages</h3>
              </Card.Header>
              <Card.Body>
                <Badge pill variant="primary">
                  test
                </Badge>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
