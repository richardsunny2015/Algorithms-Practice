# A binary tree is univalued if every node in the tree has the same value.

# Return true if and only if the given tree is univalued.

 

# Example 1:


# Input: [1,1,1,1,1,null,1]
# Output: true
# Example 2:


# Input: [2,2,2,5,2]
# Output: false
 

# Note:

# The number of nodes in the given tree will be in the range [1, 100].
# Each node's value will be an integer in the range [0, 99].

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def isUnivalTree(self, root: TreeNode) -> bool:
        return self.helper(root, root.val) # call helper function
        
    def helper(self, root, target):
        # In helper, we check to see if the root is None.
        # If it is, then we know that it's True because we
        # have travelled down the whole tree.
        if root is None: return True
        # If the value of root is not equal to the target,
        # we return False because if it is a univalued tree
        # we would never reach a case where the value of the root
        # is not equal to the value of the target.
        elif root.val != target: return False
        # This last case is for when we aren't at the bottom
        # of the tree yet, but the value of the root is equal to the target.
        # If that's the case we want to return the results of the left tree
        # and the right tree. Also, we check to see if both results are true.
        # If for whatever reason one recursive call is False, it will bubble up
        # to the first call.
        else: return self.helper(root.left, target) and self.helper(root.right, target)
