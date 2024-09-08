import { CartValue } from "../context/shoppingContext";

interface Props {
  open: boolean;
  handlerCart: () => void;
  cart?: CartValue[];
}

const CartProducts: React.FC<Props> = ({ open, handlerCart, cart }) => {
  return (
    <div className={open ? `cart-products` : `cart-products-close`}>
      <div className="cart-content">
        <i className="logo fa-solid fa-x fa-xl" onClick={handlerCart} />
        {JSON.stringify(cart)}
      </div>
    </div>
  );
};

export default CartProducts;
