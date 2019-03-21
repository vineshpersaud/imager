import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className="navbar">
       <NavLink to="/" exact>Home</NavLink>
       <NavLink to="/images/new" exact>New Image</NavLink>
       <NavLink to="/about" exact>About</NavLink>
    </div>
  );
};

export default NavBar;
