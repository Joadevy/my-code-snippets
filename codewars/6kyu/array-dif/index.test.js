import { expect, describe, it } from "vitest";
import {arrayDiff} from 'index.js'

describe("Basic tests", () => {
    it("Should pass Basic tests", () => {
      expect (arrayDiff([1,2], [1])).toMatchObject([2]);
      expect (arrayDiff([1,2,2], [1])).toMatchObject([2,2]);
      expect (arrayDiff([1,2,2], [2]), [1]);
      expect (arrayDiff([1,2,2], [])).toMatchObject([1,2,2]);
      expect (arrayDiff([1,2,3], [1,2])).toMatchObject([3]);
      expect (arrayDiff([], [1,2])).toMatchObject([]);
    });
  });