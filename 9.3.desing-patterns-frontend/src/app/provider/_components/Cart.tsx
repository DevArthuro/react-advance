import { useStoreContext } from "../_context/store";

const Cart = () => {
  const { buyByClient } = useStoreContext();
  return (
    <div>
      <h2>Cart</h2>
      <div>{JSON.stringify(buyByClient)}</div>;
    </div>
  );
};

export default Cart;
