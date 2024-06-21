import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false); 
  }, [location]);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <>
      <nav id="desktop-nav">
        <Link to="/" className="logo">Programming</Link>
        <div>
          <ul className="nav-links">
            <li><Link to="/">Java</Link></li>
            <li><Link to="">OOPS</Link></li>
            <li><Link to="">Interview</Link></li>
            <li><Link to="">Practice</Link></li>
          </ul>
        </div>
      </nav>
      <nav id="hamburger-nav">
        <Link to="/" className="logo">Programming</Link>
        <div className="hamburger-menu">
          <div className={`hamburger-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={`menu-links ${menuOpen ? 'open' : ''}`}>
            <li><Link to="/" onClick={toggleMenu}>Java</Link></li>
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
