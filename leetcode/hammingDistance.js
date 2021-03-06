/* eslint-disable no-bitwise */
/* The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Given two integers x and y, calculate the Hamming distance.

Note:
0 ≤ x, y < 231.

Example:

Input: x = 1, y = 4

Output: 2

Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑

The above arrows point to positions where the corresponding bits are different. */

function hammingDistance(x, y) {
    let count = 0; // inititate a count
    let xor = x ^ y // find all bit in which the two numbers are different
    /* XOR returns a 1 in a bit that one BUT NOT BOTH numbers
        have 1 in. Example:
            if you have a 5 and a 4, you will get 1 because:
            5 = 101
            4 = 100
            1 = 001 */
    while (xor > 0) {
        count += xor & 1 // add 1 to the count whenever the rightmost bit is a 1
        xor >>= 1 // reassign xor to be current xor shifted 1 bit to the right
    }
    return count
}
