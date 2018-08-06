class LinkedList {
    constructor() {
        this.head = null;
    }
    prepend(data) {

    }
}

class Node {
    constructor(data) {
        this.data = data || null;
        this.next = null;
    }
}

module.exports = {LinkedList, Node};
