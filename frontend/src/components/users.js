import React from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import NewUser from "./NewUsers.js";
import UserLogIn from "./UserLogIn.js";
import SearchBar from "./SearchBar.js";

class Users extends React.Component {
  state = {
    users: []
  };

  getallUsers = () => {
    axios.get("/users").then(res =>
      this.setState({
        users: res.data.users
      })
    );
  };

  componentDidMount = () => {
    this.getallUsers();
  };

  render() {
    const { users } = this.state;

    let usersList = users.map(user => {
      return (
        <ul key={user.id}>
          <li> Name: {user.name}</li>
          <li> Phonenumber: {user.phonenumber} </li>
        </ul>
      );
    });
    return (
      <>
        <Route
          exact
          path="/users"
          render={props => <SearchBar {...props} users={usersList} />}
        />
        <Route
          exact
          path="/users/login"
          render={props => <UserLogIn {...props} users={usersList} />}
        />
        <Route
          exact
          path="/users/new"
          render={props => <NewUser {...props} users={users} />}
        />
      </>
    );
  }
}
export default Users;
