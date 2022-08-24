import { expect, describe, it } from "vitest";
import { likeOrDislike} from "./index.js";

describe("Likes vs. Dislikes",() => {
  it("Should return Dislike, Like or Nothing according to the last button status",() => {
    expect(likeOrDislike(['Dislike'])).toBe('Dislike');
    expect(likeOrDislike(['Like','Like'])).toBe('Nothing');
    expect (likeOrDislike(['Dislike','Like'])).toBe('Like');
    expect(likeOrDislike(['Like','Dislike','Dislike'])).toBe('Nothing');
  });
  it("more tests",() => {
    expect(likeOrDislike(['Dislike','Dislike'])).toBe('Nothing');
    expect(likeOrDislike(['Like','Like','Like'])).toBe('Like');
    expect(likeOrDislike(['Like','Dislike'])).toBe('Dislike');
    expect(likeOrDislike(['Dislike','Like','Dislike'])).toBe('Dislike');
    expect(likeOrDislike(['Like','Like','Dislike','Like','Like','Like','Like','Dislike'])).toBe('Dislike');
    expect(likeOrDislike([])).toBe('Nothing');
  });
});