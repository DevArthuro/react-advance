import Home from "@/app/page";
import { render, screen, within } from "@testing-library/react";
import { server } from "@/mocks/server";
import { rest } from "msw";
import { BASE_URL } from "@/mocks/handlers";
import products from "@/mocks/platzi/product";

describe("home page test", () => {
  describe("Render", () => {
    it("should render home page", async () => {
      const view = await Home();
      render(view);
      expect(
        screen.getByRole("heading", { name: /All products/ })
      ).toBeInTheDocument();
    });

    it("Should have a search box with accesible name", async () => {
      const view = await Home();
      render(view);
      const searchBox = screen.getByRole("searchBox");
      // This makes reference the attribute 'title'
      expect(searchBox).toHaveAccessibleDescription("Search");
    });

    it("Should be render all products", async () => {
      server.use(
        rest.get(`${BASE_URL}/products`, (_, res, ctx) => {
          return res(ctx.status(200), ctx.json(products));
        })
      );
      const view = await Home();
      render(view);

      const listProducts = screen.getAllByRole("list-products");
      listProducts.forEach((list) => {
        const productsHTML = within(list).getAllByRole("listitem");
        if (productsHTML) {
          expect(productsHTML).toHaveLength(products.length);
        }
      });
    });

    it("Should be render all categories", () => {});
  });
});
