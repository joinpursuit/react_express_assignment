import React from "react";

const AllUsers = ({ users }) => {
  // console.log(users);

  let usersList = users.map(user => {
    return (
      <div key={user.id}>
        <h4> Name: {user.name}</h4>

        <p> Phonenumber: {user.phonenumber} </p>
      </div>
    );
  });

  return (
    <div>
      <h1> All Users </h1>
      <div> {usersList} </div>
    </div>
  );
};

export default AllUsers;
