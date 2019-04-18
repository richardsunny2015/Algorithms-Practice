/*
Find the sum of all left leaves in a given binary tree.

Example:

    3
   / \
  9  20
    /  \
   15   7

There are two left leaves in the binary tree, with values 9 and 15 respectively. Return 24.
*/

const sumOfLeftLeaves = node => leftLeafHelper(node, false);

const leftLeafHelper = (node, isLeft) => {
    /* isLeft checks to see if we're on the left branch */
    if (!node) return 0; // if node is null return 0
    if (isLeft && node.left === null && node.right === null) return node.val;
    /* if we're on the left branch and the children of this node are null
    return the value of this node */
    return leftLeafHelper(node.left, true) + leftLeafHelper(node.right, false);
    // otherwise return the recursive calls of the left and right branches
}
