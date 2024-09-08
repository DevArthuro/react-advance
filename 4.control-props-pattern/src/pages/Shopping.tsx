import { useContext } from "react";
import { ShoppingContext } from "../context/shoppingContext";
import Products from "../components/Products";

const Shopping = () => {
  const { products } = useContext(ShoppingContext);

  return (
    <div className="shopping">
      {products && <Products products={products} />}
    </div>
  );
};

export default Shopping;
