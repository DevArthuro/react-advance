import { useContext } from "react";
import { ShoppingContext } from "../context/shoppingContext";

const Shopping = () => {
  const { products } = useContext(ShoppingContext);

  if (!products) return <div>Not found</div>;

  return <div className="shopping">{JSON.stringify(products)}</div>;
};

export default Shopping;
