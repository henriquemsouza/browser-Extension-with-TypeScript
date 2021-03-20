import ReactDOM from "react-dom";

import React from "react";
import styles from "./styles/styles";

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
        <span>{this.state.text}</span>

        <button
          onClick={() => {
            this.getJoke().then((x) => {
              this.setState({ text: x });
            });
          }}
        >
          Generate joke
        </button>
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
