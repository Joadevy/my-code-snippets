import { expect, describe, it } from "vitest";
import { duplicateCount } from "./index";

describe("Tests", () => {
  it("should return the amount of duplicate characters", () => {
    expect (duplicateCount("")).toBe(0);
    expect (duplicateCount("abcde")).toBe(0);
    expect (duplicateCount("aabbcde")).toBe(2);
    expect (duplicateCount("aabBcde")).toBe(2); // should ignore cases
    expect (duplicateCount("Indivisibility")).toBe(1)
    expect (duplicateCount("Indivisibilities")).toBe(2);
  });
});