import React from 'react';

export const UsersDisplay = ({person,edit,handleChange,inputNumber,inputTextEdit}) => {
  if(person === undefined) {
    return <>Not Found</>
  } else if (person) {
    return(
      <>
        Name: {person.username}
        <br />
        Phone: {person.phonenumber}
        <br/>
        <img src="https://img.icons8.com/color/100/000000/jake.png" alt="something"/>
        <form onSubmit={edit}>
          <input
            type="text"
            onChange={handleChange}
            name="inputTextEdit"
            value={inputTextEdit}
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
