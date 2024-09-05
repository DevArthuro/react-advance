import { useContext } from "react";
import { ProductContext } from "../../context/productContext";

const Image = () => {
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
    <div className="img">
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
