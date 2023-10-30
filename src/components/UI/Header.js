import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <section id="header">
      <NavLink to="/" activeClassName="active" exact>
        <img src="img/logo.png" className="logo" alt="" />
      </NavLink>

      <div>
        <ul id="navbar">
          <li>
            <NavLink to="/" activeClassName="active" exact>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop" activeClassName="active">
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" activeClassName="active">
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" activeClassName="active" id="lg-bag">
              <i className="fas fa-bag-shopping"></i>
            </NavLink>
          </li>
          <NavLink to="#" id="close">
            <i className="fas fa-times"></i>
          </NavLink>
        </ul>
      </div>
      <div id="mobile">
        <NavLink to="/cart">
          <i className="fas fa-bag-shopping"></i>
        </NavLink>
        <i id="bar" className="fas fa-outdent"></i>
      </div>
    </section>
  );
};

export default Header;
