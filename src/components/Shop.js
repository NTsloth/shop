import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import initialProducts from "./UI/InitialProducts";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  const fetchProducts = async () => {
    try {
      setProducts(initialProducts);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []); 

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
            <Link
              key={product.id}
              to={{
                pathname: `/shop/${product.id}`,
                state: { product: product },
              }}
              className="pro"
            >
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
};

export default Shop;
