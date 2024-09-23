import { describe, expect, it } from "vitest";
import App, { initialProducts } from "./App";
import { screen, render, fireEvent, waitFor } from "@testing-library/react";
import { act } from "react";

describe(<App />, () => {
  it("should be render with list of products and onCLick the button order them", () => {
    render(<App />);
    const products = screen.getAllByRole("listitem");
    expect(products).toHaveLength(initialProducts.length);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument;
  });

  it("Should be show the products ordered when the button is clicked", async () => {
    render(<App />);
    const button = screen.getByRole("button");

    act(() => {
      fireEvent.click(button);
    });

    await waitFor(() => {
      const products = screen.getAllByRole("listitem");
      expect(products[0]).toHaveTextContent("Leite");
      expect(products[2]).toHaveTextContent("Carrot");
    });
  });
});
