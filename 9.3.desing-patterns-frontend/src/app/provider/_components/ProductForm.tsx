import { useState } from "react";
import { useStoreContext } from "../_context/store";
import Product from "./Product";
import Cart from "./Cart";

const ProductForm = () => {
  const { products, buyProduct } = useStoreContext();
  const [identification, setIdentification] = useState<number>(0);

  const addProduct = (productId: number) => {
    buyProduct(identification, productId);
  };

  return (
    <>
      <div>
        <label htmlFor="id">Identification</label>
        <input
          id="id"
          type="number"
          placeholder="client identification"
          defaultValue={identification}
          onChange={(e) => {
            setIdentification(Number(e.target.value));
          }}
        />
      </div>
      <div>
        {products.map((product) => (
          <Product
            key={product.id}
            {...product}
            onClickProduct={() => {
              addProduct(product.id);
            }}
          />
        ))}
      </div>
      <Cart />
    </>
  );
};

export default ProductForm;
