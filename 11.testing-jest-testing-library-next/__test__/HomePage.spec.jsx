import Home from "@/app/page";
import { render, cleanup, screen } from "@testing-library/react";

describe("Home Page rendering", () => {
  it("renders the home page", () => {
    render(<Home />);
    expect(screen.getByText("Home page")).toBeInTheDocument();
  });
});
