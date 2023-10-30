import React from "react";

export default function Product() {
  return (
    <div>
      <section id="prodetails" class="section-p1">
        <div class="single-pro-image">
          <img src="/img/products/f1.jpg" width="100%" id="MainImg" alt="" />
          <div class="small-img-group">
            <div class="small-img-col">
              <img
                src="/img/products/f1.jpg"
                width="100%"
                class="small-img"
                alt=""
              />
            </div>
            <div class="small-img-col">
              <img
                src="/img/products/f2.jpg"
                width="100%"
                class="small-img"
                alt=""
              />
            </div>
            <div class="small-img-col">
              <img
                src="/img/products/f3.jpg"
                width="100%"
                class="small-img"
                alt=""
              />
            </div>
            <div class="small-img-col">
              <img
                src="/img/products/f4.jpg"
                width="100%"
                class="small-img"
                alt=""
              />
            </div>
          </div>
        </div>

        <div class="single-pro-details">
          <h6>Home / T-Shirt</h6>
          <h4>Men's Fashion T Shirt</h4>
          <h2>$139.00</h2>
          <select>
            <option>Select Size</option>
            <option>XL</option>
            <option>XXL</option>
            <option>Small</option>
            <option>Large</option>
          </select>
          <input type="number" value="1" />
          <button class="normar">Add To Cart</button>
          <h4>Product Details</h4>
          <span>
            This T-shirt with rolled up sleeves is crafted from a fluid fabric
            that is a pleasure to wear, for a fully-assumed casual style. It is
            adorned with a woven jacquard LGP monogram that subtly echoes the
            Longchamp identity. For Spring/Summer 2022, our Parisian shows us
            her curiosity, her enthusiasm for encounters, her openness to
            cultures and her passion for art and crafts. She collects, she
            hunts, she twists and accessorizes her looks according to her
            discoveries. During her travels in the south of France, in Provence,
            she hunts for earthenware and ceramics for their colors, their
            features, their patterns.
          </span>
        </div>
      </section>
      <section id="product1" class="section-p1">
        <h2>Featured Products</h2>
        <p>Summer Colection New Modern Design</p>
        <div class="pro-container">
          <div class="pro">
            <img src="/img/products/f1.jpg" alt="" />
            <div class="des">
              <span>adidas</span>
              <h5>Cartoon Astronaut T-Shirts</h5>
              <div class="star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
              <h4>$78</h4>
            </div>
            <a href="#">
              <i class="fas fa-shopping-cart cart"></i>
            </a>
          </div>
          <div class="pro">
            <img src="/img/products/f2.jpg" alt="" />
            <div class="des">
              <span>adidas</span>
              <h5>Cartoon Astronaut T-Shirts</h5>
              <div class="star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
              <h4>$78</h4>
            </div>
            <a href="#">
              <i class="fas fa-shopping-cart cart"></i>
            </a>
          </div>
          <div class="pro">
            <img src="/img/products/f3.jpg" alt="" />
            <div class="des">
              <span>adidas</span>
              <h5>Cartoon Astronaut T-Shirts</h5>
              <div class="star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
              <h4>$78</h4>
            </div>
            <a href="#">
              <i class="fas fa-shopping-cart cart"></i>
            </a>
          </div>
          <div class="pro">
            <img src="/img/products/f4.jpg" alt="" />
            <div class="des">
              <span>adidas</span>
              <h5>Cartoon Astronaut T-Shirts</h5>
              <div class="star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
              <h4>$78</h4>
            </div>
            <a href="#">
              <i class="fas fa-shopping-cart cart"></i>
            </a>
          </div>
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
