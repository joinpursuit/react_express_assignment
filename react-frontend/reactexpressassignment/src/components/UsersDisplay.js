import React from 'react';

export const UsersDisplay = ({person,edit,handleChange,inputNumber,inputText}) => {
  if(person === undefined) {
    return <>Not Found</>
  } else if (person) {
    return(
      <>
        Name: {person.username}
        <br />
        Phone: {person.phonenumber}
        <form onSubmit={edit}>
          <input
            type="text"
            onChange={handleChange}
            name="inputText"
            value={inputText}
            placeholder={"Edit Username"}
          />
          <input
            type="text"
            onChange={handleChange}
            name="inputNumber"
            value={inputNumber}
            placeholder={"Edit Number"}
          />
          <input type="submit" value="Submit" />
          </form>
      </>
    )
  } else {
    return null;
  }
}
