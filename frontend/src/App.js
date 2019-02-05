import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Users from "./components/users.js";

import "./App.css";

class App extends Component {
  render() {
    const mainpage = () => {
      return (
        <>
          <Link className="linkitem" to="/">
            <h1> Users Galore </h1>{" "}
          </Link>
        </>
      );
    };

    return (
      <div className="App">
        <Route path="/" render={mainpage} />
        <nav>
          <br />
          <Link className="linkItem" to="/users">
            {" "}
            User List{" "}
          </Link>
          <br />

          <Link className="linkItem" to="/users/new">
            {" "}
            +NewUser{" "}
          </Link>
          <br />

          <Link className="linkItem" to="/users/login">
            {" "}
            Log In{" "}
          </Link>
        </nav>

        <Route className="linkItem" path="/users" component={Users} />
      </div>
    );
  }
}

export default App;
