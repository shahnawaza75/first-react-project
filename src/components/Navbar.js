import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <div className="navbar">
  <h1>Math Magicians</h1>
    <div className='Navbar-links'>
      <div><Link className='NavLink' to="/">Home</Link></div>
        <div className='divline'></div>
      <div><Link className='NavLink' to="/calculator">Calculator</Link></div>
          <div className='divline'></div>
      <div><Link className='NavLink' to="/quote">Quote</Link></div>
    </div>
  </div>
);
export default Navbar;
