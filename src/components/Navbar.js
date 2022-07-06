import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <div className="navbar">

    <div>
      <Link to="/">Home</Link>
    </div>

    <div>
      <Link to="/calculator">Calculator</Link>
    </div>

    <div>
      <Link to="/quote">Quote</Link>
    </div>

  </div>

);

export default Navbar;
