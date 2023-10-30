import React from "react";
import { useParams } from "react-router-dom";
import Product from "../../components/Product";

function ProductItem() {
  const { slug } = useParams();

  return (
    <div>
      <Product slug={slug} />
    </div>
  );
}

export default ProductItem;
