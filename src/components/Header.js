import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section id="header">
      <Link to="/">
        <img src="img/logo.png" className="logo" alt="" />
      </Link>

      <div>
        <ul id="navbar">
          <li>
            <Link to="/" className="active">
              Home
            </Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/cart" id="lg-bag">
              <i className="fas fa-bag-shopping"></i>
            </Link>
          </li>
          <Link to="#" id="close">
            <i className="fas fa-times"></i>
          </Link>
        </ul>
      </div>
      <div id="mobile">
        <Link to="/cart">
          <i className="fas fa-bag-shopping"></i>
        </Link>
        <i id="bar" className="fas fa-outdent"></i>
      </div>
    </section>
  );
};

export default Header;
