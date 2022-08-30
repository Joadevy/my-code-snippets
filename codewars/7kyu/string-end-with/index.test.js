import { expect, describe, it } from "vitest";
import { solution } from "./index.js";

describe("Tests", () => {
    it("Should return true/false if the 1st str ends with the given 2nd argument", () => {
     expect (solution('abcde', 'cde')).toBe(true);
     expect (solution('abcde', 'abc')).toBe(false);
     expect (solution('myStringExample','Example')).toBe(true);
     expect(solution('myStringExample','example')).toBe(false);
  });
});
  