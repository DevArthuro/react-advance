import { rest } from "msw";

export const BASE_URL = "https://api.escuelajs.co/api/v1";

export const handlers = [
  rest.get(`${BASE_URL}/products`, (_, res, ctx) => {
    return res(ctx.json([{ id: 1, title: "product 1" }]));
  }),
];
