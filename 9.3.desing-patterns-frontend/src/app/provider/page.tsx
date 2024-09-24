"use client";

import ProductForm from "./_components/ProductForm";
import Store from "./_components/Store";

const page = () => {
  return (
    <div>
      <h1>Mini Market</h1>
      <Store>
        <ProductForm />
      </Store>
    </div>
  );
};

export default page;
