import { useContext } from "react";
import { ProductContext } from "../../context/productContext";

const AddCartButton = () => {
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
    <div className="btn-buy">
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
