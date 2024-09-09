import { useContext } from "react";
import { CartValue, ShoppingContext } from "../context/shoppingContext";
import CardProductCart from "./partials/CardProductCart";

interface Props {
  open: boolean;
  handlerCart: () => void;
}

const CartProducts: React.FC<Props> = ({ open, handlerCart }) => {
  const { cart } = useContext(ShoppingContext);

  const dropProductCart = (id: number) => {
    const droppedToCart = cart?.value.filter(
      (productCart) => id !== productCart.id
    ) as CartValue[];

    cart?.setValue(droppedToCart);
  };

  return (
    <div className={open ? `cart-products` : `cart-products-close`}>
      <div className="cart-content">
        <i className="logo fa-solid fa-x fa-xl" onClick={handlerCart} />
        <div className="products-cart">
          {cart && cart?.value.length > 0 ? (
            cart?.value.map((productCart) => (
              <CardProductCart
                product={productCart}
                key={productCart.id}
                dropHandler={() => {
                  dropProductCart(productCart.id);
                }}
              />
            ))
          ) : (
            <div>There aren't products yet</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartProducts;
