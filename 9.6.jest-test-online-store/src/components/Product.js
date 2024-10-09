import React from "react";

const Product = ({ title }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "20px",
        height: "50px",
      }}
    >
      <h4>{title}</h4>
      <button>Comprar</button>
    </div>
  );
};

export default Product;
