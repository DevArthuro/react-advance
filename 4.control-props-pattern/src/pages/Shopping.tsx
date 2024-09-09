import { useContext, useMemo, useState } from "react";
import { ShoppingContext } from "../context/shoppingContext";
import Products from "../components/Products";
import CartProducts from "../components/CartProducts";

const Shopping = () => {
  const { products, cart } = useContext(ShoppingContext);
  const [openCart, setOpenCart] = useState(false);

  const handlerCart = () => setOpenCart(!openCart);
  const handlerCalculatePrice = useMemo(
    () => () => {
      const total = cart?.value.reduce(
        (acumulate, productCart) =>
          Number(acumulate) + Number(productCart.price * productCart.cantidity),
        0
      );
      return total ?? 0;
    },
    [cart]
  );

  return (
    <>
      <div className="shopping">
        {products && <Products products={products} />}
        <div className="cart">
          <div className="cart-logo" onClick={handlerCart}>
            <i className="fa-solid fa-cart-shopping fa-xl" />
          </div>
        </div>
        {handlerCalculatePrice() > 0 && (
          <div className="total-cart">
            <span className="price">{Math.round(handlerCalculatePrice())}</span>
          </div>
        )}
        <CartProducts handlerCart={handlerCart} open={openCart} />
      </div>
    </>
  );
};

export default Shopping;
