import React from "react";
import Product from "./Product";

const Products = ({ products }) => {
  return (
    <>
      {products.map((product) => (
        <li
          key={product.id}
          style={{ listStyle: "none", margin: "10px 0", padding: 0 }}
        >
          <Product {...product} />
        </li>
      ))}
    </>
  );
};

export default Products;
