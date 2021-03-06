const { expect } = require('chai');
const {
  LinkedList,
  Node
} = require('../cracking-the-coding-interview/linkedLists');

xdescribe('Node', () => {
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
xdescribe('LinkedList', () => {
  let testLinkedList;
  beforeEach(() => {
    testLinkedList = new LinkedList();
  });
  xdescribe('prepend', () => {
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
    });
  });
  xdescribe('removeDups', () => {
    let numsArr;
    let length;
    let values;
    beforeEach(() => {
      length = 0;
      values = [];
      numsArr = [1, 2, 1, 3, 5, 2];
      numsArr.forEach(num => {
        testLinkedList.prepend(num);
      });
      testLinkedList.removeDups();
      let current = testLinkedList.head;
      while (current) {
        length++;
        values.unshift(current.data);
        current = current.next;
      }
    });
    it('reduces a linked list with duplicates', () => {
      expect(length).to.equal(4);
    });
    it('removes duplicate values', () => {
      expect(values).to.eql([1, 3, 5, 2]);
    });
  });
  xdescribe('kToLast', () => {
    let linkedListOne, arr;
    beforeEach(() => {
      arr = [5, 4, 3, 2, 1];
      linkedListOne = new LinkedList();
      arr.forEach(elem => {
        linkedListOne.prepend(elem);
      });
    });
    it('returns null if less than one', () => {
      expect(linkedListOne.kToLast(0)).to.be.null;
    });
    it('returns tail when given one as a param', () => {
      expect(linkedListOne.kToLast(1)).to.equal(5);
    });
    it('returns the correct k data with any number', () => {
      expect(linkedListOne.kToLast(4)).to.equal(2);
      expect(linkedListOne.kToLast(5)).to.equal(1);
    });
  });
  describe('deleteMiddleNode', () => {
    let linkedListOne,
      linkedListTwo,
      arrOne,
      arrTwo,
      lengthOne,
      lengthTwo,
      newArrOne,
      newArrTwo;
    beforeEach(() => {
      arrOne = [5, 4, 3, 2, 1]; // 1, 2, 3, 4, 5
      arrTwo = [70, 80, 99, 45, 53, 22]; // 22, 53, 45, 99, 80, 70
      linkedListOne = new LinkedList();
      linkedListTwo = new LinkedList();
      arrOne.forEach(elem => {
        linkedListOne.prepend(elem);
      });
      arrTwo.forEach(elem => {
        linkedListTwo.prepend(elem);
      });
      lengthOne = 0;
      lengthTwo = 0;
      newArrOne = [];
      newArrTwo = [];
      let currentOne = linkedListOne.head;
      let currentTwo = linkedListTwo.head;
      linkedListOne.deleteMiddleNode();
      linkedListTwo.deleteMiddleNode();
      while (currentOne !== null) {
        newArrOne.push(currentOne.data)
        lengthOne++;
        currentOne = currentOne.next;
      }
      while (currentTwo !== null) {
        newArrTwo.push(currentTwo.data)
        lengthTwo++;
        currentTwo = currentTwo.next;
      }
    });
    it('returns undefined', () => {
      expect(linkedListOne.deleteMiddleNode()).to.be.undefined;
    });
    it('makes the linkedList smaller', () => {
      expect(lengthOne).to.equal(4);
      expect(lengthTwo).to.equal(5);
    });
    it('removes the correct node', () => {
      expect(newArrOne).to.deep.equal([1, 2, 4, 5])
      expect(newArrTwo).to.deep.equal([22, 53, 45, 80, 70])
    });
  });
});
