class LinkedList {
  constructor() {
    this.head = null;
  }
  prepend(data) {
    if (typeof data === 'undefined') return;
    if (!this.head) {
      this.head = new Node(data);
    } else {
      const oldHead = this.head;
      const newHead = new Node(data);
      newHead.next = oldHead;
      this.head = newHead;
    }
  }
  removeDups() {
    if (!this.head) return;
    let hashTable = {};
    hashTable[this.head.data] = true;
    let previous = this.head;
    let current = this.head.next;
    while (current) {
      if (hashTable.hasOwnProperty(current.data)) {
        let newNext = current.next;
        previous.next = newNext;
      } else {
        hashTable[current.data] = true;
        previous = previous.next;
      }
      current = previous ? previous.next : null;
    }
  }
  kToLast(num) {
    if (num < 1) return null;
    let length = 0;
    let current = this.head;
    while (current !== null) {
      length++;
      current = current.next;
    }
    length -= num;
    current = this.head;
    while (length > 0) {
      length--;
      current = current.next;
      console.log(current.data);
    }
    return current.data;
  }
  deleteMiddleNode() {
    let length = 0;
    let current = this.head;
    while (current !== null) {
      length++;
      current = current.next;
    }
    length = Math.floor(length / 2) - 1;
    current = this.head;
    while (length) {
      current = current.next;
      length--;
    }
    current.next = current.next.next;
  }
}

class Node {
  constructor(data) {
    this.data = typeof data === 'undefined' ? null : data;
    this.next = null;
  }
}

module.exports = { LinkedList, Node };
