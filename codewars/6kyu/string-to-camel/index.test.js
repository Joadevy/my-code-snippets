import { expect, describe, it } from "vitest";
import { toCamelCase} from "./index.js";

describe("Tests", () => {
    it("test", () => {
  expect (toCamelCase('')).toBe('');
  expect (toCamelCase("the_stealth_warrior")).toBe("theStealthWarrior");
  expect (toCamelCase("The-Stealth-Warrior")).toBe("TheStealthWarrior");
  expect (toCamelCase("A-B-C")).toBe("ABC");
  });
  });