import React from 'react';
import './Navbar.css';
import './Mediaqueries.css';
import { Link } from 'react-router-dom';

function Navbar() {
  function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle('open');
    icon.classList.toggle('open');
  }

  return (
    <>
      <nav id="desktop-nav">
        <Link to="/introduction" className="logo">Programming</Link>
        <div>
          <ul className="nav-links">
            <li><Link to="/introduction" >Java</Link></li>
            <li><Link to="" >OOPS</Link></li>
            <li><Link to="" >Interview</Link></li>
            <li><Link to="" >Practice</Link></li>
          </ul>
        </div>
      </nav>
      <nav id="hamburger-nav">
        <Link to="/introduction" className="logo">Programming</Link>
        <div className="hamburger-menu">
          <div className="hamburger-icon" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className="menu-links">
            <li><Link to="/introduction" onClick={toggleMenu}>Java</Link></li>
            <li><Link to="" onClick={toggleMenu}>OOPS</Link></li>
            <li><Link to="" onClick={toggleMenu}>Interview</Link></li>
            <li><Link to="" onClick={toggleMenu}>Practice</Link></li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
