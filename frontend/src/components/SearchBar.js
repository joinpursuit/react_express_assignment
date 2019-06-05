import React from "react";
// import AllUsers from "./allUsers.js";

class SearchBar extends React.Component {
  state = {
    userSearch: ""
  };

  handleChange = e => {
    this.setState({
      userSearch: e.target.value
    });
  };

  handleSearch = e => {
    e.preventDefault();
    this.props.filterUser(this.state.userSearch);
  };

  render() {
    const { userSearch } = this.state;
    const { selectedUser } = this.props;
    console.log(selectedUser);
    //
    // let userDisplay = selectedUser.map(user => {
    //
    //   return (
    //     <ul key={user.id}>
    //       <li> Name: {user.name}</li>
    //       <li> Phonenumber: {user.phonenumber} </li>
    //     </ul>
    //   );
    // });

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
            placeholder="search for user"
            onChange={this.handleChange}
          />
          <input type="submit" value="search" />
        </form>

        <br />
        <div>{userSearch}</div>
      </div>
    );
  }
}

export default SearchBar;

//
//   const { userSearch, selectedUser, message } = this.state;
//   const { users } = this.props;
//
//   e.preventDefault();
//
//   if (userSearch) {
//     let findUser = users.name.find(
//       user => user.name.toLowerCase() === userSearch.toLowerCase()
//     );
//     this.setState({
//       selectedUser: findUser,
//       message: 'user found',
//     });
//   } else {
//     this.setState({
//       message: 'USER NOT FOUND',
//     });
//   }
// };
