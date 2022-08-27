import { expect, describe, it } from "vitest";
import { decodeMorse } from "./index.js";

describe("Example from description", function(){
    it("Should decode from morse to a human readable string", () => {
        expect (decodeMorse('.... . -.--   .--- ..- -.. .')).toBe('HEY JUDE');
        expect (decodeMorse('... --- ...')).toBe('SOS');
        expect(decodeMorse('.... ..   .. --   - . ... - .. -. --.')).toBe('HI IM TESTING');
        expect(decodeMorse('----- .---- .----   ..... --... --... --... ....- ..... ...-- ...--')).toBe('011 57774533')
    })
});