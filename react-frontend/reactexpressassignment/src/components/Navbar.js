import React from "react";
import { NavLink } from "react-router-dom";
// import "../css/Navbar.css"

export const NavBar = () => {
  return (
    <nav>
          <NavLink to={"/"}><img src="https://img.icons8.com/color/100/000000/ice-king.png" alt ='something'/></NavLink>
          <NavLink to={"/users"}><img src="https://img.icons8.com/dusk/100/000000/finn.png" alt='something'/></NavLink>


    </nav>
  );
};
