import ProductCard from "../components/ProductCard";
import ProductImage from "../../public/coffee-mug.png";

const ShoppingCart = () => {
  return (
    <div>
      <h1>Produts</h1>
      <hr />
      <div className="products">
        <ProductCard
          id="1"
          title="Coffee"
          img={ProductImage}
          price={2100}
          cantidity={0}
        />
      </div>
    </div>
  );
};

export default ShoppingCart;
