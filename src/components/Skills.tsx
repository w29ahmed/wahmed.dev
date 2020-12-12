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
          <Col sm="12" md="12" lg="4">
            <Card className="skill-card">
              <Card.Header>
                <h2>Languages</h2>
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
          <Col sm="12" md="6" lg="4" className="middle-card">
            <Card className="skill-card">
              <Card.Header>
                <h2>Libraries & Frameworks</h2>
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
          <Col sm="12" md="6" lg="4">
            <Card className="skill-card">
              <Card.Header>
                <h2>Tools & Technologies</h2>
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
