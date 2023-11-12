import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <section id="header">
      <NavLink to="/" activeClassName="active" exact>
        <img src="img/logo.png" className="logo" alt="" />
      </NavLink>
      <ul id="navbar" className={mobileMenuOpen ? "open" : ""}>
        <li>
          <NavLink
            to="/"
            activeClassName="active"
            exact
            onClick={closeMobileMenu}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/shop"
            activeClassName="active"
            onClick={closeMobileMenu}
          >
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blog"
            activeClassName="active"
            onClick={closeMobileMenu}
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            activeClassName="active"
            onClick={closeMobileMenu}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            activeClassName="active"
            onClick={closeMobileMenu}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cart"
            activeClassName="active"
            id="lg-bag"
            onClick={closeMobileMenu}
          >
            <i className="fas fa-bag-shopping"></i>
          </NavLink>
        </li>
      </ul>
      <div id="mobile">
        <NavLink to="/cart">
          <i className="fas fa-bag-shopping"></i>
        </NavLink>
        <i
          id="bar"
          className={mobileMenuOpen ? "fas fa-times" : "fas fa-outdent"}
          onClick={toggleMobileMenu}
        ></i>
      </div>
    </section>
  );
};

export default Header;
