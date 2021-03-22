import ReactDOM from "react-dom";

import React from "react";
import styles from "./styles/styles";
import { Button, Card, Container, Row } from "react-bootstrap";
import { GetJoke } from "./utils/getInfo";

export class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { text: "" };
  }

  render() {
    return (
      <div style={styles.mainDiv}>
        <Container>
          <Row>
            <Card>
              <Card.Body>{this.state.text}</Card.Body>
            </Card>
          </Row>
          <Row>
            <Button
              variant="outline-primary"
              size="lg"
              onClick={() => {
                GetJoke().then((x) => {
                  this.setState({ text: x });
                });
              }}
            >
              Generate joke
            </Button>{" "}
          </Row>
        </Container>
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
