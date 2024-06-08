import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/campaigns">Campaigns</Link></li>
        <li><Link to="/audience">Audience Form</Link></li>
        <li><Link to="/campaignlist">Campaign List</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
