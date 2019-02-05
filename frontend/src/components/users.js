import React from "react";
import axios from "axios";
import { Route, Switch } from "react-router-dom";
import NewUser from "./NewUsers.js";
import AllUsers from "./allUsers.js";
import UserLogIn from "./UserLogIn.js";

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
    return (
      <>
        <Switch>
          <Route
            exact
            path="/users"
            render={props => <AllUsers {...props} users={this.state.users} />}
          />
          <Route exact path="/users/new" component={NewUser} />
          <Route exact path="/users/login" component={UserLogIn} />
        </Switch>
      </>
    );
  }
}
export default Users;
