import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import content from "./content.json";
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
                {content.skills.languages.map((language) => (
                  <Badge pill variant="primary">
                    {language}
                  </Badge>
                ))}
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="skill-card">
              <Card.Header>
                <h3>Libraries & Frameworks</h3>
              </Card.Header>
              <Card.Body>
                {content.skills.libraries.map((library) => (
                  <Badge pill variant="primary">
                    {library}
                  </Badge>
                ))}
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="skill-card">
              <Card.Header>
                <h3>Tools & Technologies</h3>
              </Card.Header>
              <Card.Body>
                {content.skills.tools.map((tool) => (
                  <Badge pill variant="primary">
                    {tool}
                  </Badge>
                ))}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
