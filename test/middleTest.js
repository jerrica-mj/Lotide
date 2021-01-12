const middle = require("../middle");
const assert = require("chai").assert;

// TEST CODE WITH MOCHA AND CHAI
describe("#middle", () => {
  it("returns an empty array for an array with a single element", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("returns an empty array for an array with 2 elements", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it("returns an array of the middle element for an array with an odd number of elements", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("returns an array of the 2 middle-most elements for an array with an even number of elements", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
});