import React from "react";

export const Home = () => {
  return (
    <div className="home">
      <h1>Home Page of the React Express Assignment</h1>
      <p>
        Nothing much going on here. This route/component was made for the sole purpose to flex and then be able to go to a users page.
        <br/>
        Princess bubblegum was here
      </p>
      <img
        className="pb"
        src="https://img.icons8.com/ios/2x/princess-bubblegum-filled.png"
        alt="My"
      />
    </div>
  );
};

// I HAD A TOTORO GIF, BUT THEN SAW THE RUBRIK AND SAID IT WASNT WORTH IT
//
// <Marquee size={'p'}width="100%" direction="right" height="30%" Index0={"hello"}>
// //   <img className= "totoro" src="http://clipart-library.com/img1/263385.gif" alt="My"/>
// // </Marquee>
