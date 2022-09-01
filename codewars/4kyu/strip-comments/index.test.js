import { expect, describe, it } from "vitest";
import { solution } from 'index.js'

describe("Tests", () => {
    it("test", () => {
  expect(solution("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"])).toBe("apples, plums\npears\noranges");
  expect(solution("Q @b\nu\ne -e f g", ["@", "-"])).toBe("Q\nu\ne");
  });
  });