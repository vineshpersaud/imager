import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className="navbar">
       <NavLink to="/images" exact>Images</NavLink>
       <NavLink to="/images/new" exact>New Image</NavLink>
    </div>
  );
};

export default NavBar;
