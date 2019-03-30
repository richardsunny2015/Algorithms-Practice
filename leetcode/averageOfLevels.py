# Given a non-empty binary tree, return the average value of the nodes on each level in the form of an array.
# Example 1:
# Input:
#     3
#    / \
#   9  20
#     /  \
#    15   7
# Output: [3, 14.5, 11]
# Explanation:
# The average value of nodes on level 0 is 3,  on level 1 is 14.5, and on level 2 is 11. Hence return [3, 14.5, 11].

class Solution:
    def averageOfLevels(self, root: TreeNode) -> List[float]:
        results = []
        queue = [root]
        while len(queue) > 0:
            average = self.average(list(map(lambda x: x.val, queue)))
            results.append(average)
            currLen = len(queue)
            for i in range(currLen):
                curr = queue.pop(0)
                if curr.left is not None:
                    queue.append(curr.left)
                if curr.right is not None:
                    queue.append(curr.right)
        return results
        
    def average(self, nums):
        print(nums)
        return sum(nums) / len(nums)