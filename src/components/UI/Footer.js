import React from "react";

const Footer = () => {
  return (
    <footer className="section-p1">
      <div className="col">
        <img className="logo" src="img/logo.png" alt="" />
        <h4>Contact</h4>
        <p>
          <strong>Address:</strong> varketili-3, 4<sup>th</sup> M/R, Tbilisi
        </p>
        <p>
          <strong>Phone:</strong> (+995) 598 50 02 15
        </p>
        <p>
          <strong>Hours:</strong> 10:00 - 18:00, Mon - Sat
        </p>
        <div className="follow">
          <h4>Follow us</h4>
          <div className="icon">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-youtube"></i>
          </div>
        </div>
      </div>
      <div className="col">
        <h4>About</h4>
        <a href="#">About us</a>
        <a href="#">Delivery Information</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms & Conditions</a>
        <a href="#">Contact Us</a>
      </div>
      <div className="col">
        <h4>My Account</h4>
        <a href="#">Sign In</a>
        <a href="#">View Cart</a>
        <a href="#">My Wishlist</a>
        <a href="#">Track My Order</a>
        <a href="#">Help</a>
      </div>
      <div className="col install">
        <h4>Install App</h4>
        <p>From the App Store or Google Play</p>
        <div className="row">
          <img src="img/pay/app.jpg" alt="" />
          <img src="img/pay/play.jpg" alt="" />
          <p>Secured Payment Gateways</p>
          <img src="img/pay/pay.png" alt="" />
        </div>
      </div>
      <div className="copyright">
        <p>&#169; 2022</p>
      </div>
    </footer>
  );
};

export default Footer;
