import { expect, describe, it } from "vitest";
import { expand } from 'index.js'

describe("expand()", function() {
  it("Should correctly expand binomials where a=1 and b is positive", function() {
    expect(expand("(x+1)^0")).toBe("1");
    expect(expand("(x+1)^1")).toBe("x+1");
    expect(expand("(x+1)^2")).toBe("x^2+2x+1");
  });
  it("Should correctly expand binomials where a=1 and b is negative", function() {
    expect(expand("(x-1)^0")).toBe("1");
    expect(expand("(x-1)^1")).toBe("x-1");
    expect(expand("(x-1)^2")).toBe("x^2-2x+1");
  });
  it("Should correctly expand binomials where a is positive.", function() {
    expect (expand("(5m+3)^4")).toBe("625m^4+1500m^3+1350m^2+540m+81");
    expect (expand("(2x-3)^3")).toBe("8x^3-36x^2+54x-27");
    expect (expand("(7x-7)^0")).toBe("1");
  });
  it("Should correctly expand binomials where a is negative.", function() {
    expect (expand("(-5m+3)^4")).toBe("625m^4-1500m^3+1350m^2-540m+81");
    expect (expand("(-2k-3)^3")).toBe("-8k^3-36k^2-54k-27");
    expect (expand("(-7x-7)^0")).toBe("1");
  })
});