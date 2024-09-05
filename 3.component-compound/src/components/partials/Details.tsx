import { useContext } from "react";
import { ProductContext } from "../../context/productContext";

const Details = () => {
  const { product } = useContext(ProductContext);

  if (!product) return <></>;

  const { title } = product;

  return (
    <div className="details">
      <span className="title">{title}</span>
    </div>
  );
};

export default Details;
