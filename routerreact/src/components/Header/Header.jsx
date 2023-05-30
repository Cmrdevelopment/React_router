import "./Header.css";
import { NavLink } from "react-router-dom";
import React from "react";

const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to="/">
          <button>Home</button>
        </NavLink>
        <NavLink to="/gallery">
          <button>Gallery</button>
        </NavLink>
        <NavLink to="/about">
          <button>About</button>
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
