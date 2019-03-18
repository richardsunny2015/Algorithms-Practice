/* eslint-disable no-bitwise */
/* Counting Bits
Given a non negative integer number num. For every numbers i in the range 0 ≤ i ≤ num calculate the number of 1's in their binary representation and return them as an array.

Example 1:

Input: 2
Output: [0,1,1]
Example 2:

Input: 5
Output: [0,1,1,2,1,2]
*/

function countingBits(num) {
    let counts = [] // initiate an array that we will ultimately return
    for (let i = 0; i <= num; i++) { // loop from 0 to num inclusive
        counts.push(howManyOnes(i)) // push the result of howManyOnes at i into counts
    }
    return counts
}

function howManyOnes(num) {
    let count = 0 // initiate initial count that we will ultimately return
    while (num > 0) { // loop until num is 0
        count += num & 1 // add the AND bitwise operation of current num and 1
            // aka: count++ when there is a 1 on the rightmost bit
        num >>= 1 // reassign num to be a shift to the right one bit
        // example: 10 = 2, 2 >> 1 = 1
    }
    return count
}
