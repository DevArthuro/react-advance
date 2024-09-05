import AddCartButton from "../components/partials/AddCartButton";
import Counter from "../components/partials/Counter";
import Details from "../components/partials/Details";
import Image from "../components/partials/Image";
import ProductCardHOC, { ProductCard } from "../components/ProductCard";
import { PRODUCTS } from "../utils/product";

const ShoppingCart = () => {
  return (
    <div>
      <h1>Produts</h1>
      <hr />
      <h3>Component compound by individual elements</h3>
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
      <hr />
      <h3>Component compound by refence HOC (high order element)</h3>
      {/* Component Compound By HOC */}
      <div className="products">
        {PRODUCTS.map((product) => (
          <ProductCardHOC id={product.id} key={product.id}>
            <ProductCard.Image />
            <ProductCard.Details />
            <ProductCard.Counter />
            <ProductCard.AddCartButton />
          </ProductCardHOC>
        ))}
      </div>
    </div>
  );
};

export default ShoppingCart;
