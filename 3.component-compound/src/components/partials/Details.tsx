import { useContext } from "react";
import { ProductContext } from "../../context/productContext";
import { GlobalProps } from "../../interfaces/product";

const Details = ({ className, style }: GlobalProps) => {
  const { product } = useContext(ProductContext);

  if (!product) return <></>;

  const { title } = product;

  return (
    <div className={`details ${className}`} style={style}>
      <span className="title">{title}</span>
    </div>
  );
};

export default Details;
