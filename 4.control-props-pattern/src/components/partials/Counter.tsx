import { useContext, useState } from "react";
import { CartValue, ShoppingContext } from "../../context/shoppingContext";
import { ProductContext } from "../../context/productContext";

const Counter = () => {
  const { cart } = useContext(ShoppingContext);
  const { product } = useContext(ProductContext);

  const findProductCart = cart?.value.find(
    (productCart) => productCart.id === product?.id
  ) as CartValue;

  const [inputValue, setInputValue] = useState(findProductCart?.cantidity);

  const onChangeInputValue = (value: number) => {
    setInputValue(value);
    const droppedToCart = cart?.value.filter(
      (productCart) => findProductCart.id !== productCart.id
    ) as CartValue[];

    cart?.setValue([
      ...droppedToCart,
      { ...findProductCart, cantidity: value },
    ]);
  };

  return (
    <>
      <div className="product-counter">
        <button
          className="rest"
          onClick={() => onChangeInputValue(inputValue - 1)}
        >
          -
        </button>
        <input
          value={Number(inputValue)}
          type="number"
          min={1}
          onChange={(e) => {
            onChangeInputValue(Number(e.target.value));
          }}
        />
        <button
          className="plus"
          onClick={() => onChangeInputValue(inputValue + 1)}
        >
          +
        </button>
      </div>
    </>
  );
};

export default Counter;
