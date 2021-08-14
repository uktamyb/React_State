7.08. KUNGI "STATE" MAVZUSI:

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
    let width;
    let height;
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
      // this.setState({ width: e.target.value });
      width = e.target.value;
    };
    const onHeight = (e) => {
      // this.setState({ height: e.target.value });
      height = e.target.value;
    };

    const styleChange = (e) => {
      this.setState({ width: width, height: height });
    }
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

        <button onClick={styleChange}>Change</button>

        <div style={{
          width: `${this.state.width}px`,
          height: `${this.state.height}px`,
        }}
          className="box">Box</div>

        <table>
          <tr>
            <td>asdasd</td>
            <td>asdasdas</td>
            <td>asdasd</td>
            <td>asdasda</td>
          </tr>
        </table>

      </div>
    )
  }
}



 - table bilan ishlash "state" bilan:

 import React, { Component } from 'react';
import './style.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      status: "",
      data: [
        { id: 1, name: "Uktam", status: "Hight" },
        { id: 2, name: "Barkamol", status: "Low" },
        { id: 3, name: "Abror", status: "Very high" },
        { id: 4, name: "Ikrom", status: "Very low" },
      ],
    };
  }
  render() {


    const onDelete = (id) => {
      console.log("deleted", id);
      const newData = this.state.data.filter(value => value.id !== id);
      this.setState({ data: newData })
    };

    const onAdd = () => {
      console.log(this.state.name, this.state.status);
      const newData = [
        ...this.state.data,
        { id: this.state.data.length + 1, name: this.state.name, status: this.state.status },
      ]
      this.setState({ data: newData })
    };

    const onChangeName = (e) => {
      this.setState({ name: e.target.value })
    };

    const onChangeStatus = (e) => {
      this.setState({ status: e.target.value })
    };

    const getSortByName = () => {
      // this.state.name.sort();
      const sortedName = this.state.data.sort((this.state.a, this.state.b) => this.state.a - this.state.b);
    console.log(sortedName);

    };

  return(
      <div>
        <input onChange={onChangeName} type="text" placeholder="name" />
        <input onChange={onChangeStatus} type="text" placeholder="status" />
        <button onClick={onAdd}>add</button>
        <table border="1" style={{ borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.data.map((value) => {
                return (

                  <tr key={value.id}>
                    <td>{value.id}</td>
                    <td>{value.name}</td>
                    <td>{value.status}</td>
                     <td><button onClick={() => onDelete(value.id)}>delete</button></td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
        <button onClick={getSortByName}>Sort by name</button>
      </div >
    );
  }
}
