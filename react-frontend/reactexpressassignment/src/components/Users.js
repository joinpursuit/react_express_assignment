import React from "react";
import axios from "axios";
import { UsersDisplay } from "./UsersDisplay.js";
import "../Users.css";

export default class Users extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      inputTextSearch: "",
      inputTextEdit:"",
      inputTextCreateUser:"",
      inputNumber:"",
      username: "",
      usersShowing: false,
      toggle: "Show Users"
    };
  }

  componentDidMount = () => {
    axios.get("/users").then(data => {
      this.setState({
        users: data.data.body
      });
    });
  };

  toggleUserList = () => {
    let changeButtonPlaceholder =
      this.state.toggle === "Show Users"
        ? "Hide Users"
        : "Show Users";
    this.setState({
      usersShowing: !this.state.usersShowing,
      toggle: changeButtonPlaceholder
    });
  };

    handleCreateUser = event => {
      event.preventDefault()
    const user = {
    username: this.state.inputTextCreateUser,
    phonenumber:this.state.inputNumber
    };

    axios.post(`/users`,  user ).then(res => {
      console.log(res);
      console.log(res.data);
    });

  };

  handleEditUser = event => {
    event.preventDefault()
    const user = {
    username: this.state.inputTextEdit,
    phonenumber:this.state.inputNumber
    }

    axios.put(`/users/${this.state.person.id}`,  user ).then(res => {
      console.log(res);
      console.log(res.data);
    });
  };

  findPerson = e => {
    e.preventDefault();
    let person = this.state.users.find(
      person =>
        person.username.toLowerCase() === this.state.inputTextSearch.toLowerCase()
    );
    console.log(person);
    this.setState({ person, inputTextSearch: "" });
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };


  render() {
    const showUsers = this.state.users.map(el => {
      console.log(el, el.username);
      return (
        <div
        className = "showUsers"
          key={el.id}
          username={el.username}
          number={el.phonenumber}
        >
          <ul>
            <img src="https://img.icons8.com/color/50/000000/lumpy-space-princess.png" alt="something"/>
            <li>Name:{el.username}</li>
            <br />
            <li>Phonenumber:{el.phonenumber}</li>
            <br />

          </ul>
        </div>
      );
    });


    console.log(this.state);


    return (
      <div className="users">
        <h1>All Users </h1>
        <button onClick={this.toggleUserList}>
          {this.state.toggle}
        </button>
          {this.state.usersShowing ? showUsers : null}


        <h3>Add a Person</h3>
          <form onSubmit={this.handleCreateUser}>
            <input
            type="text"
            name="inputTextCreateUser"
            value={this.state.inputTextCreateUser}
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






        <h3>Search for a Person</h3>
          <form onSubmit={this.findPerson}>
            <input
              type="text"
              onChange={this.handleChange}
              name="inputTextSearch"
              value={this.state.inputTextSearch}
              placeholder={"Find Your Person"}
            />
            <input type="submit" value="Submit" />
          </form>
          <UsersDisplay person={this.state.person} handleChange={this.handleChange} inputText={this.state.inputTextEdit} inputNumber={this.state.inputNumber}
           edit = {this.handleEditUser}
           />

      </div>
    );
  }
}

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
// handleClear = event => {
//   this.setState({
//     inputText: ""
//   });
// };
