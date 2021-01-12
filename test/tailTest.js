const tail = require("../tail");
const assert = require("chai").assert;

// TEST CODE WITH MOCHA AND CHAI
describe("#tail", () => {
  // test case 1: check the returned array has all but [0]
  it('returns ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]', () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    // Use assert.deepEqual for comparing arrays
    assert.deepEqual(result, ["Lighthouse", "Labs"]);
  });

  // test case 2: check the original array is unmodified
  it("the input array remains unchanged", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    // assertEqual(words.length, 3); // pass
    assert.deepEqual(words, ["Yo Yo", "Lighthouse", "Labs"]);
  });

  // test case 3: check array of 1 element returns empty tail array
  it("returns an empty array for an array of 1 element", () => {
    const lonely = ['solo'];
    assert.deepEqual(tail(lonely), []);
  });

  // text case 4: check empty array returns empty tail array
  it("returns an empty tail array for an empty array", () => {
    const empty = [];
    assert.deepEqual(tail(empty), []);
  });
});