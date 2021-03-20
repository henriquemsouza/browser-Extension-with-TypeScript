import ReactDOM from "react-dom";

import React from "react";
import styles from "./styles/styles";
import { Button, Card, Container, Row } from "react-bootstrap";

export class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { text: "" };
  }

  private async getJoke() {
    let joke: any;
    await fetch("https://icanhazdadjoke.com/slack")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        joke = data.attachments[0].text as string;
      });
    return joke;
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
                this.getJoke().then((x) => {
                  this.setState({ text: x });
                });
              }}
            >
              Generate joke
            </Button>{' '}
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
