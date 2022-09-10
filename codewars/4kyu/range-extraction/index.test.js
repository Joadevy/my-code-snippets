import { expect, describe, it } from "vitest";
import { solution } from 'index.js'

describe("Tests", () => {
  it("Should return the numbers listed using a range notation if there are at least three consecutives.", () => {
    expect (solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20])).toBe("-6,-3-1,3-5,7-11,14,15,17-20")
    expect (solution([-1,0,1,2,3,4,5,6,7,8,9,11,12,15,16,17,20,25,26,28,29,30,31,33])).toBe("-1-9,11,12,15-17,20,25,26,28-31,33")
    expect (solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20])).toBe("-10--8,-6,-3-1,3-5,7-11,14,15,17-20")
    expect (solution([-15,-5,4,5,9,10,11,12,13])).toBe("-15,-5,4,5,9-13")
    expect (solution([])).toBe("")
  });
});

