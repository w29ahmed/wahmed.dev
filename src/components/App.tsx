import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";

function App() {
  return (
    <Container className="p-3">
      <Jumbotron>
        <h1 className="header">
          Welcome To React-Bootstrap TypeScript Example
        </h1>
      </Jumbotron>

      <h1 className="header">Hello World</h1>
      <Button variant="primary" className="mr-1">
        Primary
      </Button>
    </Container>
  );
}

export default App;
