import { rest } from "msw";

export const handlers = [
  rest.get("/api/users", (_, res, ctx) => {
    return res(ctx.json([{ id: 5, userName: "carlos" }]));
  }),
];
