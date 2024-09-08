import { useContext } from "react";
import { ProductContext } from "../../context/productContext";
import DrawStarts from "./StartsRating";

const Details = () => {
  const { product } = useContext(ProductContext);
  return (
    <div className="details">
      <span className="category">{product?.category}</span>
      <span className="price">{product?.price}</span>
      <span className="starts">
        <DrawStarts number={product?.rating.rate ?? 0} />
      </span>
    </div>
  );
};

export default Details;
