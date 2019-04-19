/*
 Return the root node of a binary search tree that matches the given preorder traversal.

(Recall that a binary search tree is a binary tree where for every node,
any descendant of node.left has a value < node.val,
and any descendant of node.right has a value > node.val.
Also recall that a preorder traversal displays the value of the node first,
then traverses node.left, then traverses node.right.)

Example 1:

Input: [8,5,1,7,10,12]
Output: [8,5,10,1,7,null,12]

1 <= preorder.length <= 100
The values of preorder are distinct.
*/

function TreeNode(val) { // TreeNode constructor
    this.val = val;
    this.left = this.right = null;
}

var bstFromPreorder = function(preorder) {
    if (!preorder.length) return null; // edge case
    const reverse = reverseArr(preorder); // reverse to get O(1) on popping
    const head = new TreeNode(reverse.pop()) // instantiate head
    return buildTree(reverse, head);
};

const reverseArr = arr => { // reverse helper
    const result = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]); // loop backwards and push
    }
    return result;
}

const buildTree = (arr, head) => {
    if (!arr.length) return head; // if arr is empty, return the head
    const val = arr.pop(); // otherwise pop off the value
    return buildTree(arr, insert(head, val)) // and build a tree from it
}

const insert = (node, val) => {
    if (!node) return new TreeNode(val); // if node is null, we are where we want to be and
    // return a new Node
    if (node.val > val) node.left = insert(node.left, val); // if value is less than the
    // current node's value
    else node.right = insert(node.right, val); // otherwise
    return node;
}
