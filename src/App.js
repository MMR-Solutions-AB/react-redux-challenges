import "./App.css";
import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Loading.",
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ message: "Loading.." });
    }, 500);
    setTimeout(() => {
      this.setState({ message: "Loading..." });
    }, 1000);
    setTimeout(() => {
      this.setState({ message: "Ready to go!" });
    }, 1500);
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}
