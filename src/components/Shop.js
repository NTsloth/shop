import React, { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
const initialProducts = [
  {
    id: 1,
    image: "img/products/f1.jpg",
    brand: "adidas",
    name: "Cartoon Astronaut T-Shirts",
    stars: 5, // Number of stars
    price: 78,
  },
  {
    id: 2,
    image: "img/products/f2.jpg",
    brand: "adidas",
    name: "Cartoon Astronaut T-Shirts",
    stars: 5,
    price: 78,
  },
  {
    id: 3,
    image: "img/products/f3.jpg",
    brand: "adidas",
    name: "Cartoon Astronaut T-Shirts",
    stars: 5,
    price: 78,
  },
  {
    id: 4,
    image: "img/products/f4.jpg",
    brand: "adidas",
    name: "Cartoon Astronaut T-Shirts",
    stars: 5,
    price: 78,
  },
  {
    id: 5,
    image: "img/products/f5.jpg",
    brand: "adidas",
    name: "Cartoon Astronaut T-Shirts",
    stars: 5,
    price: 78,
  },
  {
    id: 6,
    image: "img/products/f6.jpg",
    brand: "adidas",
    name: "Cartoon Astronaut T-Shirts",
    stars: 5,
    price: 78,
  },
  {
    id: 7,
    image: "img/products/f7.jpg",
    brand: "adidas",
    name: "Cartoon Astronaut T-Shirts",
    stars: 5,
    price: 78,
  },
  {
    id: 8,
    image: "img/products/f8.jpg",
    brand: "adidas",
    name: "Cartoon Astronaut T-Shirts",
    stars: 5,
    price: 78,
  },
  {
    id: 9,
    image: "img/products/n1.jpg",
    brand: "adidas",
    name: "Cartoon Astronaut T-Shirts",
    stars: 5,
    price: 78,
  },
  {
    id: 10,
    image: "img/products/n2.jpg",
    brand: "adidas",
    name: "Cartoon Astronaut T-Shirts",
    stars: 5,
    price: 78,
  },
  {
    id: 11,
    image: "img/products/n3.jpg",
    brand: "adidas",
    name: "Cartoon Astronaut T-Shirts",
    stars: 5,
    price: 78,
  },
  {
    id: 12,
    image: "img/products/n4.jpg",
    brand: "adidas",
    name: "Cartoon Astronaut T-Shirts",
    stars: 5,
    price: 78,
  },
  {
    id: 13,
    image: "img/products/n5.jpg",
    brand: "adidas",
    name: "Cartoon Astronaut T-Shirts",
    stars: 5,
    price: 78,
  },
  {
    id: 14,
    image: "img/products/n6.jpg",
    brand: "adidas",
    name: "Cartoon Astronaut T-Shirts",
    stars: 5,
    price: 78,
  },
  {
    id: 15,
    image: "img/products/n7.jpg",
    brand: "adidas",
    name: "Cartoon Astronaut T-Shirts",
    stars: 5,
    price: 78,
  },
  {
    id: 16,
    image: "img/products/n8.jpg",
    brand: "adidas",
    name: "Cartoon Astronaut T-Shirts",
    stars: 5,
    price: 78,
  },
  // Add more products as needed
];

export default function Shop() {
  const [products, setProducts] = useState(initialProducts);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <section id="product1" className="section-p1">
        <h2>Featured Products</h2>
        <p>Summer Collection New Modern Design</p>
        <div className="pro-container">
          {currentProducts.map((product) => (
            <Link key={product.id} to={`/shop/[slug]`} className="pro">
              <img src={product.image} alt="" />
              <div className="des">
                <span>{product.brand}</span>
                <h5>{product.name}</h5>
                <div className="star">
                  {[...Array(product.stars)].map((_, index) => (
                    <i key={index} className="fas fa-star"></i>
                  ))}
                  <h4>${product.price}</h4>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div id="pagination" className="section-p1">
          {Array.from(
            { length: Math.ceil(products.length / productsPerPage) },
            (_, index) => (
              <a key={index} href="#" onClick={() => paginate(index + 1)}>
                {index + 1}
              </a>
            )
          )}
        </div>
      </section>
    </div>
  );
}
