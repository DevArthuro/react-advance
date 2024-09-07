import ProductContext from "../context/productContext";
import { ShoppingType } from "../interfaces/products";
import CardComponent, { Card } from "./Card";

interface Props {
  products: ShoppingType[];
}

const Products: React.FC<Props> = ({ products }) => {
  return (
    <div className="products">
      {products.map((product) => (
        <div key={product.id}>
          <ProductContext value={{ product }}>
            <CardComponent>
              <Card.Title />
              <Card.Image />
            </CardComponent>
          </ProductContext>
        </div>
      ))}
    </div>
  );
};

export default Products;
