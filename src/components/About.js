import React from "react";
import Marquee from "./UI/Marquee";

export default function About() {
  return (
    <div>
      <section id="page-header" class="about-header">
        <h2>#KnowUs</h2>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
      </section>
      <section id="about-head" class="section-p1">
        <img src="img/about/a6.jpg" alt="" />
        <div>
          <h2>Who We Are</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            voluptatibus nemo placeat ut veniam voluptatum sapiente distinctio
            omnis. Ratione animi autem odit blanditiis mollitia numquam ea
            quisquam aliquid fuga repellat?
          </p>
          <abbr title="">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis nam
            omnis culpa, saepe cum quam?
          </abbr>

          <br />
          <br />

          <Marquee />
        </div>
      </section>
      <section id="about-app" class="section-p1">
        <h1>
          Download Our <a href="#">App</a>
        </h1>
        <div class="video">
          <video autoplay muted loop src="img/about/1.mp4"></video>
        </div>
      </section>
      <section id="feature" class="section-p1">
        <div class="fe-box">
          <img src="img/features/f1.png" alt="" />
          <h6>Free Shipping</h6>
        </div>
        <div class="fe-box">
          <img src="img/features/f2.png" alt="" />
          <h6>Online Order</h6>
        </div>
        <div class="fe-box">
          <img src="img/features/f3.png" alt="" />
          <h6>Save Money</h6>
        </div>
        <div class="fe-box">
          <img src="img/features/f4.png" alt="" />
          <h6>Promotions</h6>
        </div>
        <div class="fe-box">
          <img src="img/features/f5.png" alt="" />
          <h6>Happy Sell</h6>
        </div>
        <div class="fe-box">
          <img src="img/features/f6.png" alt="" />
          <h6>F24/7 Support</h6>
        </div>
      </section>
      <section id="newsletter" class="section-p1 section-m1">
        <div class="newstext">
          <h4>Sign Up For Newsletters</h4>
          <p>
            Get E-mail updates about our latest show and
            <span>special offers</span>.
          </p>
        </div>
        <div class="form">
          <input type="text" placeholder="Your email address" />
          <button class="normal">Sign Up</button>
        </div>
      </section>
    </div>
  );
}
