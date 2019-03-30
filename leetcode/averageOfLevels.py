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
        results = [] # list of averages that we will eventually return
        queue = [root] # place root inside of our queue initially
        while len(queue) > 0: # we will loop until the queue is empty
            # EXPLANATION: The queue at the start of the current loop
            # is a level of the binary tree. If the queue has 4 elements,
            # that means that the current level of the binary tree has 4 nodes.
            # Which means we can calculate the average at the start of each loop.
            # After we append the average, we will pop off all the elements in the current queue.
            # As we are popping off elements, we are also appending the children of each element.
            # Repeat until there are no more nodes.


            average = self.average(list(map(lambda x: x.val, queue))) # calculate average on every
            # item in queue
            results.append(average) # append the calculated average to results
            currLen = len(queue) # find the length of queue
            for i in range(currLen): # loop currLen times
                curr = queue.pop(0) # pop off the first element of queue
                if curr.left is not None: # if there is a left node
                    queue.append(curr.left) # append left node
                if curr.right is not None: # same as left
                    queue.append(curr.right)
        return results
        
    def average(self, nums): # helper function
        return sum(nums) / len(nums)