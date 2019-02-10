import React from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import NewUser from "./NewUsers.js";
import UserLogIn from "./UserLogIn.js";
import SearchBar from "./SearchBar.js";

class Users extends React.Component {
  state = {
    users: [],
    usersInfo: [],
    selectedUser: null,
    message: ""
  };

  getallUsers = () => {
    axios.get("/users").then(res => this.allUserInfo(res.data.users));
  };

  componentDidMount = () => {
    this.getallUsers();
  };

  allUserInfo = users => {
    let usersInfo = users.map(user => {
      return {
        name: user.name,
        phonenumber: user.phonenumber
      };
    });

    this.setState({
      user: users,
      usersInfo: usersInfo,
      selectedUser: usersInfo
    });
  };

  filterUser = userSearch => {
    let newState = [...this.state.usersInfo];
    newState = newState.filter(user => {
      if (user.name.toLowerCase() === userSearch.toLowerCase()) {
        return true;
      } else {
        return false;
      }
    });
    this.setState({
      selectedUser: newState,
      message: "user found"
    });
  };

  render() {
    const { users, selectedUser, usersInfo } = this.state;

    let userdisplay = selectedUser.map(user => {
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
          render={props => (
            <SearchBar
              {...props}
              users={users}
              selectedUser={selectedUser}
              filterUser={this.filterUser}
            />
          )}
        />
        <Route
          exact
          path="/users/new"
          render={props => (
            <NewUser
              {...props}
              users={usersInfo}
              getAllUsers={this.getallUsers}
            />
          )}
        />
        <Route
          exact
          path="/users/login"
          render={props => <UserLogIn {...props} users={usersInfo} />}
        />
      </>
    );
  }
}
export default Users;
