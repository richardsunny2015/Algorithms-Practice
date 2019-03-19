/* Given the root node of a binary search tree (BST) and a value. You need to find the node in the BST that the node's value equals the given value. Return the subtree rooted with that node. If such node doesn't exist, you should return NULL.

For example,

Given the tree:
        4
       / \
      2   7
     / \
    1   3

And the value to search: 2
You should return this subtree:

      2
     / \
    1   3
In the example above, if we want to search the value 5, since there is no node with value 5, we should return NULL.

Note that an empty tree is represented by NULL, therefore you would see the expected output (serialized tree format) as [], not null. */

function searchBST(node, target) {
    if (!node) return null // if node is null, return null
    if (node.value === target) return node // if the value of the current node equals value, return the node
    /* If the value of the current node is less than the target,
    return the results of the search on the right node. Otherwise,
    return the results of the search on the left node. */
    return node.value < target ? searchBST(node.right, target) : searchBST(node.left, target)
}

module.exports = searchBST
