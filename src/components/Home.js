import React, { useState } from "react";
import { Link } from "react-router-dom";
import initialProducts from "./UI/InitialProducts";
import NewsLetter from "./NewsLetter";
import { useCart } from "./UI/CartContext";

export default function Home() {
  const { addToCart } = useCart();
  const firstProContainer = initialProducts.slice(0, 8);
  const secondProContainer = initialProducts.slice(8, 16);

  const handleCartIconClick = (event, product) => {
    event.stopPropagation();
    addToCart(product);
  };
  return (
    <div>
      <section id="hero">
        <h4>Trade-in-offer</h4>
        <h2>Super value deals</h2>
        <h1>On all products</h1>
        <p>Save more width coupons & up to 70% off!</p>
        <button>Shop Now</button>
      </section>
      <section id="feature" className="section-p1">
        <div className="fe-box">
          <img src="img/features/f1.png" alt="" />
          <h6>Free Shipping</h6>
        </div>
        <div className="fe-box">
          <img src="img/features/f2.png" alt="" />
          <h6>Online Order</h6>
        </div>
        <div className="fe-box">
          <img src="img/features/f3.png" alt="" />
          <h6>Save Money</h6>
        </div>
        <div className="fe-box">
          <img src="img/features/f4.png" alt="" />
          <h6>Promotions</h6>
        </div>
        <div className="fe-box">
          <img src="img/features/f5.png" alt="" />
          <h6>Happy Sell</h6>
        </div>
        <div className="fe-box">
          <img src="img/features/f6.png" alt="" />
          <h6>F24/7 Support</h6>
        </div>
      </section>
      <section id="product1" className="section-p1">
        <h2>Featured Products</h2>
        <p>Summer Collection New Modern Design</p>
        <div className="pro-container">
          {firstProContainer.map((product) => (
            <div className="pro" key={product.id}>
              <Link
                to={{
                  pathname: `/shop/${product.id}`,
                  state: { product: product },
                }}
              >
                <img src={product.image} alt={product.name} />
              </Link>
              <div className="des">
                <span>{product.brand}</span>
                <h5>{product.name}</h5>
                <div className="star">
                  {Array.from({ length: product.stars }, (_, index) => (
                    <i key={index} className="fas fa-star"></i>
                  ))}
                </div>
                <h4>${product.price}</h4>
              </div>
              <div onClick={(event) => handleCartIconClick(event, product)}>
                <i className="fas fa-shopping-cart cart"></i>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section id="banner" className="section-m1">
        <h4>Repair Services</h4>
        <h2>
          Up to <span>70% Off</span> - All t-shirt & Accessories
        </h2>
        <button className="normal">Explore More</button>
      </section>
      <section id="product1" className="section-p1">
        <div className="pro-container">
          {secondProContainer.map((product) => (
            <div className="pro" key={product.id}>
              <Link
                to={{
                  pathname: `/shop/${product.id}`,
                  state: { product: product },
                }}
              >
                <img src={product.image} alt={product.name} />
              </Link>
              <div className="des">
                <span>{product.brand}</span>
                <h5>{product.name}</h5>
                <div className="star">
                  {Array.from({ length: product.stars }, (_, index) => (
                    <i key={index} className="fas fa-star"></i>
                  ))}
                </div>
                <h4>${product.price}</h4>
              </div>
              <div onClick={(event) => handleCartIconClick(event, product)}>
                <i className="fas fa-shopping-cart cart"></i>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section id="sm-banner" className="section-p1">
        <div className="banner-box">
          <h4>crazy deals</h4>
          <h2>buy 1 get 1 free</h2>
          <span>The best classic dress is on sale at cara</span>
          <button className="white">Learn More</button>
        </div>
        <div className="banner-box banner-box2">
          <h4>spring/summer</h4>
          <h2>upcomming season</h2>
          <span>The best classic dress is on sale at cara</span>
          <button className="white">Collection</button>
        </div>
      </section>
      <section id="banner3">
        <div className="banner-box">
          <h2>SEASONAL SALE</h2>
          <h3>Winter Collection -50% OFF</h3>
        </div>
        <div className="banner-box banner-box2">
          <h2>NEW FOOTWEAR COLLECTION</h2>
          <h3>Spring/Summer 2022</h3>
        </div>
        <div className="banner-box banner-box3">
          <h2>t-SHIRTS</h2>
          <h3>New Trendy Prints</h3>
        </div>
      </section>
      <NewsLetter />
    </div>
  );
}
