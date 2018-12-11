const { expect } = require('chai');
const {
  mergeSortedArrays,
  tripleStep
} = require('../cracking-the-coding-interview/recursionAndDynamicProgramming');

xdescribe('mergeSortedArrays', () => {
  it('is a function', () => {
    expect(mergeSortedArrays).to.be.a('function');
  });
  it('returns an array', () => {
    expect(mergeSortedArrays([], [])).to.be.an('array');
  });
  it('merges two sorted arrays with different values', () => {
    expect(mergeSortedArrays([1, 3, 5], [2, 4, 6])).to.eql([1, 2, 3, 4, 5, 6]);
  });
  it('merges arrays with some similar values', () => {
    expect(mergeSortedArrays([1, 2, 5, 7], [1, 3, 5, 8])).to.eql([
      1,
      1,
      2,
      3,
      5,
      5,
      7,
      8
    ]);
  });
  it('merges two uneven arrays', () => {
    expect(mergeSortedArrays([1, 8, 9], [2, 4, 10, 12, 15])).to.eql([
      1,
      2,
      4,
      8,
      9,
      10,
      12,
      15
    ]);
  });
});

describe('tripleStep', () => {
  it('returns a number', () => {
    expect(tripleStep(4)).to.be.a('number')
  })
})
