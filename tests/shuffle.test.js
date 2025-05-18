
/* eslint-env mocha */
import { expect } from "chai";
import { shuffle } from "../src/shuffle.js";

describe("shuffle function", () => {
  it("should rearrange the elements in the array", () => {
    const originalArray = [1, 2, 3, 4, 5];
    const shuffledArray = shuffle(originalArray);

    expect(shuffledArray).to.have.members(originalArray);

    expect(shuffledArray).to.have.lengthOf(originalArray.length);
  });
});
