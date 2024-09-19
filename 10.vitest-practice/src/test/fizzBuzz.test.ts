import { describe, expect, it } from "vitest";
import { fizzbuzz } from "../utils/fizzBuzz";

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

  it("should return 'worf when is multiply of 7'", () => {
    expect(fizzbuzz(7)).toEqual("worf");
  });

  it("if the number is multiple of 3 and 7 should return 'fizzworf'", () => {
    expect(fizzbuzz(21)).toEqual("fizzworf");
  });
});
