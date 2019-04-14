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
    return helper(nums, 0, nums.length - 1); // use helper, pass in 0 and the last index as
    // starting values
}

function helper(nums, lower, upper) {
    const mid = Math.floor((upper - lower) / 2) + lower; // calculate mid index
    const current = nums[mid]; // set current
    // if current doesn't equal to the numbers, next to it, you found it
    if (current !== nums[mid - 1] && current !== nums[mid + 1]) return current;
    return (mid % 2 === 0 && current === nums[mid - 1]) /* if the index is even
    and the current is equal to the previous number OR */
        || (mid % 2 !== 0 && current !== nums[mid - 1]) /* if the index is odd
        and the current is not equal to the previous number */
            ? helper(nums, lower, mid - 1) // set upper to mid minus 1
            : helper(nums, mid + 1, upper);// else set lower to mid plus 1
}

/*
Some clarification:
    Given this example: [1,1,2,2,3,3,4,5,5]
        We can see that if the mid, in this case '4', is even, and that the number above it
        is the same, that means that all the previous numbers are duplicates.
        If the mid was even and the previous number was the same as mid, the singleton would
        be in the first half of the nums array. The logic is switched when the mid is odd.
*/
