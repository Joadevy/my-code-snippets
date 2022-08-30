import { expect, describe, it } from "vitest";
import { anagrams } from "./index.js";

describe("Anagrams", function() {
  it("should return a list of all anagrams", function() {
    expect (anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])).toMatchObject(['aabb', 'bbaa']);
    expect (anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])).toMatchObject(['carer', 'racer']);
  });
  
  it("should return an empty array for no anagrams", function() {
    expect (anagrams('laser', ['lazing', 'lazy',  'lacer'])).toMatchObject([]);
  });
});