import { useContext } from "react";
import { CartValue, ShoppingContext } from "../../context/shoppingContext";
import { ProductContext } from "../../context/productContext";

const ButtonCart = () => {
  const { cart } = useContext(ShoppingContext);
  const { product } = useContext(ProductContext);

  if (!product) return <div>Not found</div>;

  const isExistProduct = cart?.value.some(
    (productCart) => productCart.id === product?.id
  );

  const addCart = () => {
    cart?.setValue([...cart.value, { ...product, cantidity: 1 }]);
  };

  const dropProductCart = () => {
    const droppedToCart = cart?.value.filter(
      (productCart) => product.id !== productCart.id
    ) as CartValue[];

    cart?.setValue(droppedToCart);
  };

  return (
    <>
      {product && (
        <button
          className="add-cart"
          onClick={() => {
            if (isExistProduct) {
              dropProductCart();
            } else {
              addCart();
            }
          }}
        >
          {!isExistProduct ? (
            <span className="add">Add to Cart</span>
          ) : (
            <span className="drop">Drop to cart</span>
          )}
        </button>
      )}
    </>
  );
};

export default ButtonCart;
