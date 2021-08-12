import React, { Component } from 'react';
import './style.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

    const onEdit = (id, e) => {
      console.log("edeted", id);
      this.setState({ data: e.target.value })
      // const newData = this.state.data.filter(value => value.id !== id);
      // this.setState({ data: newData })
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

    return (
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
                    <td><button onClick={() => onEdit(value.id)}>edit</button></td>
                    <td><button onClick={() => onDelete(value.id)}>delete</button></td>
                  </tr>


                );
              })
            }
          </tbody>
        </table>
      </div >
    );
  }
}
