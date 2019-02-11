import React from 'react';

export const UsersDisplay = ({person}) => {
  if(person === undefined) {
    return <>Not Found</>
  } else if (person) {
    return(
      <>
        Name: {person.username}
        <br />
        Phone: {person.phonenumber}
      </>
    )
  } else {
    return null;
  }
}
