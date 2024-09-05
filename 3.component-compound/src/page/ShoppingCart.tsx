import ProductCard from "../components/ProductCard";
import { PRODUCTS } from "../utils/product";

const ShoppingCart = () => {
  return (
    <div>
      <h1>Produts</h1>
      <hr />
      <div className="products">
        {PRODUCTS.map((product) => (
          <ProductCard id={product.id} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default ShoppingCart;
