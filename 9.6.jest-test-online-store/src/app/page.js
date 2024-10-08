"use client";

import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [backupProducts, setProductsBackup] = useState([]);

  const getData = useCallback(async () => {
    setLoading(true);
    const responseProducts = await fetchProducts();
    const responseCategories = await fetchCategories();

    setProducts(responseProducts);
    setProductsBackup(responseProducts);
    setCategories(responseCategories);
    setLoading(false);
  });

  useEffect(() => {
    getData();
  }, []);

  const handleSearch = useCallback(() => {
    if (search.length === 0) {
      setProducts(backupProducts);
      return;
    }
    const filteredProducts = backupProducts.filter((product) => {
      return product.title.toLowerCase().includes(search.toLowerCase());
    });
    setProducts(filteredProducts);
  }, [search]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <input
        role="searchBox"
        type="text"
        title="Search"
        placeholder="Search Products"
        data-testid="inputSearch"
        onChange={(e) => {
          setSearch(e.target.value);
          handleSearch();
        }}
      />

      {!search ? (
        <>
          <h1>All Categories</h1>
          {categories && categories.length > 0 ? (
            <ul role="list-categories">
              {categories.map((category) => (
                <li key={category.id} role="parent-category">
                  <h2>{category.name}</h2>
                  <ul role="list-category-products">
                    {products.map((product) => {
                      if (product.category.id === category.id) {
                        return (
                          <li key={`${category.id}-${product.id}`}>
                            {product.title}
                          </li>
                        );
                      }
                    })}
                  </ul>
                </li>
              ))}
            </ul>
          ) : (
            <div>Not found any category</div>
          )}
        </>
      ) : (
        <h1>Search Mode</h1>
      )}

      {!search && <h1>All products</h1>}
      {products && products.length > 0 ? (
        <ul role="list-products">
          {products.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      ) : (
        <div>Not found any product</div>
      )}
    </div>
  );
}

export async function fetchProducts() {
  try {
    const response = await fetch(`https://api.escuelajs.co/api/v1/products`, {
      cache: "no-store",
    });
    const products = await response.json();
    return products;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchCategories() {
  try {
    const response = await fetch(`https://api.escuelajs.co/api/v1/categories`, {
      cache: "no-store",
    });
    const categories = await response.json();
    return categories;
  } catch (error) {
    console.log(error);
  }
}
