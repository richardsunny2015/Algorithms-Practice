const { expect } = require('chai');
const {
  BinarySearchTree,
  inOrderTraverse
} = require('../cracking-the-coding-interview/binarySearchTree');


describe('inOrderTraverse', () => {
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
        expect(inOrderTraverse(firstExample, [])).to.eql([4, 5, 6])
    })
    it('can handle an even harder example', () => {
        expect(inOrderTraverse(secondExample, [])).to.eql([6, 7, 8, 9, 10, 12, 15, 22, 25, 27])
    })
})
