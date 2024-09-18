import { describe, it, expect } from "vitest";
import { changeOrderByPrice } from "./handlerOrderProducts";
import { v4 } from "uuid";

const mockProducts = [
  {
    id: v4(),
    name: "Product 1",
    price: 4600,
  },
  {
    id: v4(),
    name: "Product 2",
    price: 5600,
  },
  {
    id: v4(),
    name: "Product 3",
    price: 300,
  },
];

describe("Change order by price", () => {
  it("should be order the products by price in desending", () => {
    const result = changeOrderByPrice(mockProducts);

    const cheaperProduct = mockProducts[2];
    const expensiveProduct = mockProducts[1];

    expect(result[0]).toEqual(expensiveProduct);
    expect(result[2]).toEqual(cheaperProduct);
  });
});
