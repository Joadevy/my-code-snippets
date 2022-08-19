import { expect, describe, it } from "vitest";
import { validBraces } from "./index.js";

describe("Basic tests", () => {
    it("Testing for fixed tests", () => {
      expect(validBraces("()))")).toBe(false);
      expect(validBraces("()")).toBe(true);
      expect(validBraces("[]")).toBe(true);
      expect(validBraces("{}")).toBe(true);
      expect(validBraces("(){}[]")).toBe(true);
      expect(validBraces("([{}])")).toBe(true);
      expect(validBraces("(}")).toBe(false);
      expect(validBraces("[(])")).toBe(false);
      expect(validBraces("({})[({})]")).toBe(true);
      expect(validBraces("(})")).toBe(false);
      expect(validBraces("(({{[[]]}}))")).toBe(true);
      expect(validBraces("{}({})[]")).toBe(true);
      expect(validBraces(")(}{][")).toBe(false);
      expect(validBraces("())({}}{()][][")).toBe(false);
      expect(validBraces("(((({{")).toBe(false);
      expect(validBraces("}}]]))}])")).toBe(false);
  });
});

// describe("Tests", () => {
//     it("Should return true/false if the 1st str ends with the given 2nd argument", () => {
//      expect (solution('abcde', 'cde')).toBe(true);
//      expect (solution('abcde', 'abc')).toBe(false);
//      expect (solution('myStringExample','Example')).toBe(true);
//      expect(solution('myStringExample','example')).toBe(false);
//   });
// });
