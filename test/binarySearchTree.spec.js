const { expect } = require('chai');
const {
  BinarySearchTree,
  inOrderTraverse
} = require('../cracking-the-coding-interview/binarySearchTree');
const searchBST = require('../leetcode/searchBST')

xdescribe('inOrderTraverse', () => {
    let firstExample, secondExample, thirdExample;
    beforeEach(() => {
        firstExample = new BinarySearchTree(5);
        firstExample.left = new BinarySearchTree(4);
        firstExample.right = new BinarySearchTree(6);
        secondExample = new BinarySearchTree(10);
        secondExample.left = new BinarySearchTree(9);
        secondExample.left.left = new BinarySearchTree(7);
        secondExample.left.left.right = new BinarySearchTree(8);
        secondExample.left.left.left = new BinarySearchTree(6);
        secondExample.right = new BinarySearchTree(15);
        secondExample.right.left = new BinarySearchTree(12);
        secondExample.right.right = new BinarySearchTree(25);
        secondExample.right.right.left = new BinarySearchTree(22);
        secondExample.right.right.right = new BinarySearchTree(27);
    })
    it('takes an array and returns an array of all elements in order', () => {
        expect(inOrderTraverse(firstExample)).to.eql([4, 5, 6])
    })
    it('can handle an even harder example', () => {
        expect(inOrderTraverse(secondExample)).to.eql([6, 7, 8, 9, 10, 12, 15, 22, 25, 27])
    })
})

describe('searchBST', () => {
    let firstExample, secondExample
    beforeEach(() => {
        firstExample = new BinarySearchTree(5);
        firstExample.left = new BinarySearchTree(4);
        firstExample.right = new BinarySearchTree(6);
        secondExample = new BinarySearchTree(10);
        secondExample.left = new BinarySearchTree(9);
        secondExample.left.left = new BinarySearchTree(7);
        secondExample.left.left.right = new BinarySearchTree(8);
        secondExample.left.left.left = new BinarySearchTree(6);
        secondExample.right = new BinarySearchTree(15);
        secondExample.right.left = new BinarySearchTree(12);
        secondExample.right.right = new BinarySearchTree(25);
        secondExample.right.right.left = new BinarySearchTree(22);
        secondExample.right.right.right = new BinarySearchTree(27);
    })
    it('returns null if nothing is passed in', () => {
        expect(searchBST()).to.be.null
    })
    it('returns null if it can\'t find value', () => {
        expect(searchBST(firstExample, 100)).to.be.null
    })
    it('returns the correct node', () => {
        expect(searchBST(firstExample, 4)).to.equal(firstExample.left)
        expect(searchBST(firstExample, 5)).to.equal(firstExample)
    })
    it('can handle harder examples', () => {
        expect(searchBST(secondExample, 8)).to.equal(secondExample.left.left.right)
    })
})
