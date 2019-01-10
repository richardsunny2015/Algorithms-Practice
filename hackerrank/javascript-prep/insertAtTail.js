// Insert Node at the tail of a linked list

const SinglyLinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

function insertNodeAtTail(head, data) {
    if (!head) return new SinglyLinkedListNode(data) // if head is null, return a new Node with datavalue
    head.next = insertNodeAtTail(head.next, data) // otherwise set head.next to a recursive call on head.next
    return head
}
