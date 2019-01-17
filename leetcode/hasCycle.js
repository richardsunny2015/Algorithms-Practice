/*
Given a linked list, determine if it has a cycle in it.

To represent a cycle in the given linked list,
we use an integer pos which represents the position (0-indexed)
in the linked list where tail connects to.
If pos is -1, then there is no cycle in the linked list.
*/


var hasCycle = function(head) {
  if (!head || !head.next) return false;
  let slow = head; // set a slow pointer to head
  let fast = head.next; // set a fast pointer to head.next
  while (slow && fast) { // check to see if slow or fast is not null
    if (slow === fast) return true; // if slow and fast point to the same node, return true
    if (!slow.next || !fast.next || !fast.next.next) return false; // if for any reason, we find a null node, return false
    slow = slow.next; // move slow one position
    fast = fast.next.next; // move fast two positions
  }
  return false;
};
