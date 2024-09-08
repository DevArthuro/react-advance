interface Props {
  open: boolean;
  handlerCart: () => void;
}

const CartProducts: React.FC<Props> = ({ open, handlerCart }) => {
  return (
    <div className={open ? `cart-products` : `cart-products-close`}>
      <div className="cart-content">
        <i className="logo fa-solid fa-x fa-xl" onClick={handlerCart} />
        Content
      </div>
    </div>
  );
};

export default CartProducts;
