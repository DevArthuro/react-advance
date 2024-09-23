const ProductsList = ({ products }) => {
  return (
    <ul>
      {products &&
        products.map(({ id, name, price }) => (
          <li key={id}>
            {name} - ${price}
          </li>
        ))}
    </ul>
  );
};

export default ProductsList;
