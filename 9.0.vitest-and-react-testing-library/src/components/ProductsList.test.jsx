import { describe, expect, it } from "vitest";
import ProductsList from "./ProductsList";
import { v4 } from "uuid";
import { render, screen } from "@testing-library/react";

const mockProducts = [
  {
    id: v4(),
    name: "Product 1",
    price: 10.99,
  },
  {
    id: v4(),
    name: "Product 2",
    price: 9.99,
  },
  {
    id: v4(),
    name: "Product 3",
    price: 12.99,
  },
  {
    id: v4(),
    name: "Product 4",
    price: 11.99,
  },
];

describe(<ProductsList />, () => {
  it("should render a list of products", () => {
    render(<ProductsList products={mockProducts} />);
    const products = screen.getAllByRole("listitem");

    expect(products).toHaveLength(mockProducts.length);
  });

  it("should match snapshot", () => {
    render(<ProductsList items={mockProducts} />);
    expect(screen.getByRole("list")).toMatchSnapshot();
  });
});
