import { useContext } from "react";
import { ProductContext } from "../../context/productContext";

const Image = () => {
  const { product } = useContext(ProductContext);
  return (
    <div className="image">
      <img src={product?.image} alt="Image" width={20} height={20} />
    </div>
  );
};

export default Image;
