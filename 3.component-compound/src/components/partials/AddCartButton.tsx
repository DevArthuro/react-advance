import { useContext } from "react";
import { ProductContext } from "../../context/productContext";
import { GlobalProps } from "../../interfaces/product";

const AddCartButton = ({ style, className }: GlobalProps) => {
  const {
    product,
    redux: {
      addCart,
      state: { inCart },
    },
  } = useContext(ProductContext);

  if (!product) return <></>;

  const { price } = product;

  return (
    <div className={`btn-buy ${className}`} style={style}>
      <div className="price">{price}</div>
      <button className="add-btn" onClick={addCart}>
        {inCart ? (
          <i className="fa-solid fa-trash fa-xl" />
        ) : (
          <i className="fa-solid fa-cart-shopping fa-xl" />
        )}
      </button>
    </div>
  );
};

export default AddCartButton;
