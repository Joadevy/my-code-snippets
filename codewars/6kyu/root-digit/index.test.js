import { expect, describe, it } from "vitest";
import { digitalRoot } from 'index.js'


describe("Tests", () => {
    it("test", () => {
      expect (digitalRoot(16)).toBe(7)
      expect (digitalRoot(456)).toBe(6)
    });
  });