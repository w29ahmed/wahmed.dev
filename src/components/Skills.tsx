import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import skills from "./content/skills.json";
import "./styles/Skills.scss";

interface SkillsProps {
  darkTheme: boolean;
}

const Skills = (props: SkillsProps) => {
  return (
    <section id="skills">
      <Container fluid>
        <h1>
          Skills <hr />
        </h1>

        <Row className="skill-cards">
          <Col sm="12" md="12" lg="4">
            <Card
              className="skill-card"
              bg={props.darkTheme ? "dark" : "light"}
              text={props.darkTheme ? "light" : "dark"}
            >
              <Card.Header>
                <h2>Languages</h2>
              </Card.Header>
              <Card.Body>
                {skills.languages.map((language) => (
                  <Badge pill variant="primary">
                    {language}
                  </Badge>
                ))}
              </Card.Body>
            </Card>
          </Col>
          <Col sm="12" md="6" lg="4" className="middle-card">
            <Card
              className="skill-card"
              bg={props.darkTheme ? "dark" : "light"}
              text={props.darkTheme ? "light" : "dark"}
            >
              <Card.Header>
                <h2>Libraries & Frameworks</h2>
              </Card.Header>
              <Card.Body>
                {skills.libraries.map((library) => (
                  <Badge pill variant="primary">
                    {library}
                  </Badge>
                ))}
              </Card.Body>
            </Card>
          </Col>
          <Col sm="12" md="6" lg="4">
            <Card
              className="skill-card"
              bg={props.darkTheme ? "dark" : "light"}
              text={props.darkTheme ? "light" : "dark"}
            >
              <Card.Header>
                <h2>Tools & Technologies</h2>
              </Card.Header>
              <Card.Body>
                {skills.tools.map((tool) => (
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
