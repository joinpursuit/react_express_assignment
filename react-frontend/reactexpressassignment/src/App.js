import React, { Component } from "react";
import axios from "axios";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { NavBar } from "./components/Navbar";
import { Home } from "./components/Home";
import Users from "./components/Users";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: []
    };
  }
  componentDidMount() {
    axios.get("/users").then(data => {
      this.setState({
        people: data.data.body
      });
    });
  }

  render() {
    // console.log(this.state)
    return (
      <BrowserRouter>
        <div className="App">
       <Route component={NavBar} /> 

          <Switch>

            <Route exact path="/" component={Home} />
            <Route exact path="/users" component={Users} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
