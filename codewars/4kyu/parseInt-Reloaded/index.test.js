import { it, describe, expect } from "vitest";
import { parseInt } from "./index";

describe("Tests", () => {
  it("test", () => {
    expect(parseInt("one")).toBe(1);
    expect(parseInt("twenty")).toBe(20);
    expect(parseInt("two hundred forty-six")).toBe(246);
  });
});
