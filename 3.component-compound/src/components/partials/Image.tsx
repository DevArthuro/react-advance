import { useContext } from "react";
import { ProductContext } from "../../context/productContext";
import { GlobalProps } from "../../interfaces/product";

const Image = ({ className, style }: GlobalProps) => {
  const {
    product,
    redux: {
      state: { favorite },
      addFav,
    },
  } = useContext(ProductContext);

  if (!product) return <></>;

  const { img } = product;

  return (
    <div className={`img ${className}`} style={style}>
      <img src={img} alt="productImage" />
      <div className="favorite-logo" onClick={addFav}>
        {favorite ? (
          <i className="favorite fa-solid fa-heart" />
        ) : (
          <i className="unfavorite fa-regular fa-heart" />
        )}
      </div>
    </div>
  );
};

export default Image;
