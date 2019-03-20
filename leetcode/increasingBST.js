/* Given a tree, rearrange the tree in in-order so that the leftmost node in the
tree is now the root of the tree, and every node has no left child and only 1 right child.

Example 1:
Input: [5,3,6,2,4,null,8,1,null,null,null,7,9]

       5
      / \
    3    6
   / \    \
  2   4    8
 /        / \
1        7   9

Output: [1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]

 1
  \
   2
    \
     3
      \
       4
        \
         5
          \
           6
            \
             7
              \
               8
                \
                 9
Note:

The number of nodes in the given tree will be between 1 and 100.
Each node will have a unique integer value from 0 to 1000. */


function increasingBST(node) {
    const arr = treeAsArray(node)
    return buildTree(arr)
}

function treeAsArray(node) {
    return !node
        ? []
        : [...treeAsArray(node.left), node.val, ...treeAsArray(node.right)]
}

function buildTree(arr) {
    const head = new TreeNode(arr[0])
    let current = head
    for (let i = 1; i < arr.length; i++) {
        current.right = new TreeNode(arr[i])
        current = current.right
    }
    return head
}

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
