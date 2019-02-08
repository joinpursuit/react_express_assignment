import React from "react";

class UserLogIn extends React.Component {
  state = {
    nameInput: "",
    passwordInput: "",
    message: ""
  };

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { nameInput, passwordInput, message } = this.state;
    return (
      <>
        <h1> login </h1>

        <form>
          <label htmlFor="nameinput"> name: </label>
          <input
            key="nameinput"
            type="text"
            name="nameInput"
            value={nameInput}
            onChange={this.handleInput}
          />
          <label htmlFor="password"> password: </label>
          <input
            key="password"
            type="text"
            name="passwordInput"
            value={passwordInput}
            onChange={this.handleInput}
          />

          <input type="submit" value="search" />
        </form>
      </>
    );
  }
}

export default UserLogIn;
