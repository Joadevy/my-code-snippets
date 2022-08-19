import { expect, describe, it } from "vitest";
import { countBits } from "./index.js";

describe("Basic tests", () => {
    it("Testing for fixed tests", () => {
        expect(countBits(0)).toEqual(0);
        expect(countBits(4)).toEqual(1);
        expect(countBits(7)).toEqual(3);
        expect(countBits(9)).toEqual(2);
        expect(countBits(10)).toEqual(2);
  });
});


// describe("Basic tests", () => {
//     it("Testing for fixed tests", () => {
//       assert.strictEqual(countBits(0), 0);
//       assert.strictEqual(countBits(4), 1);
//       assert.strictEqual(countBits(7), 3);
//       assert.strictEqual(countBits(9), 2);
//       assert.strictEqual(countBits(10), 2);
//       })
//     })
  