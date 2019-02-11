import React from "react";
import axios from "axios";
import {UsersDisplay} from "./UsersDisplay.js"

export default class Users extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      inputText: "",
      username: ""
    };
  }
  componentDidMount = () => {
    axios.get("/users").then(data => {
      this.setState({
        users: data.data.body,

      });
    });
  };

  // // When the form is submitted display search result
  //   handleSubmit=(event)=>{
  //     event.preventDefault();
  //     console.log("handling someething");
  //     this.state.inputText // What we are searching for
  //     let searchResult = this.users.find((person)=>{
  //   return person.username === this.state.inputText
  // })
  // Ways to search in an array .filter .find .indexof .reduce

  // }
  handleClear = event => {
    this.setState({
      inputText: ""
    });
  };
  findPerson = e => {
    e.preventDefault();
    let person = this.state.users.find(
      person =>
        person.username.toLowerCase() === this.state.inputText.toLowerCase()
    );
    console.log(person);
    this.setState({ person,
      inputText:""
     });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="users">
        <h1>All Users </h1>
        <h1>Search for a Person</h1>
        <form onSubmit={this.findPerson}>
          <input
            type="text"
            onChange={this.handleChange}
            name="inputText"
            value={this.state.inputText}
            placeholder={"Find Your Person"}
          />
          <input type="submit" value="Submit" />
        </form>
        <button onClick={this.handleClear} type="button">
          {" "}
          Clear{" "}
        </button>
        <UsersDisplay person={this.state.person}/>
      </div>
    );
  }
}

// <UsersDisplay person={this.user}/>
