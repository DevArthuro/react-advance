import useProduct from "../hooks/useProduct";

const ProductCard: React.FC<{ id: string }> = ({ id }) => {
  const { state, increase, decrease, addFav, addCart } = useProduct({ id });

  const { product } = state;

  return (
    <div className="card">
      <div className="img">
        <img src={product?.img} alt="productImage" />
        <div className="favorite-logo" onClick={addFav}>
          {state.favorite ? (
            <i className="favorite fa-solid fa-heart" />
          ) : (
            <i className="unfavorite fa-regular fa-heart" />
          )}
        </div>
      </div>
      <div className="details">
        <span className="title">{product?.title}</span>
      </div>
      <div className="cantidity">
        <div className="rest" onClick={decrease}>
          -
        </div>
        <div className="value">{state.cantidity}</div>
        <div className="plus" onClick={increase}>
          +
        </div>
      </div>
      <div className="btn-buy">
        <div className="price">{product?.price}</div>
        <button className="add-btn" onClick={addCart}>
          {state.inCart ? (
            <i className="fa-solid fa-trash fa-xl" />
          ) : (
            <i className="fa-solid fa-cart-shopping fa-xl" />
          )}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
