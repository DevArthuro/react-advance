import { useContext, useState } from "react";
import { ShoppingContext } from "../context/shoppingContext";
import Products from "../components/Products";
import CartProducts from "../components/CartProducts";

const Shopping = () => {
  const { products, cart } = useContext(ShoppingContext);
  const [openCart, setOpenCart] = useState(false);

  const handlerCart = () => setOpenCart(!openCart);

  return (
    <>
      <div className="shopping">
        {products && <Products products={products} />}
        <div className="cart">
          <div className="cart-logo" onClick={handlerCart}>
            <i className="fa-solid fa-cart-shopping fa-xl" />
          </div>
        </div>
        <CartProducts
          handlerCart={handlerCart}
          open={openCart}
          cart={cart?.value}
        />
      </div>
    </>
  );
};

export default Shopping;
