import React from "react";

const Newsletter = () => {
  return (
    <section className="section-p1 section-m1" id="newsletter">
      <div className="newstext">
        <h4>Sign Up For Newsletters</h4>
        <p>
          Get E-mail updates about our latest show and{" "}
          <span>special offers</span>.
        </p>
      </div>
      <div className="form">
        <input type="text" placeholder="Your email address" />
        <button className="normal">Sign Up</button>
      </div>
    </section>
  );
};

export default Newsletter;
