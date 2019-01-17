var hasCycle = function(head) {
    if (!head || !head.next) return false
    let slow = head
    let fast = head.next
    while (slow && fast) {
        if (slow === fast) return true
        if (!slow.next || !fast.next || !fast.next.next) return false
        slow = slow.next
        fast = fast.next.next
    }
    return false
};
