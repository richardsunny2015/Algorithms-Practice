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

function countBits(num) {
    let counts = []
    for (let i = 0; i <= num; i++) {
        counts.push(howManyOnes(i))
    }
    return counts
}

function howManyOnes(num) {
    let count = 0
    while (num > 0) {
        count += num & 1
        num >>= 1
    }
    return count
}
