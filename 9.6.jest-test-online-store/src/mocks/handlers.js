import { rest } from "msw";
import products from "./platzi/product";
import categories from "./platzi/categories";

export const BASE_URL = "https://api.escuelajs.co/api/v1";

export const handlers = [
  rest.get(`${BASE_URL}/products`, (_, res, ctx) => {
    return res(ctx.json(products));
  }),
  rest.get(`${BASE_URL}/categories`, (_, res, ctx) => {
    return res(ctx.json(categories));
  }),
];
