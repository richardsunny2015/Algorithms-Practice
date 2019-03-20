/* Given a string, you need to reverse the order of characters in each
word within a sentence while still preserving whitespace and initial word order.

Example 1:
Input: "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
Note: In the string, each word is separated by single space and there will
not be any extra space in the string. */

function reverseWords(s) {
    const splittedStr = s.split(' ') // split the sentence into words
    return splittedStr
        .map(reverse) // map over each word and call reverse
        .join(' ') // join words and add spaces between them
}

function reverse(str) {
    let reversed = '' // initialize return value
    for (let i = 0; i < str.length; i++) {
        reversed = str[i] + reversed // add current letter to the front of our return value
    }
    return reversed
}
