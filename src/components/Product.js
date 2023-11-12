import React from "react";
import initialProducts from "./UI/InitialProducts";
import { useLocation } from "react-router-dom";

export default function Product() {
  const location = useLocation();
  const { product } = location.state;
  console.log("Product Image Path:", product.image);

  initialProducts.forEach((item) => {
    console.log("Item Image Path:", item.image);
  });

  console.log("Initial Products:", initialProducts);
  console.log("Product:", product);

  return (
    <div>
      <section id="prodetails" className="section-p1">
        <div className="single-pro-image">
          <img
            src={product.image}
            width="100%"
            id="MainImg"
            alt={"product.name"}
          />
          <div className="small-img-group">
            {initialProducts
              .filter((item) => item.id !== product.id)
              .slice(0, 4)
              .map((item) => (
                <div className="small-img-col" key={item.id}>
                  <img
                    src={item.image}
                    width="100%"
                    className="small-img"
                    alt={item.name}
                  />
                </div>
              ))}
          </div>
        </div>

        <div className="single-pro-details">
          <h6>Home / T-Shirt</h6>
          <h4>{product.name}</h4>
          <h2>${product.price}</h2>
          <select>
            <option>Select Size</option>
            <option>XL</option>
            <option>XXL</option>
            <option>Small</option>
            <option>Large</option>
          </select>
          <input type="number" value="1" />
          <button className="normar">Add To Cart</button>
          <h4>Product Details</h4>
          <span>{product.description}</span>
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
