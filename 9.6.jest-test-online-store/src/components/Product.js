import { commerceContext } from "@/context/commerce";
import React, { useContext, useMemo } from "react";

const Product = (product) => {
  const { id, title } = product;

  const { cart, addProduct, removeProduct } = useContext(commerceContext);

  const bought = useMemo(() => {
    const productFound = cart.find((product) => product.id === id);
    return !!productFound;
  }, [cart]);

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
      {!bought ? (
        <button onClick={() => addProduct(product)}>Comprar</button>
      ) : (
        <button onClick={() => removeProduct(id)}>Quitar</button>
      )}
    </div>
  );
};

export default Product;
