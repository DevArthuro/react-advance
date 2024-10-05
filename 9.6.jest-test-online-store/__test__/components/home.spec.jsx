import Home from "@/app/page";
import { render, screen } from "@testing-library/react";

describe("home page test", () => {
  describe("Render", () => {
    it("should render home page", () => {
      render(<Home />);
      expect(
        screen.getByRole("heading", { name: /All products/ })
      ).toBeInTheDocument();
    });

    it("Should have a search box with accesible name", () => {
      render(<Home />);
      const searchBox = screen.getByRole("searchBox");
      // This makes reference the attribute 'title'
      expect(searchBox).toHaveAccessibleDescription("Search");
    });

    it("Should be render all products", () => {});

    it("Should be render all categories", () => {});
  });
});
