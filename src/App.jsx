import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "WebBrain Academy",
      count: 1
    };
  }
  render() {
    const change = () => {
      this.setState({ title: "IT Academy" })
    };

    const plus = () => {
      if (this.state.count < 10)
        this.setState({ count: this.state.count + 1 });
      if (this.state.count === 10)
        this.setState({ count: 0 });
    };
    const minus = () => {
      if (this.state.count > 0)
        this.setState({ count: this.state.count - 1 });
      if (this.state.count === 0)
        this.setState({ count: 10 });
    };
    return (
      <div>
        <h1>{this.state.title} {this.state.count}</h1>
        <button onClick={change}>change</button>
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
      </div>
    )
  }
}
