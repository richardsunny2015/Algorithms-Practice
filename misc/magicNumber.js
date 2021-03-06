/* Given a number, sum the square of all the digits and repeat until
   you get the original number again. Return the length of that sequence.
   For instance: magicNumber(16) = 9 because:
     1: 16
     2: 1^2 + 6^2 = 37
     3: 3^2 + 7^2 = 58
     4: 5^2 + 8^2 = 89
     5: 8^2 + 9^2 = 145
     6: 1^2 + 4^2 + 5^2 = 42
     7: 4^2 + 2^2 = 20
     8: 2^2 + 0^2 = 4
     9: 4^2 = 16 */

function magicNumber(target) {
    if (target === 0) return 1; // some edge cases
    if (target < 0) return 0;
    let set = new Set() // create a set to check if we're repeating numbers
    let count = 1; // keep count
    let num = target; // instantiate a variable that we are going to change as we iterate
    do { // use do while so that we always at least loop once.
        if (set.has(num)) return 0; // if we encounter a num that we saw before, return 0
        // to prevent a forever loop
        set.add(num); // otherwise, add the num to the set
        count++; // increment count
        num = sumSquare(num); // calculate new num
    } while (target !== num) // if target is equal to num, break out the loop
    return count;
}

function sumSquare(num) {
    let sum = 0; // instantiate sum at zero
    while (num > 0) { // loop til num is 0
        const lastDigit = num % 10; // take the last digit off
        sum += lastDigit ** 2; // add the square of that digit to sum
        num = Math.floor(num / 10); // num is equal to the previous num without the last digit
    }
    return sum;
}


console.log(magicNumber(21))

// 2 1 = 5
/* 5 = 25
2 5 = 29
2 9 = 85
8 5 = 89
8 9 = 145
1 4 5 = 42
4 2 = 20
2 = 4
4 = 16
1 6 =  */
