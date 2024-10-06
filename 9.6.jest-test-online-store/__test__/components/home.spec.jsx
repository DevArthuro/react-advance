import Home from "@/app/page";
import { render, screen, within } from "@testing-library/react";
import { server } from "@/mocks/server";
import { rest } from "msw";
import { BASE_URL } from "@/mocks/handlers";
import productsMock from "@/mocks/platzi/product";
import categoriesMocks from "@/mocks/platzi/categories";

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
      const view = await Home();
      render(view);

      const listProducts = screen.getAllByRole("list-products");
      listProducts.forEach((list) => {
        const productsList = within(list).getAllByRole("listitem");
        if (productsList) {
          expect(productsList).toHaveLength(productsMock.length);
        }
      });
    });

    it("Should be render all categories", async () => {
      const view = await Home();
      render(view);

      const listCategories = screen.getAllByRole("list-categories");
      listCategories.forEach((list) => {
        const categoriesList = within(list).getAllByRole("parent-category");
        if (categoriesList) {
          expect(categoriesList).toHaveLength(categoriesMocks.length);
        }
      });
    });
  });
});
