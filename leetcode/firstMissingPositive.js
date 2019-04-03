/* Given an unsorted integer array, find the smallest missing positive integer.

Example 1:

Input: [1,2,0]
Output: 3
Example 2:

Input: [3,4,-1,1]
Output: 2
Example 3:

Input: [7,8,9,11,12]
Output: 1 */

var firstMissingPositive = function(nums) {
    const unique = new Set(nums) // create a set and pass in the nums array
    // it should filter out non-unique numbers
    let num = 1; // set num to 1
    while (true) { // loop forever
        if (!unique.has(num)) return num // if num is not included in unique, we will return it
        // and therefore break the loop
        num++ // increment num each loop
    }
};
