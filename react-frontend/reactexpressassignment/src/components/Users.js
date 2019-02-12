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
    const user = {
    username: this.state.inputText,
    phonenumber:this.state.inputNumber
    };

    axios.post(`/users`,  user ).then(res => {
      console.log(res);
      console.log(res.data);
    });
  };

  handleEditUser = event => {
    event.preventDefault();
    const user = {
    username: this.state.inputText,
    phonenumber:this.state.inputNumber
    }

    axios.put(`/users/${this.state.person.id}`,  user ).then(res => {
      console.log(res);
      console.log(res.data);
    });
  };
 //



  findPerson = e => {
    e.preventDefault();
    let person = this.state.users.find(
      person =>
        person.username.toLowerCase() === this.state.inputText.toLowerCase()
    );
    console.log(person);
    this.setState({ person, inputText: "" });
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
          key={el.id}
          username={el.username}
          number={el.phonenumber}
        >
          <ul>
            <li>Name:{el.username}</li>
            <br />
            <li>phonenumber:{el.phonenumber}</li>
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
          <UsersDisplay person={this.state.person} handleChange={this.handleChange} inputText={this.state.inputText} inputNumber={this.state.inputNumber}
           edit = {this.handleEditUser}
           />
        </div>
      </div>
    );
  }
}



// usersList = this.users.map(list => {
//  let { id, username, phonenumber } = list;
//  return (
//    <li>
//   Username:{username}
//     phonenumber={phonenumber}
//     id={id} />
//  )
// })
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
