import { expect, describe, it } from "vitest";
import * as sameStructureAs from "./index.js";

describe("Same structure", function() {
  it("should return if the structure is the same as the argument", function() {
    expect ([ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] )).toBe(true);
    expect ([ 1, [ 1, 1 ] ].sameStructureAs( [ 2, [ 2, 2 ] ] )).toBe(true);
    expect ([ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ])).toBe(false);
    expect([ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2 ], 2 ])).toBe(false);
    expect ([ [ [ ], [ ] ] ].sameStructureAs( [ [ [ ], [ ] ] ])).toBe(true);
    expect([ [ [ ], [ ] ] ].sameStructureAs( [ [ 1, 1 ] ] )).toBe(false)
  });
});
