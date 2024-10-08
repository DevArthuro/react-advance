import React from "react";
import Home from "@/app/page";
import { act, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { server } from "@/mocks/server";
import { rest } from "msw";
import { BASE_URL } from "@/mocks/handlers";
import productsMock from "@/mocks/platzi/products";
import categoriesMocks from "@/mocks/platzi/categories";

describe("home page test", () => {
  describe("Render", () => {
    it("should render home page", async () => {
      render(<Home />);

      expect(
        await screen.findByRole("heading", { name: /All products/ })
      ).toBeInTheDocument();
    });

    it("Should have a search box with accesible name", async () => {
      render(<Home />);

      const searchBox = await screen.findByRole("searchBox");
      // This makes reference the attribute 'title'
      expect(searchBox).toHaveAccessibleDescription("Search");
    });

    it("Should be render all products", async () => {
      render(<Home />);

      const listProducts = await screen.findAllByRole("list-products");
      listProducts.forEach((list) => {
        const productsList = within(list).getAllByRole("listitem");
        if (productsList) {
          expect(productsList).toHaveLength(productsMock.length);
        }
      });
    });

    it("Should be render all categories", async () => {
      render(<Home />);

      const listCategories = await screen.findAllByRole("list-categories");
      listCategories.forEach((list) => {
        const categoriesList = within(list).getAllByRole("parent-category");
        if (categoriesList) {
          expect(categoriesList).toHaveLength(categoriesMocks.length);
        }
      });
    });
  });

  describe("Behavior", () => {
    it("When the user typing on input it search related products", async () => {
      const productMock = {
        id: 999,
        title: "Clasica camisa",
        price: 90,
        description:
          "Elevate your casual wear with our Classic Grey Hooded Sweatshirt. Made from a soft cotton blend, this hoodie features a front kangaroo pocket, an adjustable drawstring hood, and ribbed cuffs for a snug fit. Perfect for those chilly evenings or lazy weekends, it pairs effortlessly with your favorite jeans or joggers.",
        images: ["https://i.imgur.com/R2PN9Wq.jpeg"],
        creationAt: "2024-10-07T20:00:21.000Z",
        updatedAt: "2024-10-07T21:14:48.000Z",
        category: {
          id: 1,
          name: "Clothes",
          image: "https://i.imgur.com/QkIa5tT.jpeg",
          creationAt: "2024-10-07T20:00:21.000Z",
          updatedAt: "2024-10-07T20:00:21.000Z",
        },
      };

      const joinedProducts = [productMock, ...productsMock];

      // How many times the product exist with its title
      const timesFounds = joinedProducts.reduce((prevCount, product) => {
        if (
          product.title.toLowerCase().includes(productMock.title.toLowerCase())
        ) {
          return prevCount + 1;
        }
        return prevCount;
      }, 0);

      const { type } = userEvent.setup();

      server.use(
        rest.get(`${BASE_URL}/products`, (_, res, ctx) => {
          return res(ctx.json(joinedProducts));
        })
      );

      render(<Home />);

      const searchInput = await screen.findByTestId("inputSearch");
      expect(searchInput).toBeInTheDocument();

      const identifyReplyOfProducts = (timesRepit) => {
        // The front have to identify my aditional element
        const productsList = screen.getAllByRole("list-products");

        productsList.forEach((productElement) => {
          const products = within(productElement).getAllByRole("listitem");

          if (products) {
            // There is an aditional product
            expect(products).toHaveLength(timesRepit);
          }
        });
      };

      identifyReplyOfProducts(productsMock.length + 1);

      expect(screen.queryByText(/Search Mode/)).not.toBeInTheDocument();

      // When the product is founded
      await type(searchInput, productMock.title);

      expect(searchInput).toHaveValue(productMock.title);

      // This product have to reply one time
      identifyReplyOfProducts(1);

      // When product not exist
      await type(searchInput, "product not exist");

      expect(screen.getByText(/Not found any product/)).toBeInTheDocument();
    });
  });
});
