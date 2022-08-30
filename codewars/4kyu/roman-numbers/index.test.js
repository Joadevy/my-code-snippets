import { expect, describe, it } from "vitest";
import { RomanNumerals } from "./index.js";

describe("sample tests", () => {
  it("sample tests", () => {
    expect (RomanNumerals.toRoman(1000)).toBe('M');
    expect (RomanNumerals.toRoman(4)).toBe('IV');
    expect (RomanNumerals.toRoman(1)).toBe('I');
    expect (RomanNumerals.toRoman(1990)).toBe('MCMXC');
    expect (RomanNumerals.toRoman(2008)).toBe('MMVIII');
    expect(RomanNumerals.fromRoman('I')).toBe(1);
    expect(RomanNumerals.fromRoman('XXI')).toBe(21);
    expect(RomanNumerals.fromRoman('IV')).toBe(4);
    expect(RomanNumerals.fromRoman('MMVIII')).toBe(2008);
    expect(RomanNumerals.fromRoman('MDCLXVI')).toBe(1666);
  });
});