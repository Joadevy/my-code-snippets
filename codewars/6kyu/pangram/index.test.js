import { expect, describe, it } from "vitest";
import {isPangram} from 'index.js'

describe("Tests", () => {
    it("test1", () => {
      let string = "The quick brown fox jumps over the lazy dog."
      expect (isPangram(string)).toBe(true)
    })
    it("test2", () => {
      let string = "This is not a pangram."
      expect (isPangram(string)).toBe(false)
    });
  });