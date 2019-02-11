import React from "react";
import axios from "axios";
import { UsersDisplay } from "./UsersDisplay.js";

export default class Users extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      inputText: "",
      inputNumber:"",
      username: ""
    };
  }
  componentDidMount = () => {
    axios.get("/users").then(data => {
      this.setState({
        users: data.data.body
      });
    });
  };

  handleCreateUser = event => {
    event.preventDefault();
    const user = {
    username: this.state.inputText,
    phonenumber:this.state.inputNumber
    };

    axios.post(`/users`,  user ).then(res => {
      console.log(res);
      console.log(res.data);
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
    this.setState({ person, inputText: "" });
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
        <h3>Add a Person</h3>
        <form onSubmit={this.handleCreateUser}>
          <input
            type="text"
            name="inputText"
            value={this.state.inputText}
            placeholder={"Add a username"}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="inputNumber"
            value={this.state.inputNumber}
            placeholder={"Add a phonenumber"}
            onChange={this.handleChange}
          />
          <input type="submit" value="Submit" />
        </form>

        <div className="searchUser">
          <h3>Search for a Person</h3>
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
          <UsersDisplay person={this.state.person} />
        </div>
      </div>
    );
  }
}
// <button onClick={this.handleClear} type="button">
//   {" "}
//   Clear{" "}
// <UsersDisplay person={this.user}/>
