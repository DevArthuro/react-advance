import { useContext } from "react";
import { ProductContext } from "../../context/productContext";

const Title = () => {
  const { product } = useContext(ProductContext);

  return <div className="title">{product?.title}</div>;
};

export default Title;
