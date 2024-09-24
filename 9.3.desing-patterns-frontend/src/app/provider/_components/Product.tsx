import { PRODUCT_TYPE } from "../_types/store";

const Product: React.FC<PRODUCT_TYPE & { onClickProduct: () => void }> = ({
  name,
  price,
  onClickProduct,
}) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Price: {price}</p>
      <button onClick={onClickProduct}>Add Cart</button>
    </div>
  );
};

export default Product;
