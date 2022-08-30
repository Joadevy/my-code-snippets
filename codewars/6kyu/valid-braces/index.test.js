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
