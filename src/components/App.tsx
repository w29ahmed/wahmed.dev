import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Header from "./Header";

const App = () => {
  return (
    <Container fluid>
      <Header />
      <Jumbotron>
        <h1>
          Waleed Ahmed
        </h1>
      </Jumbotron>
    </Container>
  );
};

export default App;
