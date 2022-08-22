import { expect, describe, it } from "vitest";
import { rgb } from "./index";

describe("Tests", () => {
    it("Basic Tests", () => {
      expect (rgb(0, 0, 0)).toBe('000000');
      expect (rgb(173,255,47)).toBe('ADFF2F')
      expect (rgb(0, 0, -20)).toBe('000000')
      expect (rgb(300,255,255)).toBe('FFFFFF')
      expect (rgb(300,255,13)).toBe('FFFF0D')
      expect (rgb(-20,5,12)).toBe('00050C')
    });
  });

