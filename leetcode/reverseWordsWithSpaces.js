/* Given an input string, reverse the string word by word.


Example 1:

Input: "the sky is blue"
Output: "blue is sky the"
Example 2:

Input: "  hello world!  "
Output: "world! hello"
Explanation: Your reversed string should not contain leading or trailing spaces.
Example 3:

Input: "a good   example"
Output: "example good a"
Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.


Note:

A word is defined as a sequence of non-space characters.
Input string may contain leading or trailing spaces. However, your reversed string should not contain leading or trailing spaces.
You need to reduce multiple spaces between two words to a single space in the reversed string.
 */

var reverseWords = function(s) {
    const arr = buildArr(s);
    let head = 0,
        tail = arr.length - 1;
    while (head < tail) {
        let temp = arr[head];
        arr[head] = arr[tail];
        arr[tail] = temp;
        head++;
        tail--;
    }
    return arr.join(' ');
};

function buildArr(s) {
    let arr = [],
        i = 0;
    while (i < s.length) {
        if (s[i] !== ' ') {
            let word = '';
            for (let j = i; j < s.length; j++) {
                if (s[j] === ' ') break;
                else word += s[j];
                i = j
            }
            arr.push(word);
        }
        i++;
    }
    return arr;
}
