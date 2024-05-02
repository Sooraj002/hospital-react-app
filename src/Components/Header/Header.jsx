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
        <ul className={`list ${menuOpen ? "show" : ""}`}>
          <li>
            <Link to="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/aboutus" onClick={toggleMenu}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/make-an-appointment" onClick={toggleMenu}>
              Make an Appointment
            </Link>
          </li>
          <li>
            <Link to="/department" onClick={toggleMenu}>
              Departments
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={toggleMenu}>
              Contact
            </Link>
          </li>
        </ul>

        <div className="menu-btn">
          menu
        </div>
      </div>
    </header>
  );
}

export default Header;
