interface ProductCardProps {
  id: string;
  title: string;
  img: string;
  favorite?: boolean;
  cantidity: number;
  price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  img,
  favorite = false,
  cantidity,
  price,
}) => {
  return (
    <div className="card">
      <div className="img">
        <img src={img} alt="productImage" />
        <div className="favorite-logo">
          {favorite ? (
            <i className="favorite fa-solid fa-heart" />
          ) : (
            <i className="unfavorite fa-regular fa-heart" />
          )}
        </div>
      </div>
      <div className="details">
        <span className="title">{title}</span>
      </div>
      <div className="cantidity">
        <div className="rest">-</div>
        <div className="value">{cantidity}</div>
        <div className="plus">+</div>
      </div>
      <div className="btn-buy">
        <div className="price">{price}</div>
        <button className="add-btn">
          <i className="fa-solid fa-cart-shopping fa-xl" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
