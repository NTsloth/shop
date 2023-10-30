import React from "react";

const ProductDetails = () => {
  return (
    <section className="section-p1" id="prodetails">
      <div className="single-pro-image">
        <img src="/img/products/f1.jpg" width="100%" id="MainImg" alt="" />
        <div className="small-img-group">
          <div className="small-img-col">
            <img
              src="/img/products/f1.jpg"
              width="100%"
              className="small-img"
              alt=""
            />
          </div>
          <div className="small-img-col">
            <img
              src="/img/products/f2.jpg"
              width="100%"
              className="small-img"
              alt=""
            />
          </div>
          <div className="small-img-col">
            <img
              src="/img/products/f3.jpg"
              width="100%"
              className="small-img"
              alt=""
            />
          </div>
          <div className="small-img-col">
            <img
              src="/img/products/f4.jpg"
              width="100%"
              className="small-img"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="single-pro-details">
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
        <button className="normar">Add To Cart</button>
        <h4>Product Details</h4>
        <span>
          This T-shirt with rolled up sleeves is crafted from a fluid fabric
          that is a pleasure to wear, for a fully-assumed casual style. It is
          adorned with a woven jacquard LGP monogram that subtly echoes the
          Longchamp identity. For Spring/Summer 2022, our Parisian shows us her
          curiosity, her enthusiasm for encounters, her openness to cultures and
          her passion for art and crafts. She collects, she hunts, she twists
          and accessorizes her looks according to her discoveries. During her
          travels in the south of France, in Provence, she hunts for earthenware
          and ceramics for their colors, their features, their patterns.
        </span>
      </div>
    </section>
  );
};

export default ProductDetails;
