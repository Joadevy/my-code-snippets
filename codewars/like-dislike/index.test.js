import { expect, describe, it } from "vitest";
import { likeOrDislike} from "./index.js";


//  TO DO: build the tests!

// describe("Likes vs. Dislikes",() => {
//   it("Should return Dislike, Like or Nothing according to the last button status",() => {
//     expect(likeOrDislike([]).toBe(Dislike]) Dislike );
//     expect(likeOrDislike([]).toBe(Like,Like]) Nothing );
//     expect(likeOrDislike([]).toBe(Dislike,Like]) Like );
//     expect(likeOrDislike([]).toBe(Like,Dislike,Dislike]) Nothing );
//   });
//   it("more example tests",() => {
//     expect(likeOrDislike([]).toBe(Dislike,Dislike]) Nothing );
//     expect(likeOrDislike([]).toBe(Like,Like,Like]) Like );
//     expect(likeOrDislike([]).toBe(Like,Dislike]) Dislike );
//     expect(likeOrDislike([Dislike,Like,Dislike]).toBe(Dislike,Like,Dislike]) Dislike );
//     expect(likeOrDislike([Like,Like,Dislike,Like,Like,Like,Like,Dislike]).toBe('Dislike');
//     expect(likeOrDislike([])).toBe( Nothing );
//   });
// });