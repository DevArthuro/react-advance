import { describe, expect, it } from "vitest";

const fizzbuzz = (number: number) => {
  if (typeof number !== "number") throw new Error("Number is not a number");
  if (Number.isNaN(number)) throw new Error("Not must to be NaN parameter");

  if (number % 3 === 0 && number % 5 === 0) return "fizzbuzz";
  if (number % 3 === 0) return "fizz";
  if (number % 5 === 0) return "buzz";

  return number;
};

describe("fizzbuzz", () => {
  // ** it test is cover
  //   it("should be a function", () => {
  //     expect(typeof fizzbuzz).toBe("function");
  //   });

  it("should thow if not number is provided as parameter", () => {
    expect(() => fizzbuzz()).toThrow();
  });

  it("should throw a specific error message", () => {
    expect((): void => fizzbuzz()).toThrow("Number is not a number");
  });

  it("should throw a specific error message", () => {
    expect((): void => fizzbuzz(NaN)).toThrow("Not must to be NaN parameter");
  });

  it("The number not have the multiple just return the number", () => {
    expect(fizzbuzz(1)).toEqual(1);
    expect(fizzbuzz(2)).toEqual(2);
  });

  it("The number is multiple 3 it return 'fizz'", () => {
    expect(fizzbuzz(3)).toEqual("fizz");
    expect(fizzbuzz(6)).toEqual("fizz");
    expect(fizzbuzz(9)).toEqual("fizz");
  });

  it("The number is multiple 3 it return 'fizz'", () => {
    expect(fizzbuzz(5)).toEqual("buzz");
    expect(fizzbuzz(10)).toEqual("buzz");
  });

  it("Should return 'fizzbuzz' is number multiple of both", () => {
    expect(fizzbuzz(15)).toEqual("fizzbuzz");
    expect(fizzbuzz(30)).toEqual("fizzbuzz");
  });
});
