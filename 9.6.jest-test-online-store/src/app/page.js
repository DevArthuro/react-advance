export default async function Home() {
  const response = await fetch(`https://api.escuelajs.co/api/v1/products`, {
    cache: "no-store",
  });
  const products = await response.json();

  return (
    <div>
      <input
        role="searchBox"
        type="text"
        title="Search"
        placeholder="Search Products"
      />
      <h1>All products</h1>
      <ul role="list-products">
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
}
