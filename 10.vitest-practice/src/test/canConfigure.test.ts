import { describe, expect, it } from "vitest";
import { canConfigure } from "../utils/canConfigure";

describe("canReconfigure", () => {
  it("It should be a function", () => {
    expect(canConfigure).toBeTypeOf("function");
  });

  it("It should return error if not pass parameters", () => {
    expect(() => canConfigure()).toThrowError();
  });

  it("It should to show the message", () => {
    expect(() => canConfigure()).toThrowError("from parameter is not provided");
  });

  it("If pass the parameter not string it show error", () => {
    expect(() => canConfigure(2)).toThrowError(
      "from parameter is not provided"
    );
  });

  it("If the second parameter not string it shows the throw error", () => {
    expect(() => canConfigure("a")).toThrowError(
      "to parameter is not provided"
    );
  });

  it("It should return boolean", () => {
    expect(canConfigure("a", "b")).toBeTypeOf("boolean");
  });

  it("It should return 'false' if a diferent lenght", () => {
    expect(canConfigure("a", "bcr")).toBe(false);
  });

  it("Should return false if strings provided have different length", () => {
    expect(canConfigure("abc", "ddd")).toBe(false);
  });

  it("should return false if string has different order of transformation", () => {
    expect(canConfigure("XBOX", "XXBO")).toBe(false);
  });
});
