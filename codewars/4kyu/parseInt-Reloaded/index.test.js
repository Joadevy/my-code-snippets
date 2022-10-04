import { it, describe, expect } from "vitest";
import { parseInt } from "./index";

describe("Tests", () => {
  it("test", () => {
    expect(parseInt("one")).toBe(1);
    expect(parseInt("twenty")).toBe(20);
    expect(parseInt("two hundred forty-six")).toBe(246);
    expect(parseInt("two hundred three thousand")).toBe(203000);
    expect(
      parseInt("seven hundred eighty-three thousand nine hundred and nineteen")
    ).toBe(783919);
    expect(parseInt("ninety-nine thousand one hundred")).toBe(99100);
    expect(parseInt("ninety-nine thousand fifty")).toBe(99050);
    expect(parseInt("ninety thousand one hundred twenty-five")).toBe(90125);
    expect(parseInt("one thousand one hundred")).toBe(1100);
    expect(parseInt("seven hundred thousand")).toBe(700000);
  });
});
