import React from "react";

class UserLogIn extends React.Component {
  state = {
    nameInput: "",
    passwordInput: ""
  };

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { nameInput, passwordInput } = this.state;
    // const { users } = this.props;
    // let usersList = users.map(user => {
    //   return (
    //     <ul key={user.id}>
    //       <li> Name: {user.name}</li>
    //       <li> Phonenumber: {user.phonenumber} </li>
    //     </ul>
    //   );
    // });

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
