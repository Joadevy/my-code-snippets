import { expect, describe, it } from "vitest";
import { countSmileys } from "./index";

describe("Basic testing", function() {
    it("should return the amount of smiley faces (only valid inputs or empty)", () => {
      expect (countSmileys([])).toBe(0);
      expect (countSmileys([':D',':~)',';~D',':)'])).toBe(4);
      expect (countSmileys([':)',':(',':D',':O',':;'])).toBe(2);
      expect (countSmileys([';]', ':[', ';*', ':$', ';-D'])).toBe(1);
    });
  });