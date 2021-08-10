import React, { Component } from 'react';
import './style.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "WebBrain Academy",
      count: 1,
      width: 100,
      height: 100
    };
  }
  render() {
    const change = () => {
      this.setState({ title: "IT Academy" });
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
    const titleChange = (e) => {
      console.log(e.target.value);
      this.setState({ title: e.target.value });
    };
    const onWidth = (e) => {
      this.setState({ width: e.target.value });
    };
    const onHeight = (e) => {
      this.setState({ height: e.target.value });
    };
    return (
      <div>
        <h1>{this.state.title} {this.state.count}</h1>
        <input type="text" onChange={titleChange} />
        <button onClick={change}>change</button>
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>

        <hr />

        <input onChange={onWidth} type="text" placeholder="width" />
        <input onChange={onHeight} type="text" placeholder="height" />

        <div style={{
          width: `${this.state.width}px`,
          height: `${this.state.height}px`,
        }}
          className="box">Box</div>
      </div>
    )
  }
}
