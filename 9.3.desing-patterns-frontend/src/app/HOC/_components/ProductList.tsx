import { filterItems } from "../_helper/filterItems";
import { PRODUCT_TYPE } from "../_types/Product";
import Product from "./Product";

interface Props {
  query: string;
  dataset: PRODUCT_TYPE[];
}

const ProductList: React.FC<Props> = ({ query, dataset }) => {
  const items = filterItems({ query, dataset });
  return (
    <div>
      {items.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductList;
