// const assert = require('chai').assert;
// const { shuffle } = require('../shuffle');

// describe('shuffle function', function () {
//   it('should shuffle the cards array', function () {
//     const cards = [1, 2, 3, 4, 5];
//     const shuffled = shuffle(cards);
//     assert.notDeepEqual(cards, shuffled);
//   });
// });

/* eslint-env mocha */
import { expect } from "chai";
import { shuffle } from "../src/shuffle";

describe("shuffle function", () => {
  it("should rearrange the elements in the array", () => {
    const originalArray = [1, 2, 3, 4, 5];
    const shuffledArray = shuffle(originalArray);

    // تحقق إن نفس العناصر موجودة (ترتيب يمكن يختلف أو لا)
    expect(shuffledArray).to.have.members(originalArray);

    // تحقق إن الطول متساوي
    expect(shuffledArray).to.have.lengthOf(originalArray.length);
  });
});
