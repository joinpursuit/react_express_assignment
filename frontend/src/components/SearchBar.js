import React from "react";
// import AllUsers from "./allUsers.js";

class SearchBar extends React.Component {
  state = {
    selectedUser: null,
    userSearch: "",
    message: ""
  };

  handleChange = e => {
    this.setState({
      userSearch: e.target.value
    });
  };

  handleSearch = e => {
    const { userSearch, selectedUser, message } = this.state;
    const { users } = this.props;

    e.preventDefault();

    if (userSearch) {
      let findUser = users.name.find(
        user => user.name.toLowerCase() === userSearch.toLowerCase()
      );
      this.setState({
        selectedUser: findUser
      });
    } else {
      this.setState({
        message: "USER NOT FOUND"
      });
    }
  };

  render() {
    const { userSearch, selectedUser, message } = this.state;

    return (
      <div>
        <div />
        <br />
        <form onSubmit={this.handleSearch}>
          <label htmlFor="searchbar"> search for user </label>
          <br />
          <input
            key="searchbar"
            type="text"
            name="userSearch"
            value={userSearch}
            onChange={this.handleChange}
          />
          <input type="submit" value="search" />
        </form>

        <div>{selectedUser ? selectedUser.name : null}</div>
        {message}
      </div>
    );
  }
}

export default SearchBar;
