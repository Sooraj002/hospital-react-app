import React, { useState } from "react";
import "../Header/Header.css";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="nav-icon">
          <div className="icon-img">
            <img
              src="https://www.pinclipart.com/picdir/big/579-5799783_child-infant-mother-logo-maternal-bond-drawing-mother.png"
              alt="Heaven Care Hospital Logo"
              height="37px"
              width="45px"
            />
          </div>
          <Link to="/">
            <h2>Heaven Care Hospital</h2>
          </Link>
        </div>
        <div className={`nav-titles ${menuOpen ? "open" : ""}`}>
          <ul className="list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/aboutus">About Us</Link>
            </li>
            <li>
              <Link to="/make-an-appointment">Make an Appointment</Link>
            </li>
            <li>
              <Link to="/department">Departments</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="menu-btn" onClick={toggleMenu}>
          <div className={`menu-icon ${menuOpen ? "open" : ""}`}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
