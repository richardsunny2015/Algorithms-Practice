/*
Given an array of integers nums sorted in ascending order,
find the starting and ending position of a given target value.

Your algorithm's runtime complexity must be in the order of O(log n).

If the target is not found in the array, return [-1, -1].

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
*/

function searchRange(nums, target) {
    const initialIndex = binarySearch(nums, target, nums.length - 1, 0); /* find initial
    index where element matches target */
    if (initialIndex < 0) return [-1, -1]; // if the index is -1
    const results = [initialIndex, initialIndex]; /* initial result is just the initial
    index twice */
    let lower = initialIndex - 1;
    let upper = initialIndex + 1;
    while (nums[lower] === target || nums[upper] === target) { /* loop until nums at lower
        and nums at upper are not equal to target */
        if (nums[lower] === target) {
            results[0] = lower; // keep setting results at 0 to lower index
            lower--; // decrement
        }
        if (nums[upper] === target) {
            results[1] = upper; // keep setting results at 1 to upper index
            upper++; // increment
        }
    }
    return results;
}

function binarySearch(nums, target, upper, lower) {
    if (upper < lower) return -1;
    const mid = Math.floor((upper - lower) / 2) + lower;
    const current = nums[mid];
    if (current === target) return mid;
    if (current < target) return binarySearch(nums, target, upper, mid + 1);
    return binarySearch(nums, target, mid - 1, lower);
}
