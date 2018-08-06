const { expect } = require('chai');
const {
  LinkedList,
  Node
} = require('../cracking-the-coding-interview/linkedLists');

xdescribe('Node', () => {
    let testNode;
    beforeEach(() => {
        testNode = new Node(5);
    })
    it('has a value of null if nothing is passed in', () => {
        const emptyNode = new Node();
        expect(emptyNode.data).to.be.null;
    })
    it('has a data property equal to the value that is passed in', () => {
        expect(testNode.data).to.equal(5);
    });
    it('has a default next property of null', () => {
        expect(testNode.next).to.be.null;
    })
    it('can change it\'s next property', () => {
        testNode.next = new Node(4);
        expect(testNode.next.data).to.equal(4);
    })
})
// describe('LinkedList', () => {
//   beforeEach(() => {
//     const testLinkedList = new LinkedList();
//   });
//   describe('prepend', () => {
//     it('changes');
//   });
// });
