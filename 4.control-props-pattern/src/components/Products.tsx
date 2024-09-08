import { useContext, useMemo } from "react";
import ProductContext from "../context/productContext";
import { ShoppingType } from "../interfaces/products";
import CardComponent, { Card } from "./Card";
import { ShoppingContext } from "../context/shoppingContext";

interface Props {
  products: ShoppingType[];
}

const Products: React.FC<Props> = ({ products }) => {
  const { cart } = useContext(ShoppingContext);

  const isExistProduct = useMemo(
    () => (id: number) =>
      cart?.value.some((productCart) => productCart.id === id),
    [cart]
  );

  return (
    <div className="products">
      {products.map((product) => (
        <div key={product.id}>
          <ProductContext value={{ product }}>
            <CardComponent>
              <Card.Image />
              <Card.Title />
              <Card.Details />
              <Card.ButtonCart />
              {isExistProduct(product.id) && <Card.Counter />}
            </CardComponent>
          </ProductContext>
        </div>
      ))}
    </div>
  );
};

export default Products;
