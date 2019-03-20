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
    const arr = treeAsArray(node) // Create an array using the head node and helper function
    return buildTree(arr) // build a tree using that array
}

function treeAsArray(node) {
    return !node // if node is null
        ? [] // return and empty array
        : [...treeAsArray(node.left), // else spread the array from the left side
            node.val, // add node.val to arr
            ...treeAsArray(node.right)] // spread the array from the right side
        // and return that array
}

function buildTree(arr) {
    const head = new TreeNode(arr[0]) // instantiate a head in which you will return
    let current = head // set current to head
    for (let i = 1; i < arr.length; i++) {
        current.right = new TreeNode(arr[i]) /* set the right property of current to
        a new tree node with the value of array at index i as the value of the new tree node */
        current = current.right // set current to be the right property of current
    }
    return head
}

function TreeNode(val) { // basic tree node constructor
    this.val = val;
    this.left = this.right = null;
}
