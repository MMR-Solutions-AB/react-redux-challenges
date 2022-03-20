import React from "react";

export default class Challenge6 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  add() {
    this.setState((oldState) => ({ counter: oldState.counter + 1 }));
  }

  remove() {
    this.setState((oldState) => ({ counter: oldState.counter - 1 }));
  }

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={() => this.add()}>+</button>
        <button onClick={() => this.remove()}>-</button>
      </div>
    );
  }
}
