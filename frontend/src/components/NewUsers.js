import React from "react";
import axios from "axios";

class NewUser extends React.Component {
  state = {
    userInputName: "",
    userInputNumber: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { users } = this.props;
    axios
      .post("/users", {
        name: this.state.userInputName,
        phonenumber: this.state.userInputNumber
      })
      .then(res => {
        this.setState({
          userInputName: "",
          userInputNumber: ""
        });
      })
      .then(() => {
        this.props.getAllUsers();
      });
  };

  render() {
    const { users } = this.props;

    const { userInputName, userInputNumber } = this.state;

    let myUsers = users.map(user => {
      return (
        <ul key={user.id}>
          <li> Name: {user.name}</li>
          <li> Phonenumber: {user.phonenumber} </li>
        </ul>
      );
    });
    return (
      <>
        <ul> {myUsers} </ul>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name"> Name: </label>
          <input
            id="name"
            type="text"
            name="userInputName"
            onChange={this.handleChange}
            value={userInputName}
          />
          <label htmlFor="number">Phonenumber: </label>
          <input
            id="number"
            type="text"
            name="userInputNumber"
            onChange={this.handleChange}
            value={userInputNumber}
          />
          <button type="submit"> New User </button>
        </form>
      </>
    );
  }
}

export default NewUser;
