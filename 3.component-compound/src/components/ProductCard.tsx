import useProduct from "../hooks/useProduct";

const ProductCard: React.FC<{ id: string }> = ({ id }) => {
  const { state } = useProduct({ id });

  const { product } = state;

  return (
    <div className="card">
      <div className="img">
        <img src={product?.img} alt="productImage" />
        <div className="favorite-logo">
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
        <div className="rest">-</div>
        <div className="value">{state.cantidity}</div>
        <div className="plus">+</div>
      </div>
      <div className="btn-buy">
        <div className="price">{product?.price}</div>
        <button className="add-btn" disabled={state.inCart}>
          <i className="fa-solid fa-cart-shopping fa-xl" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
