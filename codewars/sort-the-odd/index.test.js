import { expect, describe, it } from "vitest";
import { sortArray } from "./index";

describe("Sample Tests", () => {
    it("should order the odd numbers in the array", () => {
      expect(sortArray([5, 3, 2, 8, 1, 4])).toMatchObject([1, 3, 2, 8, 5, 4]);
      expect(sortArray([5, 3, 1, 8, 0])).toMatchObject([1, 3, 5, 8, 0]);
      expect(sortArray([])).toMatchObject([]);
    });
  });
