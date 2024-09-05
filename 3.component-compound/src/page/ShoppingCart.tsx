import AddCartButton from "../components/partials/AddCartButton";
import Counter from "../components/partials/Counter";
import Details from "../components/partials/Details";
import Image from "../components/partials/Image";
import ProductCard from "../components/ProductCard";
import { PRODUCTS } from "../utils/product";

const ShoppingCart = () => {
  return (
    <div>
      <h1>Produts</h1>
      <hr />
      {/* Component Compound By Single Elements */}
      <div className="products">
        {PRODUCTS.map((product) => (
          <ProductCard id={product.id} key={product.id}>
            <Image />
            <Details />
            <Counter />
            <AddCartButton />
          </ProductCard>
        ))}
      </div>
    </div>
  );
};

export default ShoppingCart;
