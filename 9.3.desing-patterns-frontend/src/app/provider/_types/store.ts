export interface PRODUCT_TYPE {
  id: number;
  name: string;
  price: number;
}

export interface ProductBought {
  id: string;
  productIds: number[];
  identificationUser: number;
}
