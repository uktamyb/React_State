import React, { Component } from 'react';
import './style.css';
import Tick from "./img/tick.jpg";
import Cancel from "./img/cancel.jpg";
import Table from "./table";

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
    // if (this.state.isLoggedIn)
    //   return (
    //     <div>
    //       <h1>Welcome to facebook</h1>
    //       <button onClick={onChange}>hi to facebook</button>
    //     </div >
    //   );
    // else
    // return (
    //   <div>
    //     <h1>
    //       Bye to facebook
    //     </h1>
    //     <button onClick={onChange}>bye to facebook</button>
    //   </div>
    // )
    return (
      <div className="container">
        {this.state.isLoggedIn ? (<h1>Hi to facebook</h1>) : (<h1>Bye to facebook</h1>)}

        <img src={this.state.isLoggedIn ? Tick : Cancel} alt="" />
        <button onClick={onChange}>{this.state.isLoggedIn ? "Logout" : "Login"}</button>

        <Table />
      </div>
    )
  }
}