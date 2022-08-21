import { expect, describe, it } from "vitest";
import { findOutlier } from "./index";

describe("Sample Tests", () => {
    it("should return the only odd/even number in the array (min 3 elements)", () => {
      expect(findOutlier([0, 1, 2])).toBe(1);
      expect(findOutlier([1,2,3])).toBe(2);
      expect(findOutlier([2,6,8,10,3])).toBe(3);
      expect(findOutlier([0,0,3,0,0])).toBe(3);
      expect(findOutlier([1,1,0,1,1])).toBe(0);
      expect(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36])).toBe(11);
      expect(findOutlier([160, 3, 1719, 19, 11, 13, -21])).toBe(160);
    });
  });

