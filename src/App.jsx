import React, { Component } from 'react';
import './style.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
    };
  }
  render() {
    const onChange = () => {
      this.setState({ isLoggedIn: !this.state.isLoggedIn })
    }
    if (this.state.isLoggedIn)
      return (
        <div>
          <h1>Welcome to facebook</h1>
          <button onClick={onChange}>hi to facebook</button>
        </div >
      );
    else
      return (
        <div>
          <h1>
            Bye to facebook
          </h1>
          <button onClick={onChange}>bye to facebook</button>
        </div>
      )
  }
}