import React from "react";

const ProductList = () => {
  const products = [
    {
      id: 1,
      name: "Cartoon Astronaut T-Shirts",
      brand: "Adidas",
      price: 78,
      image: "/img/products/f1.jpg",
    },
    {
      id: 2,
      name: "Cartoon Astronaut T-Shirts",
      brand: "Adidas",
      price: 78,
      image: "/img/products/f2.jpg",
    },
  ];

  return (
    <section className="section-p1" id="product1">
      <h2>Featured Products</h2>
      <p>Summer Collection New Modern Design</p>
      <div className="pro-container">
        {products.map((product) => (
          <div className="pro" key={product.id}>
            <img src={product.image} alt={product.name} />
            <div className="des">
              <span>{product.brand}</span>
              <h5>{product.name}</h5>
              <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <h4>${product.price}</h4>
            </div>
            <a href="#">
              <i className="fas fa-shopping-cart cart"></i>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductList;
