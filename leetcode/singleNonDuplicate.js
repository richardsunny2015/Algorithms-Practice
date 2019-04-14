/*
Given a sorted array consisting of only integers where every element appears
twice except for one element which appears once.
Find this single element that appears only once.

Example 1:
Input: [1,1,2,3,3,4,4,8,8]
Output: 2
Example 2:
Input: [3,3,7,7,10,11,11]
Output: 10
Note: Your solution should run in O(log n) time and O(1) space.
*/

function singleNonDuplicate(nums) {
    return helper(nums, 0, nums.length - 1);
}

function helper(nums, lower, upper) {
    const mid = Math.floor((upper - lower) / 2) + lower;
    const current = nums[mid];
    if (current !== nums[mid - 1] && current !== nums[mid + 1]) return current;
    return (mid % 2 === 0 && current === nums[mid - 1])
        || (mid % 2 !== 0 && current !== nums[mid - 1])
            ? helper(nums, lower, mid - 1)
            : helper(nums, mid + 1, upper);
}
