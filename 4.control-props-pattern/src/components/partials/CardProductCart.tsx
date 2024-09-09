import { CartValue } from "../../context/shoppingContext";

interface Props {
  product: CartValue;
  dropHandler: () => void;
}

const CardProductCart: React.FC<Props> = ({ product, dropHandler }) => {
  return (
    <div className="card-cart">
      <div className="product">
        <div className="image">
          <img src={product.image} alt="product cart" />
          <span className="cantidity">{product.cantidity}</span>
        </div>
        <div className="details">
          <span className="title">{product.title}</span>
          <span className="category">{product.category}</span>
          <span className="price">{product.price * product.cantidity}</span>
        </div>
      </div>
      <div className="trash" onClick={dropHandler}>
        <i className="logo-trash fa-solid fa-trash fa-md" />
      </div>
    </div>
  );
};

export default CardProductCart;
