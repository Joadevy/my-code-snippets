import { expect, describe, it } from "vitest";
import { topThreeWords } from 'index.js'


describe("Tests", () => {
    it("test", () => {
  expect (topThreeWords("a a a  b  c c  d d d d  e e e e e")).toMatchObject(['e','d','a'])
    
  expect (topThreeWords("a a c b b")).toMatchObject(['a','b','c'])
  
  expect (topThreeWords("  //wont won't won't ")).toMatchObject(["won't", "wont"])
    
  expect (topThreeWords("  , e   .. ")).toMatchObject(["e"])
  
  expect (topThreeWords("  ...  ")).toMatchObject([])
  
  expect (topThreeWords("  '  ")).toMatchObject([])
    
  expect (topThreeWords(`In a village of La Mancha, the name of which I have no desire to call to
  mind, there lived not long since one of those gentlemen that keep a lance
  in the lance-rack, an old buckler, a lean hack, and a greyhound for
  coursing. An olla of rather more beef than mutton, a salad on most
  nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
  on Sundays, made away with three-quarters of his income.`)).toMatchObject(['a','of','on'])
  });
  });
  