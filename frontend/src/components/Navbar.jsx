
import React from 'react';
import '../styles/Components.css';
import {Link}  from "react-router-dom";
// File: /components/Navbar.jsx
import NavButton from './Navbutton';

// import NavButton from '../components/NavButton.jsx';


const Navbar = () => {
  return (
    <div className="nav-bar">
      <div className="dropdown">
        <button className="btn btn-secondary menu-button d-md-none">Menu</button>
        <div className="dropdown-content">
          <Link to="/">Home</Link>
          <Link to="/contact">Contact Page</Link>
          <Link to="/about">About Us</Link>
          <Link to="/health">Health</Link>
          <Link to="/history">History</Link>
          <Link to="/cart">Cart</Link>
        </div>
      </div>
      <div className="menu-links nav-links d-none d-md-flex">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact Page</Link>
        <Link to="/about">About Us</Link>
        <Link to="/health">Health</Link>
        <Link to="/history">History</Link>
        <Link to="/cart">Cart</Link>
       
      </div>
      <div className="supplies-link">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => window.location.href = '/supplies'}
        >
          Buy Supplies
        </button>
        <button
          className="btn btn-primary"
          onClick={() => window.location.href = '/calc'}
        >
          How Old Is My Cat?
        </button>
      </div>
    </div>
  );
};

export default Navbar;
