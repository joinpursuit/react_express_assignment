import React from "react";
import { NavLink } from "react-router-dom";
// import "../css/Navbar.css"

export const NavBar = () => {
  return (
    <nav>
          <NavLink to={"/"}><img src="https://img.icons8.com/ios/2x/ice-king-filled.png" alt="CSS-Tricks" /></NavLink>
          <NavLink to={"/users"}><img src="https://img.icons8.com/ios/2x/ice-king-filled.png" alt="CSS-Tricks" /></NavLink>


    </nav>
  );
};
