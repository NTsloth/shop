import React, { useState, useEffect } from "react";
import initialProducts from "./UI/InitialProducts";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import NewsLetter from "./NewsLetter";
import { useCart } from "./UI/CartContext";

export default function Product() {
  const { addToCart } = useCart();

  const location = useLocation();
  const { product } = location.state;

  const [randomProducts, setRandomProducts] = useState([]);

  const getRandomProducts = () => {
    const filteredProducts = initialProducts.filter(
      (item) => item.id !== product.id
    );
    const randomSelection = [];
    while (randomSelection.length < 4 && filteredProducts.length > 0) {
      const randomIndex = Math.floor(Math.random() * filteredProducts.length);
      randomSelection.push(filteredProducts.splice(randomIndex, 1)[0]);
    }
    setRandomProducts(randomSelection);
  };

  useEffect(() => {
    getRandomProducts();
  }, [product]);
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
          {/* <div className="small-img-group">
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
          </div> */}
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
          <Link
            to="/cart"
            onClick={() => addToCart(product)}
            className="normar"
          >
            Add To Cart
          </Link>
          <h4>Product Details</h4>
          <span>{product.description}</span>
        </div>
      </section>
      <section id="product1" className="section-p1">
        <h2>Featured Products</h2>
        <p>Summer Collection New Modern Design</p>
        <div className="pro-container">
          {randomProducts.map((randomProduct) => (
            <div className="pro" key={randomProduct.id}>
              <Link
                to={{
                  pathname: `/shop/${randomProduct.id}`,
                  state: { product: randomProduct },
                }}
              >
                <img src={randomProduct.image} alt={randomProduct.name} />
              </Link>
              <div className="des">
                <span>{randomProduct.brand}</span>
                <h5>{randomProduct.name}</h5>
                <div className="star">
                  {Array.from({ length: randomProduct.rating }, (_, index) => (
                    <i key={index} className="fas fa-star"></i>
                  ))}
                </div>
                <h4>${randomProduct.price}</h4>
              </div>
              <Link to="/cart" onClick={() => addToCart(product)}>
                <i className="fas fa-shopping-cart cart"></i>
              </Link>
            </div>
          ))}
        </div>
      </section>
      <NewsLetter />
    </div>
  );
}
