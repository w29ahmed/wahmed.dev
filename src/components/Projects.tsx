import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/esm/Card";
import Badge from "react-bootstrap/Badge";
import { FaGithub } from "react-icons/fa";
import projects from "./content/projects.json";
import "./styles/Projects.scss";

interface ProjectsProps {
  darkTheme: boolean;
}

const Projects = (props: ProjectsProps) => {
  return (
    <section id="projects">
      <Container fluid>
        <h1>
          Projects <hr />
        </h1>

        <Row className="project-row">
          {projects.projects.map((project) => (
            <Col lg="4" md="6" className="card-col">
              <Card
                bg={props.darkTheme ? "dark" : "light"}
                text={props.darkTheme ? "light" : "dark"}
              >
                <Card.Header>
                  <h2>{project.title}</h2>
                  {project.githubLinks.map((ghLink) => (
                    <a href={ghLink} target="_blank" rel="noopener noreferrer">
                      <FaGithub className="github-icon" />
                    </a>
                  ))}
                </Card.Header>

                <Card.Body>
                  {project.skills.map((skill) => (
                    <Badge pill variant="primary">
                      {skill}
                    </Badge>
                  ))}

                  <ul>
                    {project.bullets.map((bullet) => (
                      <li dangerouslySetInnerHTML={{ __html: bullet }} />
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
