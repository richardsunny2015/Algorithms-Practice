class LinkedList {
  constructor() {
    this.head = null;
  }
  prepend(data) {
    if (typeof data === 'undefined') return;
    if (!this.head) {this.head = new Node(data);}
    else {
        const oldHead = this.head;
        const newHead = new Node(data);
        newHead.next = oldHead;
        this.head = newHead;
    }
  }
}

class Node {
  constructor(data) {
    this.data = typeof data === 'undefined' ? null : data;
    this.next = null;
  }
}

module.exports = { LinkedList, Node };
