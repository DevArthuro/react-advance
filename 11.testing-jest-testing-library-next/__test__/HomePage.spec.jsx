import Home from "@/app/page";
import { render, cleanup, screen } from "@testing-library/react";

describe("Home Page rendering", () => {
  it("renders the home page", () => {
    render(<Home />);
    expect(screen.getByText("Home page")).toBeInTheDocument();
  });

  it("renders the home page with button", () => {
    render(<Home />);
    expect(
      screen.getByRole("button", { name: "Click me" })
    ).toBeInTheDocument();
  });

  it("should have input field with label Enter Random Text", () => {
    render(<Home />);
    expect(screen.getByRole("randomText")).toBeInTheDocument();
    expect(screen.getByLabelText(/Enter Random/)).toBeInTheDocument();
  });

  it("should have input field with label Specifict Text", () => {
    render(<Home />);
    expect(screen.getByRole("inputSpecifict")).toBeInTheDocument();
    expect(screen.getByLabelText(/Specifict Text/)).toBeInTheDocument();
  });

  it("should have input with specifict place holder", () => {
    render(<Home />);
    expect(screen.getByPlaceholderText(/Searching/)).toBeInTheDocument();
  });
});
