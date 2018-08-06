const { expect } = require('chai');
const {
  LinkedList,
  Node
} = require('../cracking-the-coding-interview/linkedLists');

describe('Node', () => {
  let testNode;
  beforeEach(() => {
    testNode = new Node(5);
  });
  it('has a value of null if nothing is passed in', () => {
    const emptyNode = new Node();
    expect(emptyNode.data).to.be.null;
  });
  it('has a data property equal to the value that is passed in', () => {
    expect(testNode.data).to.equal(5);
  });
  it('has a default next property of null', () => {
    expect(testNode.next).to.be.null;
  });
  it("can change it's next property", () => {
    testNode.next = new Node(4);
    expect(testNode.next.data).to.equal(4);
  });
});
describe('LinkedList', () => {
  let testLinkedList;
  beforeEach(() => {
    testLinkedList = new LinkedList();
  });
  describe('prepend', () => {
    beforeEach(() => {
      testLinkedList.prepend(5);
    });
    it('changes head value to passed in argument', () => {
      expect(testLinkedList.head.data).to.equal(5);
    });
    it('has the old head node as head.next', () => {
      testLinkedList.prepend(4);
      expect(testLinkedList.head.data).to.equal(4);
      expect(testLinkedList.head.next.data).to.equal(5);
    });
    it('can prepend 0', () => {
        testLinkedList.prepend(0);
        expect(testLinkedList.head.data).to.equal(0);
    })
  });
});
