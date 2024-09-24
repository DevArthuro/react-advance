import React, { useState } from "react";
import StoreContextProvider from "../_context/store";
import { products as productsPayload } from "../_utils/products";
import { ProductBought } from "../_types/store";
import { v4 } from "uuid";

export interface Props {
  children: React.ReactNode;
}

const Store: React.FC<Props> = ({ children }) => {
  const [products, setProducts] = useState(productsPayload);
  const [buyByClient, setbuyByClient] = useState<ProductBought[]>([]);

  const clientBuyProduct = (identification: number, productId: number) => {
    const isExistIndex = buyByClient.findIndex(
      (bought) => bought.identificationUser === identification
    );

    if (isExistIndex < 0) {
      setbuyByClient([
        {
          id: v4(),
          identificationUser: identification,
          productIds: [productId],
        },
        ...buyByClient,
      ]);
      return;
    }

    const { productIds, ...restOfData } = buyByClient[isExistIndex];

    buyByClient[isExistIndex] = {
      ...restOfData,
      productIds: [productId, ...productIds],
    };

    setbuyByClient([...buyByClient]);
  };

  return (
    <StoreContextProvider
      value={{
        products,
        buyByClient,
        buyProduct: clientBuyProduct,
      }}
    >
      {children}
    </StoreContextProvider>
  );
};

export default Store;
