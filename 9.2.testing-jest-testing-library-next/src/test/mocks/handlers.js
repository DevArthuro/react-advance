import { rest } from "msw";

export const handlers = [
  rest.get("/api/users", (_, res, ctx) => {
    return res(ctx.json([{ id: 5, userName: "carlos" }]));
  }),
  rest.post("/api/auth", async (req, res, ctx) => {
    const { email, password } = await req.json();
    const isLogged = email === "test@test.com" && password === "1234";
    return res(ctx.json({ isLogged }), ctx.status(isLogged ? 201 : 401));
  }),
];
